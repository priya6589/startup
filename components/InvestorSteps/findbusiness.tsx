import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";
import { getCountries, saveInvestorProfile } from '../../lib/frontendapi';
import { getCurrentUserData }  from '../../lib/session';
import e from "express";

const alertStyle = {
  color: 'red',
};
const textStyle = {
  textTransform: 'capitalize',
};

export default function findbusiness() {

  const [countries, setCountries] = useState([]);
  const router = useRouter();
  const [userid, setUserId] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [linkedinurl, setLinkedinurl] = useState('');

  const SubmitForm = (e:any) => {
    e.preventDefault();
    let id = userid;
    const data = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      phone: phone,
      gender: gender,
      country: country,
      city: city,
      linkedinurl: linkedinurl
    }
    saveInvestorProfile(id,data)
      .then(res => {
        if (res.status == true) {
          toast.success("Profile has been submitted succesfully", {
            position: toast.POSITION.TOP_RIGHT,
            toastId: 'success'
          });
        } else {
          toast.error("Profile has been not submitted succesfully", {
            position: toast.POSITION.TOP_RIGHT,
            toastId: 'error'
          });
        }
      })
      .catch(err => {
        toast.error("Contact has been not submitted succesfully", {
          position: toast.POSITION.TOP_RIGHT,
          toastId: 'error'
        });
      });
  }
  useEffect(() => {
    const current_user_data = getCurrentUserData();
    if(current_user_data.id != null){
      current_user_data.id ? setUserId(current_user_data.id ) : setUserId('');
      console.log(current_user_data.id);
    }
    getCountries()
      .then(res => {
        if (res.status == true) {
          setCountries(res.data);
          console.log(res.message);
        } else {
          console.log('error');
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

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
                    <form className="needs-validation mb-4" onSubmit={SubmitForm}>
                      <h4 className="black_bk_col fontweight500 font_20 mb-4 text-center"> Complete your Profile<i style={{ "cursor": 'pointer' }} className="fa fa-info-circle" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Please type in your full business name into the field below. This would be your registered company name."></i></h4>
                      <div className="row justify-content-center">
                        <div className="col-md-8" id="register">
                          <div className="row">
                            <div className="col-md-6 mt-3">
                              <label htmlFor="exampleFormControlInput1" className="form-label">First Name <span className="text-mandatory">*</span></label>
                              <input type="text" className="form-control same-input" name="name" id="name" onChange={(e) => setFirstName(e.target.value)}/>
                            </div>
                            <div className="col-md-6 mt-3">
                              <label htmlFor="exampleFormControlInput1" className="form-label">Last Name <span className="text-mandatory">*</span></label>
                              <input type="text" className="form-control same-input" name="name" id="name" onChange={(e) => setLastName(e.target.value)}/>
                            </div>
                            <div className="col-md-6 mt-3">
                              <label htmlFor="exampleFormControlInput1" className="form-label">Email ID <span className="text-mandatory">*</span></label>
                              <input type="text" className="form-control same-input" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="col-md-6 mt-3">
                              <label htmlFor="exampleFormControlInput1" className="form-label">Phone number <span className="text-mandatory">*</span></label>
                              <input type="text" className="form-control same-input" name="" id="phone" onChange={(e) => setPhone(e.target.value)}/>
                              <p>Please enter the number with respective country code.</p>
                            </div>
                            <div className="col-sm-6 mt-4">
                              <label htmlFor="exampleFormControlInput1" className="form-label mb-4">Country of Citizenship <span className="text-mandatory">*</span></label>
                              <select className="form-select form-select-lg mb-3 css-1492t68 " aria-label=".form-select-lg example" name="country">
                                <option >Please select country</option>
                                {countries.map(country => (
                                  <option key={country.id} value={country.id}>{country.name}</option>
                                ))}
                              </select>
                            </div>
                            <div className="col-sm-6 mt-4">
                              <label htmlFor="exampleFormControlInput1" className="form-label mb-4">Which city do you live in? <span className="text-mandatory">*</span></label>
                              <input type="text" className="form-control same-input" name="city" id="city" onChange={(e) => setCity(e.target.value)}/>
                            </div>
                            <div className="col-md-6 mt-3">
                              <label htmlFor="exampleFormControlInput1" className="form-label">Linkedin URL <span className="text-mandatory">*</span></label>
                              <input type="text" className="form-control same-input" name="linkedin_url" id="" onChange={(e) => setLinkedinurl(e.target.value)}/>
                            </div>
                            <div className="col-md-6 mt-3">
                              <label htmlFor="" className="d-block mb-4">Gender <span className="text-mandatory">*</span></label>
                              <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender"
                                  id="gender" value="male" />
                                <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender"
                                  id="gender" value="female" />
                                <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender"
                                  id="gender" value="other" />
                                <label className="form-check-label" htmlFor="inlineRadio3">Others</label>
                              </div>
                            </div>
                          </div>
                          <div className="banner-btn justify-content-between mt-5 mb-5" style={{ "textAlign": "right" }}>
                            <button className="default-btn">
                              Next
                            </button>
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
        <ToastContainer />
      </div>
    </>
  )
}
