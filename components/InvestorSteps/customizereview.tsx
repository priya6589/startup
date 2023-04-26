import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";
import {getCurrentUserData} from "../../lib/session";
const alertStyle = {
  color: 'red',
};

const textStyle = {
  textTransform: 'capitalize',
};


export default function customizereview() {
  const router = useRouter();
  const [current_user_id, setCurrentUserId] = useState(false);
  const [terms,  setTerms] = useState({
    user_id: current_user_id,
    principal_residence: "",
    cofounder:"",
    prev_investment_exp:"",
    experience:"",
    net_worth:"",
    no_requirements:""
});
  const handleSubmit = (event: any) => {
    event.preventDefault();

  }
 
  

  return (
    <>
      <div className="page-title-area item-bg-5">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-content">
                <h2>Complete Account Details</h2>
                <ul>
                  <li><a href="/">Home</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="left-bar">
        <div className="container">
          <div id="app">
            <ol className="step-indicator">
              <li className="">
                <div className="step_name">
                  Step <span>1</span>
                </div>
                <div className="step_border">
                  <div className="step_complete">
                    <i className="flaticon-checked" aria-hidden="true"></i>
                  </div>
                </div>
                <div
                  className="caption hidden-xs hidden-sm"
                  style={{ color: "#82b440" }}
                >
                  <span>PERSONAL INFORMATION</span>
                </div>
              </li>
              <li className="">
                <div className="step_name">
                  Step <span>2</span>
                </div>
                <div className="step_border">
                  <div className="step">
                    <img
                      className="sidebar-img w-100"
                      src="/assets/img/investor/dollar.png"
                    />
                  </div>
                </div>
                <div className="caption hidden-xs hidden-sm">
                  <span>INVESTOR INFORMATION</span>
                </div>
              </li>
              <li className="active">
                <div className="step_name">
                  Step <span>3</span>
                </div>
                <div className="step_border">
                  <div className="step">
                    <img
                      className="sidebar-img w-50"
                      src="/assets/img/investor/download2.png"
                    />
                  </div>
                </div>
                <div className="caption hidden-xs hidden-sm">
                  <span>BASIC INFORMATION</span>
                </div>
              </li>
            </ol>
            <div className="container">
              <div className="register-form">
                <div className="row step_one">
                  <div className="col-md-12">
                  <h4 className="black_bk_col fontweight500 font_20 mb-4 text-center">
                                                {" "}
                                               Terms & Conditions{" "}
                                                <i
                                                    style={{ cursor: "pointer" }}
                                                    className="fa fa-info-circle"
                                                    aria-hidden="true"
                                                    data-toggle="tooltip"
                                                    data-placement="top"
                                                    title="Please select your investor type.That would be helpful to verify your account."
                                                ></i>
                  </h4>
                    <form className="needs-validation mb-4" >
                      <section>
                        <div className="container" id="option_select">
                          <div className="row">
                            <div className="col-md-12">
                              <select className="options">
                                <option value={1}>Individual</option>
                                <option value={2}>Body Corporate/VC/PE/Family Office 1 /Corporate Institution</option>
                                <option value={3}>Accelerators and Incubators</option>
                              </select>
                              <div id="checkbox-group-1" className="hidden">
                                <div className="same-card">
                                  <div className="row">
                                    <div className="col-auto">
                                      <input type="checkbox" id="checkbox1" name="checkbox1" />
                                    </div>
                                    <div className="col">
                                      <label htmlFor="checkbox1">
                                      Net tangible assets of at least INR 2 Crore excluding value of his principal residence
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="same-card">
                                  <div className="row">
                                    <div className="col-auto">
                                      <input type="checkbox" id="checkbox2" name="checkbox2" />
                                    </div>
                                    <div className="col">
                                      <label htmlFor="checkbox2">Has invested in startups before</label>
                                    </div>
                                  </div>
                                </div>
                                <div className="same-card">
                                  <div className="row">
                                    <div className="col-auto">
                                      <input type="checkbox" id="checkbox3" name="checkbox3" />
                                    </div>
                                    <div className="col">
                                      <label htmlFor="checkbox3">come from an entrepreneurial family or have been a
                                        founder/co-founder of a business
                                        venture</label>
                                    </div>
                                  </div>
                                </div>
                                <div className="same-card">
                                  <div className="row">
                                    <div className="col-auto">
                                      <input type="checkbox" id="checkbox4" name="checkbox4" />
                                    </div>
                                    <div className="col">
                                      <label htmlFor="checkbox4">Senior management professional with at least 10 years of
                                        experience
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div id="checkbox-group-2" className="hidden">
                                <div className="same-card">
                                  <div className="row">
                                    <div className="col-auto">
                                      <input type="checkbox" id="checkbox5" name="checkbox5" />
                                    </div>
                                    <div className="col">
                                      <label htmlFor="checkbox5">Net worth of at least INR 10 Crore</label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div id="checkbox-group-3" className="hidden">
                                <div className="same-card">
                                  <div className="row">
                                    <div className="col-auto">
                                      <input type="checkbox" id="checkbox6" name="checkbox6" />
                                    </div>
                                    <div className="col">
                                      <label htmlFor="checkbox6">No Requirement</label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

                      <div className="row mt-3">
                        <div
                          className="col-md-6"
                          style={{ textAlign: "left" }}
                        >
                          <a
                            href={`/investor-steps/findbusiness`}
                            className="btn btn-primary"
                            id="back"
                          >
                            Go back
                          </a>
                        </div>

                        <div
                          className="col-md-6"
                          style={{ textAlign: "right" }}
                        >
                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <ToastContainer autoClose={5000} /> */}
      </div>
    </>
  );
}
