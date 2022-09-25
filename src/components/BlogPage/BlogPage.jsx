import React, { useEffect } from "react";
import "./BlogPage.css";
import imgTest1 from "../../images/blog1.jpg";
import imgTest2 from "../../images/blog2.jpg";

import { Outlet, Link } from "react-router-dom";
import BlogDetail from "../BlogDetail/BlogDetail";
import { blogData } from "../BlogDetail/blogs";

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blog = blogData[0];

  return (
    <>
      <div className="blog_page_container">
        <h2>Featured Blog</h2>
        <hr className="section_devision" />
        <div className="blog_container">
          <img src={blog.img}/>
          <div className="blog_content">
            <button className="category_pill">{blog.category}</button>
            <h3>{blog.title}</h3>
            <p className="blog-text-truncate-main">{blog.imgPara}</p>

            <Link className="main-button" to={`/article/${blog.id}`}>
              Read More
            </Link>
          </div>
        </div>
      </div>
      <BlogDetail />
    </>
  );
};

export default BlogPage;
