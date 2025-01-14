import { nanoid } from "nanoid";
import { useFavorites } from "../../contexts";
import Movie from "../MovieCard/MovieCard";

function Favourites() {
  const { favorites } = useFavorites();
  return (
    <div className="bg-black grid grid-cols-1 custom-sm:grid-cols-2  md:grid-cols-3 custom-md:grid-cols-4 custom-lg:grid-cols-5  gap-14 p-14 pb-10">
      {
        favorites.map((movie) => (
          <Movie key={nanoid()} info={movie} />
        ))
      }
    </div>
  );
}

export default Favourites;
