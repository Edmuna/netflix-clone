import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);
    const [searchInputValue, setSearchInputValue] = useState("");
    const [searchedMoviesList, setSearchedMoviesList] = useState([]);

    const searchInputValueHandler = (e) => {
        e.preventDefault();
        setSearchInputValue(e.target.value);
    };

    useEffect(() => {
        if (searchedMoviesList === "") return
        fetchDataFromApi();
    }, [searchInputValue]);

    const fetchDataFromApi = async () => {
        try {
            const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${searchInputValue}&api_key=72d2974158fa7648cd09581860b1304f`;
            const response = await fetch(searchUrl);
            const data = await response.json();
            setSearchedMoviesList(data.results);
        } catch (error) {
            console.error(error);
        }
    };

    console.log(searchedMoviesList);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <h1 className="navbar-logo">NETFLIX</h1>
                <ul className="navbar-links">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="popular">Popular</NavLink>
                    <NavLink to="top_rated_movies">Top rated</NavLink>
                    <NavLink to="upcoming">Upcoming</NavLink>
                </ul>
                <div className="search-input">
                    <input onChange={searchInputValueHandler} className="navbar-input" placeholder="Titles, peoples, genres" type="text" />
                </div>
            </nav>
            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    )
}

export default Navbar