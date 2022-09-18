import React, {useState} from "react";
import "./Navbar.css";
import logoImg from "../../images/mf_logo.jpeg";
import $ from 'jquery';

const Navbar = () => {

  const [isOpenNav, setIsOpenNav] = useState(false);

  function vishw(){
    setIsOpenNav(!isOpenNav);
    $('.header-area .nav').slideToggle(200);
  }

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
                    display: isOpenNav ? "none" : "inline"
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
              <a className={isOpenNav ? "active menu-trigger" : "menu-trigger"} onClick={() => vishw()}>
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
