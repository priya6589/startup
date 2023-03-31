import React from "react";

export default function ProjectOne() {
  return (
    <>
      <div className="page-title-area item-bg-1">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-content">
                <h2>Projects</h2>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>Projects</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="projects-section pt-100 pb-70">
        <div className="container-fluid">
          <div className="section-title">
            <h2>Projects</h2>
            <p>
              At Startup or Invesment, we're committed to investing in
              innovative startups and bringing cutting-edge solutions to the
              market. Here are some of the exciting projects we're currently
              working on.
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
                  <a href="/single-project">
                    <h3>App Update &amp; Rebrand</h3>
                  </a>
                  <a href="/single-project">
                    <span>
                    Research and startup
                    </span>
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
                  <a href="/single-project">
                    <h3>IT Consultancy</h3>
                    {/* <h3>Funding Trends</h3> */}
                  </a>
                  <a href="/single-project">
                    <span>
                    Research and startup
                    </span>
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
                  <a href="/single-project">
                  <h3>Funding Trends</h3>
                  </a>
                  <a href="/single-project">
                    <span>
                    Research and startup
                    </span>
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
                  <a href="/single-project">
                  <h3>App Development</h3>
                  </a>
                  <a href="/single-project">
                    <span>
                    Research and startup
                    </span>
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
                  <a href="/single-project">
                  <h3>IT Solutions</h3>
                  </a>
                  <a href="/single-project">
                    <span>
                    Research and startup
                    </span>
                  </a>
                </div>
              </div>
              <div className="single-projects">
                <div className="projects-image">
                  <img src="assets/img/projects/6.jpg" alt="image" />
                </div>
                <div className="projects-content">
                  <a href="/single-project">
                  <h3>Data Management</h3>
                  </a>
                  <a href="/single-project">
                    <span>
                    Research and startup
                    </span>
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
                  <a href="/single-project">
                  <h3>E-commerce Development</h3>
                  </a>
                  <a href="/single-project">
                    <span>
                     Research and startup
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="section-title">
            <h2>
              Investment <span>Opportunities</span>
            </h2>
            <p>
              Describe your investment philosophy and the types of startups you
              invest in. Provide information on the investment opportunities
              available, such as equity investments or convertible notes.
              Encourage potential investors to get in touch to learn more about
              the investment process and opportunities.
            </p>
            <div className="bar" />
          </div>
          <div className="section-title">
            <h2>Conclusion</h2>
            <p>
              We're always on the lookout for innovative startups with the
              potential to make a real difference in the world. We're excited
              about the projects we're currently working on and are constantly
              seeking new investment opportunities to help drive growth and
              innovation. Stay tuned for updates on these and other exciting
              projects as we continue to invest in the future.
            </p>
            <div className="bar" />
          </div>
        </div>
      </section>
    </>
  );
}
