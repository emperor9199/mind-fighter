import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";

const Blog = ({blogs}) => {
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
                It is very important to understand the meaning of counselling as
                people are not aware of it.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {blogs?.slice(0, 3)?.map((blog) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12" key={blog.id}>
                <div className="blog-post-thumb">
                  <div className="img">
                    <img src={blog.image_url} alt="" />
                  </div>
                  <div className="blog-content">
                    <h3>
                      <a href="javascript:;">{blog.title}</a>
                    </h3>
                    <div className="text blog-text-truncate">
                      {blog.img_para}
                    </div>
                    <Link className="main-button" to={`/article/${blog.id}`}>
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
