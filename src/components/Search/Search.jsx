import { useEffect, useState } from "react";
import { API_KEY, TMDB_REQUEST_URL } from "../../../config";
import { nanoid } from "nanoid";
import MovieCard from "../MovieCard/MovieCard";

function Search() {
  const [title, setTitle] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  // fetch movies with title parameter
  const fetchMovies = async (titleName) => {
    const url = `${TMDB_REQUEST_URL}/search/movie?query=${titleName}&include_adult=false&language=en-US&page=1`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    };

    const response = await fetch(url, options);
    const res = await response.json();
    setMovies(res.results); // replace movies
    console.log(movies);
  };

  // fetch more movies when page changes with the same title

  const fetchMoreMovies = async (titleName) => {
    const url = `${TMDB_REQUEST_URL}/search/movie?query=${titleName}&include_adult=false&language=en-US&page=${page}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    };

    const response = await fetch(url, options);
    const res = await response.json();
    if (res.results.length > 0) {
      setMovies((prevMovies) => [...prevMovies, ...res.results]); // Append new movies}
      console.log(movies);
    }
    setLoading(false);
  };

  //   Detect scroll position and change page Number

  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + document.documentElement.scrollTop) >=
      document.documentElement.offsetHeight - 3;
    console.log(!loading, bottom);
    if (bottom && !loading) {
      setLoading(true);
      setPage((prevPage) => prevPage + 1);
      console.log(page);
    }
  };

  // fetchMovies when title changes
  useEffect(() => {
    setPage(1);
    fetchMovies(title);
  }, [title]);

  // fetch More movies when page changes 
  useEffect(() => {
    fetchMoreMovies(title);
  }, [page]);

  // add eventListener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Add scroll listener
    return () => window.removeEventListener("scroll", handleScroll); // Clean up listener on unmount
  }, []);

  return (
    <>
      <div className="bg-black py-3">

        {/* Search Box */}

        <div className="bg-white flex px-4 py-3 rounded-md border-2 border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192.904 192.904"
            width="16px"
            className="fill-gray-600 mr-3 rotate-90"
          >
            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
          </svg>
          <input
            type="text"
            placeholder="Sherlock Holmes"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full outline-none bg-transparent text-gray-600 text-sm"
          />
        </div>

        {/* MovieList */}

        <div className="bg-black grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-14 p-14">
          {movies.map((movie) => (
            <MovieCard key={nanoid()} info={movie} />
          ))}
        </div>
      </div>


    </>
  );
}

export default Search;
