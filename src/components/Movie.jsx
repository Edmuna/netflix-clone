import { useEffect, useState } from "react"
import { useParams } from "react-router"

const Movie = () => {

    const [currentMovieDetail, setCurrentMovieDetail] = useState({})
    const { id } = useParams()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        getData()
    }, [id])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=72d2974158fa7648cd09581860b1304f`)
            .then(res => res.json())
            .then(data => setCurrentMovieDetail(data))
    }
    return (
        <>
            <div className="movie">
                <div className="movie__intro">
                    <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
                </div>
                <div className="movie__detail">
                    <div className="movie__detailLeft">
                        <div className="movie__posterBox">
                            <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                        </div>
                    </div>
                    <div className="movie__detailRight">
                        <div className="movie__detailRightTop">
                            <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                            <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                            <div className="movie__rating">
                                {currentMovieDetail ? currentMovieDetail.vote_average : ""} <i class="fas fa-star" />
                                <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                            </div>
                            <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                            <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                        </div>
                        <div className="movie__detailRightBottom">
                            <div className="synopsisText">Synopsis</div>
                            <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                        </div>

                    </div>
                </div>
                <div className="movie__links">
                    {
                        currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail.homepage} target="_blank" style={{ textDecoration: "none" }}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                    }
                    {
                        currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank" style={{ textDecoration: "none" }}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                    }
                </div >
            </div >
        </>
    )
}

export default Movie