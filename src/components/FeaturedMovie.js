import React from 'react';
import './FeaturedMovie.css';

function FeaturedMovie({ item }) {
    let description = item.overview;
    if (description.length > 300) {
        description = description.substring(0, 300) + '...';
    }
    return (
        <section className='featured' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})` }}>
            <div className='transparency-vertical'>
                <div className='transparency-horizontal'>
                    <div className='title'>
                        {item.original_name}
                    </div>
                    <div className='info'>
                        <div className='points'>
                            {item.vote_average} pontos
                        </div>
                        <div className='year'>
                            2099
                        </div>
                        <div className='seasons'>
                            {item.number_of_seasons} temporada{item.number_of_seasons != 1 && 's'}
                        </div>
                        <div className='description'>
                            {description}
                        </div>
                        <div className='buttons'>
                            <a href="https://www.netflix.com" className='btnWatch'>Assistir</a>
                            <a href="" className='btnMyList'>Minha lista</a>
                        </div>
                        <div className='genres'>
                            <strong>Gêneros:</strong> #todo Falta fazer, Rolagem dos itens também...
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedMovie