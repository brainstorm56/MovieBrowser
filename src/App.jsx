import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./Layout"
import Home from "./components/Home/Home"
import Search from "./components/Search/Search"
import Favourites from "./components/Favorites/Favourites"
import { FavoritesProvider } from "./contexts"
import { useEffect, useState } from "react"

// router logic
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>

      <Route path='' element ={<Home/>}/>
      <Route path ='search' element = {<Search/>}/>
      <Route path='favourites' element ={ <Favourites/>}  />

    </Route>
  )
)


function App() {
  // global state declaration
  const [favorites, setFavorites] = useState([])

  // add new data to favorites state
  const addFavorites = (info) => {
      setFavorites((prev) => [...prev, info]);
  };

  // data from favorites state
  const deleteFavorites = (info) =>{
    setFavorites((prev)=>prev.filter((movie)=>(movie.id!==info.id)))
  }

    // fetch favorites from local Storage
    useEffect(() => {
      const localFavorites = JSON.parse(localStorage.getItem("Favorites"))
      if(localFavorites &&  localFavorites.length > 0){
        setFavorites(localFavorites)
      }
    },[])
    
    // save favorites to local storage whenever favorites change
    useEffect(() => {
      localStorage.setItem("Favorites", JSON.stringify(favorites))
    }, [favorites])
    

  return (
    <FavoritesProvider value = {{ favorites, addFavorites, deleteFavorites }}>

    <RouterProvider router = {router}/>

    </FavoritesProvider>
  )
}

export default App
