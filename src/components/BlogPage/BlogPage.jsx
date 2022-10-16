import React, { useEffect } from "react";
import "./BlogPage.css";
import { Outlet, Link } from "react-router-dom";
import BlogDetail from "../BlogDetail/BlogDetail";

const BlogPage = ({blogs}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blog = blogs[0];

  return (
    <>
      <div className="blog_page_container">
        <h2>Featured Blog</h2>
        <hr className="section_devision" />
        <div className="blog_container">
          <img src={blog.image_url}/>
          <div className="blog_content">
            <button className="category_pill">{blog.category}</button>
            <h3>{blog.title}</h3>
            <p className="blog-text-truncate-main">{blog.img_para}</p>

            <Link className="main-button" to={`/article/${blog.id}`}>
              Read More
            </Link>
          </div>
        </div>
      </div>
      <BlogDetail blogs={blogs}/>
    </>
  );
};

export default BlogPage;
