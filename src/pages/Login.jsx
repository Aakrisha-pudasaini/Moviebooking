import React from 'react';

const Login = () => {
    return (
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <div className="glass-panel" style={{ padding: '3rem', width: '100%', maxWidth: '400px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-primary)' }}>Login</h2>
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
                        color: '#333' // Dark text
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
                        color: '#333' // Dark text
                    }}
                />
                <button className="btn" style={{
                    width: '100%',
                    marginBottom: '1rem',
                    background: 'white',
                    border: '1px solid #ddd',
                    color: '#333',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '10px'
                }}>
                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" style={{ width: '18px' }} />
                    Sign in with Google
                </button>
                <div style={{ display: 'flex', alignItems: 'center', margin: '1rem 0' }}>
                    <div style={{ flex: 1, height: '1px', background: 'var(--glass-border)' }}></div>
                    <span style={{ padding: '0 10px', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>OR</span>
                    <div style={{ flex: 1, height: '1px', background: 'var(--glass-border)' }}></div>
                </div>
                <button className="btn btn-primary" style={{ width: '100%' }}>Sign In</button>
                <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    Don't have an account? <a href="/register" style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Register</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
