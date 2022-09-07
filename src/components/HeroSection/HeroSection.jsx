import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="welcome-area" id="welcome">
      <div className="header-text">
        <div className="container">
          <div className="row">
            <div className="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
              <h1>
                <b>The Mind Fighter</b> <br /> Attract Your Thoughts into Action
                counselling service.
              </h1>
              {/* <p>
                The Mind Fighter is a mental health online counselling
                service.
              </p> */}
              <a href="#features" className="main-button-slider">
                Discover More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
