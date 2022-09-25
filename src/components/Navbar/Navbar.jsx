import React, { useState, useRef } from "react";
import "./Navbar.css";
import logoImg from "../../images/logo1.png";
import $ from "jquery";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = ({
  scrollDown,
  scrollService,
  scrollContact,
  active,
  setActive,
}) => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  let history = useNavigate();

  const redirectToAbout = () => {
    setActive("home");
    toggle();
    history("/");
    setTimeout(() => {
      scrollDown();
    }, 500);
  };

  const redirectToService = () => {
    setActive("home");
    toggle();
    history("/");
    setTimeout(() => {
      scrollService();
    }, 500);
  };

  const redirectToContact = () => {
    setActive("home");
    toggle();
    history("/");
    setTimeout(() => {
      scrollContact();
    }, 500);
  };

  function toggle() {
    $(".header-area .nav").slideToggle(200);
  }

  function offNav(){
    setIsOpenNav(!isOpenNav);
  }

  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav d-flex flex-row justify-content-between align-items-center nav_con_vk">
              <Link
                to="/"
                onClick={() => {
                  setActive("home");
                }}
              >
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
                    className="nav_logo_vk"
                  />
                  <p
                    className="mb-0 text-dark h5 mx-2 pt-2 nav_title_vk"
                    style={{
                      fontWeight: "500",
                      fontSize: "1.7rem",
                      textTransform: "uppercase",
                      fontFamily: "Russo One, sans-serif",
                      display: isOpenNav ? "none" : "inline",
                      color: "#122c3c",
                      margin: 0,
                    }}
                  >
                    The Mind Fighter
                  </p>
                </div>
              </Link>

              <ul className="nav">
                <li>
                  <Link
                    to="/"
                    className={`${active === "home" ? "active" : ""}`}
                    onClick={() => {
                      setActive("home");
                      toggle();
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <a onClick={redirectToAbout}>About</a>
                </li>

                <li>
                  <Link
                    to="/blogs"
                    className={`${active === "blog" ? "active" : ""}`}
                    onClick={() => {
                      setActive("blog");
                      toggle();
                    }}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <a onClick={redirectToService}>Services</a>
                </li>
                <li>
                  <a onClick={redirectToContact}>Book a slot</a>
                </li>
              </ul>
              <a
                className={isOpenNav ? "active menu-trigger" : "menu-trigger"}
                onClick={() => {toggle();offNav();}}
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
