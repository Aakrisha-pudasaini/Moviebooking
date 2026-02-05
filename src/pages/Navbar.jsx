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
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1.5rem', color: 'var(--primary)' }}>
                    <Film size={28} />
                    <span>CineBook</span>
                </Link>

                {/* Desktop Menu */}
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-menu">
                    <Link to="/" style={{ color: isActive('/') ? 'var(--primary)' : 'var(--text-primary)' }}>Home</Link>
                    <Link to="/movies" style={{ color: isActive('/movies') ? 'var(--primary)' : 'var(--text-primary)' }}>Movies</Link>
                    <Link to="/my-bookings" style={{ color: isActive('/my-bookings') ? 'var(--primary)' : 'var(--text-primary)' }}>My Bookings</Link>

                    <Link to="/login" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                        <LogIn size={18} /> Login
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} style={{ display: 'none', color: 'white' }} className="mobile-toggle">
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
