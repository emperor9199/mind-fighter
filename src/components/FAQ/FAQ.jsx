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
                <summary>What is The Mind Fighter?</summary>
                <div className="faq__content">
                  <p>
                    The Mind Fighter is an online counseling service whose main
                    goal is to help people who are unable to fight their
                    different battles in life. Its purpose is just like its name
                    i.e., to fight the
                  </p>
                </div>
              </details>

              <details>
                <summary>
                  The online counseling service of The Mind Fighter is it secure
                  and confidential?
                </summary>
                <div className="faq__content">
                  <p>
                    The counseling services provided to the clients will be
                    highly confidential. No information will be shared regarding
                    the client as well as their problem. Feel free to share your
                    problem.
                  </p>
                </div>
              </details>

              <details>
                <summary>How much fees will be charged per session?</summary>
                <div className="faq__content">
                  <p>
                    The fees will be 1000Rs per session which will last for 45
                    minutes.
                  </p>
                </div>
              </details>

              <details>
                <summary>What are the qualifications of the counselor?</summary>
                <div className="faq__content">
                  <p>
                    The qualification of the counselor is M.Sc. in Forensic
                    Psychology and M.A in Counselling. She is highly experienced
                    in handling different types of cases that include
                    depression, anxiety, couple counseling, and so forth. Have
                    good experience in the Indian Airforce as a psychological
                    counselor.
                  </p>
                </div>
              </details>

              <details>
                <summary>What is different about The Mind Fighter?</summary>
                <div className="faq__content">
                  <p>
                    Along with other counseling services, we provide
                    victim-based counseling for those who have been victims of
                    rape, sexual abuse, molestation, and domestic abuse.
                  </p>
                </div>
              </details>

              <details>
                <summary>
                  How many minimum counseling sessions are required?
                </summary>
                <div className="faq__content">
                  <p>
                    A minimum of six sessions are provided in counseling but if
                    it is required then we do go along with further sessions.
                    But the counseling session can also be for short-term
                    depending on the type of issue.
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
