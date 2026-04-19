import { Link } from "react-router-dom";

const landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
      <div className="text-center max-w-2xl w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800">
          Hello
        </h1>
        <div className="text-lg md:text-xl text-gray-600 mb-8">
          Welcome to Movie Mate
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/login"
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors text-center"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-full hover:bg-gray-900 transition-colors text-center"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default landing;
