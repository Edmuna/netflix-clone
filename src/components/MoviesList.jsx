import { useState, useEffect } from "react"
import Header from "./Header"
import { Link } from "react-router-dom";

const MoviesList = ({ fetchData, url, children, movies }) => {

    const [fetchedMovies, setFetchedMovies] = useState([]);

    useEffect(() => {
        const fetchDataFromApi = async () => {
            try {
                const data = await fetchData(url);
                setFetchedMovies(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchDataFromApi();
    }, [fetchData, url]);

    const moviesToRender = movies.length > 0 ? movies : fetchedMovies;

    return (
        <div className="container">
            <div className="header">
                <Header>{children}</Header>
            </div>
            <div className="card__container">
                {moviesToRender.map((movie, id) => (
                    // <Link key={id} to={`/movie/${movie.id}`}>
                    //     <div key={id} className="card">
                    //         <div className="card-img">
                    //             <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
                    //         </div>
                    //         <div className="details">
                    //             <div className="title">
                    //                 {movie.title}
                    //             </div>
                    //             <div className="vote__heart">
                    //                 <div className="vote">
                    //                     {movie.vote_average} <i className="fa-regular fa-star fa-lg"></i>
                    //                 </div>
                    //             </div>
                    //             {/* <div className="overview">
                    //                 {movie.overview}
                    //             </div> */}
                    //         </div>
                    //     </div>
                    // </Link> 
                    <Link key={id} to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
                        <div className="cards">
                            <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} />
                            <div className="cards__overlay">
                                <div className="card__title">{movie ? movie.original_title : ""}</div>
                                <div className="card__runtime">
                                    {movie ? movie.release_date : ""}
                                    <span className="card__rating">{movie ? movie.vote_average : ""}<i className="fas fa-star" /></span>
                                </div>
                                <div className="card__description">{movie ? movie.overview.slice(0, 118) + "..." : ""}</div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default MoviesList;
