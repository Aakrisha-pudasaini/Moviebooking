import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Play, Calendar, Clock, MapPin } from 'lucide-react';
import { movies } from '../data/movies';

const MovieDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const movieData = movies.find(m => m.id === parseInt(id));

    if (!movieData) {
        return (
            <div className="container" style={{ paddingTop: '5rem', textAlign: 'center' }}>
                <h2>Movie not found</h2>
                <p>The movie you are looking for does not exist.</p>
            </div>
        );
    }

    // Mock additional details not in the main list
    const movie = {
        ...movieData,
        trailer: 'https://www.youtube.com/embed/YoHD9XEInc0', // Placeholder trailer
        duration: '2h 15m',
        showtimes: [
            { time: '10:30 AM', theatre: 'QFX Civil Mall' },
            { time: '01:15 PM', theatre: 'Big Movies' },
            { time: '04:45 PM', theatre: 'QFX Labim Mall' },
            { time: '08:00 PM', theatre: 'QFX Chhaya Center' }
        ]
    };

    return (
        <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
            <div className="glass-panel" style={{ padding: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {/* Left: Poster */}
                <div>
                    <img
                        src={movie.poster}
                        alt={movie.title}
                        style={{
                            width: '100%',
                            borderRadius: 'var(--radius)',
                            boxShadow: 'var(--shadow-lg)',
                            objectFit: 'cover'
                        }}
                    />
                    <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                        <p style={{ fontWeight: 'bold', fontSize: '1.5rem', color: 'var(--primary)' }}>{movie.rating} <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>/ 10</span></p>
                        <p style={{ color: 'var(--text-secondary)' }}>{movie.duration} • {movie.genre}</p>
                    </div>
                </div>

                {/* Right: Info and Trailer */}
                <div>
                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', color: 'var(--text-primary)' }}>{movie.title}</h1>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>{movie.description}</p>

                    <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Trailer</h3>
                    <div style={{ position: 'relative', overflow: 'hidden', width: '100%', paddingTop: '56.25%', borderRadius: 'var(--radius)', background: 'black', marginBottom: '2rem' }}>
                        <iframe
                            src={movie.trailer}
                            style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, width: '100%', height: '100%', border: 0 }}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Trailer"
                        ></iframe>
                    </div>

                    <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Showtimes</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
                        {movie.showtimes.map((show, index) => (
                            <button key={index} className="glass-panel" style={{
                                padding: '1rem',
                                textAlign: 'left',
                                border: '1px solid var(--primary)',
                                background: 'rgba(255, 255, 255, 0.4)',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.backgroundColor = 'var(--secondary)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
                                }}
                                onClick={() => navigate(`/booking/${id}`)}
                            >
                                <div style={{ opacity: 0.8, fontSize: '0.9rem', marginBottom: '0.2rem', color: 'var(--text-secondary)' }}>
                                    <MapPin size={14} style={{ marginRight: '4px', verticalAlign: 'text-bottom' }} />
                                    {show.theatre}
                                </div>
                                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary)' }}>
                                    <Clock size={16} style={{ marginRight: '6px', verticalAlign: 'text-bottom' }} />
                                    {show.time}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
