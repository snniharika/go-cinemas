import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { dummyShowsData } from "../assets/assets";
import "./BookingConfirmation.css";

const BookingConfirmation = () => {
  const { id, date, time, method } = useParams();
  const location = useLocation();

  const seats = location.state?.seats || [];
  const pricing = location.state?.pricing || [];
  const total = location.state?.total || 0;

  const movie = dummyShowsData.find((m) => m._id === id);

  if (!movie) return <h1 className="confirm-error">Movie not found</h1>;

  return (
    <div className="confirm-container">
      <h1 className="confirm-title">Ticket Confirmation</h1>

      <div className="confirm-content">

        <div className="confirm-left">
          <img src={movie.poster_path} className="confirm-poster" />

          <div className="movie-info-block">
            <p className="label">Movie</p>
            <p className="value">{movie.title}</p>

            <p className="label">Date</p>
            <p className="value">{new Date(date).toDateString()}</p>

            <p className="label">Time</p>
            <p className="value">{new Date(time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p>

            <p className="label">Tickets ({seats.length})</p>
            <p className="value">{seats.join(", ")}</p>
          </div>
        </div>

        <div className="confirm-right">
          <div className="order-box">

            <h2>Order Details</h2>

            {pricing.map((s) => (
              <div className="order-row" key={s.seat}>
                <p>{s.seat}</p>
                <p>₹{s.price}</p>
              </div>
            ))}

            <hr />

            <div className="order-total">
              <p>Total</p>
              <p>₹{total}</p>
            </div>

            <p className="label">Payment Method</p>
            <p className="value">{method.toUpperCase()}</p>
          </div>

          <div className="qr-box">QR</div>
        </div>

      </div>
    </div>
  );
};

export default BookingConfirmation;
