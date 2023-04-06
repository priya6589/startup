import React, {useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";
const alertStyle = {
  color: 'red',
};
const textStyle = {
  textTransform: 'capitalize',
};

export default function findbusiness() {
  const router = useRouter();
  const [blId, setBlId] = useState('');
  const [forwarduId, setForwarduId] = useState('');
  const [find_business_location, setFindBusinessLocation] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [signup_success, setSignupSuccess] = useState(false);

  const handleSubmit = (event:any) => {
      event.preventDefault();
      savedata();
  }

const savedata = () => {
  var uid = '1';
  const data = {
      find_business_location: find_business_location,
      lat:lat,
      lng:lng,
      bl_id:blId,
  }
  setSignupSuccess(true);
}

  const handleAdrChange = (find_business_location:any) => {
    setFindBusinessLocation(find_business_location);
  };

  const handleSelect = (find_business_location:any) => {
    setFindBusinessLocation(find_business_location);
  };

  
if (signup_success) return router.push('/steps/businessinfo');

return(
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
              <li className="active">
                <div className="step_name">Step <span>1</span></div>
                <div className="step_border">
                  <div className="step"><i className="fa fa-circle"></i></div>
                </div>
                <div className="caption hidden-xs hidden-sm"><span>FIND YOUR BUSINESS</span></div>
              </li>
              <li className="">
                <div className="step_name">Step <span>2</span></div>
                <div className="step_border">
                  <div className="step"><i className="fa fa-circle"></i></div>
                </div>
                <div className="caption hidden-xs hidden-sm"><span>BUSINESS INFORMATION</span></div>
              </li>
              <li className="">
                <div className="step_name">Step <span>3</span></div>
                <div className="step_border">
                  <div className="step"><i className="fa fa-circle"></i></div>
                </div>
                <div className="caption hidden-xs hidden-sm"><span>CUSTOMIZE REVIEW SYSTEM</span></div>
              </li>
              <li className="">
                <div className="step_name">Step <span>4</span></div>
                <div className="step_border">
                  <div className="step"><i className="fa fa-circle"></i></div>
                </div>
                <div className="caption hidden-xs hidden-sm"><span>BILLING TO STRIPE</span></div>
              </li>
            </ol>
            <div className="container">
              <div className="register-form">
                {/*<h4 className="text-center mt-5">Find your business</h4>*/}
                <div className="row step_one">
                  <div className="col-md-12">
                    <form className="needs-validation mb-4" >
                      <h4 className="black_bk_col fontweight500 font_20 mb-4 text-center"> Find your business <i style={{"cursor":'pointer'}} className="fa fa-info-circle" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Please type in your full business name into the field below. This would be your registered company name."></i></h4>
                      <div className="row justify-content-center">
                        <div className="col-md-8" id="register">
                          <div className="row">
                              <div className="col-md-6 mt-3">
                                  <label htmlFor="exampleFormControlInput1" className="form-label">First Name <span className="text-mandatory">*</span></label>
                                  <input type="text" className="form-control same-input" name="" id=""/>
                              </div>
                              <div className="col-md-6 mt-3">
                                  <label htmlFor="exampleFormControlInput1" className="form-label">Last Name <span className="text-mandatory">*</span></label>
                                  <input type="text" className="form-control same-input" name="" id=""/>
                              </div>
                              <div className="col-md-6 mt-3">
                                  <label htmlFor="exampleFormControlInput1" className="form-label">Email ID <span className="text-mandatory">*</span></label>
                                  <input type="text" className="form-control same-input" name="" id=""/>
                              </div>
                              <div className="col-md-6 mt-3">
                                  <label htmlFor="exampleFormControlInput1" className="form-label">Password <span className="text-mandatory">*</span></label>
                                  <input type="text" className="form-control same-input" name="" id=""/>
                              </div>
                              <div className="col-md-6 mt-3">
                                  <label htmlFor="" className="d-block mb-4">Gender <span className="text-mandatory">*</span></label>
                                  <div className="form-check form-check-inline">
                                      <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                          id="inlineRadio1" value="option1"/>
                                      <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                                  </div>
                                  <div className="form-check form-check-inline">
                                      <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                          id="inlineRadio2" value="option2"/>
                                      <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                                  </div>
                                  <div className="form-check form-check-inline">
                                      <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                          id="inlineRadio3" value="option3"/>
                                      <label className="form-check-label" htmlFor="inlineRadio3">Others</label>
                                  </div>
                              </div>
                              <div className="col-md-6 mt-3">
                                  <label htmlFor="exampleFormControlInput1" className="form-label">Linkedin URL <span className="text-mandatory">*</span></label>
                                  <input type="text" className="form-control same-input" name="linkedin_url" id=""/>
                              </div>
                              <div className="col-md-6 mt-3">
                                  <label htmlFor="exampleFormControlInput1" className="form-label">Phone number <span className="text-mandatory">*</span></label>
                                  <input type="text" className="form-control same-input" name="" id=""/>
                                  <p>Please enter the number with respective country code.</p>
                              </div>
                              <div className="col-sm-6 mt-4">
                                  <label htmlFor="exampleFormControlInput1" className="form-label mb-4">Country of Citizenship <span className="text-mandatory">*</span></label>
                                  <select className="form-select form-select-lg mb-3 css-1492t68 " aria-label=".form-select-lg example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select>
                              </div>
                              <div className="col-sm-6 mt-4">
                                  <label htmlFor="exampleFormControlInput1" className="form-label mb-4">Which city do you live in? <span className="text-mandatory">*</span></label>
                                  <select className="form-select form-select-lg css-1492t68" aria-label=".form-select-lg example">
                                      <option selected>Open this select menu</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                  </select>
                              </div>
                              <div className="col-md-6">
                                  <label htmlFor="" className="d-block mb-4">Do you have assets worth over INR 2 cr apart from your
                                      primary residence? <span className="text-mandatory">*</span></label>
                                  <div className="form-check form-check-inline">
                                      <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                          id="inlineRadio1" value="option1"/>
                                      <label className="form-check-label" htmlFor="inlineRadio1">YES</label>
                                  </div>
                                  <div className="form-check form-check-inline">
                                      <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                          id="inlineRadio2" value="option2"/>
                                      <label className="form-check-label" htmlFor="inlineRadio2">NO</label>
                                  </div>
                                  <p>This information is required as per SEBI guidelines</p>
                              </div>
                              <div className="col-sm-6">
                                  <label htmlFor="exampleFormControlInput1" className="form-label mb-4">Which of these best describes
                                      you? <span className="text-mandatory">*</span></label>
                                  <select className="form-select form-select-lg css-1492t68" aria-label=".form-select-lg example">
                                      <option selected>Open this select menu</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                  </select>
                              </div>
                              <label htmlFor="" className="mt-5">Help us understand your experience better (multiple options can be
                                  selected)<span className="text-mandatory">*</span></label>
                              <div className=" mt-3 d-flex align-content-center">
                                  <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value=""
                                      aria-label=""/>
                                  <p className="">You have invested in startups before</p>
                              </div>
                              <div className=" mt-3 d-flex align-content-center">
                                  <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value=""
                                      aria-label=""/>
                                  <p className="">You come from an entrepreneurial family or have been a founder/co-founder of a business venture family</p>
                              </div>
                              <div className=" mt-3 d-flex align-content-center">
                                  <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value=""
                                      aria-label=""/>
                                  <p className="">You have at least 10 years of work experience</p>
                              </div>
                              <div className=" mt-3 d-flex align-content-center">
                                  <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value=""
                                      aria-label=""/>
                                  <p className="">None of the above</p>
                              </div>
                              <div className=" mt-3 d-flex align-items-center">
                                  <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value=""
                                      aria-label=""/>
                                  <p className="">I certify that all the information provided by me is accurate and I am willing to provide evidence for the same for KYC purposes when requested.</p>
                              </div>
                          </div>
                          <div className="banner-btn justify-content-between mt-5 mb-5" style={{"textAlign": "right"}}>
                            <a href="#" className="default-btn" onClick={handleSubmit}>Sign Up</a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer autoClose={5000} />
      </div>
    </>
  )
}
