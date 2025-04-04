import React, { useState } from "react";


const menuItems = {
  coffee: [
    { name: "Espresso", description: "Strong and bold coffee", img: "/coffee.jpeg" },
    { name: "Latte", description: "Smooth coffee with milk", img: "/latte.png" },
    { name: "Cappuccino", description: "Perfect blend of coffee and foam", img: "/cappuccino.jpeg" },
  ],
  snacks: [
    { name: "Croissant", description: "Flaky and buttery pastry", img: "/croissant.jpg" },
    { name: "Muffins", description: "Soft and delicious", img: "/muffin.jpg" },
    { name: "Sandwich", description: "Tasty and filling", img: "/sandwich.jpg" },
  ],
  freshers: [
    { name: "Lemonade", description: "Refreshing and citrusy", img: "/lemonade.jpeg" },
    { name: "Iced Tea", description: "Cool and sweet", img: "/iced-tea.jpeg" },
    { name: "Fruit Punch", description: "A mix of fresh fruit juices", img: "/fruit-punch.jpeg" },
  ],
};


const Menu = () => {
  const [activeTab, setActiveTab] = useState("coffee");

  return (
    <section id="menu" className="menu">
      <h2>Our Menu</h2>

      {/* Tabs */}
      <div className="menu-tabs">
        <button onClick={() => setActiveTab("coffee")} className={activeTab === "coffee" ? "active" : ""}>
          Coffee
        </button>
        <button onClick={() => setActiveTab("snacks")} className={activeTab === "snacks" ? "active" : ""}>
          Snacks
        </button>
        <button onClick={() => setActiveTab("freshers")} className={activeTab === "freshers" ? "active" : ""}>
          Freshers
        </button>
      </div>

      {/* Menu Items */}
      <div className="menu-items">
        {menuItems[activeTab].map((item, index) => (
          <div key={index} className="menu-item">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
