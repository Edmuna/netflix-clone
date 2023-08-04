import { createContext, useContext, useState, useEffect } from 'react';

const SearchedMoviesContext = createContext();

export const useSearchedMovies = () => useContext(SearchedMoviesContext);

export const SearchedMoviesProvider = ({ children }) => {
    const [searchInputValue, setSearchInputValue] = useState("");
    const [searchedMoviesList, setSearchedMoviesList] = useState([]);

    const searchInputValueHandler = (value) => {
        setSearchInputValue(value);
    };

    useEffect(() => {
        if (!searchInputValue) {
            setSearchedMoviesList([]); // Clear the list when search input is empty
            return;
        }

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

        fetchDataFromApi();
    }, [searchInputValue]);

    return (
        <SearchedMoviesContext.Provider value={{ searchInputValue, searchInputValueHandler, searchedMoviesList }}>
            {children}
        </SearchedMoviesContext.Provider>
    );
};
