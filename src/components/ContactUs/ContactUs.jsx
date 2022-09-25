import React from "react";
import "./ContactUs.css";

const ContactUs = ({ contcatSection }) => {
  return (
    <section className="section colored" ref={contcatSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="center-heading">
              <h2 className="section-title">Book a Slot</h2>
            </div>
          </div>
          {/* <div className="offset-lg-3 col-lg-6">
            <div className="center-text">
              <p>The Mind Fighter – Attract Your Thoughts into Action</p>
            </div>
          </div> */}
        </div>

        <div className="row">
          {/* <div className="col-lg-4 col-md-6 col-sm-12">
            <h5 className="margin-bottom-30">Keep in touch</h5>
            <div className="contact-text">
              <p>
                111-222 abcd, xyz
                <br />
                abc def ghf
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium, tempore dolore.
              </p>
            </div>
          </div> */}

          <div className="col-lg-8 col-md-6 col-sm-12 container">
            <div className="contact-form">
              <form id="contact" action="" method="get">
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <fieldset>
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="First Name"
                        required=""
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <fieldset>
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Last Name"
                        required=""
                      />
                    </fieldset>
                  </div>

                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <fieldset>
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="E-Mail Address"
                        required=""
                      />
                    </fieldset>
                  </div>

                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <fieldset>
                      <input
                        name="Phone"
                        type="Phone"
                        className="form-control"
                        id="Phone"
                        placeholder="Contact Number"
                        required=""
                      />
                    </fieldset>
                  </div>

                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <fieldset>
                      <input
                        name="Date"
                        type="Date"
                        className="form-control"
                        id="Date"
                        placeholder="Select Date"
                        required=""
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <fieldset>
                      <input
                        name="Time"
                        type="Time"
                        className="form-control"
                        id="Time"
                        placeholder="Select Time"
                        required=""
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <textarea
                        name="message"
                        rows="6"
                        className="form-control"
                        id="message"
                        placeholder="Your Message"
                        required=""
                      ></textarea>
                    </fieldset>
                  </div>
                  <div className="col-lg-12 text-center">
                    <fieldset>
                      <button
                        type="submit"
                        id="form-submit"
                        className="main-button"
                      >
                        Book Now
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
