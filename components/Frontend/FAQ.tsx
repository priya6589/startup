import React from 'react'

export default function FAQ() {
    return (
        <>
            <div className="page-title-area item-bg-4">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="page-title-content">
                                <h2>Faq</h2>
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li>Faq</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* faq */}
            <section className="faq-section ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Frequently <span>Asked</span> Questions</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                        <div className="bar" />
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="faq-accordion">
                                <ul className="accordion">
                                    <li className="accordion-item">
                                        <a className="accordion-title active" href="javascript:void(0)">
                                            <i className="bx bx-chevron-down" />
                                            What access do I have on the free plan?
                                        </a>
                                        <div className="accordion-content show">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                        </div>
                                    </li>
                                    <li className="accordion-item">
                                        <a className="accordion-title" href="javascript:void(0)">
                                            <i className="bx bx-chevron-down" />
                                            What access do I have on a free trial?
                                        </a>
                                        <div className="accordion-content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                        </div>
                                    </li>
                                    <li className="accordion-item">
                                        <a className="accordion-title" href="javascript:void(0)">
                                            <i className="bx bx-chevron-down" />
                                            Does the price go up as my team gets larger?
                                        </a>
                                        <div className="accordion-content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                        </div>
                                    </li>
                                    <li className="accordion-item">
                                        <a className="accordion-title" href="javascript:void(0)">
                                            <i className="bx bx-chevron-down" />
                                            How can I cancel my subscription?
                                        </a>
                                        <div className="accordion-content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                        </div>
                                    </li>
                                    <li className="accordion-item">
                                        <a className="accordion-title" href="javascript:void(0)">
                                            <i className="bx bx-chevron-down" />
                                            Can I pay via an Invoice?
                                        </a>
                                        <div className="accordion-content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="faq-image">
                                <img src="assets/img/faq.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
