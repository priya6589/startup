import React from 'react'

const footer = () => {
  return (
    <div>
      <section className="footer-section pt-100 pb-70" id="footer-sec">
            <div className="container">
            <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="footer-heading">
                                    <div className="logo">
                                        <a href="/">
                                            <img
                                                src={process.env.NEXT_PUBLIC_BASE_URL + "assets/img/logo.png"}
                                                className="black-logo"
                                                alt="image"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <ul className="footer-social">
                                    <li>
                                        <a href="#">
                                            <i className="flaticon-facebook"></i>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <i className="flaticon-twitter"></i>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <i className="flaticon-pinterest"></i>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <i className="flaticon-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="footer-heading">
                                    <h3>Important Links</h3>
                                </div>

                                <ul className="footer-quick-links">
                                    <li>
                                        <a href="/about">About Us</a>
                                    </li>
                                    <li>
                                        <a href="/project-one">Project</a>
                                    </li>
                                    <li>
                                        <a href="/service">Services</a>
                                    </li>
                                    <li>
                                        <a href="/blog">Blog</a>
                                    </li>
                                    <li>
                                        <a href="/contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="footer-heading">
                                    <h3>Featured Service</h3>
                                </div>
                                <ul className="footer-quick-links">
                                    <li>
                                        <a href="/team">Team</a>
                                    </li>
                                    <li>
                                        <a href="/pricing">Pricing</a>
                                    </li>
                                    <li>
                                        <a href="/faq">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="/terms-condition">Term & Condition</a>
                                    </li>
                                    <li>
                                        <a href="/privacy-policy">Privacy policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="footer-heading">
                                    <h3>Contact</h3>
                                </div>

                                <div className="footer-info-contact">
                                    <i className="flaticon-phone-call"></i>
                                    <h3>Phone</h3>
                                    <span><a href="tel:+882-569-756">+123(456)123</a></span>
                                </div>

                                <div className="footer-info-contact">
                                    <i className="flaticon-envelope"></i>
                                    <h3>Email</h3>
                                    <span><a href="/cdn-cgi/l/email-protection#86eee3eaeae9c6e0f4efe7a8e5e9eb"><span className="__cf_email__" data-cfemail="432b262f2f2c0325312a226d202c2e">[email&#160;protected]</span></a></span>
                                </div>

                                <div className="footer-info-contact">
                                    <i className="flaticon-pin"></i>
                                    <h3>Address</h3>
                                    <span>32 st Kilda Road, Melbourne VIC, 3004 Australia</span>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    </div>
  )
}

export default footer
