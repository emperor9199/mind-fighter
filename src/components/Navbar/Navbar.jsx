import React from "react";
import "./Navbar.css";
import logoImg from "../../images/mf_logo.jpeg";

const Navbar = () => {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav d-flex flex-row justify-content-between align-items-center">
              <a>
                <img
                  src={logoImg}
                  alt="The Mind Fighter"
                  style={{
                    width: "4rem",
                    marginLeft: "1rem",
                  }}
                />
              </a>

              <ul className="nav">
                <li>
                  <a href="#welcome" className="active">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#features">About</a>
                </li>

                <li>
                  <a href="#blog">Blog</a>
                </li>
                <li>
                  <a href="#work-process">Services</a>
                </li>
                <li>
                  <a href="#contact-us">Contact Us</a>
                </li>
              </ul>
              <a className="menu-trigger">
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
