import React from "react";
import "./Article.css";
import imgTest from "../../../images/inner-blog.jpg";
import jankiImg from "../../../images/pic.jpg";
import imgTest1 from "../../../images/blog1.jpg";
import imgTest2 from "../../../images/blog2.jpg";
import imgTest3 from "../../../images/blog1.jpg";


const Article = () => {
  return (
    <>
      <div class="container x-container">
        <div class="jumbotron jumbotron-fluid mb-3 pl-0 pt-0 pb-0 bg-white position-relative">
          <div class="h-100 tofront">
            <div class="row justify-content-between">
              <div class="col-md-6 pt-6 pb-6 pr-6 align-self-center">
                <p class="text-uppercase font-weight-bold">
                  <a class="text-danger" href="./category.html">
                    Stories
                  </a>
                </p>
                <h1 class="display-4 secondfont mb-3 font-weight-bold">
                  Rising need for Counselling
                </h1>
                <p class="mb-3">
                  It is very important to understand the meaning of counseling
                  as people are not aware of it. Meaning of counseling:
                  Counselling is to assist someone to solve their personal or
                  professional or any other problem on their own. Counseling is
                  something that can be for a person having day-to-day life
                  problems as well as someone who has some mental health issue.
                  In today’s fast world people are running here and there to
                  earn money, to settle their lives, to be number one in the
                  competition which is important and there is no doubt about
                  that but somewhere they forget about themselves because, in
                  the end, we are humans! So, we need to think about things that
                  give us happiness and worries, tension, and stress in our
                  life. Usually, people neglect and don’t think much about
                  things that indirectly or directly affect their personal and
                  professional life at times.
                </p>
                <div class="d-flex align-items-center">
                  <img
                    class="rounded-circle"
                    src={jankiImg}
                    width="70"
                    height="70"
                  />
                  <small class="ml-2">
                    Janki Nayak
                    <span class="text-muted d-block">
                      A few hours ago &middot; 5 min. read
                    </span>
                  </small>
                </div>
              </div>
              <div class="col-md-6 pr-0">
                <img src={imgTest} width="500" height="700" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container pt-4 pb-4">
        <div class="row justify-content-center">
          <div class="col-lg-2 pr-4 mb-4 col-md-12">
            <div class="sticky-top text-center">
              <div class="text-muted">Share this</div>
              <div class="share d-inline-block">
                <div class="a2a_kit a2a_kit_size_32 a2a_default_style">
                  <a class="a2a_dd" href="https://www.addtoany.com/share"></a>
                  <a class="a2a_button_facebook"></a>
                  <a class="a2a_button_twitter"></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-8">
            <article class="article-post">
              <p>
                Through counseling, a person can understand the problem
                affecting their life and they can come up with some solution.
                The main thing about which people need to get aware is about
                being aware of their negative emotions instead of neglecting
                them they should try to apply ways to cope with them.
              </p>
              <p>
                One can cope with personal life problems such as family
                counseling, couple counseling, relationship counseling, and
                individual counseling. There are other areas like employee
                counseling, sports counseling, student counseling, and many
                more. There are employees in the companies who are stressed due
                to their work and somehow it affects his/ her life relations
                which results in a poor relationship with family and leads to
                low productivity at work. For example, if someone is not in a
                good mood due to a fight with a wife/husband then it will affect
                them in their office work, and he/ she will face stress and load
                during work which in turn will affect the productivity of work.
              </p>
              <p>
                Nowadays people are facing depression, anxiety, stress, and
                tension for which counseling can be helpful for people to come
                up with it.
              </p>
              <p>
                Hence, it’s high time for people to understand the concept of
                counseling and to go to a therapist or counselor whenever they
                feel the need for it instead of neglecting it.
              </p>
            </article>
          </div>
        </div>
      </div>

      <div class="container pt-4 pb-4">
        <h5 class="font-weight-bold spanborder">
          <span>Read next</span>
        </h5>
        <div class="row">
          <div class="col-lg-6">
            <div class="card border-0 mb-4 box-shadow h-xl-300">
              <div class="article-container"></div>
              <div class="card-body px-0 pb-0 d-flex flex-column align-items-start">
                <h2 class="h4 font-weight-bold">
                  <a class="text-dark" href="#">
                    Brain Stimulation Relieves Depression Symptoms
                  </a>
                </h2>
                <p class="card-text">
                  Researchers have found an effective target in the brain for
                  electrical stimulation to improve mood in people suffering
                  from depression.
                </p>
                <div>
                  <small class="d-block">
                    <a class="text-muted" href="./author.html">
                      Janki Nayak
                    </a>
                  </small>
                  <small class="text-muted">Dec 12 · 5 min read</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="flex-md-row mb-4 box-shadow h-xl-300">
              <div class="mb-3 d-flex align-items-center">
                <img height="80" src={imgTest1} />
                <div class="pl-3">
                  <h2 class="mb-2 h6 font-weight-bold">
                    <a class="text-dark" href="./article.html">
                      Nasa's IceSat space laser makes height maps of Earth
                    </a>
                  </h2>
                  <div class="card-text text-muted small">Janki Nayak</div>
                  <small class="text-muted">Dec 12 · 5 min read</small>
                </div>
              </div>
              <div class="mb-3 d-flex align-items-center">
                <img height="80" src={imgTest2} />
                <div class="pl-3">
                  <h2 class="mb-2 h6 font-weight-bold">
                    <a class="text-dark" href="./article.html">
                      Underwater museum brings hope to Lake Titicaca
                    </a>
                  </h2>
                  <div class="card-text text-muted small">Janki Nayak</div>
                  <small class="text-muted">Dec 12 · 5 min read</small>
                </div>
              </div>
              <div class="mb-3 d-flex align-items-center">
                <img height="80" src={imgTest3} />
                <div class="pl-3">
                  <h2 class="mb-2 h6 font-weight-bold">
                    <a class="text-dark" href="./article.html">
                      Sun-skimming probe starts calling home
                    </a>
                  </h2>
                  <div class="card-text text-muted small">Janki Nayak</div>
                  <small class="text-muted">Dec 12 · 5 min read</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
