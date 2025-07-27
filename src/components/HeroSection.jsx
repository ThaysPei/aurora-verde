import React from "react";
import "./HeroSection.css";
import heroImg from "../assets/hero-image.png"; // imagem principal
import heroImg1 from "../assets/hero-image2.png";
import heroImg2 from "../assets/hero-image3.png";



const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-wrapper">
        
        {/* Imagem principal com botão */}
        <div className="hero-image-container">
            <a href="#">
          <img src={heroImg} alt="Promoção orgânicos" className="hero-image" />
          </a>
        </div>
        
        {/* Segunda imagem com botão */}
        <div className="hero-image-container2">
            <a href="#">
          <img src={heroImg1} alt="Promoção orgânicos" className="hero-image2" />
          </a>
        </div>

       <div className="hero-image-container3">
       <a href="#">
       <img src={heroImg2} alt="Promoção orgânicos" className="hero-image3" />
        </a>
        </div>
    </div> 
    </section>
  );
};

export default HeroSection;

