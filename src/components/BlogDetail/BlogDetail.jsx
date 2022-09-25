import React, { useEffect, useState } from "react";
import BlogCards from "./BlogCards/BlogCards";
import {blogData} from "./blogs.js";
import "./BlogDetail.css";

const BlogDetail = () => {
  const [categories, setCategories] = useState([
    "Mental health",
    "Therapy",
    "Physical health",
  ]);
  const [selectedCategory, setSelectedCategory] = useState("Mental health");
  const [categoryData, setCategoryData] = useState(
    blogData.filter((item) => item.category === "Mental health")
  );

  useEffect(() => {
    setCategoryData(
      blogData.filter((item) => item.category === selectedCategory)
    );
  }, [selectedCategory]);

  return (
    <div className="blog_detail_container">
      <h2>All Blogs</h2>
      <hr className="section_devision" />

      <div className="blog_detail_pills center-pill mb-3">
        {categories?.map((category) => {
          return (
            <button
              className="read_more mx-3 text-uppercase px-3 py-2 font-weight-bold"
              onClick={() => {
                setSelectedCategory(category);
              }}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* mobile view*/}
      <div className="mobile_cata_pills">
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          {categories?.map((category) => {
            return <option value={category}>{category}</option>;
          })}
        </select>
      </div>
      <div className="d-flex flex-wrap">
        {categoryData?.map((item) => {
          return (
            <BlogCards
              title={item.title}
              description={item.imgPara}
              category={item.category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BlogDetail;
