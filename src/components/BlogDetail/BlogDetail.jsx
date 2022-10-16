import React, { useEffect, useState } from "react";
import BlogCards from "./BlogCards/BlogCards";
import "./BlogDetail.css";

const BlogDetail = ({blogs}) => {
  const [categories, setCategories] = useState([
    "Mental Health",
    "Therapy",
    "Physical Health",
  ]);
  const [selectedCategory, setSelectedCategory] = useState("Mental Health");
  const [categoryData, setCategoryData] = useState(
    blogs?.filter((item) => item.category === "Mental Health")
  );

  useEffect(() => {
    setCategoryData(
      blogs?.filter((item) => item.category === selectedCategory)
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
              description={item.img_para}
              category={item.category}
              id={item.id}
              img={item.image_url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BlogDetail;
