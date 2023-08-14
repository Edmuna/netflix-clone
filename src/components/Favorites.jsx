import { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Favorites = () => {
    const [favoriteMovies, setFavoriteMovies] = useState([]);

    useEffect(() => {
        // Fetch the full movie details for each movie ID in the favoriteMoviesList
        const fetchFavoriteMovies = async () => {
            try {
                const storedFavoriteMoviesList = JSON.parse(localStorage.getItem('favoriteMoviesList')) || [];
                const movies = await Promise.all(
                    storedFavoriteMoviesList.map(async (movieId) => {
                        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=72d2974158fa7648cd09581860b1304f`);
                        const data = await response.json();
                        return data;
                    })
                );
                setFavoriteMovies(movies);
            } catch (error) {
                console.error(error);
            }
        };

        fetchFavoriteMovies();
    }, []);

    return (
        <div className="container favorites">
            <div className="header">
                <Header>Favorites</Header>
            </div>
            <div className="card__container">
                {favoriteMovies.map((movie, id) => (
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
    );
};

export default Favorites;
