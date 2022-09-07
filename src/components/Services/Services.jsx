import React from "react";
import "./Services.css";
import workImg from "../../images/work-process-item-01.png";

const Services = () => {
  return (
    <section className="mini" id="work-process">
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
                  <img src={workImg} alt="" />
                </i>
                <strong>Depression</strong>
                <span>Depression counselling</span>
              </a>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
              <a href="#" className="mini-box">
                <i>
                  <img src={workImg} alt="" />
                </i>
                <strong>Couple</strong>
                <span>Couple counselling</span>
              </a>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
              <a href="#" className="mini-box">
                <i>
                  <img src={workImg} alt="" />
                </i>
                <strong>Relationship</strong>
                <span>Relationship counselling</span>
              </a>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
              <a href="#" className="mini-box">
                <i>
                  <img src={workImg} alt="" />
                </i>
                <strong>Corporate</strong>
                <span>Corporate counselling</span>
              </a>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
              <a href="#" className="mini-box">
                <i>
                  <img src={workImg} alt="" />
                </i>
                <strong>Mental health</strong>
                <span>Mental health counselling</span>
              </a>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
              <a href="#" className="mini-box">
                <i>
                  <img src={workImg} alt="" />
                </i>
                <strong>Lifestyle</strong>
                <span>Lifestyle counselling</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
