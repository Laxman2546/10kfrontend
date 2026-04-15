import React, { useState } from "react";
const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login attempt:", { username, password });
  };

  return (
    <div className="flex flex-row items-center justify-start h-screen gap-24 font-poppins px-12">
      <div className="w-2/5 h-full">
        <img
          src="https://m.media-amazon.com/images/M/MV5BNmIwYTI3ODItMzRkOS00MzlhLWI4NzQtNDFmOGJhZGJhM2VkXkEyXkFqcGc@._V1_.jpg"
          alt="Login Image"
          className="w-full h-full object-cover rounded-r-3xl"
        />
      </div>
      <div>
        <h1 className="mb-5 font-medium text-2xl">Welcome back!</h1>
        <form onSubmit={handleSubmit} className="w-96 flex flex-col gap-5">
          <div className="flex flex-col">
            <label htmlFor="username" className="font-poppins font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="px-4 py-3 border border-gray-300 rounded-full font-poppins text-base mt-2 transition-all hover:border-blue-500 hover:shadow-md focus:outline-none focus:border-blue-500 focus:shadow-md placeholder:text-gray-400"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col relative">
            <label htmlFor="password" className="font-poppins font-medium">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="px-4 py-3 border border-gray-300 rounded-full font-poppins text-base mt-2 transition-all hover:border-blue-500 hover:shadow-md focus:outline-none focus:border-blue-500 focus:shadow-md placeholder:text-gray-400"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div
              className="absolute right-6 top-12 flex items-center cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/159/159604.png"
                alt="Show Password"
                className="w-6 h-6"
              />
            </div>
          </div>
          <button
            type="submit"
            className="px-4 py-3 mt-2 border-0 rounded-full bg-blue-500 text-white font-poppins font-semibold cursor-pointer transition-colors hover:bg-blue-700"
          >
            Login
          </button>
          <p className="flex items-center justify-center mt-2 font-poppins text-sm">
            Don't have an account?
            <a
              className="text-blue-500 no-underline font-medium cursor-pointer hover:underline ml-1"
              href="/register"
            >
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
