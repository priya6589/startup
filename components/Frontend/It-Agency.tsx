import React from "react";

const It = () => {
  return (
    <>
      {/* Start Services Area */}
      <section className="services-section bg-color pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>
            Our team of experienced investment professionals will work with you to develop a customized investment strategy that aligns with your risk tolerance, time horizon, and financial objectives.
            </p>
            <div className="bar" />
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="icon">
                  <i className="flaticon-it" />
                </div>
                <h3>Investment research</h3>
                <p>
                We provide investment research and analysis on various investment options, helping clients make informed decisions about their investments.
                </p>
                {/* <a href="single-services.html" className="read-btn">
                  Read More
                </a> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="icon">
                  <i className="flaticon-setting" />
                </div>
                <h3>Advisory services</h3>
                <p>
                We offer investment advisory services, providing guidance on investment strategies and helping clients to build and manage their investment portfolios.
                </p>
                {/* <a href="single-services.html" className="read-btn">
                  Read More
                </a> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="icon">
                  <i className="flaticon-promotion" />
                </div>
                <h3>Fundraising</h3>
                <p>
                Startup platform offer crowdfunding and fundraising services, allowing entrepreneurs to raise capital from a large pool of investors.
                </p>
                {/* <a href="single-services.html" className="read-btn">
                  Read More
                </a> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="icon">
                  <i className="flaticon-cellphone" />
                </div>
                <h3>Business networking</h3>
                <p>
                It enables entrepreneurs to connect with potential investors, partners, and other industry professionals.
                </p>
                {/* <a href="single-services.html" className="read-btn">
                  Read More
                </a> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="icon">
                  <i className="flaticon-shopping-cart" />
                </div>
                <h3>Online investment </h3>
                <p>
                It allows investors to easily buy and sell securities, track their investments, and monitor market trends.
                </p>
                {/* <a href="single-services.html" className="read-btn">
                  Read More
                </a> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="icon">
                  <i className="flaticon-optimize" />
                </div>
                <h3>Investment management</h3>
                <p>
                It offers tailored investment strategies that align with their clients' financial goals and risk profiles,provide customized investment solutions.
                </p>
                {/* <a href="single-services.html" className="read-btn">
                  Read More
                </a> */}
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
