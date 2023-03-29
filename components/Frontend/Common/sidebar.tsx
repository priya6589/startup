import React from 'react'

const sidebar = () => {
  return (
    <div>
      <div className="sidebar-modal">
            <div className="sidebar-modal-inner">
                <div className="sidebar-about-area">
                    <div className="title">
                        <h2>About Us</h2>
                        <p>We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services. The customer is king, their lives and needs are the inspiration.</p>
                    </div>
                </div>

                <div className="sidebar-contact-feed">
                    <h2>Contact</h2>
                    <div className="contact-form">
                        <form id="contactForm">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input type="text" name="name" id="name" className="form-control" required data-error="Please enter your name" placeholder="Your Name" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input type="email" name="email" id="email" className="form-control" required data-error="Please enter your email" placeholder="Your Email" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input type="text" name="phone_number" id="phone_number" required data-error="Please enter your number" className="form-control" placeholder="Your Phone"/>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input type="text" name="msg_subject" id="msg_subject" className="form-control" required data-error="Please enter your subject" placeholder="Your Subject"/>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <textarea name="message" className="form-control" id="message" cols={30} rows={6} required data-error="Write your message" placeholder="Your Message"></textarea>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="send-btn">
                                        <button type="submit" className="send-btn-one">
                                            Send Message
                                        </button>

                                        <div id="msgSubmit" className="h3 text-center hidden"></div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="sidebar-contact-area">
                    <div className="contact-info">
                        <div className="contact-info-content">
                            <h2>
                                <a href="tel:+0881306298615">
                                    +088 130 629 8615
                                </a>
                                <span>OR</span>
                                <a href="/cdn-cgi/l/email-protection#1f796d767e5f78727e7673317c7072">
                                    <span className="__cf_email__" data-cfemail="5c3a2e353d1c3b313d3530723f3331">[email&#160;protected]</span>
                                </a>
                            </h2>
    
                            <ul className="social">
                                <li>
                                    <a href="#" target="_blank">
                                        <i className="flaticon-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i className="flaticon-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i className="flaticon-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i className="flaticon-pinterest"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <span className="close-btn sidebar-modal-close-btn">
                    <i className="flaticon-cancel"></i>
                </span>
            </div>
        </div>
    </div>
  )
}

export default sidebar
