import { useState } from "react";
import { useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { API_KEY, TMDB_REQUEST_URL } from "../../../config";
import { nanoid } from "nanoid";

function Home() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  // fetch movies

  const fetchMovies = async (pageNum) => {
    const url = `${TMDB_REQUEST_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageNum}}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    };

    const response = await fetch(url, options);
    const res = await response.json();
    setMovies((prevMovies) => [...prevMovies, ...res.results]); // Append new movies
    console.log(movies);
    setLoading(false);
  };

  // Detect scroll position and change pageNumber
  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + document.documentElement.scrollTop) >=
      document.documentElement.offsetHeight - 3;
    
  // If reached bottom change page Number
    if (bottom && !loading) {
      setLoading(true);
      setPage((prevPage) => prevPage + 1);
      console.log(page);
    }
  };
  // fetch movies whenever page changes
  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Add scroll listener
    return () => window.removeEventListener("scroll", handleScroll); // Clean up listener on unmount
  }, []);
  return (
    <>
      <div className="bg-black grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-14 p-14 pb-10">
        {
          movies.map((movie) => (
            <MovieCard key={nanoid()} info={movie} />
          ))
        }
      </div>
      {loading && (
        <div
          style={{ backgroundColor: "#030303" , paddingTop: 50}}
          className="flex justify-center "
        >
          <img
            src="/loader.gif"
            alt="loading..."
          />
        </div>
      )}
    </>
  );
}

export default Home;
