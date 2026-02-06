import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Film, User, Menu, X, LogIn } from 'lucide-react';
import '../index.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="glass-panel" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            padding: '1rem 2rem',
            margin: '1rem',
            marginTop: '1rem',
            borderRadius: '16px'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: '900', fontSize: '1.8rem' }}>
                    <div style={{ background: 'var(--primary)', padding: '6px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(59, 130, 246, 0.4)' }}>
                        <Film size={24} color="white" />
                    </div>
                    <span className="gradient-text">CineBook</span>
                </Link>

                {/* Desktop Menu */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }} className="desktop-menu">
                    <Link to="/" className="nav-link" style={{
                        padding: '0.5rem 1rem',
                        borderRadius: '12px',
                        color: isActive('/') ? 'var(--primary)' : 'var(--text-primary)',
                        background: isActive('/') ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                        fontWeight: isActive('/') ? 'bold' : 'normal',
                        transition: 'all 0.3s ease'
                    }}>Home</Link>
                    <Link to="/movies" className="nav-link" style={{
                        padding: '0.5rem 1rem',
                        borderRadius: '12px',
                        color: isActive('/movies') ? 'var(--primary)' : 'var(--text-primary)',
                        background: isActive('/movies') ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                        fontWeight: isActive('/movies') ? 'bold' : 'normal',
                        transition: 'all 0.3s ease'
                    }}>Movies</Link>
                    <Link to="/my-bookings" className="nav-link" style={{
                        padding: '0.5rem 1rem',
                        borderRadius: '12px',
                        color: isActive('/my-bookings') ? 'var(--primary)' : 'var(--text-primary)',
                        background: isActive('/my-bookings') ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                        fontWeight: isActive('/my-bookings') ? 'bold' : 'normal',
                        transition: 'all 0.3s ease'
                    }}>My Bookings</Link>

                    <Link to="/login" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem', marginLeft: '1rem' }}>
                        <LogIn size={18} /> Login
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} style={{ display: 'none', color: 'var(--text-primary)' }} className="mobile-toggle">
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
