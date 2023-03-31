import React from 'react'

export default function Pricing() {
    return (
        <>
            <div className="page-title-area item-bg-1">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="page-title-content">
                                <h2>Pricing</h2>
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li>Pricing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="pricing-section pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Our <span>Pricing</span> Plan</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                        <div className="bar" />
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-pricing">
                                <div className="pricing-header">
                                    <h3>Basic</h3>
                                    <p>Business Up</p>
                                </div>
                                <div className="price">
                                    <sup>$</sup>29<sub>/mo</sub>
                                </div>
                                <ul className="pricing-list">
                                    <li>
                                        <i className="flaticon-checked" />
                                        10 GB Hosting
                                    </li>
                                    <li>
                                        <i className="flaticon-checked" />
                                        2 Unique Users
                                    </li>
                                    <li>
                                        <i className="flaticon-checked" />
                                        12 GB Capacity
                                    </li>
                                    <li>
                                        <i className="flaticon-cancel" />
                                        Any Where Access
                                    </li>
                                    <li>
                                        <i className="flaticon-cancel" />
                                        Weekly Backup
                                    </li>
                                    <li>
                                        <i className="flaticon-cancel" />
                                        Support 24/Hour
                                    </li>
                                </ul>
                                <div className="price-btn">
                                    <a href="pricing.html" className="default-btn">
                                        Buy Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-pricing">
                                <div className="pricing-header">
                                    <h3>Standard</h3>
                                    <p>Business Up</p>
                                </div>
                                <div className="price">
                                    <sup>$</sup>79<sub>/mo</sub>
                                </div>
                                <ul className="pricing-list">
                                    <li>
                                        <i className="flaticon-checked" />
                                        Visitor Info
                                    </li>
                                    <li>
                                        <i className="flaticon-checked" />
                                        Quick Responses
                                    </li>
                                    <li>
                                        <i className="flaticon-checked" />
                                        12 GB Capacity
                                    </li>
                                    <li>
                                        <i className="flaticon-checked" />
                                        Any Where Access
                                    </li>
                                    <li>
                                        <i className="flaticon-cancel" />
                                        Weekly Backup
                                    </li>
                                    <li>
                                        <i className="flaticon-cancel" />
                                        Support 24/Hour
                                    </li>
                                </ul>
                                <div className="price-btn">
                                    <a href="pricing.html" className="default-btn">
                                        Buy Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="single-pricing">
                                <div className="pricing-header">
                                    <h3>Premium</h3>
                                    <p>Business Up</p>
                                </div>
                                <div className="price">
                                    <sup>$</sup>99<sub>/mo</sub>
                                </div>
                                <ul className="pricing-list">
                                    <li>
                                        <i className="flaticon-checked" />
                                        10 GB Hosting
                                    </li>
                                    <li>
                                        <i className="flaticon-checked" />
                                        2 Unique Users
                                    </li>
                                    <li>
                                        <i className="flaticon-checked" />
                                        12 GB Capacity
                                    </li>
                                    <li>
                                        <i className="flaticon-checked" />
                                        Any Where Access
                                    </li>
                                    <li>
                                        <i className="flaticon-checked" />
                                        Weekly Backup
                                    </li>
                                    <li>
                                        <i className="flaticon-cancel" />
                                        Support 24/Hour
                                    </li>
                                </ul>
                                <div className="price-btn">
                                    <a href="pricing.html" className="default-btn">
                                        Buy Now
                                    </a>
                                </div>
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
            </section>
        </>
    )
}
