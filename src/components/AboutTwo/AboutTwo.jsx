import React from "react";
import "./AboutTwo.css";
import about2 from "../../images/about2.svg";

const AboutTwo = () => {
  return (
    <section className="section padding-bottom-40">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
            <div className="left-heading">
              <h2 className="section-title">Why you should come to us?</h2>
            </div>
            <div className="left-text">
              <p>
                The main aim is to help through counselling and psychological
                therapies in holistic way. We use psychological tests to assess
                the client as per the need. Our services will be provided though
                video calls, mails, calls, chats, and offline counselling in
                special cases. We ensure you for 100% confidentiality. We are
                here to hear and understand you to help with professional
                guidance and counselling.
              </p>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div
            className="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big"
            data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
          >
            <img
              src={about2}
              className="rounded img-fluid d-block mx-auto"
              alt="App"
            />
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

export default AboutTwo;
