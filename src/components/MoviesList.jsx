import { useState, useEffect } from "react"
import Header from "./Header"
import { Link } from "react-router-dom";

const MoviesList = ({ fetchData, url, children }) => {

    const [movies, setMovies] = useState([]);
    const [heartClicked, setHeartClicked] = useState(false);

    const heartClickHandler = () => {
        setHeartClicked(!heartClicked);
    };

    useEffect(() => {
        const fetchDataFromApi = async () => {
            try {
                const data = await fetchData(url);
                setMovies(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchDataFromApi();
    }, [fetchData, url]);

    return (
        <div className="container">
            <div className="header">
                <Header>{children}</Header>
            </div>
            <div className="card__container">
                {movies.map((movie, id) => (
                    <Link key={id} to={`/movie/${movie.id}`}>
                        <div key={id} className="card">
                            <div className="card-img">
                                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
                            </div>
                            <div className="details">
                                <div className="title">
                                    {movie.title}
                                </div>
                                <div className="vote__heart">
                                    <div className="vote">
                                        {movie.vote_average} <i className="fa-regular fa-star fa-lg"></i>
                                    </div>
                                    <div className="heart">
                                        <i onClick={heartClickHandler} className={`fa-regular fa-heart fa-lg ${heartClicked ? "clicked" : ""}`}></i>
                                    </div>
                                </div>
                                <div className="overview">
                                    {movie.overview}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}


export default MoviesList