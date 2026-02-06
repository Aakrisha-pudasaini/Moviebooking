import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { movies } from '../data/movies';
import { Calendar, Clock, MapPin, CreditCard, ChevronLeft } from 'lucide-react';

const Booking = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const movie = movies.find(m => m.id === parseInt(id));

    const [selectedDate, setSelectedDate] = useState('Today');
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);

    // Mock seats generation
    const rows = 8;
    const cols = 10;
    const seatPrice = 350;

    const toggleSeat = (row, col) => {
        const seatId = `${String.fromCharCode(65 + row)}${col + 1}`;
        if (selectedSeats.includes(seatId)) {
            setSelectedSeats(selectedSeats.filter(s => s !== seatId));
        } else {
            setSelectedSeats([...selectedSeats, seatId]);
        }
    };

    const handleBooking = () => {
        if (!selectedTime || selectedSeats.length === 0) {
            alert('Please select a time and at least one seat.');
            return;
        }

        // In a real app, we would save this to a backend or context
        const bookingDetails = {
            movie: movie,
            date: selectedDate,
            time: selectedTime,
            seats: selectedSeats,
            total: selectedSeats.length * seatPrice,
            id: Date.now() // Mock ID
        };

        // For now, let's just navigate to My Bookings
        // Ideally we would pass this state, but for this demo:
        navigate('/my-bookings');
    };

    if (!movie) return <div className="container" style={{ paddingTop: '5rem' }}>Movie not found</div>;

    const dates = ['Today', 'Tomorrow', 'Wed, 8 Feb'];
    const times = ['10:30 AM', '01:15 PM', '04:45 PM', '08:00 PM'];

    return (
        <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
            <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <ChevronLeft size={20} /> Back
            </button>

            <h1 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{movie.title}</h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>{movie.genre} • {movie.duration || '2h 15m'}</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '2rem' }}>
                <div className="glass-panel" style={{ padding: '2rem' }}>
                    {/* Date Selection */}
                    <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Select Date</h3>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                        {dates.map(date => (
                            <button
                                key={date}
                                onClick={() => setSelectedDate(date)}
                                style={{
                                    padding: '0.8rem 1.5rem',
                                    borderRadius: 'var(--radius)',
                                    border: selectedDate === date ? '1px solid var(--primary)' : '1px solid rgba(255,255,255,0.1)',
                                    background: selectedDate === date ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                                    color: selectedDate === date ? 'white' : 'var(--text-secondary)',
                                    cursor: 'pointer',
                                    fontWeight: 'bold'
                                }}
                            >
                                {date}
                            </button>
                        ))}
                    </div>

                    {/* Time Selection */}
                    <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Select Time</h3>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                        {times.map(time => (
                            <button
                                key={time}
                                onClick={() => setSelectedTime(time)}
                                style={{
                                    padding: '0.8rem 1.5rem',
                                    borderRadius: 'var(--radius)',
                                    border: selectedTime === time ? '1px solid var(--primary)' : '1px solid rgba(255,255,255,0.1)',
                                    background: selectedTime === time ? 'var(--secondary)' : 'rgba(255,255,255,0.05)',
                                    color: 'white',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                <Clock size={16} /> {time}
                            </button>
                        ))}
                    </div>

                    {/* Seat Selection */}
                    <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Select Seats</h3>
                    <div style={{ marginBottom: '2rem', perspective: '1000px' }}>
                        <div style={{
                            height: '40px',
                            background: 'linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)',
                            marginBottom: '2rem',
                            transform: 'rotateX(-30deg) scale(0.9)',
                            boxShadow: '0 20px 50px rgba(255,255,255,0.1)',
                            borderRadius: '8px',
                            textAlign: 'center',
                            color: 'rgba(255,255,255,0.3)',
                            lineHeight: '40px',
                            fontSize: '0.8rem'
                        }}>SCREEN THIS WAY</div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
                            {Array.from({ length: rows }).map((_, r) => (
                                <div key={r} style={{ display: 'flex', gap: '0.5rem' }}>
                                    {Array.from({ length: cols }).map((_, c) => {
                                        const seatId = `${String.fromCharCode(65 + r)}${c + 1}`;
                                        const isSelected = selectedSeats.includes(seatId);
                                        // Simple Random Occupied Logic for demo
                                        const isOccupied = (r * c + r) % 7 === 0 || (r === 3 && c === 4);

                                        return (
                                            <button
                                                key={seatId}
                                                disabled={isOccupied}
                                                onClick={() => toggleSeat(r, c)}
                                                style={{
                                                    width: '30px',
                                                    height: '30px',
                                                    borderRadius: '6px',
                                                    border: 'none',
                                                    background: isOccupied
                                                        ? 'rgba(255,255,255,0.1)'
                                                        : isSelected
                                                            ? 'var(--primary)'
                                                            : 'rgba(255,255,255,0.2)',
                                                    cursor: isOccupied ? 'not-allowed' : 'pointer',
                                                    color: 'white',
                                                    fontSize: '0.7rem',
                                                    transition: 'all 0.2s',
                                                    opacity: isOccupied ? 0.3 : 1
                                                }}
                                                title={seatId}
                                            >

                                            </button>
                                        );
                                    })}
                                </div>
                            ))}
                        </div>

                        {/* Legend */}
                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <div style={{ width: '15px', height: '15px', borderRadius: '4px', background: 'rgba(255,255,255,0.2)' }}></div> Available
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <div style={{ width: '15px', height: '15px', borderRadius: '4px', background: 'var(--primary)' }}></div> Selected
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <div style={{ width: '15px', height: '15px', borderRadius: '4px', background: 'rgba(255,255,255,0.1)', opacity: 0.3 }}></div> Occupied
                            </div>
                        </div>
                    </div>
                </div>

                {/* Booking Summary */}
                <div className="glass-panel" style={{ padding: '2rem', height: 'fit-content' }}>
                    <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Booking Summary</h3>

                    <div style={{ marginBottom: '1.5rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <span>Movie</span>
                            <span style={{ color: 'white' }}>{movie.title}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <span>Cinema</span>
                            <span style={{ color: 'white' }}>QFX Civil Mall</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <span>Date</span>
                            <span style={{ color: 'white' }}>{selectedDate}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <span>Time</span>
                            <span style={{ color: 'white' }}>{selectedTime || '-'}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <span>Seats</span>
                            <span style={{ color: 'white' }}>{selectedSeats.join(', ') || '-'}</span>
                        </div>
                    </div>

                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem', marginBottom: '1.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 'bold' }}>
                            <span>Total</span>
                            <span style={{ color: 'var(--primary)' }}>Rs. {selectedSeats.length * seatPrice}</span>
                        </div>
                    </div>

                    <button
                        onClick={handleBooking}
                        className="btn-primary"
                        style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '0.5rem', alignItems: 'center' }}
                    >
                        <CreditCard size={18} /> Book Ticket
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Booking;
