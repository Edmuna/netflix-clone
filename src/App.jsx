import './App.css'
import { useState } from 'react'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom"
import Home from './components/Home'
import Popular from './components/Popular'
import TopRatedMovies from './components/TopRatedMovies'
import Navbar from './components/Navbar'
import Upcoming from './components/Upcoming'
import Movie from './components/Movie'
import Favorites from './components/Favorites'
import { SearchedMoviesProvider } from "./SearchedMoviesContext"

function App() {

  const [favoriteMoviesList, setFavoriteMoviesList] = useState([])

  const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  }


  const addFavoriteMoviesClickHandler = (movieId) => {
    const updatedFavoriteMoviesList = [...favoriteMoviesList];

    // Check if the movieId exists in the list, if not, add it.
    if (!updatedFavoriteMoviesList.includes(movieId)) {
      updatedFavoriteMoviesList.push(movieId);
      setFavoriteMoviesList(updatedFavoriteMoviesList);
      localStorage.setItem('favoriteMoviesList', JSON.stringify(updatedFavoriteMoviesList));
    } else {
      // If the movieId exists in the list, remove it.
      const filteredFavoriteMoviesList = updatedFavoriteMoviesList.filter((id) => id !== movieId);
      setFavoriteMoviesList(filteredFavoriteMoviesList);
      localStorage.setItem('favoriteMoviesList', JSON.stringify(filteredFavoriteMoviesList));
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Navbar fetchData={fetchData} />}>
        <Route index element={<Home fetchData={fetchData} />} />
        <Route path='popular' element={<Popular fetchData={fetchData} />} />
        <Route path='top_rated_movies' element={<TopRatedMovies fetchData={fetchData} />} />
        <Route path='upcoming' element={<Upcoming fetchData={fetchData} />} />
        <Route path='favorites' element={<Favorites fetchData={fetchData} />} />
        <Route path='movie/:id' element={<Movie addFavoriteMoviesClickHandler={addFavoriteMoviesClickHandler} />} />
      </Route>
    )
  )

  return (
    <>
      <SearchedMoviesProvider>
        <RouterProvider router={router} />
      </SearchedMoviesProvider>
    </>
  )
}

export default App;
