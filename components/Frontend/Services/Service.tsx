import React from 'react'
import Agency from "../It-Agency";
export default function Service() {
    return (
        <>
            <div className="page-title-area item-bg-1">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="page-title-content">
                                <h2>Services</h2>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li>Services</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Start Services Area */}
            <Agency/>
           
            {/* End Services Area */}
        </>
    )
}
