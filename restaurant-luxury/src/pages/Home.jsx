import React from "react";
import "../styles/Home.css";
import heroVideo from "../assets/hero.mp4"; 
function Home() {
  return (
    <section id="home" className="home-section">


      <video className="home-video" autoPlay loop muted>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="home-content">
        <h1>Experience Fine Dining Redefined</h1>
        <p>
          Savor exquisite dishes, curated by master chefs,<br />
          in a space created for pure elegance.
        </p>

     
        <a href="#menu">
          <button className="gold-btn">Explore Menu</button>
        </a>
      </div>
    </section>
  );
}

export default Home;


