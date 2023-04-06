import React, { Component, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";
const alertStyle = {
  color: 'red',
};
const textStyle = {
  textTransform: 'capitalize',
};

export default function businessinfo (props:any) {
  const router = useRouter();
  const [blId, setBlId] = useState('');
  const [forwarduId, setForwarduId] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [business_page_id, setBusinessPageId] = useState('');
  const [business_name, setBusinessName] = useState('');
  const [business_address, setBusinessAddress] = useState('');
  const [numberOfLocations, setNumberOfLocations] = useState('');
  const [signup_success, setSignupSuccess] = useState(false);
  const [disableBaddr, setDisableBaddr] = useState(false);
  const [disableBemail, setDisableBemail] = useState(false);

  const handleSubmit = (event:any) => {
      event.preventDefault();
      savedata();
  }
          
const savedata = () => {
  var blid = blId;
  const data = {
      user_id: forwarduId,
      firstname: firstname,
      lastname: lastname,
      phone: phone,
      email: email,
      business_page_id: business_page_id,
      business_name: business_name,
      business_address: business_address,
      number_of_locations: numberOfLocations,
  }
  setSignupSuccess(true);
}
if (signup_success) return router.push('/steps/customizereview');
return (
    <>
      <div className="page-title-area item-bg-5">
        <div className="d-table">
            <div className="d-table-cell">
                <div className="container">
                    <div className="page-title-content">
                        <h2>Complete Account Sign Up</h2>
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
                    <div className="step_name">Step <span>1</span></div>
                    <div className="step_border">
                      <div className="step_complete"><i className="fa fa-check-circle" aria-hidden="true"></i></div>
                    </div>
                    <div className="caption hidden-xs hidden-sm"><span>FIND YOUR BUSINESS</span></div>
                </li>
                <li className="active">
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

                    <div className="row step_two">
                      <div className="col-md-12">
                        <form className="needs-validation mb-4" >
                            <h1 className="black_bk_col fontweight500 font_20 mb-4 text-center"> Complete your business information below  </h1>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                            <input type="text" className="form-control input_custom_style" id="business_name" name="business_name" placeholder="Business name" value={business_name} onChange={(e) => setBusinessName(e.target.value)} />
                            <span style={alertStyle}>{business_name}</span>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">

                              <input disabled={!disableBaddr} type="text" className="form-control input_custom_style" id="business_address" name="business_address" placeholder="Business address" value={business_address} onChange={(e) => setBusinessAddress(e.target.value)} />
                              <span style={alertStyle}>{business_address}</span>

                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-6">
                              <div className="form-group">

                              <input type="text" className="form-control input_custom_style" id="firstname" name="firstname" placeholder="First name" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                              <span style={alertStyle}>{firstname}</span>

                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">

                              <input type="text" className="form-control input_custom_style" id="lastname" name="lastname" placeholder="Last name" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                              <span style={alertStyle}>{lastname}</span>

                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-6">
                              <div className="form-group">

                              <input disabled={!disableBemail} type="text" className="form-control input_custom_style" id="email" name="email" placeholder="Business email" value={email} onChange={(e) => setEmail(e.target.value)} />
                              <span style={alertStyle}>{email}</span>

                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-6">
                              <p className="font_14 text-black fontweight500">How many locations does your business have?</p>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">

                            <select className="fontweight400 font_14 black_bk_col white_bk_col box_select_dgin width_100" id="number_of_locations" name="number_of_locations" value={numberOfLocations} onChange={(e) => setNumberOfLocations(e.target.value)}> 
                              <option value="">Select location</option>
                              <option value="1">1 Location</option>
                              <option value="2">2 Locations</option>
                              <option value="3">3 Locations</option>
                              <option value="4">4 Locations</option>
                              <option value="5">5 Locations</option>
                              {/*<option value="6">6 Locations</option>
                              <option value="7">7 Locations</option>
                              <option value="8">8 Locations</option>
                              <option value="9">9 Locations</option>
                              <option value="10">10 Locations</option>*/}
                            </select>

                            <span style={alertStyle}>{numberOfLocations}</span>

                              </div>
                            </div>
                          </div>
                          <div className="text-center mt-4">
                            <button type="button" className="blue_btn_box" onClick={handleSubmit}>Next</button>
                            <p className="m-0"><a href={`/steps/findbusiness`}>Back</a></p>
                          </div>
                        </form>
                      </div>
                    </div>

            </div>
        </div>
        <ToastContainer autoClose={5000} />
      </div>
    </>
  );
}
