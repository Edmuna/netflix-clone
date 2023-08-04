import { useSearchedMovies } from "../SearchedMoviesContext";
import MoviesList from "./MoviesList";

const Popular = ({ fetchData }) => {
    const { searchedMoviesList } = useSearchedMovies();

    const popularUrl =
        "https://api.themoviedb.org/3/movie/popular?api_key=72d2974158fa7648cd09581860b1304f";

    return (
        <>
            {searchedMoviesList.length > 0 ? (
                <MoviesList fetchData={fetchData} url={popularUrl} movies={searchedMoviesList}>
                    Searched results :
                </MoviesList>
            ) : (
                <MoviesList fetchData={fetchData} url={popularUrl} movies={[]}>
                    Popular
                </MoviesList>
            )}
        </>
    );
};

export default Popular;
