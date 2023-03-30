import React from 'react'

export default function Login() {
    return (
        <>
            <div className="page-title-area item-bg-1">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="page-title-content">
                                <h2>Log In</h2>
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li>Log In</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="login-section ptb-100">
                <div className="container">
                    <div className="login-form">
                        <div className="login-title">
                            <h3>Welcome Back!</h3>
                            <p>Please login to your account.</p>
                        </div>
                        <form>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Password" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="checkme" />
                                        <label className="form-check-label" htmlFor="checkme">Keep me Log In</label>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <p className="forgot-password"><a href="#">Forgot Password?</a></p>
                                </div>
                                <div className="col-lg-12">
                                    <div className="send-btn">
                                        <button type="submit" className="default-btn">
                                            Log In Now
                                        </button>
                                    </div>
                                    <br />
                                    <span>Don't have account? <a href="sign-up.html">Signup!</a></span>
                                </div>
                            </div>
                        </form>
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
            </div>
        </>
    )
}
