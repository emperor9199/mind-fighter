import React, { useEffect, useState } from "react";
import BlogCards from "./BlogCards/BlogCards";
import blogData from "./blogs.json";
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
      <div className="d-flex flex-wrap">
        {categoryData?.map((item) => {
          return (
            <BlogCards
              title={item.title}
              description={item.description}
              category={item.category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BlogDetail;
