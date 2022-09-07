import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <ul className="social">
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faCoffee} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faCoffee} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faCoffee} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faCoffee} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faCoffee} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p className="copyright">Copyright &copy; The Mind Fighters</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
