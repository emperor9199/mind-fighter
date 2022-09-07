import React from "react";
import "./Blog.css";
import blog1 from "../../images/blog1.jpg";
import blog2 from "../../images/blog2.jpg";
import blog3 from "../../images/blog3.jpg";

const Blog = () => {
  return (
    <section className="section" id="blog">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="center-heading">
              <h2 className="section-title">Blog Entries</h2>
            </div>
          </div>
          <div className="offset-lg-3 col-lg-6">
            <div className="center-text">
              <p>
                Integer molestie aliquam gravida. Nullam nec arcu finibus,
                imperdiet nulla vitae, placerat nibh. Cras maximus venenatis
                molestie.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="blog-post-thumb">
              <div className="img">
                <img src={blog1} alt="" />
              </div>
              <div className="blog-content">
                <h3>
                  <a href="#">Blog 1</a>
                </h3>
                <div className="text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab,
                  ullam! Iusto at fugiat maxime maiores quod neque nobis quos
                  atque explicabo et cumque voluptatem, commodi eius, delectus
                  nam dicta. Incidunt!
                </div>
                <a href="#" className="main-button">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="blog-post-thumb">
              <div className="img">
                <img src={blog2} alt="" />
              </div>
              <div className="blog-content">
                <h3>
                  <a href="#">Blog 2</a>
                </h3>
                <div className="text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
                  nesciunt impedit ratione! Deserunt accusantium deleniti sunt
                  veniam maxime quibusdam esse assumenda in, incidunt
                  necessitatibus dolor sed ad tempore debitis
                </div>
                <a href="#" className="main-button">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="blog-post-thumb">
              <div className="img">
                <img src={blog3} alt="" />
              </div>
              <div className="blog-content">
                <h3>
                  <a href="#">Blog 3</a>
                </h3>
                <div className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  porro placeat optio deleniti illum sunt perspiciatis, sequi
                  rerum sed! Mollitia velit, facere officia ad natus asperiores
                  inventore tempora laborum libero.
                </div>
                <a href="#" className="main-button">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
