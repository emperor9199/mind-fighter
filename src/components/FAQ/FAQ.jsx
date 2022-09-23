import React from "react";
import "./FAQ.css";

const FAQ = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="center-heading">
              <h2 className="section-title">FAQ's</h2>
            </div>
          </div>
          <div className="offset-lg-3 col-lg-6">
            <div className="center-text">
              <p>The Mind Fighter – Let's resolve and evolve</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 col-md-6 col-sm-12 container">
            <div className="contact-form">
              <details open>
                <summary>How I solve this issue?</summary>
                <div className="faq__content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolor suscipit, iure tenetur eveniet, vero tempore delectus?
                    Perferendis, quisquam ullam consequuntur?
                  </p>
                </div>
              </details>

              <details>
                <summary>How to input your data on this board?</summary>
                <div className="faq__content">
                  <p>
                    Fugiat quo voluptas nulla pariatur? Et iusto odio
                    dignissimos ducimus qui blanditiis praesentium voluptatum
                    deleniti atque. Accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
