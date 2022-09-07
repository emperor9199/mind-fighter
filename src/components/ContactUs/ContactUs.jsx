import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section class="section colored" id="contact-us">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="center-heading">
              <h2 class="section-title">Talk To Us</h2>
            </div>
          </div>
          <div class="offset-lg-3 col-lg-6">
            <div class="center-text">
              <p>The Mind Fighter – Attract Your Thoughts into Action</p>
            </div>
          </div>
        </div>

        <div class="row">
          {/* <div class="col-lg-4 col-md-6 col-sm-12">
            <h5 class="margin-bottom-30">Keep in touch</h5>
            <div class="contact-text">
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

          <div class="col-lg-8 col-md-6 col-sm-12 container">
            <div class="contact-form">
              <form id="contact" action="" method="get">
                <div class="row">
                  <div class="col-lg-6 col-md-12 col-sm-12">
                    <fieldset>
                      <input
                        name="name"
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Full Name"
                        required=""
                      />
                    </fieldset>
                  </div>
                  <div class="col-lg-6 col-md-12 col-sm-12">
                    <fieldset>
                      <input
                        name="email"
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="E-Mail Address"
                        required=""
                      />
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <textarea
                        name="message"
                        rows="6"
                        class="form-control"
                        id="message"
                        placeholder="Your Message"
                        required=""
                      ></textarea>
                    </fieldset>
                  </div>
                  <div class="col-lg-12 text-center">
                    <fieldset>
                      <button
                        type="submit"
                        id="form-submit"
                        class="main-button"
                      >
                        Send Message
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
