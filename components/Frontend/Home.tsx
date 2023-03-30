import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Agency from "../Frontend/It-Agency";
import ClientSection from "../Frontend/Common/client-section";
import NextNProgress from 'nextjs-progressbar';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 660,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
export default function Home() {
  return (
    <>
      {/* Start Banner Area */}
      <div className="main-banner-area">
        <div className="home-sliders">
          <Slider {...settings}>
            <div className="home-item item-bg1">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="main-banner-content">
                      <h1>Your Future Starts Here</h1>
                      <p>
                      Welcome to our startup investment platform, where your future starts today! We are dedicated to providing you with innovative investment opportunities that can help you grow your wealth and achieve your financial goals.
                      </p>
                      <div className="banner-btn">
                        <a href="startup.html" className="default-btn">
                          Join to raise funds
                        </a>
                        <a href="join-to-invest.html" className="default-btn">
                          Join to Invest
                        </a>
                      </div>
                    </div>
                    <div className="banner-image">
                      {/* <img src="assets/img/home-one/shape.png" alt="image"> */}
                      {/* <img src="assets/img/home-one/image-1.png" class="banner-img" alt="image"> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-item item-bg2">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="main-banner-content">
                      <h1>Software &amp; development</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        incididunt ut laboredolore magna aliqua elsed tempomet,
                        consectetur adipiscing.
                      </p>
                      <div className="banner-btn">
                        <a href="startup.html" className="default-btn">
                          Join to raise funds
                        </a>
                        <a href="join-to-invest.html" className="default-btn">
                          Join to Invest
                        </a>
                      </div>
                    </div>
                    <div className="banner-image">
                      {/* <img src="assets/img/home-one/shape.png" alt="image"> */}
                      {/* <img src="assets/img/home-one/image-2.png" class="banner-img" alt="image"> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-item item-bg3">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="main-banner-content">
                      <h1>Digital Agency &amp; Marketing</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        incididunt ut laboredolore magna aliqua elsed tempomet,
                        consectetur adipiscing.
                      </p>
                      <div className="banner-btn">
                        <a href="startup.html" className="default-btn">
                          Join to raise funds
                        </a>
                        <a href="join-to-invest.html" className="default-btn">
                          Join to Invest
                        </a>
                      </div>
                    </div>
                    <div className="banner-image">
                      {/* <img src="assets/img/home-one/shape.png" alt="image"> */}
                      {/* <img src="assets/img/home-one/image-3.png" class="banner-img" alt="image"> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      {/* End Banner Area */}

      {/* Start Features Area */}
      <section className="features-section pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Creative Features</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida.
            </p>
            <div className="bar" />
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="features-content">
                <div className="icon">
                  <i className="flaticon-blueprint" />
                </div>
                <h3>Great Design</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor incididunt
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="features-content">
                <div className="icon">
                  <i className="flaticon-update" />
                </div>
                <h3>Optimal Choice</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor incididunt
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="features-content">
                <div className="icon left-icon">
                  <i className="flaticon-security" />
                </div>
                <h3>Finest Quality</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor incididunt
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="features-content">
                <div className="icon">
                  <i className="flaticon-clock" />
                </div>
                <h3>Time-Saving</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor incididunt
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Features Area */}

      {/* Start Creative Area */}
      <section className="creative-secton pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="creative-content">
                <h3>
                  How to Generate <span>Creative</span> Ideas for your IT
                  Business
                </h3>
                <div className="bar" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incidiunt labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus do umsan lacus
                  vel facilisis.Lorem Ipsum is simply dummy text of the
                  industry. Lorem Ipsum has been the industry's.
                </p>
              </div>
            
              <div className="skill-bar">
                <p className="progress-title-holder">
                  <span className="progress-title">Developement</span>
                  <span className="progress-number-wrapper">
                    <span className="progress-number-mark">
                      <span className="percent" />
                      <span className="down-arrow" />
                    </span>
                  </span>
                </p>
                <div className="progress-content-outter">
                  <div className="progress-content" />
                </div>
              </div>
              <div className="skill-bar">
                <p className="progress-title-holder">
                  <span className="progress-title">Design</span>
                  <span className="progress-number-wrapper">
                    <span className="progress-number-mark">
                      <span className="percent" />
                      <span className="down-arrow" />
                    </span>
                  </span>
                </p>
                <div className="progress-content-outter">
                  <div className="progress-content" />
                </div>
              </div>
              <div className="skill-bar">
                <p className="progress-title-holder">
                  <span className="progress-title">Marketing</span>
                  <span className="progress-number-wrapper">
                    <span className="progress-number-mark">
                      <span className="percent" />
                      <span className="down-arrow" />
                    </span>
                  </span>
                </p>
                <div className="progress-content-outter">
                  <div className="progress-content" />
                </div>
              </div>
              <div className="skill-bar">
                <p className="progress-title-holder">
                  <span className="progress-title">Support</span>
                  <span className="progress-number-wrapper">
                    <span className="progress-number-mark">
                      <span className="percent" />
                      <span className="down-arrow" />
                    </span>
                  </span>
                </p>
                <div className="progress-content-outter">
                  <div className="progress-content" />
                </div>
              </div>
              <div className="skill-bar">
                <p className="progress-title-holder">
                  <span className="progress-title">Review</span>
                  <span className="progress-number-wrapper">
                    <span className="progress-number-mark">
                      <span className="percent" />
                      <span className="down-arrow" />
                    </span>
                  </span>
                </p>
                <div className="progress-content-outter">
                  <div className="progress-content" />
                </div>
              </div>
          
            </div>
            <div className="col-lg-6">
              <div className="creative-image">
                <img src="assets/img/about/about.jpg" alt="image" />
              </div>
              <div className="creative-video">
                <a
                  href="https://youtu.be/8zHWKaiLo8U"
                  className="video-btn popup-youtube"
                >
                  <i className="bx bx-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Creative Area */}

      {/* IT-Agency Section */}
      <Agency />

      {/* Start Development Area */}
      <section className="development-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="development-image">
                <img src="assets/img/development.png" alt="image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="development-text">
                <h3>
                  Web &amp; Mobile <span>Development</span>
                </h3>
                <div className="bar" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan.
                </p>
              </div>
              <div className="development-content">
                <div className="icon">
                  <i className="flaticon-blog" />
                </div>
                <h3>UI/UX Design</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry.
                </p>
              </div>
              <div className="development-content">
                <div className="icon bg-05dbcf">
                  <i className="flaticon-setting" />
                </div>
                <h3>Web Development</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry.
                </p>
              </div>
              <div className="development-content">
                <div className="icon bg-fec66f">
                  <i className="flaticon-cellphone" />
                </div>
                <h3>Mobile Development</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry.
                </p>
              </div>
              <div className="development-content">
                <div className="icon bg-66a6ff">
                  <i className="flaticon-devices" />
                </div>
                <h3>Responsive Design</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Development Area */}

      {/* Start Video Section */}
      <div className="video-section">
        <div className="container">
          <div className="video-content">
            <a
              href="https://www.youtube.com/embed/8zHWKaiLo8U"
              target="_blank"
              className="video-btn popup-youtube"
            >
              <i className="flaticon-play" />
            </a>
          </div>
        </div>
      </div>
      {/* End Video Section */}

      {/* Start Choose Area */}
      <section className="choose-section ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida.
            </p>
            <div className="bar" />
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="choose-content">
                <div className="icon">
                  <i className="flaticon-shared-folder" />
                </div>
                <h3>Consulting</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
              </div>
              <div className="choose-content">
                <div className="icon">
                  <i className="flaticon-blog" />
                </div>
                <h3>Data Management</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
              </div>
              <div className="choose-content">
                <div className="icon">
                  <i className="flaticon-quality" />
                </div>
                <h3>Page Ranking</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
              </div>
              <div className="choose-content">
                <div className="icon">
                  <i className="flaticon-target" />
                </div>
                <h3>Location Targeting</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="choose-image">
                <img src="assets/img/choose.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Choose Area */}

      {/* Start Projects Area */}
      <section className="projects-section pb-70">
        <div className="container-fluid">
          <div className="section-title">
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida.
            </p>
            <div className="bar" />
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="single-projects">
                <div className="projects-image">
                  <img src="assets/img/projects/1.jpg" alt="image" />
                </div>
                <div className="projects-content">
                  <a href="single-projects.html">
                    <h3>App Update &amp; Rebrand</h3>
                  </a>
                  <a href="single-projects.html">
                    <span>Research and startup</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-projects">
                <div className="projects-image">
                  <img src="assets/img/projects/2.jpg" alt="image" />
                </div>
                <div className="projects-content">
                  <a href="single-projects.html">
                    <h3>IT Consultancy</h3>
                  </a>
                  <a href="single-projects.html">
                    <span>Research and startup</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-projects">
                <div className="projects-image">
                  <img src="assets/img/projects/3.jpg" alt="image" />
                </div>
                <div className="projects-content">
                  <a href="single-projects.html">
                    <h3>Digital Marketing</h3>
                  </a>
                  <a href="single-projects.html">
                    <span>Research and startup</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-projects">
                <div className="projects-image">
                  <img src="assets/img/projects/4.jpg" alt="image" />
                </div>
                <div className="projects-content">
                  <a href="single-projects.html">
                    <h3>App Development</h3>
                  </a>
                  <a href="single-projects.html">
                    <span>Research and startup</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-projects">
                <div className="projects-image">
                  <img src="assets/img/projects/5.jpg" alt="image" />
                </div>
                <div className="projects-content">
                  <a href="single-projects.html">
                    <h3>IT Solutions</h3>
                  </a>
                  <a href="single-projects.html">
                    <span>Research and startup</span>
                  </a>
                </div>
              </div>
              <div className="single-projects">
                <div className="projects-image">
                  <img src="assets/img/projects/6.jpg" alt="image" />
                </div>
                <div className="projects-content">
                  <a href="single-projects.html">
                    <h3>Data Management</h3>
                  </a>
                  <a href="single-projects.html">
                    <span>Research and startup</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-projects">
                <div className="projects-image">
                  <img src="assets/img/projects/7.jpg" alt="image" />
                </div>
                <div className="projects-content">
                  <a href="single-projects.html">
                    <h3>E-commerce Development</h3>
                  </a>
                  <a href="single-projects.html">
                    <span>Research and startup</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Projects Area */}

      {/* Client-Section */}
      <ClientSection />

      {/* Start Blog Area */}
      <section className="blog-section pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>
              Our <span>Latest</span> News
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida.
            </p>
            <div className="bar" />
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="image">
                  <a href="single-blog.html">
                    <img src="assets/img/blog/1.jpg" alt="image" />
                  </a>
                </div>
                <div className="content">
                  <span>20 March 2022</span>
                  <h3>
                    <a href="single-blog.html">
                      Great Tips To Earn More Money From Digital Industry
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmod tempor
                  </p>
                  <a href="single-blog.html" className="read-more">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="image">
                  <a href="single-blog.html">
                    <img src="assets/img/blog/2.jpg" alt="image" />
                  </a>
                </div>
                <div className="content">
                  <span>25 April 2022</span>
                  <h3>
                    <a href="single-blog.html">
                      The Billionaire Guide On Design That will Get You Rich
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmod tempor
                  </p>
                  <a href="single-blog.html" className="read-more">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="single-blog">
                <div className="image">
                  <a href="single-blog.html">
                    <img src="assets/img/blog/3.jpg" alt="image" />
                  </a>
                </div>
                <div className="content">
                  <span>30 July 2022</span>
                  <h3>
                    <a href="single-blog.html">
                      Making Peace With The Feast Or Famine Of Freelancing
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmod tempor
                  </p>
                  <a href="single-blog.html" className="read-more">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Blog Area */}
    </>
  );
}
