import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/ProtectedRoute";
import { getAuth, signOut } from "firebase/auth";

const Homepage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const auth = getAuth();

  console.log("Authenticated user:", user);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("user");
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Welcome Home!</h1>

          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-500 text-white font-semibold rounded-full hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600 text-lg">
            You are now logged in and can access protected content.
          </p>
          {user && (
            <p className="text-gray-500 mt-4">
              User ID: <span className="font-mono">{user.uid}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
