import MoviesList from "./MoviesList";

const Popular = ({ fetchData }) => {

    const url =
        "https://api.themoviedb.org/3/movie/popular?api_key=72d2974158fa7648cd09581860b1304f";

    return <MoviesList fetchData={fetchData} url={url} > POPULAR</MoviesList>;
};

export default Popular;
