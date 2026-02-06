import React from 'react';
import { Link } from 'react-router-dom';
import { movies } from '../data/movies';
import './Movies.css';

const Movies = () => {
    return (
        <div className="movies-container">
            <h1 className="movies-title">Now Showing</h1>
            <div className="movies-grid">
                {movies.map((movie) => (
                    <div key={movie.id} className="movie-card">
                        <div style={{ overflow: 'hidden' }}>
                            <img
                                src={movie.poster}
                                alt={movie.title}
                                className="movie-image"
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/400x600?text=No+Image';
                                }}
                            />
                        </div>
                        <div className="movie-info">
                            <h2 className="movie-title">{movie.title}</h2>
                            <div className="movie-meta">
                                <span className="movie-genre">{movie.genre}</span>
                                <span className="movie-rating">★ {movie.rating}</span>
                            </div>
                            <p className="movie-description">{movie.description}</p>
                            <Link to={`/movie/${movie.id}`} className="book-btn">
                                Book Ticket
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Movies;
