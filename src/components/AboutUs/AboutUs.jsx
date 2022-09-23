import React from "react";
import "./AboutUs.css";
import about1 from "../../images/about1.svg";

const AboutUs = ({aboutSection}) => {
  return (
    <section className="section padding-top-70 padding-bottom-0" id="features" ref={aboutSection}>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-5 col-md-12 col-sm-12 align-self-center"
            data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
          >
            <img
              src={about1}
              className="rounded img-fluid d-block mx-auto"
              alt="App"
            />
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
            <div className="left-heading">
              <h2 className="section-title">Who we are?</h2>
            </div>
            <div className="left-text">
              <p>
                It has been seen and noted that from past few years there is
                high rise in the cases of suicide as well as depression
                especially during Covid-19 and even post covid-19. We provide
                services for people who are facing any emotional, psychological,
                social or personal challenges in their lives. We also offer
                mindfulness meditation to cope up with anxiety, stress,
                depression.
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
