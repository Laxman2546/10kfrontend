import { Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

interface user {
  uid: string;
}

const AuthContext = createContext<{
  isAuthenticated: boolean;
  user: user | null;
}>({
  isAuthenticated: false,
  user: null,
});

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const auth = getAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<user | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser as user);
        setIsAuthenticated(true);
        console.log("Is authenticated: true");
        console.log("Authenticated user:", currentUser);
      } else {
        setUser(null);
        setIsAuthenticated(false);
        console.log("Is authenticated: false");
      }
      setLoading(false);
    });

    return unsubscribe;
  }, [auth]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
