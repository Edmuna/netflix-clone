import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import Favorites from "./Favorites"

// eslint-disable-next-line react/prop-types
export default function Home({ fetchData }) {

    const [trendingMovies, setTrendingMovies] = useState([])

    const url = "https://api.themoviedb.org/3/trending/movie/week?api_key=72d2974158fa7648cd09581860b1304f"

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const fetchDataFromApi = async () => {
            try {
                const data = await fetchData(url);
                setTrendingMovies(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchDataFromApi();
    }, [fetchData, url]);

    return (
        <>
            <div className="poster">
                <Carousel
                    className="carousel"
                    showThumbs={false}
                    showIndicators={false}
                    autoPlay={false}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {trendingMovies.map((movie, index) => (
                        <Link key={index} to={`/movie/${movie.id}`}>
                            <div className="posterImage" >
                                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
                            </div>
                            <div className="posterImage__overlay">
                                <div className="posterImage__title">
                                    {movie ? movie.original_title : ""}
                                </div>
                                <div className="posterImage__runtime">
                                    {movie ? movie.release_date : ""}
                                    <div className="posterImage__vote">
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average : ""}
                                        </span>
                                    </div>
                                </div>
                                <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                            </div>
                        </Link>
                    ))}
                </Carousel >
            </div >
            <Favorites />
        </>
    )
}
