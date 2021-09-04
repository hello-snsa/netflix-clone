import React, { useEffect } from 'react';
import axios from './axios';

const baseUrls = "https://image.tmdb.org/t/p/original/";
export default function Row({ title, fetchUrl }) {

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
                        <img className="row_poster" src={`${baseUrls}${movie.poster_path}`} alt={movie.name} />



                    ))
                }

            </div>

        </div>
    )
}