import React, { useState } from "react";
import "./Feedback.css";

const Feedback = () => {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const sendMail = () => {
    fetch(
      "https://public.herotofu.com/v1/eb7458a0-3cf8-11ed-a10f-d1a38bd15d37",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Title: "Got a Feeback from Client",
          Name: fullName,
          message: message,
          email: email,
          //   data: `
          //   Got a Feedback From Client,\n  ${fullName} says, ${message} \n\n Email:${email}
          // `,
        }),
      }
    )
      .then(() => alert("Your slot is booked!"))
      .catch((e) =>
        alert("Your feedback is not sent unfortunately, please try again!!!", e)
      );
  };

  return (
    <section className="section colored">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb-5">
            <div className="center-heading">
              <h2 className="section-title">Feedback</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 col-md-6 col-sm-12 container">
            <div className="contact-form">
              <form id="contact-feedback" onSubmit={sendMail} method="get">
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <fieldset>
                      <label style={{ marginLeft: "1rem" }}>Full Name</label>

                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        id="name"
                        // placeholder="Full Name"
                        required=""
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </fieldset>
                  </div>

                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <fieldset>
                      <label style={{ marginLeft: "1rem" }}>Email</label>

                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        id="email"
                        // placeholder="E-Mail Address"
                        required=""
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </fieldset>
                  </div>

                  <div className="col-lg-12">
                    <fieldset>
                      <label style={{ marginLeft: "1rem" }}>Your Message</label>

                      <textarea
                        name="message"
                        rows="6"
                        className="form-control"
                        id="message"
                        // placeholder="Your Message"
                        required=""
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </fieldset>
                  </div>
                  <div className="col-lg-12 text-center">
                    <fieldset>
                      <button
                        type="submit"
                        id="form-submit"
                        className="main-button"
                        // onClick={sendMail}
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
