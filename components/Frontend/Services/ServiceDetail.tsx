import React from 'react'

export default function ServiceDetail() {
    return (
        <>
            <div className="page-title-area item-bg-4">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="page-title-content">
                                <h2>Services</h2>
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li>Single Services</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="services-details-area ptb-100">
                <div className="container">
                    <div className="services-details-video">
                        <div className="details-image">
                            <img src="assets/img/services-details/bg.jpg" alt="image" />
                        </div>
                        <div className="details-video">
                            <a href="https://www.youtube.com/watch?v=YymWhauqjoA" className="video-btn popup-youtube">
                                <i className="bx bx-play" />
                            </a>
                        </div>
                        <div className="text">
                            <h3>We Provide Useful Services</h3>
                            <p>Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <div className="services-details-overview">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-desc">
                                    <h3>Exceptional Best Products</h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                    <div className="features-text">
                                        <h4>Reasons to Go with vegetables</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                                    </div>
                                    <div className="features-text">
                                        <h4>Summer Vegetables Fruits Collection</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-image">
                                    <img src="assets/img/services-details/1.jpg" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="services-details-overview">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-image">
                                    <img src="assets/img/services-details/2.jpg" alt="image" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-desc">
                                    <h3>We Provide Useful Services</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                                    <div className="services-details-accordion">
                                        <ul className="accordion">
                                            <li className="accordion-item">
                                                <a className="accordion-title active" href="javascript:void(0)">
                                                    <i className="bx bx-plus" />
                                                    Which material types can you work with?
                                                </a>
                                                <p className="accordion-content show">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </li>
                                            <li className="accordion-item">
                                                <a className="accordion-title" href="javascript:void(0)">
                                                    <i className="bx bx-plus" />
                                                    Is Smart Lock required for instant apps?
                                                </a>
                                                <p className="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                            </li>
                                            <li className="accordion-item">
                                                <a className="accordion-title" href="javascript:void(0)">
                                                    <i className="bx bx-plus" />
                                                    Why Choose Our Services In Your Business?
                                                </a>
                                                <p className="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
