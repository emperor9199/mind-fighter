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
              <li>
                C
              </li>
              <li>
                  UI Design
              </li>
              <li>
                  PHP
              </li>
              <li>
                  Java
              </li>
              <li>
                Android
              </li>
              <li>
                Templates
              </li>
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
                <a href="#work-process">
                  Services
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/privacy-policy/">
                  Blogs
                </a>
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
            Contact:<span className="ml-1">+91-789787878</span> 
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            
            <ul className="social-icons">
            <li>
                <a className="facebook" href="#">
                  <i className="fa fa-whatsapp" />
                </a>
              </li>
              <li>
                <a className="facebook" href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a className="twitter" href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              {/* <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li> */}
              <li>
                <a className="linkedin" href="#">
                  <i className="fa fa-linkedin"></i>
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
