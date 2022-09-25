import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { service } from "../../Data/Service";
import "./Footer.css";

const Footer = ({
  scrollDown,
  scrollService,
  scrollContact,
  active,
  setActive,
}) => {
  let history = useNavigate();

  const redirectToAbout = () => {
    setActive("home");
    history("/");
    setTimeout(() => {
      scrollDown();
    }, 500);
  };

  const redirectToService = () => {
    setActive("home");
    history("/");
    setTimeout(() => {
      scrollService();
    }, 500);
  };

  const redirectToContact = () => {
    setActive("home");
    history("/");
    setTimeout(() => {
      scrollContact();
    }, 500);
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify col-10 pl-0">
              The main aim is to help through counselling and psychological
              therapies in holistic way. We use psychological tests to assess
              the client as per the need. Our services will be provided though
              video calls, mails, calls, chats, and offline counselling in
              special cases. We ensure you for 100% confidentiality. We are here
              to hear and understand you to help with professional guidance and
              counselling.
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Services</h6>
            <ul className="footer-links service-link-hover">
              {service?.map((ser) => {
                return (
                  <Link to={`/service/${ser.id}`} key={ser.id}>
                    <li>{ser.Name}</li>
                  </Link>
                );
              })}
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <a onClick={redirectToAbout} className="link-cursor">
                  About
                </a>
              </li>
              <li>
                <a onClick={redirectToContact} className="link-cursor">
                  Book a slot
                </a>
              </li>
              <li>
                <a onClick={redirectToService} className="link-cursor">
                  Services
                </a>
              </li>
              <li>
                <Link to="/blogs" onClick={() => setActive("blog")}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">

      <div class="d-flex justify-content-between">
      <div>
          <p className="copyright-text">
              Copyright &copy; 2022 All Rights Reserved by
              <a href="#"> The Mind Fighter&reg;</a>.
            </p>
          </div>
          <div>Contact:<span className="ml-1">+91-9979555154 </span></div>
          <div>Email:<span className="ml-1">themindfighters@gmail.com</span></div>
          <div>
          <ul className="social-icons">
              <li>
                <a
                  className="facebook"
                  href="//api.whatsapp.com/send?phone=918128347277"
                  target="_blank"
                >
                  <i className="fa fa-whatsapp" />
                </a>
              </li>
              <li>
                <a
                  className="facebook"
                  href="https://www.facebook.com/profile.php?id=100085974814183"
                  target="_blank"
                >
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a
                  className="twitter"
                  href="https://twitter.com/themindfighters?t=fQWK5EoXCUS-oeNRXeTXJw&s=09"
                  target="_blank"
                >
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              {/* <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li> */}
              <li>
                <a
                  className="linkedin"
                  href="https://instagram.com/themindfighters?igshid=YmMyMTA2M2Y="
                  target="_blank"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
      </div>

        
      </div>
    </footer>
  );
};

export default Footer;
