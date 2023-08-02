import './App.css'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom"
import Home from './components/Home'
import Popular from './components/Popular'
import TopRatedMovies from './components/TopRatedMovies'
import Navbar from './components/Navbar'
import Upcoming from './components/Upcoming'
import Movie from './components/Movie'

function App() {

  const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Navbar fetchData={fetchData} />}>
        <Route index element={<Home fetchData={fetchData} />} />
        <Route path='popular' element={<Popular fetchData={fetchData} />} />
        <Route path='top_rated_movies' element={<TopRatedMovies fetchData={fetchData} />} />
        <Route path='upcoming' element={<Upcoming fetchData={fetchData} />} />
        <Route path='movie/:id' element={<Movie />} />
      </Route>
    )
  )

  return (
    <div className='hero'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
