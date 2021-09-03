import React, { useEffect } from 'react';

export default function Row({ title, fetchUrl }) {

    const [movies, setMovies] = React.useState([]);

    useEffect(() => {

    }, []);

    return (
        <div>


            <h2>{title}</h2>


        </div>
    )
}