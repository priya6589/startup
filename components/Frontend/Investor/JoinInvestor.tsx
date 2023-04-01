import React from 'react';

export default function Investor() {
    return (
        <>
            <section className="coming-soon-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="coming-soon-content">
                                <h1>Our website is Coming Soon</h1>
                                <p>Our website is currently undergoing scheduled maintenance. We Should be back shortly. Thank you for your patience.</p>
                                <a className="default-btn mt-5 mb-5" href="/join/investor/preferences1">
                                            Let's Invest Together
										</a>
                                <div id="timer">
                                    <div id="days" />
                                    <div id="hours" />
                                    <div id="minutes" />
                                    <div id="seconds" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="social-list">
                    <li className="list-heading">Follow us for update:</li>
                    <li><a href="#" className="facebook" target="_blank"><i className="flaticon-facebook" /></a></li>
                    <li><a href="#" className="twitter" target="_blank"><i className="flaticon-twitter" /></a></li>
                    <li><a href="#" className="linkedin" target="_blank"><i className="flaticon-pinterest" /></a></li>
                    <li><a href="#" className="instagram" target="_blank"><i className="flaticon-instagram" /></a></li>
                </ul>
            </section>
        </>
    )
}
