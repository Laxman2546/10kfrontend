import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaArrowLeft, FaPlay } from "react-icons/fa";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date?: string;
  vote_average?: number;
}

const Moviedetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state?.movie as Movie | undefined;
  const [isFavorite, setIsFavorite] = React.useState(false);

  if (!movie) {
    return (
      <div className="bg-gradient-to-b from-black via-slate-900 to-black w-full min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center h-screen text-white text-2xl">
          Movie not found
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-black via-slate-900 to-black w-full min-h-screen">
      <Navbar />

      <div className="relative w-full h-96 md:h-[600px] rounded-xl overflow-hidden max-w-7xl mx-auto px-4 group">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50">
            <FaPlay className="text-3xl ml-1" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-64 rounded-xl shadow-2xl mb-6"
            />
            <div className="flex">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="flex-1 px-12  py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-2"
              >
                Whislist{" "}
                {isFavorite ? (
                  <IoMdHeart className="text-2xl text-white" />
                ) : (
                  <IoMdHeartEmpty className="text-2xl text-white" />
                )}
              </button>
            </div>
          </div>

          <div className="md:col-span-2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-lg">
              {movie.title}
            </h1>
            <div className="flex gap-6 mb-8 text-slate-300 text-lg">
              {movie.release_date && (
                <div>
                  <span className="text-cyan-400 font-semibold">
                    Release Date:
                  </span>{" "}
                  {movie.release_date}
                </div>
              )}
              {movie.vote_average && (
                <div>
                  <span className="text-cyan-400 font-semibold">Rating:</span>{" "}
                  {(movie.vote_average / 2).toFixed(1)}/5
                </div>
              )}
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 text-cyan-400">
                Overview
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {movie.overview}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-white">Reviews</h1>
      </div>
    </div>
  );
};

export default Moviedetails;
