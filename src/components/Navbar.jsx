import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useSearchedMovies } from "../SearchedMoviesContext";
import { Input, Icon } from 'semantic-ui-react';

const Navbar = () => {
    const { searchInputValue, searchInputValueHandler } = useSearchedMovies();
    const [showNavbarLinks, setShowNavbarLinks] = useState(false);
    const [showXMenu, setShowXMenu] = useState(false);

    const showNavbarLinksClickHandler = () => {
        if (!showNavbarLinks && !showXMenu) {
            setShowNavbarLinks(true);
            setShowXMenu(true);
        } else {
            setShowNavbarLinks(false);
            setShowXMenu(false);
        }
    };

    const delayedSearchInputValueHandler = (e) => {
        const newSearchInputValue = e.target.value;
        setTimeout(() => {
            searchInputValueHandler(newSearchInputValue);
        }, 1000);
    };

    return (
        <>
            <nav className={`navbar`}>
                <NavLink to="/"><h1 className="navbar-logo">NETFLIX</h1></NavLink>
                <ul className={`navbar-links ${showNavbarLinks ? '' : 'hidden'}`}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="popular">Popular</NavLink>
                    <NavLink to="top_rated_movies">Top rated</NavLink>
                    <NavLink to="upcoming">Upcoming</NavLink>
                    <NavLink to="favorites">Favorites</NavLink>
                </ul>
                <div className="search-input">
                    <Input icon={<Icon name='search' inverted circular link />} onChange={delayedSearchInputValueHandler} className="navbar-input" size='large' icon='search' placeholder='Search...' />
                </div>
                <div className={`hamburger__Menu ${!showXMenu ? '' : 'hidden'}`} onClick={showNavbarLinksClickHandler}>
                    <i className="fa-solid fa-bars fa-2xl"></i>
                </div>
                <div className={`X__Menu ${showXMenu ? '' : 'hidden'}`} onClick={showNavbarLinksClickHandler}>
                    <i className="fa-solid fa-x fa-2xl"></i>
                </div>
            </nav>
            <Outlet />
            <Footer />
        </>
    );
}

export default Navbar;
