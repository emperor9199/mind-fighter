import React, { useState } from "react";
import "./ContactUs.css";
import { useNavigate } from "react-router-dom";

const ContactUs = ({ contcatSection }) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [message, setMessage] = useState();
  const navigate = useNavigate();

  const sendMail = (e) => {
    e.preventDefault();

    fetch(
      "https://public.herotofu.com/v1/eb7458a0-3cf8-11ed-a10f-d1a38bd15d37",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Title: "You have an appointment",
          Name: firstName + " " + lastName,
          Email: email,
          Mobile: mobile,
          Date: date,
          Time: time,
          Message: message,
        }),
      }
    )
      .then(() => {
        alert("Your slot is booked!");
        navigate("/");
      })
      .catch((e) => {
        alert("Your slot is not booked unfortunately, please try again!!!", e);
        navigate("/");
      });

    setFirstName("");
    setLastName("");
    setEmail("");
    setMobile("");
    setMessage("");
    setDate("");
    setTime("");
  };

  return (
    <section className="section colored" ref={contcatSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb-5">
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
              <form
                id="contact-slot"
                // action="https://public.herotofu.com/v1/c048fd40-3ca6-11ed-a10f-d1a38bd15d37"
                // method="post"
                onSubmit={sendMail}
              >
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <fieldset>
                      <label style={{ marginLeft: "1rem" }}>First Name</label>
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        id="name"
                        // placeholder="First Name"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <fieldset>
                      <label style={{ marginLeft: "1rem" }}>Last Name</label>
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        id="name"
                        value={lastName}
                        // placeholder="Last Name"
                        required
                        onChange={(e) => setLastName(e.target.value)}
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
                        value={email}
                        // placeholder="E-Mail Address"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </fieldset>
                  </div>

                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <fieldset>
                      <label style={{ marginLeft: "1rem" }}>
                        Contact Number
                      </label>

                      <input
                        name="Phone"
                        type="Phone"
                        className="form-control"
                        id="Phone"
                        value={mobile}
                        // placeholder="Contact Number"
                        required
                        onChange={(e) => setMobile(e.target.value)}
                      />
                    </fieldset>
                  </div>

                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <fieldset>
                      <label style={{ marginLeft: "1rem" }}>Select Date</label>
                      <input
                        name="Date"
                        type="Date"
                        className="form-control"
                        id="Date"
                        value={date}
                        // placeholder="Select Date"
                        required
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <fieldset>
                      <label style={{ marginLeft: "1rem" }}>Select Time</label>
                      <input
                        name="Time"
                        type="Time"
                        className="form-control"
                        id="Time"
                        value={time}
                        // placeholder="Select Time"
                        required
                        onChange={(e) => setTime(e.target.value)}
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
                        value={message}
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
