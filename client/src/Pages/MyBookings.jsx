import React, { useEffect, useState } from 'react';
import Loading from '../Components/Loading';
import BlurCircle from '../Components/BlurCircle';
import isoTimeFormat from '../Components/lib/isoTimeFormat.js';
import { dateFormat } from '../Components/lib/dateFormat.js';
import './MyBookings.css';
import { dummyBookingData } from '../assets/assets';

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const seatPrice = (seatId) => {
    const row = seatId.charAt(0);
    return row === "I" || row === "J" ? 400 : 300;
  };

  const computeTotal = (bookedSeats) => {
    return bookedSeats.reduce((sum, seat) => sum + seatPrice(seat), 0);
  };

  const getMyBookings = async () => {
    const updated = dummyBookingData.map((item) => ({
      ...item,
      computedAmount: computeTotal(item.bookedSeats)
    }));

    setBookings(updated);
    setIsLoading(false);
  };

  useEffect(() => {
    getMyBookings();
  }, []);

  return !isLoading ? (
    <div className="mybookings-container">
      <BlurCircle top="100px" left="100px" />
      <BlurCircle bottom="0px" left="600px" />

      <h1 className="mybookings-title">My Bookings</h1>

      {bookings.map((item, index) => (
        <div key={index} className="booking-card">

          {/* LEFT SIDE */}
          <div className="booking-left">
            <img
              src={item.show.movie.poster_path}
              alt=""
              className="booking-poster"
            />

            <div className="booking-info">
              <p className="booking-movie-title">{item.show.movie.title}</p>
              <p className="booking-runtime">{isoTimeFormat(item.show.movie.runtime)}</p>
              <p className="booking-date">{dateFormat(item.show.showDateTime)}</p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="booking-right">

            <div className="booking-payment">
              <p className="booking-amount">
                ₹{item.computedAmount}
              </p>

              {!item.isPaid && (
                <button className="pay-now-btn">Pay now</button>
              )}
            </div>

            <div className="booking-seats">
              <p>
                <span className="label">Total tickets:</span> {item.bookedSeats.length}
              </p>
              <p>
                <span className="label">Seat number:</span> {item.bookedSeats.join(', ')}
              </p>
            </div>

          </div>

        </div>
      ))}
    </div>
  ) : (
    <Loading />
  );
};

export default MyBookings;
