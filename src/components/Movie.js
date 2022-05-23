import React from 'react'
import './Movie.css'

function Movie({ title, items }) {
    return (
        <div className='moviePrincipal'>
            <h2>{title}</h2>
            <div className='movie--listarea'>
                <div className='movie--list'>
                    <div className='movie--item'>
                        {items.results.length > 0 && items.results.map((item, key) => (
                            <img key={key} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movie