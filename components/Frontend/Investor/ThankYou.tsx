import React from 'react'

export default function ThankYou() {
  return (
    <>
        <>
            <div className="page-title-area item-bg-1">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="page-title-content">
                                <h2>Thank You</h2>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li>Thank you</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Start Services Area */}
            <section className="services-section pt-100 pb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Thank you for signing up</h2>
                        <p>Thank you for signing up. Since you do not currently meet the eligibility criteria for the SEBI registered Category-1 AIF 'LV Angel Fund', we will not be able to proceed further. If you have any further queries in this regard or if you do meet the eligibility criteria (mentioned below), please write to contact@letsventure.com with the subject line "Investor Onboarding Query"..</p>
                        <div className="bar" />
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <ol>
                                <li>
                                You have a net worth of over INR 2 cr (apart from primary residence) as an individual investor or INR 10 cr as an institution, AND
                                </li>
                                <li>
                                You meet at least one of the following experience criteria:
You have invested in startups before
You have been a serial entrepreneur
You are a senior management professional with at least 10 years of experience
                                </li>
                            </ol>
                            <p>
                            To enhance your knowledge about private market investing, please do check our online Angel Investing learning courses on LV Learn.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Services Area */}
        </>
    </>
  )
}
