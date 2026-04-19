import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../db/firebase.js";
import { db } from "../db/firebase.js";
import { setDoc, doc } from "firebase/firestore";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log("User created:", userCredential.user);
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        username: username,
        email: email,
      });
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between min-h-screen gap-4 md:gap-24 font-poppins p-4 md:p-0">
      <div className="w-full md:w-auto md:pl-16 lg:pl-20 flex flex-col items-center md:items-start justify-center">
        <h1 className="mb-5 font-medium text-2xl text-center md:text-left">
          It's All Start here
        </h1>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm md:w-96 flex flex-col gap-5"
        >
          <div className="flex flex-col">
            <label htmlFor="email" className="font-poppins font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="px-4 py-3 border border-gray-300 rounded-full font-poppins text-base mt-2 transition-all hover:border-blue-500 hover:shadow-md focus:outline-none focus:border-blue-500 focus:shadow-md placeholder:text-gray-400"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
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
              {showPassword ? (
                <FaEye className="text-gray-500" />
              ) : (
                <FaEyeSlash className="text-gray-500" />
              )}
            </div>
          </div>

          <div className="flex flex-col relative">
            <label
              htmlFor="confirm-password"
              className="font-poppins font-medium"
            >
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirm-password"
              name="confirm-  password"
              className="px-4 py-3 border border-gray-300 rounded-full font-poppins text-base mt-2 transition-all hover:border-blue-500 hover:shadow-md focus:outline-none focus:border-blue-500 focus:shadow-md placeholder:text-gray-400"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <div
              className="absolute right-6 top-12 flex items-center cursor-pointer"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? (
                <FaEye className="text-gray-500" />
              ) : (
                <FaEyeSlash className="text-gray-500" />
              )}
            </div>
          </div>
          <button
            type="submit"
            className={`${!username || !password || !confirmPassword || password !== confirmPassword ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700 cursor-pointer"} px-4 py-3 mt-2 border-0 rounded-full text-white font-poppins font-semibold  transition-colors w-full`}
          >
            Register
          </button>
          <p className="flex flex-wrap items-center justify-center mt-2 font-poppins text-sm">
            Already have an account?
            <a
              className="text-blue-500 no-underline font-medium cursor-pointer hover:underline ml-1"
              href="/login"
            >
              Log in
            </a>
          </p>
        </form>
      </div>
      <div className="hidden md:block w-full md:w-2/5 h-64 md:h-screen">
        <img
          src="https://m.media-amazon.com/images/M/MV5BMjZmZGMyYjgtMGU2Mi00ZGE1LTkwYjEtYzdkYTA0ODI0MDI2XkEyXkFqcGc@._V1_.jpg"
          alt="Register Image"
          className="w-full h-full object-cover rounded-l-3xl"
        />
      </div>
    </div>
  );
};

export default RegisterPage;
