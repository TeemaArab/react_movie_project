import {createContext,useContext, useState, useEffect} from "react";


const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
   const [favorites,setFavorites] = useState([]);

   useEffect(() =>{
        const storedFavorites = localStorage.getItem("favorites");

        if(storedFavorites)setFavorites(JSON.parse(storedFavorites));
   },[])


   // this section only reuns when we update our favorite section
   useEffect(() =>{
    localStorage.setItem("favorites",JSON.stringify(favorites));
   },[favorites])

   // function to add movie to favorite
   const addToFavorites= (movie) =>{
    setFavorites(prevFavorites => [...prevFavorites, movie]);
   }

   // function to remove movie from favorite
   const removeFromFavorites = (movieId) =>{
    setFavorites(prevFavorites => prevFavorites.filter(movie => movie.id !== movieId));
   }

   // function to check if movie is in favorite
   const isMovieInFavorites = (movieId) =>{
    return favorites.some(movie => movie.id === movieId);
   }

 const value ={
    favorites,
    addToFavorites,
    removeFromFavorites,
    isMovieInFavorites
 }
    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}