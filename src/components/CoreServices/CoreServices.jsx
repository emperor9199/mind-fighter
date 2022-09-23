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
                  <h5 className="features-title">Mental Health Counselling</h5>
                  <p>
                    It is very important to take care of mental health as it can
                    affect our daily lives. Just like we take care of our
                    physical health in the same way we should also take care of
                    our mental health.
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
                    When it comes to a relationship there are various things
                    like trust, transparency, communication, honesty, and
                    compatibility that help to make the relationship strong,
                    healthy, and lively.
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
                    In today’s racing life people get themselves so engrossed in
                    work that somehow, they forget to take care of their mental
                    health. One can work more effectively if they are mentally
                    healthy.
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
