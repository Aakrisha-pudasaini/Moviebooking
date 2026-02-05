import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            background: 'var(--bg-card)',
            padding: '2rem',
            textAlign: 'center',
            marginTop: 'auto',
            borderTop: '1px solid var(--glass-border)'
        }}>
            <div className="container">
                <p style={{ color: 'var(--text-secondary)' }}>&copy; {new Date().getFullYear()} CineBook. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
