import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <ul className="social">
              <li>
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-rss"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-dribbble"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p className="copyright">Copyright &copy; Mind Fighters</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
