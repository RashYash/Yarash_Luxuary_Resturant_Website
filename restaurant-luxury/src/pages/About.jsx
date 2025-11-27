import React, { useRef, useEffect } from "react";
import "../styles/About.css";
import chefImage from "../assets/chef.jpg"; 
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";

function About() {
  const reviews = [
    {
      name: "Michael B.",
      comment: "An unforgettable dining experience. Every dish was perfect!",
      image: "/reviews/customer1.jpg",
      rating: 5
    },
    {
      name: "John D.",
      comment: "Top-notch chefs and an elegant atmosphere. Highly recommend!",
      image: "/reviews/customer2.jpg",
      rating: 4
    },
    {
      name: "Priya K.",
      comment: "Amazing flavors and impeccable service. Truly luxurious!",
      image: "/reviews/customer3.jpg",
      rating: 5
    },
    {
      name: "Sarah M.",
      comment: "Absolutely loved the ambiance and food. A five-star experience!",
      image: "/reviews/customer4.jpg",
      rating: 4
    },
    {
      name: "Ananya S.",
      comment: "Delicious food and amazing service. Highly satisfied!",
      image: "/reviews/customer5.jpg",
      rating: 4
    }
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;
    const interval = setInterval(() => {
      if (slider) {
        slider.scrollLeft += 2;
        scrollAmount += 2;
        if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
          slider.scrollLeft = 0;
          scrollAmount = 0;
        }
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="about-section">

      
      <div className="about-hero">
        <h2>About Yarash</h2>
        <p>
          Yarash brings luxury dining to your table. With premium ingredients, world-class chefs, 
          and unforgettable ambiance, every meal is a masterpiece.
        </p>
      </div>

      
      <div className="about-cards">
        <div className="about-card">
          <div className="card-icon">🍳</div>
          <h3>Finest Ingredients</h3>
          <p>Premium handpicked ingredients curated by top chefs.</p>
        </div>
        <div className="about-card">
          <div className="card-icon">👨‍🍳</div>
          <h3>Master Chefs</h3>
          <p>Our chefs bring global experience with unique flavors.</p>
        </div>
        <div className="about-card">
          <div className="card-icon">🏛️</div>
          <h3>Elegant Atmosphere</h3>
          <p>A luxury dining space designed to perfection.</p>
        </div>
        <div className="about-card">
          <div className="card-icon">🏆</div>
          <h3>Award Winning</h3>
          <p>Recognized for excellence in taste and service.</p>
        </div>
      </div>

      
      <div className="experience-section">
        <h3>Our Experience</h3>
        <div className="experience-stats">
          <div className="stat-card">
            <h4>15+</h4>
            <p>Years of Culinary Excellence</p>
          </div>
          <div className="stat-card">
            <h4>5000+</h4>
            <p>Happy Guests Served</p>
          </div>
          <div className="stat-card">
            <h4>20+</h4>
            <p>Awards & Recognitions</p>
          </div>
        </div>
      </div>

      
<div className="chef-section">
  <img src={chefImage} alt="Head Chef" className="chef-img" />
  <div className="chef-info">
    <h3>Meet Our Head Chef</h3>
    <p>
      Chef Michael leads our kitchen with over 20 years of experience.<br/>
      Passionate about creating exquisite dishes that delight every guest.<br/>
      Every meal combines innovation, precision, and love for culinary art.
    </p>
  </div>
</div>


      
      <div className="gallery-section">
        <h3>Gallery</h3>
        <div className="gallery-grid">
          <img src={gallery1} alt="Gallery 1" />
          <img src={gallery2} alt="Gallery 2" />
          <img src={gallery3} alt="Gallery 3" />
        </div>
      </div>

     
      <div className="reviews-section">
        <h3>Customer Reviews</h3>
        <div className="reviews-slider" ref={sliderRef}>
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>
              <img src={review.image} alt={review.name} className="customer-img" />
              <div className="review-content">
                <p>"{review.comment}"</p>
                <div className="stars">
                  {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                </div>
                <span>- {review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;

