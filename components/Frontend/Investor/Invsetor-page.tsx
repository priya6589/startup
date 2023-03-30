import React from "react";

const Invsetor = () => {
  return (
    <>
      {/* Start Page Title Area */}
      <div className="page-title-area item-bg-5 h-100" id="fill-image">
        <div className="signup-section ptb-100">
          <div className="container">
            <div className="signup-form">
              <h3>Sign-up on Startup</h3>
              <form>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input
                        type="Email"
                        className="form-control"
                        placeholder="Enter your Email*"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12" id="invest">
                    <div className="send-btn">
                      <button type="submit" className="default-btn button">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Title Area */}
    </>
  );
};

export default Invsetor;
