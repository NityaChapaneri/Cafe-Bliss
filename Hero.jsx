import React from "react";
import "./App.css";
import Typical from "react-typical";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to <span className="cafe-name">Cafe Bliss</span></h1>
        <p className="typing-text">Enjoy the best coffee & snacks in town...</p>
        <a href="#menu">
          <button>Explore Menu</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;