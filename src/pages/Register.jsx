import React from 'react';

const Register = () => {
    return (
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <div className="glass-panel" style={{ padding: '3rem', width: '100%', maxWidth: '400px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-primary)' }}>Register</h2>
                <input
                    type="text"
                    placeholder="Name"
                    style={{
                        width: '100%',
                        padding: '1rem',
                        marginBottom: '1rem',
                        borderRadius: '8px',
                        border: '1px solid var(--accent)',
                        background: 'white',
                        color: '#333'
                    }}
                />
                <input
                    type="email"
                    placeholder="Email"
                    style={{
                        width: '100%',
                        padding: '1rem',
                        marginBottom: '1rem',
                        borderRadius: '8px',
                        border: '1px solid var(--accent)',
                        background: 'white',
                        color: '#333'
                    }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    style={{
                        width: '100%',
                        padding: '1rem',
                        marginBottom: '2rem',
                        borderRadius: '8px',
                        border: '1px solid var(--accent)',
                        background: 'white',
                        color: '#333'
                    }}
                />
                <button className="btn btn-primary" style={{ width: '100%' }}>Sign Up</button>
                <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    Already have an account? <a href="/login" style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Login</a>
                </div>
            </div>
        </div>
    );
};

export default Register;
