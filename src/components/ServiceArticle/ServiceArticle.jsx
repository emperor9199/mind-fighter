import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import imgTest from "../../images/inner-blog.jpg";
import jankiImg from "../../images/pic.jpg";
import { service } from "../../Data/Service";

const ServiceArticle = () => {
  const params = useParams();
  const serviceContent = service.filter((word) => word.id == params.id);
  const { Content, Name } = serviceContent[0];

  useEffect(() => {
    window.scrollTo(0, 0)
  }, )

  return (
    <>
      <div class="container x-container"></div>
      <div class="pb-4 text-justify">
        <div class="row justify-content-center w-100">
          <div class="col-md-12 col-lg-10">
            <h1 class="display-4 secondfont mb-5 font-weight-bold">{Name}</h1>
            <article class="article-post">
              <td dangerouslySetInnerHTML={{ __html: Content }} />
            </article>
          </div>
        </div>
      </div>

      {/* <div class="container pt-4 pb-4">
        <h5 class="font-weight-bold spanborder">
          <span>Read next</span>
        </h5>
        <div class="row">
          <div class="col-lg-6">
            <div class="card border-0 mb-4 box-shadow h-xl-300">
              <div class="article-container"></div>
              <div class="card-body px-0 pb-0 d-flex flex-column align-items-start">
                <h2 class="h4 font-weight-bold">
                  <a class="text-dark" href="#">
                    Brain Stimulation Relieves Depression Symptoms
                  </a>
                </h2>
                <p class="card-text">
                  Researchers have found an effective target in the brain for
                  electrical stimulation to improve mood in people suffering
                  from depression.
                </p>
                <div>
                  <small class="d-block">
                    <a class="text-muted" href="./author.html">
                      Janki Nayak
                    </a>
                  </small>
                  <small class="text-muted">Dec 12 · 5 min read</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="flex-md-row mb-4 box-shadow h-xl-300">
              <div class="mb-3 d-flex align-items-center">
                <img height="80" src={imgTest1} />
                <div class="pl-3">
                  <h2 class="mb-2 h6 font-weight-bold">
                    <a class="text-dark" href="./article.html">
                      Nasa's IceSat space laser makes height maps of Earth
                    </a>
                  </h2>
                  <div class="card-text text-muted small">Janki Nayak</div>
                  <small class="text-muted">Dec 12 · 5 min read</small>
                </div>
              </div>
              <div class="mb-3 d-flex align-items-center">
                <img height="80" src={imgTest2} />
                <div class="pl-3">
                  <h2 class="mb-2 h6 font-weight-bold">
                    <a class="text-dark" href="./article.html">
                      Underwater museum brings hope to Lake Titicaca
                    </a>
                  </h2>
                  <div class="card-text text-muted small">Janki Nayak</div>
                  <small class="text-muted">Dec 12 · 5 min read</small>
                </div>
              </div>
              <div class="mb-3 d-flex align-items-center">
                <img height="80" src={imgTest3} />
                <div class="pl-3">
                  <h2 class="mb-2 h6 font-weight-bold">
                    <a class="text-dark" href="./article.html">
                      Sun-skimming probe starts calling home
                    </a>
                  </h2>
                  <div class="card-text text-muted small">Janki Nayak</div>
                  <small class="text-muted">Dec 12 · 5 min read</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ServiceArticle;
