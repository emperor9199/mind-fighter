import React from "react";
import "./AboutUs.css";
import leftImg from "../../images/left-image.png";

const AboutUs = () => {
  return (
    <section className="section padding-top-70 padding-bottom-0" id="features">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-5 col-md-12 col-sm-12 align-self-center"
            data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
          >
            <img
              src={leftImg}
              className="rounded img-fluid d-block mx-auto"
              alt="App"
            />
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
            <div className="left-heading">
              <h2 className="section-title">Let’s discuss about you project</h2>
            </div>
            <div className="left-text">
              <p>
                Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue
                blandit, at finibus leo efficitur. Nam gravida purus non sapien
                auctor, ut aliquam magna ullamcorper.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="hr"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
