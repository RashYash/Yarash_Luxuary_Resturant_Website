import React, { useState, useRef } from "react";
import "../styles/Menu.css";

function Menu() {
  const [activeCategory, setActiveCategory] = useState("Breakfast");

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= 350;
  };

  const scrollRight = () => {
    sliderRef.current.scrollLeft += 350;
  };

  const categories = ["Breakfast", "Lunch", "Dinner", "Beverages", "Desserts"];

  const menuItems = {
    Breakfast: [
      { name: "English Breakfast", description: "Eggs, sausages and toast.", price: "Rs. 2200", image: "/menu/001.jpg" },
      { name: "Avocado Toast", description: "Toasted sourdough with avocado.", price: "Rs. 1600", image: "/menu/002.jpg" },
      { name: "Pancake Stack", description: "Fluffy pancakes with honey.", price: "Rs. 1800", image: "/menu/003.jpg" },
      { name: "French Toast", description: "Served with cinnamon sugar.", price: "Rs. 1900", image: "/menu/004.jpg" },
      { name: "Omelette Special", description: "Cheese and mushroom omelette.", price: "Rs. 1500", image: "/menu/005.jpg" },
      { name: "Fruit Bowl", description: "Fresh seasonal fruits.", price: "Rs. 1200", image: "/menu/006.jpg" },
      { name: "Waffles", description: "Golden waffles with syrup.", price: "Rs. 2000", image: "/menu/007.jpg" },
      { name: "Breakfast Burrito", description: "Eggs, veggies and sauce.", price: "Rs. 1700", image: "/menu/008.jpg" },
      { name: "Cornflakes & Milk", description: "Classic breakfast bowl.", price: "Rs. 900", image: "/menu/009.jpg" },
      { name: "Healthy Sandwich", description: "Chicken, lettuce & cheese.", price: "Rs. 1400", image: "/menu/010.jpg" }
    ],

    Lunch: [
      { name: "Grilled Chicken", description: "Herb rice and salad.", price: "Rs. 2600", image: "/menu/011.jpg" },
      { name: "Beef Lasagna", description: "Layered pasta with cheese.", price: "Rs. 3000", image: "/menu/012.jpg" },
      { name: "Chicken Fried Rice", description: "With egg & veggies.", price: "Rs. 1800", image: "/menu/013.jpg" },
      { name: "Mixed Seafood Rice", description: "Shrimp & cuttlefish.", price: "Rs. 2400", image: "/menu/014.jpg" },
      { name: "Chicken Kottu", description: "Spicy Sri Lankan dish.", price: "Rs. 1600", image: "/menu/015.jpg" },
      { name: "Veggie Pasta", description: "Creamy white sauce.", price: "Rs. 2000", image: "/menu/016.jpg" },
      { name: "Crispy Chicken Burger", description: "With fries.", price: "Rs. 2200", image: "/menu/017.jpg" },
      { name: "Chicken Sub", description: "Freshly baked bun.", price: "Rs. 1500", image: "/menu/018.jpg" },
      { name: "Nasi Goreng", description: "Indonesian fried rice.", price: "Rs. 2100", image: "/menu/019.jpg" },
      { name: "Rice & Curry", description: "Sri Lankan classic.", price: "Rs. 1300", image: "/menu/020.jpg" }
    ],

    Dinner: [
      { name: "Steak Dinner", description: "Charcoal grilled.", price: "Rs. 4200", image: "/menu/021.jpg" },
      { name: "BBQ Chicken", description: "Sweet spicy glaze.", price: "Rs. 2800", image: "/menu/022.jpg" },
      { name: "Roasted Fish", description: "Lemon butter sauce.", price: "Rs. 3500", image: "/menu/023.jpg" },
      { name: "Creamy Pasta", description: "Cheese & herbs.", price: "Rs. 2100", image: "/menu/024.jpg" },
      { name: "Chicken Biriyani", description: "Fragrant Indian rice.", price: "Rs. 2500", image: "/menu/025.jpg" },
      { name: "Grilled Prawns", description: "Served with dip.", price: "Rs. 3900", image: "/menu/026.jpg" },
      { name: "Chicken Shawarma", description: "Middle Eastern wrap.", price: "Rs. 1600", image: "/menu/027.jpg" },
      { name: "Soup Bowl", description: "Pumpkin / Mushroom.", price: "Rs. 1000", image: "/menu/028.jpg" },
      { name: "Garlic Bread", description: "Buttery toasted.", price: "Rs. 700", image: "/menu/029.jpg" },
      { name: "Veg Fried Rice", description: "Light & tasty.", price: "Rs. 1500", image: "/menu/030.jpg" }
    ],

    Beverages: [
      { name: "Caramel Latte", description: "Smooth & creamy.", price: "Rs. 850", image: "/menu/031.jpg" },
      { name: "Iced Coffee", description: "Chilled and sweet.", price: "Rs. 800", image: "/menu/032.jpg" },
      { name: "Fresh Juice", description: "Orange / Lime / Pineapple.", price: "Rs. 650", image: "/menu/033.jpg" },
      { name: "Milkshake", description: "Chocolate / Vanilla / Strawberry.", price: "Rs. 1200", image: "/menu/034.jpg" },
      { name: "Green Tea", description: "Warm and calming.", price: "Rs. 500", image: "/menu/035.jpg" },
      { name: "Hot Chocolate", description: "Rich cocoa flavor.", price: "Rs. 900", image: "/menu/beverages.jpg" },
      { name: "Mojito", description: "Mint and lime.", price: "Rs. 1100", image: "/menu/beverages.jpg" },
      { name: "Blue Lagoon", description: "Refreshing cooler.", price: "Rs. 1300", image: "/menu/beverages.jpg" },
      { name: "Red Bull", description: "Energy drink.", price: "Rs. 900", image: "/menu/beverages.jpg" },
      { name: "Bottled Water", description: "Chilled.", price: "Rs. 200", image: "/menu/beverages.jpg" }
    ],

    Desserts: [
      { name: "Chocolate Mousse", description: "Dark chocolate.", price: "Rs. 1200", image: "/menu/041.jpg" },
      { name: "Cheesecake", description: "Creamy classic.", price: "Rs. 1500", image: "/menu/042.jpg" },
      { name: "Brownie", description: "Rich chocolate.", price: "Rs. 1100", image: "/menu/043.jpg" },
      { name: "Fruit Trifle", description: "Layered dessert.", price: "Rs. 1600", image: "/menu/044.jpg" },
      { name: "Ice Cream", description: "Vanilla / Chocolate.", price: "Rs. 700", image: "/menu/045.jpg" },
      { name: "Cupcakes", description: "Sweet & soft.", price: "Rs. 900", image: "/menu/desserts.jpg" },
      { name: "Waffles", description: "Warm & crispy.", price: "Rs. 1500", image: "/menu/desserts.jpg" },
      { name: "Pudding", description: "Caramel / Chocolate.", price: "Rs. 800", image: "/menu/desserts.jpg" },
      { name: "Fruit Tart", description: "Fresh fruits.", price: "Rs. 1400", image: "/menu/desserts.jpg" },
      { name: "Nutella Wrap", description: "Chocolate filled.", price: "Rs. 1700", image: "/menu/desserts.jpg" }
    ]
  };

  return (
    <section id="menu" className="menu-section">
  <h2 className="section-title">Our Menu</h2>

  
  <p className="menu-description">
    Explore our wide range of carefully curated dishes,
    from hearty Breakfast options to sumptuous Lunch and Dinner meals.
    Indulge in our refreshing Beverages and delightful Desserts,
    crafted to satisfy every craving and delight your taste buds.
    Experience flavors that bring joy, warmth, and a touch of luxury to every bite.
  </p>

  
  <div className="menu-categories">
    {categories.map((cat) => (
      <button
        key={cat}
        className={`category-btn ${activeCategory === cat ? "active" : ""}`}
        onClick={() => setActiveCategory(cat)}
      >
        {cat}
      </button>
    ))}
  </div>

  
  <div className="slider-buttons">
    <button className="arrow-btn" onClick={scrollLeft}>&lt;</button>
    <button className="arrow-btn" onClick={scrollRight}>&gt;</button>
  </div>

  
  <div className="menu-slider" ref={sliderRef}>
    {menuItems[activeCategory].map((item, index) => (
      <div className="menu-card" key={index}>
        <img src={item.image} alt={item.name} />
        <div className="menu-info">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <span className="price">{item.price}</span>
        </div>
      </div>
    ))}
  </div>
</section>

  );
}

export default Menu;

