import React from "react";

const It = () => {
  return (
    <>
      {/* Start Services Area */}
      <section className="services-section bg-color pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>IT Agency Services</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida.
            </p>
            <div className="bar" />
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="icon">
                  <i className="flaticon-it" />
                </div>
                <h3>IT Consultancy</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore facilisis.
                </p>
                <a href="single-services.html" className="read-btn">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="icon">
                  <i className="flaticon-setting" />
                </div>
                <h3>Web Development</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore facilisis.
                </p>
                <a href="single-services.html" className="read-btn">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="icon">
                  <i className="flaticon-promotion" />
                </div>
                <h3>Digital Marketing</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore facilisis.
                </p>
                <a href="single-services.html" className="read-btn">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="icon">
                  <i className="flaticon-cellphone" />
                </div>
                <h3>App Development</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore facilisis.
                </p>
                <a href="single-services.html" className="read-btn">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="icon">
                  <i className="flaticon-shopping-cart" />
                </div>
                <h3>E-commerce Development</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore facilisis.
                </p>
                <a href="single-services.html" className="read-btn">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="icon">
                  <i className="flaticon-optimize" />
                </div>
                <h3>IT Solutions</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore facilisis.
                </p>
                <a href="single-services.html" className="read-btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="default-shape">
          <div className="shape-1">
            <img src="assets/img/shape/4.png" alt="image" />
          </div>
          <div className="shape-2 rotateme">
            <img src="assets/img/shape/5.svg" alt="image" />
          </div>
          <div className="shape-3">
            <img src="assets/img/shape/6.svg" alt="image" />
          </div>
          <div className="shape-4">
            <img src="assets/img/shape/7.png" alt="image" />
          </div>
          <div className="shape-5">
            <img src="assets/img/shape/8.png" alt="image" />
          </div>
        </div>
        <div className="services-shape">
          <img src="assets/img/cloud.png" className="white-image" alt="image" />
          {/* <img
            src="assets/img/cloud-2.png"
            className="black-image"
            alt="image"
          /> */}
        </div>
      </section>
      {/* End Services Area */}
    </>
  );
};

export default It;
