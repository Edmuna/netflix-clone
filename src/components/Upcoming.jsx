import MoviesList from "./MoviesList";

const Upcoming = ({ fetchData }) => {

    const url =
        "https://api.themoviedb.org/3/movie/upcoming?api_key=72d2974158fa7648cd09581860b1304f";

    return <MoviesList fetchData={fetchData} url={url} > UPCOMING</MoviesList>;
};

export default Upcoming;