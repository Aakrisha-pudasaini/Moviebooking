import React from 'react';
import { useParams } from 'react-router-dom';
import { Play, Calendar, Clock, MapPin } from 'lucide-react';

const MovieDetails = () => {
    const { id } = useParams();

    // Dummy data
    const movie = {
        title: 'Inception',
        description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
        trailer: 'https://www.youtube.com/embed/YoHD9XEInc0',
        poster: 'https://image.tmdb.org/t/p/w500/9gk7admal4zl67Yrxt875Ww1Wa6.jpg',
        duration: '2h 28m',
        rating: '8.8/10',
        showtimes: [
            { time: '10:30 AM', theatre: 'QFX Civil Mall' },
            { time: '01:15 PM', theatre: 'Big Movies' },
            { time: '04:45 PM', theatre: 'QFX Labim Mall' },
            { time: '08:00 PM', theatre: 'QFX Chhaya Center' }
        ]
    };

    return (
        <div className="container" style={{ paddingTop: '2rem' }}>
            <div className="glass-panel" style={{ padding: '2rem', display: 'grid', gridTemplateColumns: '300px 1fr', gap: '2rem' }}>
                {/* Left: Poster */}
                <div>
                    <img src={movie.poster} alt={movie.title} style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }} />
                    <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                        <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{movie.rating}</p>
                        <p style={{ color: 'var(--text-secondary)' }}>{movie.duration}</p>
                    </div>
                </div>

                {/* Right: Info and Trailer */}
                <div>
                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>{movie.title}</h1>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>{movie.description}</p>

                    <h3 style={{ marginBottom: '1rem' }}>Trailer</h3>
                    <div style={{ position: 'relative', overflow: 'hidden', width: '100%', paddingTop: '56.25%', borderRadius: '12px', background: 'black', marginBottom: '2rem' }}>
                        <iframe
                            src={movie.trailer}
                            style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, width: '100%', height: '100%', border: 0 }}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Trailer"
                        ></iframe>
                    </div>

                    <h3 style={{ marginBottom: '1rem' }}>Showtimes</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
                        {movie.showtimes.map((show, index) => (
                            <button key={index} className="glass-panel" style={{
                                padding: '1rem',
                                textAlign: 'left',
                                border: '1px solid var(--primary)',
                                background: 'rgba(99, 102, 241, 0.1)'
                            }}>
                                <div style={{ opacity: 0.8, fontSize: '0.9rem', marginBottom: '0.2rem' }}>
                                    <MapPin size={14} style={{ marginRight: '4px', verticalAlign: 'text-bottom' }} />
                                    {show.theatre}
                                </div>
                                <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
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
