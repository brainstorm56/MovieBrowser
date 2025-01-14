import { useContext } from "react";
import { createContext } from "react";


export const FavoritesContext = createContext({
    favorites: [],
    addFavorites     : (info) => {},
    deleteFavorites  : (info) => {},
})


export const useFavorites = () =>{
    return useContext(FavoritesContext)
}

export const FavoritesProvider = FavoritesContext.Provider