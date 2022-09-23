import React from "react";
import "./AboutThree.css";
import about1 from "../../images/pic.jpg";

const AboutThree = () => {
  return (
    <section className="section padding-top-0 padding-bottom-0" id="features">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-5 col-md-12 col-sm-12 align-self-center"
            data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
          >
            <img
              src={about1}
              className="rounded-circle img-fluid d-block mx-auto"
              alt="App"
              style={{
                width: "70%",
              }}
            />
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
            <div className="left-heading">
              <h2 className="section-title">Janki Nayak - Founder</h2>
            </div>
            <div className="left-text">
              <p>
                She is a professional psychological counsellor with expertise in
                Forensic Psychology as well as Counselling. She is experienced
                in handling cases from a different population. Worked as a
                psychological counsellor in INDIAN AIR FORCE. Apart from that
                she has experience in working in NGO and helped children to gain
                motivation, as well as those having suicidal tendencies,
                physical abuse and parents counselling. Solved cases of   
                depression, anxiety, stress, family issues, couple issues and
                many others. She is a certified yoga trainer.
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

export default AboutThree;
