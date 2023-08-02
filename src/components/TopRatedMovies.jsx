import MoviesList from "./MoviesList";

const TopRatedMovies = ({ fetchData }) => {

    const url =
        "https://api.themoviedb.org/3/movie/top_rated?api_key=72d2974158fa7648cd09581860b1304f";

    return <MoviesList fetchData={fetchData} url={url} > TOP RATED</MoviesList>;
};

export default TopRatedMovies;