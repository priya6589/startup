import React from 'react';

export default function Investor() {
    return (
        <>
            <div className="page-title-area item-bg-1">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="page-title-content">
                                <h2>Welcome to Start Up</h2>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li>Thank you</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <section className="services-section pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                        <div className="row">
                            <div className="col-md-4">
                                <img style={{'height':'250px'}} src="/assets/img/team/3.jpg"/>
                                <h3>Shanti Mohan</h3>
                                <span>Founder</span>
                            </div>
                            <div className="col-md-8">
                                <h3>Congratulations on taking the first step to becoming an LV Angel!</h3>
                            <p className="text-dark">At LetsVenture, we believe in enabling you to connect with founders who build disruptive startups and enable you to grow together within the ecosystem. Our focus has always been to do right by our founders while protecting our investors.
From finding the right startup, easing the commitment process to everything post-investment, let’s build the future of the Private markets together.</p>
                            </div>
                        </div>
                        </div>
                    <a className="col-md-6 text-center m-auto default-btn mt-5 mb-5" href="/join/investor/preferences1">
                                Let's Invest Together
                            </a>
                            <div className="bottom-content col-md-12">
                                <p className="text-dark">
                                To begin your journey we request you to fill the form which should take you around 2-3 minutes to complete.
                                </p>
                            </div>
                    </div>
                </div>
            </section>
        </>
    )
}
