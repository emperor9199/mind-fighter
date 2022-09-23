import React from "react";
import "./Services.css";
import relationshipImg from "../../images/relationship1.png";
import corporateImg from "../../images/corporate1.png";
import sportsImg from "../../images/sports1.png";
import victimImg from "../../images/victim1.png";
import mentalHealthImg from "../../images/mental2.png";
import yogaImg from "../../images/yoga1.png";

const Services = ({serviceSection}) => {
  return (
    <section className="mini" ref={serviceSection}>
      <div className="mini-content">
        <div className="container">
          <div className="row">
            <div className="offset-lg-3 col-lg-6">
              <div className="info">
                <h1>Services</h1>
                <p>
                  Services we provide covers many of the life problems and
                  mental issues, we have multiple options you can choose from
                  and can contact us
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
              <a href="#" className="mini-box">
                <i>
                  <img src={mentalHealthImg} alt="" />
                </i>
                <strong>Mental health</strong>
                <span>Mental health counselling</span>
              </a>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
              <a href="#" className="mini-box">
                <i>
                  <img src={relationshipImg} alt="" />
                </i>
                <strong>Relationship</strong>
                <span>Relationship counselling</span>
              </a>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
              <a href="#" className="mini-box">
                <i>
                  <img src={corporateImg} alt="" />
                </i>
                <strong>Corporate</strong>
                <span>Corporate counselling</span>
              </a>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
              <a href="#" className="mini-box">
                <i>
                  <img src={victimImg} alt="" />
                </i>
                <strong>Victim</strong>
                <span>Victim counselling</span>
              </a>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
              <a href="#" className="mini-box">
                <i>
                  <img src={sportsImg} alt="" />
                </i>
                <strong>Sports</strong>
                <span>Sports counselling</span>
              </a>
            </div>

            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
              <a href="#" className="mini-box">
                <i>
                  <img src={yogaImg} alt="" />
                </i>
                <strong>Yoga</strong>
                <span>Yoga, Meditation counselling</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
