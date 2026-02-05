import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Calendar, Star } from 'lucide-react';

const Home = () => {
    // Temporary data for display
    const movies = [
        { id: 1, title: 'Inception', poster: 'https://image.tmdb.org/t/p/w500/9gk7admal4zl67Yrxt875Ww1Wa6.jpg', rating: 8.8, genre: 'Sci-Fi' },
        { id: 2, title: 'Interstellar', poster: 'https://image.tmdb.org/t/p/w500/gEU2QniL6E8AHtMY4kRFRevC7kW.jpg', rating: 8.6, genre: 'Sci-Fi' },
        { id: 3, title: 'The Dark Knight', poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg', rating: 9.0, genre: 'Action' },
        { id: 4, title: 'Avatar', poster: 'https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg', rating: 7.8, genre: 'Adventure' },
    ];

    return (
        <div style={{ paddingBottom: '4rem' }}>
            {/* Hero Section */}
            <section style={{
                height: '80vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'linear-gradient(to bottom, transparent, var(--bg-dark)), url("https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                marginTop: '-80px', // Counteract main-content padding for hero
                position: 'relative',
                zIndex: 1
            }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                    <h1 style={{ fontSize: '4rem', marginBottom: '1rem', fontWeight: '800' }} className="gradient-text">
                        Experience Cinema
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                        Book your tickets for the latest blockbusters with the best visual and audio experience.
                    </p>
                    <button className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                        Book Now <Play size={20} fill="white" />
                    </button>
                </div>
            </section>

            {/* Now Showing */}
            <section className="container" style={{ marginTop: '2rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', borderLeft: '4px solid var(--primary)', paddingLeft: '1rem' }}>
                    Now Showing
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
                    {movies.map(movie => (
                        <Link to={`/movie/${movie.id}`} key={movie.id} className="glass-panel" style={{
                            display: 'block',
                            overflow: 'hidden',
                            transition: 'transform 0.3s ease'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <div style={{ height: '350px', background: `url(${movie.poster}) center/cover no-repeat` }}></div>
                            <div style={{ padding: '1.5rem' }}>
                                <h3 style={{ marginBottom: '0.5rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{movie.title}</h3>
                                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Star size={14} color="gold" fill="gold" /> {movie.rating}</span>
                                    <span>{movie.genre}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
