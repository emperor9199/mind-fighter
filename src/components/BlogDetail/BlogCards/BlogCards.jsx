import React, { useEffect } from "react";
import "./BlogCards.css";
import testImg from "../../../images/blog1.jpg";
import { Link } from "react-router-dom";

const BlogCards = ({ title, description, category, id }) => {
  return (
    <div className="blog_card_container">
      <div className="blog_card_img_container">
        <img src={testImg} alt="" />
      </div>
      <div className="blog_card_inner_container">
        <h3>{title} </h3>
        <p className="blog-text-truncate">{description}</p>
        <Link className="main-button text-center" to={`/article/${id}`}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCards;
