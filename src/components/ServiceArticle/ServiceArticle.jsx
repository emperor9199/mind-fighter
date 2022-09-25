import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import imgTest from "../../images/inner-blog.jpg";
import jankiImg from "../../images/pic.jpg";
import { service } from "../../Data/Service";

const ServiceArticle = () => {
  const params = useParams();
  const serviceContent = service.filter((word) => word.id == params.id);
  const { Name, Para1, Para2, ParaImg } = serviceContent[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div class="container x-container">
        <div class="jumbotron jumbotron-fluid mb-3 pl-0 pt-0 pb-0 bg-white position-relative">
          <div class="h-100 tofront">
            <div class="row justify-content-between article_upper_container">
              <div class="col-md-6 pb-6 pr-4 pt-4 ">
                <h1 class="display-4 secondfont mb-3 font-weight-bold">
                  {Name}
                </h1>
                <p class="mb-3 mt-2 text-justify">{Para1}</p>
              </div>
              <div class="col-md-6 pr-0 article_img_container">
                <img src={ParaImg} className="article_cover_service" />
              </div>
            </div>
          </div>

          <div>
            <div class="row">
              <div class="p-4 ">
                <td dangerouslySetInnerHTML={{ __html: Para2 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceArticle;
