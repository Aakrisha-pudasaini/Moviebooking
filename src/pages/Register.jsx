import React from 'react';

const Register = () => {
    return (
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <div className="glass-panel" style={{ padding: '3rem', width: '100%', maxWidth: '400px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Register</h2>
                <input type="text" placeholder="Name" style={{ width: '100%', padding: '1rem', marginBottom: '1rem', borderRadius: '8px', border: 'none', background: 'rgba(255,255,255,0.1)', color: 'white' }} />
                <input type="email" placeholder="Email" style={{ width: '100%', padding: '1rem', marginBottom: '1rem', borderRadius: '8px', border: 'none', background: 'rgba(255,255,255,0.1)', color: 'white' }} />
                <input type="password" placeholder="Password" style={{ width: '100%', padding: '1rem', marginBottom: '2rem', borderRadius: '8px', border: 'none', background: 'rgba(255,255,255,0.1)', color: 'white' }} />
                <button className="btn btn-primary" style={{ width: '100%' }}>Sign Up</button>
            </div>
        </div>
    );
};

export default Register;
