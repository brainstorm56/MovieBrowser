import { nanoid } from "nanoid";
import { useFavorites } from "../../contexts";
import Movie from "../MovieCard/MovieCard";

function Favourites() {
  const { favorites } = useFavorites();
  return (
    <div className="bg-black grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-14 p-14">
      {
        favorites.map((movie) => (
          <Movie key={nanoid()} info={movie} />
        ))
      }
    </div>
  );
}

export default Favourites;
