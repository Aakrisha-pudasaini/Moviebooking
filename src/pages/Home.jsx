import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Calendar, Star } from 'lucide-react';
import { movies } from '../data/movies';

const Home = () => {
    // Display top 8 movies
    const displayMovies = movies.slice(0, 8);

    return (
        <div style={{ paddingBottom: '4rem' }}>
            {/* Hero Section */}
            <section style={{
                height: '85vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'linear-gradient(to bottom, rgba(30, 58, 138, 0.4), rgba(30, 58, 138, 0.8)), url("https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                marginTop: '-90px', // Counteract navbar + spacing
                position: 'relative',
                zIndex: 1,
                clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)'
            }}>
                <div className="container animate-fade-in" style={{ textAlign: 'center', maxWidth: '800px', marginTop: '60px' }}>
                    <h1 style={{ fontSize: '5rem', marginBottom: '1rem', fontWeight: '900', color: '#fff', textShadow: '0 4px 20px rgba(0,0,0,0.6)' }}>
                        CINE<span className="gradient-text" style={{ background: 'linear-gradient(to right, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>BOOK</span>
                    </h1>
                    <p style={{ fontSize: '1.4rem', color: '#e0f2fe', marginBottom: '2.5rem', fontWeight: '300', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                        Unlock the World of Cinema. Book Your Experience Today.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <button className="btn btn-primary hover-scale" style={{ fontSize: '1.2rem', padding: '1rem 2.5rem', borderRadius: '50px' }}>
                            Book Now <Play size={20} fill="white" style={{ marginLeft: '8px' }} />
                        </button>
                        <button className="btn hover-scale" style={{ fontSize: '1.2rem', padding: '1rem 2.5rem', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '50px' }}>
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

            {/* Exclusive Offers - Shifted up */}
            <section className="container" style={{ marginTop: '-4rem', position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <div className="glass-panel hover-scale" style={{
                        padding: '2.5rem',
                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(30, 58, 138, 0.9))',
                        color: 'white',
                        boxShadow: '0 10px 30px -5px rgba(59, 130, 246, 0.4)'
                    }}>
                        <div style={{ background: 'rgba(255,255,255,0.2)', width: 'fit-content', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.8rem', marginBottom: '1rem' }}>LIMITED TIME</div>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Student Special</h3>
                        <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>Get 20% off on all tickets with valid ID cards.</p>
                        <button style={{ padding: '0.8rem 1.5rem', background: 'white', color: 'var(--primary)', borderRadius: '30px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>Claim Offer</button>
                    </div>

                    <div className="glass-panel hover-scale" style={{
                        padding: '2.5rem',
                        background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.9), rgba(126, 34, 206, 0.9))',
                        color: 'white',
                        boxShadow: '0 10px 30px -5px rgba(168, 85, 247, 0.4)'
                    }}>
                        <div style={{ background: 'rgba(255,255,255,0.2)', width: 'fit-content', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.8rem', marginBottom: '1rem' }}>WEEKEND DEAL</div>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Friday Night</h3>
                        <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>Buy 2 Get 1 Free on all Friday night shows.</p>
                        <button style={{ padding: '0.8rem 1.5rem', background: 'white', color: '#7e22ce', borderRadius: '30px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>View Details</button>
                    </div>
                </div>
            </section>

            {/* Now Showing */}
            <section className="container" style={{ marginTop: '5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '2rem' }}>
                    <div>
                        <h2 className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: 1.2 }}>
                            Now Showing
                        </h2>
                        <p style={{ color: 'var(--text-secondary)' }}>Don't miss the latest blockbusters</p>
                    </div>
                    <Link to="/movies" className="btn" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>
                        View All <Play size={16} />
                    </Link>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '2.5rem' }}>
                    {displayMovies.map(movie => (
                        <Link to={`/movie/${movie.id}`} key={movie.id} className="glass-panel movie-card" style={{
                            display: 'block',
                            overflow: 'hidden',
                            position: 'relative',
                            border: 'none',
                            background: 'transparent'
                        }}
                        >
                            <div style={{
                                height: '360px',
                                overflow: 'hidden',
                                borderRadius: 'var(--radius)',
                                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                                position: 'relative'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.8))',
                                    zIndex: 1,
                                    pointerEvents: 'none'
                                }}></div>
                                <img
                                    src={movie.poster}
                                    alt={movie.title}
                                    className="movie-card-img"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentNode.innerHTML = '<div style="background: #e2e8f0; height: 100%; display: flex; align-items: center; justify-content: center; color: #64748b;">No Image</div>';
                                    }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    bottom: '1.5rem',
                                    left: '1.5rem',
                                    zIndex: 2,
                                    color: 'white'
                                }}>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.3rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{movie.title}</h3>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#e2e8f0' }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'rgba(255,165,0,0.9)', padding: '2px 6px', borderRadius: '4px', color: 'white', fontWeight: 'bold', fontSize: '0.8rem' }}>
                                            <Star size={12} fill="white" strokeWidth={0} /> {movie.rating}
                                        </span>
                                        <span>• {movie.genre}</span>
                                    </div>
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
