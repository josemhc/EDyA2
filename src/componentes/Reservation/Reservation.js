import React, { useState } from 'react';
import SeatMap from './Board';
import './Reservation.css';

const Reservation = () => {
    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleSeatSelect = (seats) => {
        setSelectedSeats(seats);
    };


    return (
        <div className="reservation">
            <h1>Reserva tu asiento</h1>
            <SeatMap onSeatSelect={handleSeatSelect} />
        </div>
    );
};

export default Reservation;