import React from "react";
import "./ServicePage.css";
import about1 from "../../images/about1.svg";
import about2 from "../../images/about2.svg";

function ServicePage() {
  return (
    // <section>
    //   <div classNameName="row">
    //     <h2 classNameName="section-heading">Our Services</h2>
    //   </div>
    //   <div classNameName="row">
    //     <div classNameName="column">
    //       <div classNameName="card">
    //         <div classNameName="icon-wrapper">
    //           <i classNameName="fas fa-hammer"></i>
    //         </div>
    //         <h3>Service Heading</h3>
    //         <p>
    //           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
    //           consequatur necessitatibus eaque.
    //         </p>
    //       </div>
    //     </div>
    //     <div classNameName="column">
    //       <div classNameName="card">
    //         <div classNameName="icon-wrapper">
    //           <i classNameName="fas fa-brush"></i>
    //         </div>
    //         <h3>Service Heading</h3>
    //         <p>
    //           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
    //           consequatur necessitatibus eaque.
    //         </p>
    //       </div>
    //     </div>
    //     <div classNameName="column">
    //       <div classNameName="card">
    //         <div classNameName="icon-wrapper">
    //           <i classNameName="fas fa-wrench"></i>
    //         </div>
    //         <h3>Service Heading</h3>
    //         <p>
    //           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
    //           consequatur necessitatibus eaque.
    //         </p>
    //       </div>
    //     </div>
    //     <div classNameName="column">
    //       <div classNameName="card">
    //         <div classNameName="icon-wrapper">
    //           <i classNameName="fas fa-truck-pickup"></i>
    //         </div>
    //         <h3>Service Heading</h3>
    //         <p>
    //           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
    //           consequatur necessitatibus eaque.
    //         </p>
    //       </div>
    //     </div>
    //     <div classNameName="column">
    //       <div classNameName="card">
    //         <div classNameName="icon-wrapper">
    //           <i classNameName="fas fa-broom"></i>
    //         </div>
    //         <h3>Service Heading</h3>
    //         <p>
    //           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
    //           consequatur necessitatibus eaque.
    //         </p>
    //       </div>
    //     </div>
    //     <div classNameName="column">
    //       <div classNameName="card">
    //         <div classNameName="icon-wrapper">
    //           <i classNameName="fas fa-plug"></i>
    //         </div>
    //         <h3>Service Heading</h3>
    //         <p>
    //           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
    //           consequatur necessitatibus eaque.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    // new
    <section className="services">
      <div className="s-heading">
        <h1>
          Ser<font color="#ff8300">vic</font>es
        </h1>
        <p>We Provide The Best In class Servies For Our Customers</p>
      </div>
      <div className="s-box-container" >
        <div className="s-box">
          <div className="bar"></div>
          <img alt="1" src={about1} />
          <h1>Mental health</h1>
          <p>
            Track on your all daily expense and make your day to life easier.
          </p>
          <a className="s-btn" href="#">
            More
          </a>
        </div>
        <div className="s-box">
          <div className="bar"></div>
          <img alt="2" src={about2} />
          <h1>Relationship</h1>
          <p>Make a Budget That Fit Right With You And Can Do Most With It</p>
          <a className="s-btn" href="#">
            More
          </a>
        </div>
        <div className="s-box">
          <div className="bar"></div>
          <img alt="3" src={about1} />
          <h1>Corporate</h1>
          <p>
            We Store All Card Info And Money Safe To Make You Relax And Crazy
          </p>
          <a className="s-btn" href="#">
            More
          </a>
        </div>

        <div className="s-box">
          <div className="bar"></div>
          <img alt="3" src={about1} />
          <h1>Victim</h1>
          <p>
            We Store All Card Info And Money Safe To Make You Relax And Crazy
          </p>
          <a className="s-btn" href="#">
            More
          </a>
        </div>

        <div className="s-box">
          <div className="bar"></div>
          <img alt="3" src={about1} />
          <h1>Sports</h1>
          <p>
            We Store All Card Info And Money Safe To Make You Relax And Crazy
          </p>
          <a className="s-btn" href="#">
            More
          </a>
        </div>

        <div className="s-box">
          <div className="bar"></div>
          <img alt="3" src={about1} />
          <h1>Pranayama & yoga</h1>
          <p>
            We Store All Card Info And Money Safe To Make You Relax And Crazy
          </p>
          <a className="s-btn" href="#">
            More
          </a>
        </div>
        
      </div>
    </section>
  );
}

export default ServicePage;
