import React, { useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import { auth } from "../db/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  return (
    <nav className="w-full relative">
      <div className="flex items-center justify-between px-6 h-20">
        <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500  bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
          Movie<span className="ml-0.5">mate</span>
        </h1>

        <div className="hidden md:flex flex-row gap-6 items-center">
          <div className="relative group">
            <input
              className="rounded-full py-3 pl-5 pr-12 w-72 lg:w-96 bg-gradient-to-r from-slate-800 to-slate-700 placeholder-slate-400 text-white outline-none focus:bg-gradient-to-r focus:from-slate-700 focus:to-slate-600 focus:ring-2 focus:ring-cyan-500 focus:w-80  lg:focus:w-[26rem] transition-all duration-300 text-sm shadow-lg"
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              placeholder="Search for movies…"
            />
            <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 text-sm group-hover:text-cyan-400 transition" />
          </div>

          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-slate-700 to-slate-800 hover:from-blue-600 hover:to-cyan-600 text-slate-200 hover:text-white transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 border border-slate-600 hover:border-cyan-500">
            <FaUser className="text-base" />
          </button>

          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-slate-700 to-slate-800 hover:from-red-600 hover:to-red-700 text-red-400 hover:text-red-200 transition-all duration-300 shadow-lg hover:shadow-red-500/50 border border-slate-600 hover:border-red-500" onClick={handleLogout}>
            <IoLogOut className="text-xl" />
          </button>
        </div>

        <button
          className="md:hidden text-white p-2 hover:bg-slate-800 rounded-lg transition-colors duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <HiX className="text-2xl" />
          ) : (
            <HiMenu className="text-2xl" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gradient-to-b from-slate-900 via-black to-slate-900 px-6 py-5 flex flex-col gap-4 shadow-2xl border-t border-slate-800">
          <div className="relative w-full group">
            <input
              className="w-full rounded-full py-3 pl-5 pr-12 bg-gradient-to-r from-slate-800 to-slate-700 placeholder-slate-400 text-white outline-none focus:bg-gradient-to-r focus:from-slate-700 focus:to-slate-600 focus:ring-2 focus:ring-cyan-500 text-sm transition-all duration-300 shadow-lg"
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              placeholder="Search for movies…"
            />
            <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 text-sm group-hover:text-cyan-400 transition" />
          </div>

          <div className="flex gap-3 pt-2">
            <button className="flex items-center gap-2 text-white text-sm px-5 py-2.5 rounded-full bg-gradient-to-r from-slate-700 to-slate-800 hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 border border-slate-600 hover:border-cyan-500 flex-1 justify-center font-medium">
              <FaUser /> Profile
            </button>
            <button className="flex items-center gap-2 text-red-400 text-sm px-5 py-2.5 rounded-full bg-gradient-to-r from-slate-700 to-slate-800 hover:from-red-600 hover:to-red-700 hover:text-red-200 transition-all duration-300 shadow-lg hover:shadow-red-500/50 border border-slate-600 hover:border-red-500 flex-1 justify-center font-medium" onClick={handleLogout}>
              <IoLogOut className="text-base" /> Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
