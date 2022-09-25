import React, { useEffect } from "react";
import "./BlogCards.css";
import { Link } from "react-router-dom";

const BlogCards = ({ title, description, category, id, img }) => {
  return (
    <div className="blog_card_container">
      <div className="blog_card_img_container">
        <img src={img} alt="" className="pill-blog-img"/>
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
