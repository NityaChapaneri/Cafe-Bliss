import React from "react";
import "./App.css";

const combos = [
  {
    name: "Espresso + Croissant",
    description: "A strong espresso paired with a buttery croissant.",
    img1: "/coffee.jpeg",
    img2: "/croissant.jpg",
  },
  {
    name: "Latte + Muffin",
    description: "A creamy latte served with a soft muffin.",
    img1: "/latte.png",
    img2: "/muffin.jpg",
  },
  {
    name: "Cappuccino + Sandwich",
    description: "A classic cappuccino paired with a fresh sandwich.",
    img1: "/cappuccino.jpeg",
    img2: "/sandwich.jpg",
  },
  
];

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Us</h2>
      <p>Welcome to our café, where we serve the finest coffee and delicious snacks.</p>

      {/* Best Combos Section */}
      <h3>Best Combos</h3>
      <div className="combos-container">
        {combos.map((combo, index) => (
          <div key={index} className="combo-card">
            <div className="combo-images">
              <img src={combo.img1} alt={combo.name + " 1"} />
              <img src={combo.img2} alt={combo.name + " 2"} />
            </div>
            <h4>{combo.name}</h4>
            <p>{combo.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
