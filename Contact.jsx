import React, { useState } from "react";

const Contact = () => {
  const [booking, setBooking] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "1",
  });

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Table booked for ${booking.guests} guests on ${booking.date} at ${booking.time}`);
    setBooking({ name: "", email: "", date: "", time: "", guests: "1" });
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your ${rating}-star review!\nYour feedback: ${feedback}`);
    setRating(0);
    setFeedback("");
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <div className="contact-details">
        <p><strong>📍 Address:</strong> 123 Coffee Street, City, Country</p>
        <p><strong>📞 Phone:</strong> +123 456 7890</p>
        <p><strong>📧 Email:</strong> contact@cafename.com</p>
        <p><strong>🕒 Opening Hours:</strong> Mon - Sun: 8 AM - 10 PM</p>
      </div>

      {/* Booking Form */}
      <h3>Book a Table</h3>
      <form className="booking-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name.." value={booking.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email.." value={booking.email} onChange={handleChange} required />
        <input type="date" name="date" value={booking.date} onChange={handleChange} required />
        <input type="time" name="time" value={booking.time} onChange={handleChange} required />
        <select name="guests" value={booking.guests} onChange={handleChange}>
          <option value="1">1 Guest</option>
          <option value="2">2 Guests</option>
          <option value="3">3 Guests</option>
          <option value="4">4 Guests</option>
          <option value="5">5+ Guests</option>
        </select>
        <button type="submit-button">Book Now</button>
      </form>

      {/* Star Rating Feedback */}
      <h3>Customer Feedback</h3>
      <form className="feedback-form" onSubmit={handleFeedbackSubmit}>
        <div className="star-rating">
          {[...Array(5)].map((star, index) => {
            const currentRating = index + 1;
            return (
              <label key={index}>
                <input type="radio" name="rating" value={currentRating} onClick={() => setRating(currentRating)} />
                <span
                  className={`star ${currentRating <= (hover || rating) ? "filled" : ""}`}
                  onMouseEnter={() => setHover(currentRating)}
                  onMouseLeave={() => setHover(rating)}
                >
                  ★
                </span>
              </label>
            );
          })}
        </div>
        <textarea placeholder="Your Feedback" value={feedback} onChange={(e) => setFeedback(e.target.value)} required />
        <button type="submit">Submit Review</button>
      </form>
    </section>
  );
};

export default Contact;
