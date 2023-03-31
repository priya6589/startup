import React from "react";

const Contact = () => {
  return (
    <div>
      <div>
        {/* Start Page Title Area */}
        <div className="page-title-area item-bg-5">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="page-title-content">
                  <h2>Contact</h2>
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Page Title Area */}
        {/* Start Contact Box Area */}
        <section className="contact-box pt-100 pb-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-contact-box">
                  <i className="flaticon-pin" />
                  <div className="content-title">
                    <h3>Address</h3>
                    <p>32 st Kilda Road, Melbourne VIC, 3004 Australia</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-contact-box">
                  <i className="flaticon-envelope" />
                  <div className="content-title">
                    <h3>Email</h3>
                     <span><a href="mailto:example@gmail.com"><span>example@gmail.com</span></a></span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                <div className="single-contact-box">
                  <i className="flaticon-phone-call" />
                  <div className="content-title">
                    <h3>Phone</h3>
                    <a href="tel:123456123">+123(456)123</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Contact Box Area */}
        {/* Start Contact Area */}
        <section className="contact-section pb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="contact-text">
                  <h3>Have Any Questions About Us?</h3>
                  <p>
                  If you have any questions or concerns about our company or services, please don't hesitate to contact us. Our team is dedicated to providing the best support and assistance possible to ensure your satisfaction.
                  </p>
                </div>
                <div className="contact-form">
                  <form id="contactForm">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        required
                        data-error="Please enter your name"
                        placeholder="Name"
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        required
                        data-error="Please enter your email"
                        placeholder="Your Email"
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group">
                      <label>Subject</label>
                      <input
                        type="text"
                        name="msg_subject"
                        id="msg_subject"
                        className="form-control"
                        required
                        data-error="Please enter your subject"
                        placeholder="Your Subject"
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group">
                      <label>Message</label>
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        cols={30}
                        rows={6}
                        required
                        data-error="Write your message"
                        placeholder="Your Message"
                        defaultValue={""}
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="send-btn">
                      <button type="submit" className="default-btn">
                        Send Message
                      </button>
                      <div id="msgSubmit" className="h3 text-center hidden" />
                      <div className="clearfix" />
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-image">
                  <img src="assets/img/contact.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Contact Area */}
      </div>
    </div>
  );
};

export default Contact;
