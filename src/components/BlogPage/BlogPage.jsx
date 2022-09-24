import React, { useEffect } from "react";
import "./BlogPage.css";
import imgTest1 from "../../images/blog1.jpg";
import imgTest2 from "../../images/blog2.jpg";

import { Outlet, Link } from "react-router-dom";
import BlogDetail from "../BlogDetail/BlogDetail";

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="blog_page_container">
        <h2>Featured Blogs</h2>
        <hr className="section_devision" />
        <div className="blog_container">
          <img src={imgTest1} />
          <div className="blog_content">
            <button className="category_pill">Category</button>
            <h3>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
              magnam, praesentium alias voluptates provident ut doloremque
            </h3>
            <p>
              deleniti optio ex voluptates, laborum fugiat aliquam explicabo
              porro at consectetur maxime nulla quaerat quia. Fugit.
            </p>
            <Link to="/article">
              <button className="read_more">Read More</button>
            </Link>
          </div>
        </div>
      </div>
      <BlogDetail />
    </>
  );
};

export default BlogPage;
