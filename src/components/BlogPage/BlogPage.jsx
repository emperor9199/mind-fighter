import React,{useEffect} from "react";
import "./BlogPage.css";
import imgTest1 from "../../images/blog1.jpg";
import imgTest2 from "../../images/blog2.jpg";

import { Outlet, Link } from "react-router-dom";

const BlogPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <>
      <div class="container blog-main-container">
        <div class="jumbotron jumbotron-fluid mb-3 pt-0 pb-0 bg-lightblue position-relative">
          <div class="pl-4 pr-0 h-100 tofront">
            <div class="row justify-content-between">
              <div class="col-md-6 pt-6 pb-6 align-self-center">
                <h1 class="secondfont mb-3 mr-3 font-weight-bold">
                  Rising need for Counselling
                </h1>
                <p class="mb-3 text-justify mr-3">
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
                  life. Usually, people neglect and don’t think
                </p>
                <Link to="/article" class="btn btn-dark ">
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
                  RISING NEED FOR COUNSELLING
                  </Link>
                </h2>
                <p class="card-text">
                It is very important to understand the meaning of counseling as people are not aware of it.
Meaning of counseling: 
                </p>
                <div>
                  <small class="d-block">
                    <a class="text-muted" href="#">
                      Janki nayak
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
                <img height="80" src={imgTest1} />
                <div class="pl-3">
                  <h2 class="mb-2 h6 font-weight-bold">
                    <Link class="text-dark" to="/article">
                      Ways to prevent Suicidal thoughts
                    </Link>
                  </h2>
                  <div class="card-text text-muted small">Janki Nayak</div>
                  <small class="text-muted">Dec 12 - 5 min read</small>
                </div>
              </div>
              <div class="mb-3 d-flex align-items-center">
                <img height="80" src={imgTest2} />
                <div class="pl-3">
                  <h2 class="mb-2 h6 font-weight-bold">
                    <Link class="text-dark" to="/article">
                      Effects of Covid -19 on people’s lives
                    </Link>
                  </h2>
                  <div class="card-text text-muted small">Janki Nayak</div>
                  <small class="text-muted">Dec 12 - 5 min read</small>
                </div>
              </div>
              <div class="mb-3 d-flex align-items-center">
                <img height="80" src={imgTest1} />
                <div class="pl-3">
                  <h2 class="mb-2 h6 font-weight-bold">
                    <Link class="text-dark" to="/article">
                      Rising need for Counselling
                    </Link>
                  </h2>
                  <div class="card-text text-muted small">Janki Nayak</div>
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
              <span>All Blogs</span>
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
                  Blog Subtitle
                </div>
                <small class="text-muted">Dec 12 - 5 min read</small>
              </div>
              <img height="120" src={imgTest2} />
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
                  Blog Subtitle
                </div>
                <small class="text-muted">Dec 12 - 5 min read</small>
              </div>
              <img height="120" src={imgTest1} />
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
                  Blog Subtitle
                </div>
                <small class="text-muted">Dec 12 - 5 min read</small>
              </div>
              <img height="120" src={imgTest1} />
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
                  <p class="text-muted">Blog Subtitle</p>
                </span>
              </li>
              <li>
                <span>
                  <h6 class="font-weight-bold">
                    <a href="#" class="text-dark">
                      Humans Reversing Climate Clock: 50 Million Years
                    </a>
                  </h6>
                  <p class="text-muted">Blog Subtitle</p>
                </span>
              </li>
              <li>
                <span>
                  <h6 class="font-weight-bold">
                    <Link to="/article" class="text-dark">
                      Unprecedented Views of the Birth of Planets
                    </Link>
                  </h6>
                  <p class="text-muted">Blog Subtitle</p>
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
                  <p class="text-muted">Blog Subtitle</p>
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
