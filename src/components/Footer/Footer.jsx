import React from "react";
import "./Footer.css";

const Footer = () => {
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
              <li>Mental health</li>
              <li>Relationship</li>
              <li>Corporate</li>
              <li>Victim</li>
              <li>Sports</li>
              <li>Yoga</li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <a href="#features">About</a>
              </li>
              <li>
                <a href="#contact-us">Contact Us</a>
              </li>
              <li>
                <a href="#work-process">Services</a>
              </li>
              <li>
                <a href="http://scanfcode.com/privacy-policy/">Blogs</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-5 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2022 All Rights Reserved by
              <a href="#"> The Mind Fighter</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-1 col-xs-12 copyright-text ">
            Contact:<span className="ml-1">+91-9979555154</span>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
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
