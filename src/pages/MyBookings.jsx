import React from 'react';
import { Clock, MapPin, Calendar, Ticket } from 'lucide-react';

const MyBookings = () => {
    // Mock bookings data
    const bookings = [
        {
            id: 'BK-7829',
            title: 'Inception',
            poster: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg',
            date: 'Today, 6 Feb',
            time: '04:45 PM',
            theatre: 'QFX Labim Mall',
            seats: ['F4', 'F5'],
            price: 700,
            status: 'Confirmed'
        },
        {
            id: 'BK-1102',
            title: 'Oppenheimer',
            poster: 'https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg',
            date: 'Yesterday, 5 Feb',
            time: '01:15 PM',
            theatre: 'Big Movies',
            seats: ['E10', 'E11', 'E12'],
            price: 1050,
            status: 'Completed'
        }
    ];

    return (
        <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
            <h1 style={{ marginBottom: '2rem', color: 'var(--text-primary)' }}>My Bookings</h1>

            <div style={{ display: 'grid', gap: '1.5rem' }}>
                {bookings.length > 0 ? (
                    bookings.map(booking => (
                        <div key={booking.id} className="glass-panel" style={{
                            padding: '1.5rem',
                            display: 'flex',
                            gap: '1.5rem',
                            flexWrap: 'wrap',
                            alignItems: 'center'
                        }}>
                            {/* Movie Poster (Small) */}
                            <img
                                src={booking.poster}
                                alt={booking.title}
                                style={{
                                    width: '80px',
                                    height: '120px',
                                    objectFit: 'cover',
                                    borderRadius: '8px'
                                }}
                            />

                            {/* Booking Details */}
                            <div style={{ flex: 1, minWidth: '200px' }}>
                                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.5rem', color: 'var(--text-primary)' }}>{booking.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem' }}>Booking ID: {booking.id}</p>

                                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', color: 'var(--text-primary)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Calendar size={16} className="text-primary" /> {booking.date}
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Clock size={16} className="text-secondary" /> {booking.time}
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <MapPin size={16} className="text-accent" /> {booking.theatre}
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Ticket size={16} className="text-primary" /> Seats: {booking.seats.join(', ')}
                                    </div>
                                </div>
                            </div>

                            {/* Price and Status */}
                            <div style={{
                                textAlign: 'right',
                                minWidth: '150px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.5rem',
                                alignItems: 'end'
                            }}>
                                <div style={{
                                    padding: '0.4rem 1rem',
                                    borderRadius: '20px',
                                    background: booking.status === 'Confirmed' ? 'var(--primary)' : 'rgba(255,255,255,0.1)',
                                    color: 'white',
                                    fontSize: '0.8rem',
                                    fontWeight: 'bold',
                                    width: 'fit-content'
                                }}>
                                    {booking.status}
                                </div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>
                                    Rs. {booking.price}
                                </div>
                                {booking.status === 'Confirmed' && (
                                    <button className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                                        View Ticket
                                    </button>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No bookings found.</p>
                )}
            </div>
        </div>
    );
};

export default MyBookings;
