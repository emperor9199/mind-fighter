import React from "react";
import "./Blog.css";
import blog1 from "../../images/blog1.jpg";
import blog2 from "../../images/blog2.jpg";
import blog3 from "../../images/blog3.jpg";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <section className="section" id="blog">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="center-heading">
              <h2 className="section-title">Blogs</h2>
            </div>
          </div>
          <div className="offset-lg-3 col-lg-6">
            <div className="center-text">
              <p>
              It is very important to understand the meaning of counselling as people are not aware of it.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="blog-post-thumb">
              <div className="img">
                <img src={blog1} alt="" />
              </div>
              <div className="blog-content">
                <h3>
                  <a href="javascript:;">RISING NEED FOR COUNSELLING</a>
                </h3>
                <div className="text">
                It is very important to understand the meaning of counselling as people are not aware of it.
Meaning of counselling: Counselling is to assist someone to solve their personal or professional or any
other problem on their own...
                </div>
                  <Link className="main-button" to="/article">Read More</Link>                  
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="blog-post-thumb">
              <div className="img">
                <img src={blog2} alt="" />
              </div>
              <div className="blog-content">
                <h3>
                  <a href="javascript:;">Ways to prevent Suicidal thoughts</a>
                </h3>
                <div className="text">
                It is very important to know a little bit about suicide and suicidal thoughts before we directly jump onto
the ways of preventing suicidal thoughts. Nowadays we read and hear about people committing...
                </div>
                <Link className="main-button" to="/article">Read More</Link>     
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="blog-post-thumb">
              <div className="img">
                <img src={blog3} alt="" />
              </div>
              <div className="blog-content">
                <h3>
                  <a href="javascript:;">Effects of Covid -19 on people’s lives.</a>
                </h3>
                <div className="text">
                When we talk about the life of people before the pandemic, it is very different from now. When we
think about a pandemic, the first thing that comes to mind is a lockdown in the whole country, the
deaths of so many people...
                </div>
                <Link className="main-button" to="/article">Read More</Link>     
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
