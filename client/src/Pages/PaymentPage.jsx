import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { dummyShowsData } from "../assets/assets";
import "./PaymentPage.css";

const PaymentPage = () => {
  const { id, date, time } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const seats = location.state?.seats || [];
  const pricing = location.state?.pricing || [];

  const movie = dummyShowsData.find((m) => m._id === id);

  const total = pricing.reduce((sum, s) => sum + s.price, 0);

  const handlePayment = (method) => {
    navigate(
      `/booking-confirmation/${id}/${date}/${time}/${method}`,
      { state: { seats, pricing, total } }
    );
  };

  if (!movie) return <h1 className="pay-error">Movie not found</h1>;

  return (
    <div className="pay-container">

      <div className="pay-left">
        <h1 className="pay-title">Checkout</h1>

        {/* Contact form omitted for brevity */}

        <div className="pay-btns">
          <button className="upi-btn" onClick={() => handlePayment("upi")}>
            Pay with UPI
          </button>
          <button className="card-btn" onClick={() => handlePayment("card")}>
            Pay by Card
          </button>
        </div>
      </div>

      <div className="pay-right">
        <img src={movie.poster_path} className="pay-poster" />

        <div className="summary-box">
          <h2 className="summary-title">Order Summary</h2>

          {pricing.map((s) => (
            <div className="summary-row" key={s.seat}>
              <p>{s.seat}</p>
              <p>₹{s.price}</p>
            </div>
          ))}

          <hr />

          <div className="summary-total">
            <p>Total</p>
            <p>₹{total}</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PaymentPage;
