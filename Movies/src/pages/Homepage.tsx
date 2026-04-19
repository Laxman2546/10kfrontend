import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
}
const Homepage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const isFetching = useRef(false);
  const carouselTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const fetchMovies = async (pageNum: number) => {
    if (isFetching.current) return;

    try {
      isFetching.current = true;
      setLoading(true);
      const getData = await axios.get(
        `https://nanimoviesapi.vercel.app/movies/${pageNum}`,
      );
      console.log(getData.data.results);
      pageNum === 1
        ? setMovies(getData.data.results)
        : setMovies((prev) => [...prev, ...getData.data.results]);
    } catch (e) {
      console.error("Error fetching movies:", e);
    } finally {
      setLoading(false);
      isFetching.current = false;
    }
  };

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 50 &&
        !loading &&
        !isFetching.current
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  useEffect(() => {
    if (movies.length > 0) {
      carouselTimer.current = setInterval(() => {
        setCarouselIndex((prev) => (prev + 1) % Math.min(5, movies.length));
      }, 5000);
    }
    return () => {
      if (carouselTimer.current) clearInterval(carouselTimer.current);
    };
  }, [movies]);
  const handleMovieDetails = (movie: Movie) => {
    navigate(`/movie/${movie.id}`, { state: { movie } });
  };

  const featuredMovies = movies.slice(0, 5);
  const currentMovie = featuredMovies[carouselIndex];

  return (
    <>
      <div className="bg-gradient-to-b from-black via-slate-900 to-black w-full min-h-screen">
        <Navbar />

        {movies.length > 0 && (
          <div className="relative w-full h-96 md:h-[800px] lg:h-[600px]  group rounded-xl  max-w-full">
            {currentMovie && (
              <>
                <img
                  src={`https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}`}
                  alt={currentMovie.title}
                  className="w-full h-full object-cover rounded-xl transition-opacity duration-900"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-xl" />

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
                  <h2 className="text-3xl md:text-5xl font-extrabold mb-3 drop-shadow-lg">
                    {currentMovie.title}
                  </h2>
                  <p className="text-sm md:text-base text-gray-200 mb-6 max-w-2xl drop-shadow-md line-clamp-3">
                    {currentMovie.overview}
                  </p>
                  <div className="flex gap-4">
                    <button
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
                      onClick={() => handleMovieDetails(currentMovie)}
                    >
                      Movie Details
                    </button>
                    <button className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-slate-700 to-slate-800 hover:from-red-600 hover:to-red-700 text-red-400 hover:text-red-200 transition-all duration-300 shadow-lg hover:shadow-red-500/50 border border-slate-600 hover:border-red-500">
                      <IoMdHeartEmpty className="text-xl" />
                    </button>
                  </div>
                </div>
              </>
            )}{" "}
          </div>
        )}

        <div className="flex flex-col items-center justify-center text-center gap-6 mt-16 px-4 pb-20">
          {movies.length === 0 && loading ? (
            <p className="text-white text-xl">Loading...</p>
          ) : (
            <>
              <div className="w-full mt-8 flex justify-center items-center ">
                <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 grid-cols-3 gap-12 md:gap-24">
                  {movies.map((movie: Movie) => (
                    <div
                      onClick={() => handleMovieDetails(movie)}
                      key={movie.id}
                      className="flex justify-center items-center relative group"
                    >
                      <div className="w-[200px] sm:w-[180px] md:w-[250px] h-auto rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                        <img
                          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                          alt={movie.title}
                          className="w-full h-auto rounded-lg object-cover"
                        />
                        <h1 className="text-white text-lg font-bold mt-2">
                          {movie.title}
                        </h1>
                        <button className="w-12 h-12 absolute top-2 right-2 flex items-center justify-center rounded-full bg-gradient-to-br from-slate-700 to-slate-800 hover:from-red-600 hover:to-red-700 text-red-400 hover:text-red-200 transition-all duration-300 shadow-lg hover:shadow-red-500/50 border border-slate-600 hover:border-red-500 opacity-0 group-hover:opacity-100">
                          <IoMdHeartEmpty className="text-xl" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {loading && (
                <p className="text-slate-400 text-center py-8">
                  Loading more movies...
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Homepage;
