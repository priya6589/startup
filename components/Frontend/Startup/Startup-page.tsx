import React from "react";

const Startup = () => {
  return (
    <>
      <div>
        {/* Start Page Title Area */}
        <div className="page-title-area item-bg-5">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="page-title-content">
                  <h2>Welcome to</h2>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>Single Blog</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Page Title Area */}
        {/* Start Blog Area */}
        <section className="blog-section pt-100 pb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-12">
                <div className="blog-details-desc">
                  <div className="article-content">
                    <h3>Weather Evident Smiling Bed Against</h3>
                    <p>
                      Quuntur magni dolores eos qui ratione voluptatem sequi
                      nesciunt. Neque porro quia non numquam eius modi tempora
                      incidunt ut labore et dolore magnam dolor sit amet,
                      consectetur adipisicing.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in sed quia non
                      numquam eius modi tempora incidunt ut labore et dolore
                      magnam aliquam quaerat voluptatem.
                    </p>
                    <blockquote className="wp-block-quote">
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </p>
                      <cite>Tom Cruise</cite>
                    </blockquote>
                    <p>
                      Quuntur magni dolores eos qui ratione voluptatem sequi
                      nesciunt. Neque porro quia non numquam eius modi tempora
                      incidunt ut labore et dolore magnam dolor sit amet,
                      consectetur adipisicing.
                    </p>
                    <h3>Four major elements that we offer:</h3>
                    <ul className="features-list">
                      <li>Scientific Skills For getting a better result</li>
                      <li>Communication Skills to getting in touch</li>
                      <li>A Career Overview opportunity Available</li>
                      <li>A good Work Environment For work</li>
                    </ul>
                  </div>
                </div>
                <div className="banner-btn">
                  <a href="starup-bussiness.html" className="default-btn">
                    Let’s Build Together
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Blog Area */}
      </div>
    </>
  );
};

export default Startup;
