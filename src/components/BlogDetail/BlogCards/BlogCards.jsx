import React from "react";
import "./BlogCards.css";
import testImg from "../../../images/blog1.jpg";

const BlogCards = ({ title, description, category }) => {
  console.log("title", title);
  return (
    <div className="blog_card_container">
      <div className="blog_card_img_container">
        <img src={testImg} alt="" />
      </div>
      <div className="blog_card_inner_container">
        <h3>{title} </h3>
        <p>{description}</p>
        <button className="read_more">Read More</button>
      </div>
    </div>
  );
};

export default BlogCards;
