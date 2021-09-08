import React, { useEffect } from 'react';
import axios from './axios';
import './Row.css';

const base_url = "https://image.tmdb.org/t/p/original/";
export default function Row({ title, fetchUrl, isLargeRow }) {

    const [movies, setMovies] = React.useState([]);

    useEffect(() => {

        async function fetchData() {

            const req = await axios.get(fetchUrl);
            setMovies(req.data.results);
            console.log("req:", req)
            return req;
        }
        fetchData();

    }, [fetchUrl]);

    return (
        <div className="row">


            <h2>{title}</h2>
            <div className="row_posters">
                {
                    movies.map((movie) => (

                        // <img key={movie.id} className={`row_poster${isLargeRow && "row_posterLarge"}`}
                        //     src={`${base_url} ${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />


                        // <img key={movie.id} className="row_poster" src={`${base_url}${movie.poster_path}`} alt={movie.name} />

                        <img
                            key={movie.id}
                            className={`${isLargeRow ? "row_posterLarge" : "row_poster"}`}
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                                }`}
                            alt={movie.name}
                        />


                    ))
                }
            </div>

        </div>
    )
}