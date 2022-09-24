import React, { useState, useRef } from "react";
import "./Navbar.css";
import logoImg from "../../images/logo1.png";
import $ from "jquery";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = ({ scrollDown, scrollService, scrollContact }) => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  let history = useNavigate();

  const redirectToAbout = () => {
    history("/");
    setTimeout(() => {
      scrollDown();
    }, 500);
  };

  const redirectToService = () => {
    history("/");
    setTimeout(() => {
      scrollService();
    }, 500);
  };

  const redirectToContact = () => {
    history("/");
    setTimeout(() => {
      scrollContact();
    }, 500);
  };

  function toggle() {
    setIsOpenNav(!isOpenNav);
    $(".header-area .nav").slideToggle(200);
  }

  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav d-flex flex-row justify-content-between align-items-center">
              <Link to="/">
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <img
                    src={logoImg}
                    alt="The Mind Fighter"
                    style={{
                      width: "3rem",
                      marginLeft: "1.5rem",
                      marginRight: ".7rem",
                      display: isOpenNav ? "none" : "inline",
                    }}
                  />
                  <p
                    className="mb-0 text-dark h5 mx-2 pt-2"
                    style={{
                      fontWeight: "900",
                      fontSize: "2rem",
                      textTransform: "uppercase",
                      fontFamily: "Lovelo, sans-serif",
                    }}
                  >
                    The Mind Fighter
                  </p>
                </div>
              </Link>

              <ul className="nav">
                <li>
                  <Link className="active" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <a onClick={redirectToAbout}>About</a>
                </li>

                <li>
                  <Link to="/blogs">Blog</Link>
                </li>
                <li>
                  <a onClick={redirectToService}>Services</a>
                </li>
                <li>
                  <a onClick={redirectToContact}>Contact Us</a>
                </li>
              </ul>
              <a
                className={isOpenNav ? "active menu-trigger" : "menu-trigger"}
                onClick={() => toggle()}
              >
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
