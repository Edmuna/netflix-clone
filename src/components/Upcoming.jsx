// import MoviesList from "./MoviesList";
// import { useSearchedMovies } from "../SearchedMoviesContext";

// const Upcoming = ({ fetchData }) => {

//     const { searchedMoviesList } = useSearchedMovies(); // Get the searchedMoviesList from the context

//     const url =
//         "https://api.themoviedb.org/3/movie/upcoming?api_key=72d2974158fa7648cd09581860b1304f";

//     return <MoviesList fetchData={fetchData} url={url} > UPCOMING</MoviesList>;
// };

// export default Upcoming;

import { useSearchedMovies } from "../SearchedMoviesContext";
import MoviesList from "./MoviesList";

const Popular = ({ fetchData }) => {
    const { searchedMoviesList } = useSearchedMovies();

    const popularUrl =
        "https://api.themoviedb.org/3/movie/upcoming?api_key=72d2974158fa7648cd09581860b1304f";

    return (
        <>
            {searchedMoviesList.length > 0 ? (
                <MoviesList fetchData={fetchData} url={popularUrl} movies={searchedMoviesList}>
                    Searched results :
                </MoviesList>
            ) : (
                <MoviesList fetchData={fetchData} url={popularUrl} movies={[]}>
                    Upcoming
                </MoviesList>
            )}
        </>
    );
};

export default Popular;
