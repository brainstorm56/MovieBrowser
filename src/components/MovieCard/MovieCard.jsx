import './MovieCard.styles.css'
import { TMDB_IMAGE_URL } from '../../../config/index'
import { useEffect, useState } from 'react';
import { useFavorites } from '../../contexts';


function MovieCard({info}) {
  const [isFavourite, setIsFavourite] = useState(false);

  const {favorites, addFavorites, deleteFavorites} = useFavorites();

  // get isFavorite from checking local favorites list from context
  useEffect(() => {
    const movieIsFavorite = favorites.some(movie => movie.id === info.id);
    setIsFavourite(movieIsFavorite);
  }, [favorites]); 

  // addToFavorite logic
  const addToFavorite = () => {
    addFavorites(info)
  }

  // RemoveFromFavorite logic
  const removeFromFavorite = ()=> {
    deleteFavorites(info)
  }

  // image exception logic
  const imgSrc = info?.poster_path || info?.backdrop_path;

  if (!imgSrc) {
    return null;
  }

  const titleName = (info.title || info.original_title)

  return (
<div className= 'carouselItem'>
      {/* favorite Star */}
      { isFavourite&& <img className='star' src="../favorite.png"    alt="favourite icon"    onClick={removeFromFavorite} />}
      {!isFavourite&& <img className='star' src="../notFavorite.png" alt="notfavorite icon"  onClick={addToFavorite}/>}

      {/* movie poster */}
      <img
        key={`${info.poster_path}`}
        alt={`${info.poster_path}`}
        src={imgSrc ? `${TMDB_IMAGE_URL}/w500${imgSrc}` : ""}
        width={190}
        height={285}
      />

      {/* movie Description */}
      <p className='imgDescription'>
        {(titleName.length>15)?(titleName.slice(0,15)+'...'):(titleName)}    ({ info.release_date.slice(0,4)})
      </p>
    </div>
  )
}

export default MovieCard

