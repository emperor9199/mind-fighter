import React from "react";
import "./BlogPage.css";
import imgTest from "../../images/blog3.jpg";
import { Outlet, Link } from "react-router-dom";

const BlogPage = () => {
  return (
    <>
      <div class="container blog-main-container">
        <div class="jumbotron jumbotron-fluid mb-3 pt-0 pb-0 bg-lightblue position-relative">
          <div class="pl-4 pr-0 h-100 tofront">
            <div class="row justify-content-between">
              <div class="col-md-6 pt-6 pb-6 align-self-center">
                <h1 class="secondfont mb-3 font-weight-bold">
                  Mundana is an HTML Bootstrap Template for Professional
                  Blogging
                </h1>
                <p class="mb-3">
                  Beautifully crafted with the latest technologies, SASS
                  Bootstrap 4.1.3, Mundana is the perfect design for your
                  professional blog. Homepage, post article and category layouts
                  available.
                </p>
                <Link to="/article" class="btn btn-dark">
                  Read More
                </Link>
              </div>
              <div class="col-md-6 d-none d-md-block pr-0 blogMainImg"> </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container pt-4 pb-4">
        <div class="row">
          <div class="col-lg-6">
            <div class="card border-0 mb-4 box-shadow h-xl-300">
              <div className="blog-inner-container"></div>
              <div class="card-body px-0 pb-0 d-flex flex-column align-items-start">
                <h2 class="h4 font-weight-bold">
                  <Link class="text-dark" to="/article">
                    Brain Stimulation Relieves Depression Symptoms
                  </Link>
                </h2>
                <p class="card-text">
                  Researchers have found an effective target in the brain for
                  electrical stimulation to improve mood in people suffering
                  from depression.
                </p>
                <div>
                  <small class="d-block">
                    <a class="text-muted" href="#">
                      Favid Rick
                    </a>
                  </small>
                  <small class="text-muted">Dec 12 - 5 min read</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="flex-md-row mb-4 box-shadow h-xl-300">
              <div class="mb-3 d-flex align-items-center">
                <img height="80" src={imgTest} />
                <div class="pl-3">
                  <h2 class="mb-2 h6 font-weight-bold">
                    <Link class="text-dark" to="/article">
                      Nasa's IceSat space laser makes height maps of Earth
                    </Link>
                  </h2>
                  <div class="card-text text-muted small">
                    Jake Bittle in LOVE/HATE
                  </div>
                  <small class="text-muted">Dec 12 - 5 min read</small>
                </div>
              </div>
              <div class="mb-3 d-flex align-items-center">
                <img height="80" src={imgTest} />
                <div class="pl-3">
                  <h2 class="mb-2 h6 font-weight-bold">
                    <Link class="text-dark" to="/article">
                      Underwater museum brings hope to Lake Titicaca
                    </Link>
                  </h2>
                  <div class="card-text text-muted small">
                    Jake Bittle in LOVE/HATE
                  </div>
                  <small class="text-muted">Dec 12 - 5 min read</small>
                </div>
              </div>
              <div class="mb-3 d-flex align-items-center">
                <img height="80" src={imgTest} />
                <div class="pl-3">
                  <h2 class="mb-2 h6 font-weight-bold">
                    <Link class="text-dark" to="/article">
                      Sun-skimming probe starts calling home
                    </Link>
                  </h2>
                  <div class="card-text text-muted small">
                    Jake Bittle in LOVE/HATE
                  </div>
                  <small class="text-muted">Dec 12 - 5 min read</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-8">
            <h5 class="font-weight-bold spanborder">
              <span>All Stories</span>
            </h5>
            <div class="mb-3 d-flex justify-content-between">
              <div class="pr-3">
                <h2 class="mb-1 h4 font-weight-bold">
                  <Link class="text-dark" to="/article">
                    Nearly 200 Great Barrier Reef coral species also live in the
                    deep sea
                  </Link>
                </h2>
                <p>
                  There are more coral species lurking in the deep ocean that
                  previously thought.
                </p>
                <div class="card-text text-muted small">
                  Jake Bittle in SCIENCE
                </div>
                <small class="text-muted">Dec 12 - 5 min read</small>
              </div>
              <img height="120" src={imgTest} />
            </div>
            <div class="mb-3 d-flex justify-content-between">
              <div class="pr-3">
                <h2 class="mb-1 h4 font-weight-bold">
                  <Link class="text-dark" to="article">
                    East Antarctica's glaciers are stirring
                  </Link>
                </h2>
                <p>
                  Nasa says it has detected the first signs of significant
                  melting in a swathe of glaciers in East Antarctica.
                </p>
                <div class="card-text text-muted small">
                  Jake Bittle in SCIENCE
                </div>
                <small class="text-muted">Dec 12 - 5 min read</small>
              </div>
              <img height="120" src={imgTest} />
            </div>
            <div class="mb-3 d-flex justify-content-between">
              <div class="pr-3">
                <h2 class="mb-1 h4 font-weight-bold">
                  <Link class="text-dark" to="/article">
                    50 years ago, armadillos hinted that DNA wasn’t destiny
                  </Link>
                </h2>
                <p>
                  Nasa says it has detected the first signs of significant
                  melting in a swathe of glaciers in East Antarctica.
                </p>
                <div class="card-text text-muted small">
                  Jake Bittle in SCIENCE
                </div>
                <small class="text-muted">Dec 12 - 5 min read</small>
              </div>
              <img height="120" src={imgTest} />
            </div>
          </div>
          <div class="col-md-4 pl-4">
            <h5 class="font-weight-bold spanborder">
              <span>Popular</span>
            </h5>
            <ol class="list-featured">
              <li>
                <span>
                  <h6 class="font-weight-bold">
                    <Link to="/article" class="text-dark">
                      Did Supernovae Kill Off Large Ocean Animals?
                    </Link>
                  </h6>
                  <p class="text-muted">Jake Bittle in SCIENCE</p>
                </span>
              </li>
              <li>
                <span>
                  <h6 class="font-weight-bold">
                    <a href="#" class="text-dark">
                      Humans Reversing Climate Clock: 50 Million Years
                    </a>
                  </h6>
                  <p class="text-muted">Jake Bittle in SCIENCE</p>
                </span>
              </li>
              <li>
                <span>
                  <h6 class="font-weight-bold">
                    <Link to="/article" class="text-dark">
                      Unprecedented Views of the Birth of Planets
                    </Link>
                  </h6>
                  <p class="text-muted">Jake Bittle in SCIENCE</p>
                </span>
              </li>
              <li>
                <span>
                  <h6 class="font-weight-bold">
                    <Link to="/article" class="text-dark">
                      Effective New Target for Mood-Boosting Brain Stimulation
                      Found
                    </Link>
                  </h6>
                  <p class="text-muted">Jake Bittle in SCIENCE</p>
                </span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
