import React, { useEffect } from "react";
import { blogData } from "../../BlogDetail/blogs";
import "./Article.css";
import imgTest from "../../../images/blog1.jpg";
import jankiImg from "../../../images/pic.jpg";
import imgTest1 from "../../../images/blog1.jpg";
import imgTest2 from "../../../images/blog2.jpg";
import imgTest3 from "../../../images/blog1.jpg";
import { useParams } from "react-router-dom";

const Article = () => {
  const params = useParams();
  const serviceContent = blogData?.filter((word) => word.id == params.id);
  const { title, description, category, img, imgPara } = serviceContent[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div class="container x-container">
        <div class="jumbotron jumbotron-fluid mb-3 pl-0 pt-0 pb-0 bg-white position-relative article_main_container">
          <div class="h-100 tofront">
            <div class="row justify-content-between article_upper_container">
              <div class="col-md-6 pb-6 align-self-center">
                <h1 class="display-4 secondfont mb-3 font-weight-bold">
                  {title}
                </h1>
                <p class="mb-3 text-justify">{imgPara}</p>
                <div class="d-flex align-items-center">
                  <img
                    class="rounded-circle"
                    src={jankiImg}
                    width="70"
                    height="70"
                  />
                  <small class="ml-2">
                    Janki Nayak
                    <span class="text-muted d-block">
                      A few hours ago &middot; 5 min. read
                    </span>
                  </small>
                </div>
              </div>
              {/* <div class="col-md-6 pr-0 article_img_container"> */}
              <img src={img} className="article_cover" />
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container article-con-vk">
      <div class="pt-4 pb-4 text-justify">
        <div class="row justify-content-center w-100 sub_article_main_container ">
          <div class="col-md-12 col-lg-10">
            <article
              class="article-post text-justify tofront"
              style={{ fontSize: "1rem" }}
            >
              <p dangerouslySetInnerHTML={{ __html: description }} />
            </article>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Article;
