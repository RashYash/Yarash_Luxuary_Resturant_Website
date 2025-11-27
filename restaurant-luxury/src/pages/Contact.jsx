import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Reserve Your Table</h2>
      <p className="contact-subtitle">We will contact you shortly to confirm your booking.</p>

      <div className="contact-form-container">
        <form className="reservation-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="Enter your phone number" required />
          </div>

          <div className="form-group">
            <label>Email (Optional)</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label>Date</label>
            <input type="date" required />
          </div>

          <div className="form-group">
            <label>Time</label>
            <input type="time" required />
          </div>

          <div className="form-group">
            <label>No. of Guests</label>
            <input type="number" min="1" max="20" placeholder="Ex: 4" required />
          </div>

          <button className="submit-btn">Submit Reservation</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
