import React from "react";
import "./Services.css";
import relationshipImg from "../../images/relationship1.png";
import corporateImg from "../../images/corporate1.png";
import sportsImg from "../../images/sports1.png";
import victimImg from "../../images/victim1.png";
import mentalHealthImg from "../../images/mental2.png";
import yogaImg from "../../images/yoga1.png";
import { service } from "../../Data/Service";
import { Link } from "react-router-dom";

const Services = ({ serviceSection }) => {
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
            {service?.map((ser) => {
              return (
                <Link
                  to={`/service/${ser.id}`}
                  key={ser.id}
                  className="col-lg-2 col-md-3 col-sm-6 col-6"
                >
                  <div key={ser.id}>
                    <a href="#" className="mini-box">
                      <i>
                        <img src={ser.Img} alt="" />
                      </i>
                      <strong>{ser.Name}</strong>
                      <span>{ser.Description}</span>
                    </a>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
