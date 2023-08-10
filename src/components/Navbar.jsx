import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useSearchedMovies } from "../SearchedMoviesContext"; // Import the context hook

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const { searchInputValue, searchInputValueHandler } = useSearchedMovies(); // Get the function and value from the context
    const [showNavbarLinks, setShowNavbarLinks] = useState(false)

    const showNavbarLinksClickHandler = () => {
        if (showNavbarLinks) {
            setShowNavbarLinks(false)
        } else setShowNavbarLinks(true)
    }

    const delayedSearchInputValueHandler = (e) => {
        const newSearchInputValue = e.target.value;
        setTimeout(() => {
            searchInputValueHandler(newSearchInputValue);
        }, 1000);
    };

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
                <ul className={`navbar-links ${!showNavbarLinks ? `hidden` : ``} `}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="popular">Popular</NavLink>
                    <NavLink to="top_rated_movies">Top rated</NavLink>
                    <NavLink to="upcoming">Upcoming</NavLink>
                    <NavLink to="favorites">Favorites</NavLink>
                </ul>
                <div className="search-input">
                    <input onChange={delayedSearchInputValueHandler} className="navbar-input" placeholder="Titles, peoples, genres" type="text" />
                </div>
                <div className="hamburger__Menu"><i onClick={showNavbarLinksClickHandler} className="fa-solid fa-bars fa-2xl"></i></div>
            </nav >
            <Outlet />
            <Footer />
        </>
    )
}

export default Navbar;

// {`search-input ${!showNavbarLinks ? `hidden` : ``} `}