import React from "react";
import "./CoreServices.css";
import depressionImg from "../../images/depression.png";
import relationshipImg from "../../images/relationship.png";
import corporateImg from "../../images/corporate.png";

const CoreServices = () => {
  return (
    <section className="section home-feature">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12"
                data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
              >
                <div className="features-small-item">
                  <div className="icon">
                    <i>
                      <img src={depressionImg} alt="" />
                    </i>
                  </div>
                  <h5 className="features-title">Depression counselling</h5>
                  <p>
                    Depression is a serious mood disorder, with an estimated 1
                    million Indian adults have it
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12"
                data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s"
              >
                <div className="features-small-item">
                  <div className="icon">
                    <i>
                      <img src={relationshipImg} alt="" />
                    </i>
                  </div>
                  <h5 className="features-title">Relationship counselling</h5>
                  <p>
                    Premarital counseling is a type of relationship therapy that
                    helps prepare couples.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12"
                data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s"
              >
                <div className="features-small-item">
                  <div className="icon">
                    <i>
                      <img src={corporateImg} alt="" />
                    </i>
                  </div>
                  <h5 className="features-title">Corporate counselling</h5>
                  <p>
                    Corporate counseling is the process of counseling the
                    parties having differences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
