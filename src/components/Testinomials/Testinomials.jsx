import React from "react";
import "./Testinomials.css";
import testinomailImg from "../../images/testimonial-icon.png";

const Testinomials = () => {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="center-heading">
              <h2 className="section-title">Testinomials</h2>
            </div>
          </div>
          {/* <div className="offset-lg-3 col-lg-6">
            <div className="center-text">
              <p>
                Donec tempus, sem non rutrum imperdiet, lectus orci fringilla
                nulla, at accumsan elit eros a turpis. Ut sagittis lectus
                libero.
              </p>
            </div>
          </div> */}
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="team-item">
              <div className="team-content">
                <i>
                  <img src={testinomailImg} alt="" />
                </i>
                <p>
                  She is a professional psychological counsellor with expertise
                  in Forensic Psychology as well as Counselling, experienced in
                  handling cases from a different population. Worked as a
                  psychological counsellor in INDIAN AIR FORCE...
                </p>
                <div className="user-image">
                  <img src="" alt="" />
                </div>
                <div className="team-info">
                  <h3 className="user-name">Janki Nayak</h3>
                  <span>Founder</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="team-item">
              <div className="team-content">
                <i>
                  <img src={testinomailImg} alt="" />
                </i>
                <p>
                  She is a professional psychological counsellor with expertise
                  in Forensic Psychology as well as Counselling, experienced in
                  handling cases from a different population. Worked as a
                  psychological counsellor in INDIAN AIR FORCE...
                </p>
                <div className="user-image">
                  <img src="" alt="" />
                </div>
                <div className="team-info">
                  <h3 className="user-name">Janki Nayak</h3>
                  <span>Managing Director</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="team-item">
              <div className="team-content">
                <i>
                  <img src={testinomailImg} alt="" />
                </i>
                <p>
                  She is a professional psychological counsellor with expertise
                  in Forensic Psychology as well as Counselling, experienced in
                  handling cases from a different population. Worked as a
                  psychological counsellor in INDIAN AIR FORCE...
                </p>
                <div className="user-image">
                  <img src="" alt="" />
                </div>
                <div className="team-info">
                  <h3 className="user-name">Janki Nayak</h3>
                  <span>Founder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testinomials;
