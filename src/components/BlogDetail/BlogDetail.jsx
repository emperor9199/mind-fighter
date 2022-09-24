import React, { useEffect, useState } from "react";
import BlogCards from "./BlogCards/BlogCards";
import blogData from "./blogs.json";
import "./BlogDetail.css";

const BlogDetail = () => {
  const [categories, setCategories] = useState(["one", "two", "three"]);
  const [selectedCategory, setSelectedCategory] = useState("one");
  const [categoryData, setCategoryData] = useState(
    blogData.filter((item) => item.category === "one")
  );

  console.log("categoryDAta", categoryData);

  useEffect(() => {
    setCategoryData(
      blogData.filter((item) => item.category === selectedCategory)
    );

    console.log("inside useeffect");
  }, [categories]);

  const ax = () => {
    setCategoryData(
      blogData.filter((item) => item.category === selectedCategory)
    );
  };

  return (
    <div className="blog_detail_container">
      <div className="blog_detail_pills">
        {categories?.map((category) => {
          return (
            <button
              className="read_more mx-3"
              onClick={() => {
                setSelectedCategory(category);
                ax();
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

    // <>
    //   <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
    //     <li class="nav-item" role="presentation">
    //       <button
    //         class="nav-link active"
    //         id="pills-home-tab"
    //         data-bs-toggle="pill"
    //         data-bs-target="#pills-home"
    //         type="button"
    //         role="tab"
    //         aria-controls="pills-home"
    //         aria-selected="true"
    //       >
    //         Home
    //       </button>
    //     </li>
    //     <li class="nav-item" role="presentation">
    //       <button
    //         class="nav-link"
    //         id="pills-profile-tab"
    //         data-bs-toggle="pill"
    //         data-bs-target="#pills-profile"
    //         type="button"
    //         role="tab"
    //         aria-controls="pills-profile"
    //         aria-selected="false"
    //       >
    //         Profile
    //       </button>
    //     </li>
    //     <li class="nav-item" role="presentation">
    //       <button
    //         class="nav-link"
    //         id="pills-contact-tab"
    //         data-bs-toggle="pill"
    //         data-bs-target="#pills-contact"
    //         type="button"
    //         role="tab"
    //         aria-controls="pills-contact"
    //         aria-selected="false"
    //       >
    //         Contact
    //       </button>
    //     </li>
    //   </ul>
    //   <div class="tab-content" id="pills-tabContent">
    //     <div
    //       class="tab-pane fade show active"
    //       id="pills-home"
    //       role="tabpanel"
    //       aria-labelledby="pills-home-tab"
    //     >
    //       <BlogCards />
    //     </div>
    //     <div
    //       class="tab-pane fade"
    //       id="pills-profile"
    //       role="tabpanel"
    //       aria-labelledby="pills-profile-tab"
    //     >
    //       <BlogCards />
    //     </div>
    //     <div
    //       class="tab-pane fade"
    //       id="pills-contact"
    //       role="tabpanel"
    //       aria-labelledby="pills-contact-tab"
    //     >
    //       <BlogCards />
    //     </div>
    //   </div>
    // </>
  );
};

export default BlogDetail;
