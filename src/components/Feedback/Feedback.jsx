import React from "react";
import "./Feedback.css";

const Feedback = () => {
  const sendMail = () => {
    console.log("inside mail fn...");

    fetch("formURL", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ex_user: "formEmail(use state)",
        ex_data: "data to be passed",
      }),
    }).then((res) => {
      console.log("mail response:", res);
    });
  };

  return (
    <section className="section colored">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="center-heading">
              <h2 className="section-title">Feedback</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 col-md-6 col-sm-12 container">
            <div className="contact-form">
              <form id="contact">
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <fieldset>
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Full Name"
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
                        onClick={sendMail}
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

export default Feedback;
