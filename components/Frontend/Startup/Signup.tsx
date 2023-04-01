import React from "react";

const Signup = () => {
  return (
    <>
      {/* Start Page Title Area */}
      <section>
        <div className="container mt-lg-5">
          <div className="register-form">
            <h4 className="text-center">Lets Get started</h4>
            <div className="row justify-content-center">
              <div className="col-md-10">
                <ul
                  className="nav nav-tabs nav-pills"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="home-tab-pane"
                      aria-selected="true"
                    >
                      <span className="circleimge">1</span>
                      Personal Details
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="profile-tab-pane"
                      aria-selected="false"
                    >
                      <span className="circleimge">2</span> Startup Details
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabIndex={0}
              >
                <div className="row justify-content-center">
                  <div className="col-md-8" id="register">
                    <div className="row">
                      <div className="col-md-6 mt-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          First Name <span className="text-mandatory">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control same-input"
                          name
                          id
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Email ID <span className="text-mandatory">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control same-input"
                          name
                          id
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Password <span className="text-mandatory">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control same-input"
                          name
                          id
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label htmlFor className="d-block mb-3">
                          Gender <span className="text-mandatory">*</span>
                        </label>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            defaultValue="option1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                          >
                            Male
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            defaultValue="option2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                          >
                            Female
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mt-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Phone number <span className="text-mandatory">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control same-input"
                          name
                          id
                        />
                        <p>
                          Please enter the number with respective country code.
                        </p>
                      </div>
                      <div className="col-md-6 mt-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Linkedin URL <span className="text-mandatory">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control same-input"
                          name="linkedin_url"
                          id
                        />
                      </div>
                      <div className="col-sm-6 mt-2">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label mb-4"
                        >
                          Country of Citizenship
                          <span className="text-mandatory">*</span>
                        </label>
                        <select
                          className="form-select form-select-lg mb-3 css-1492t68 "
                          aria-label=".form-select-lg example"
                        >
                          <option selected>Open this select menu</option>
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor className="d-block mb-4">
                          Do you have assets worth over INR 2 cr apart from your
                          primary residence?{" "}
                          <span className="text-mandatory">*</span>
                        </label>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            defaultValue="option1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                          >
                            YES
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            defaultValue="option2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                          >
                            NO
                          </label>
                        </div>
                        <p>
                          This information is required as per SEBI guidelines
                        </p>
                      </div>
                    </div>
                    <div className="banner-btn justify-content-between d-md-flex mt-5 mb-5">
                      <a href="/startup" className="default-btn">
                        Go back
                      </a>
                      <a href="/thank-you" className="default-btn">
                        Continue to Startup Details &gt;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
                tabIndex={0}
              >
                <div className="row justify-content-center">
                  <div className="col-md-8" id="register">
                    <div className="row">
                      <div className="col-md-6 mt-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Name of Startup
                          <span className="text-mandatory">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control same-input"
                          name
                          id
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Registered name of Startup
                          <span className="text-mandatory">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control same-input"
                          name
                          id
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Website URL<span className="text-mandatory">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control same-input"
                          name
                          id
                        />
                      </div>
                      <div className="col-sm-6 mt-2">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label mb-4"
                        >
                          Sector of Startup
                          <span className="text-mandatory">*</span>
                        </label>
                        <select
                          className="form-select form-select-lg mb-3 css-1492t68 "
                          aria-label=".form-select-lg example"
                        >
                          <option selected>Open this select menu</option>
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                        </select>
                      </div>
                      <div className="col-sm-6 mt-2">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label mb-4"
                        >
                          Stage of Startup
                          <span className="text-mandatory">*</span>
                        </label>
                        <select
                          className="form-select form-select-lg mb-3 css-1492t68 "
                          aria-label=".form-select-lg example"
                        >
                          <option selected>Open this select menu</option>
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                        </select>
                      </div>
                      <div className="col-md-6 mt-2">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Month &amp; year of inception
                          <span className="text-mandatory">*</span>
                        </label>
                        <input
                          type="date"
                          className="form-control same-input"
                          placeholder="MM/YYY"
                        />
                      </div>
                      <div className="col-sm-6 mt-2">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label mb-4"
                        >
                          City of operation
                          <span className="text-mandatory">*</span>
                        </label>
                        <select
                          className="form-select form-select-lg mb-3 css-1492t68 "
                          aria-label=".form-select-lg example"
                        >
                          <option selected>Open this select menu</option>
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                          /startup-buisness       <option value={3}>Three</option>
                        </select>
                      </div>
                      <div className="col-md-6 mt-2">
                        <div
                          id="divHabilitSelectors"
                          className="input-file-container"
                        >
                          <input
                            className="input-file"
                            id="fileupload"
                            name="files"
                            type="file"
                            multiple
                          />
                          <label
                            htmlFor="fileupload"
                            className="input-file-trigger"
                            id="labelFU"
                            tabIndex={0}
                          >
                            Drop your pitch deck here to <a href="#">Upload</a>{" "}
                            <br />
                            <p>
                              You can upload a pdf file only (max size 20 MB)
                            </p>
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label
                            htmlFor="exampleFormControlTextarea1"
                            className="form-label"
                          >
                            100 characters to tell us what you are building
                            <span className="text-mandatory">*</span>
                          </label>
                          {/* <textarea class="form-control" id="exampleFormControlTextarea1"
                                          rows="3"></textarea> */}
                          <textarea
                            rows={4}
                            maxLength={100}
                            name="product_summary"
                            className="edit-textarea form-control"
                            size={100}
                            labeltitle="100 characters to tell us what you are building"
                            labelname="product_summary"
                            placeholder="Enter details here"
                            spellCheck="false"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="banner-btn justify-content-between d-flex mt-5 mb-5">
                      <a href="/startup" className="default-btn">
                        Go back
                      </a>
                      <a href="/thank-you" className="default-btn">
                        Submit &amp; Sign Up
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Page Title Area */}
    </>
  );
};

export default Signup;
