import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import OtpPopup from '../OtpPopup';

export default function Preferences1() {
    const [countries, setcountries] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [errors, setErrors] = useState({});
    const [investor, setinvestor] = useState({
        firstname: "",
        lastname: "",
        email: "",
        gender: "",
        country: "",
        linkedinurl: "",
        city: "",
        phone: "",
        profile: "",
        residence_worth: "",
        experience: "",
        kyc_purposes: "",
        password: "",
        confirmPassword: ""
    });

    const validateInvestor = () => {
        const errors = {};

        // Check if firstname is not empty
        if (!investor.firstname) {
            errors.firstname = "First name is required";
        }

        // Check if lastname is not empty
        if (!investor.lastname) {
            errors.lastname = "Last name is required";
        }

        // Check if email is valid
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!investor.email) {
            errors.email = "Email is required";
        } else if (!emailRegex.test(investor.email)) {
            errors.email = "Invalid email format";
        }

        // Check if gender is selected
        if (!investor.gender) {
            errors.gender = "Gender is required";
        }

        // Check if country is selected
        if (!investor.country) {
            errors.country = "Country is required";
        }

        // Check if linkedinurl is valid
        // const linkedinRegex = /^(https?:\/\/)?([\w\.]+)\.([a-z]{2,6}\.?)(\/[\w\.]*)*\/?$/;
        // if (investor.linkedinurl && !linkedinRegex.test(investor.linkedinurl)) {
        //     errors.linkedinurl = "Invalid LinkedIn URL format";
        // }

        // Check if city is not empty
        if (!investor.city) {
            errors.city = "City is required";
        }

        // Check if phone is valid
        const phoneRegex = /^\d{10}$/;
        if (investor.phone && !phoneRegex.test(investor.phone)) {
            errors.phone = "Invalid phone number format";
        }

        // Check if profile is selected
        if (!investor.profile) {
            errors.profile = "Profile is required";
        }

        // Check if residence_worth is selected
        if (!investor.residence_worth) {
            errors.residence_worth = "Residence worth is required";
        }

        // Check if experience is selected
        if (!investor.experience) {
            errors.experience = "Experience is required";
        }

        // Check if kyc_purposes is selected
        if (!investor.kyc_purposes) {
            errors.kyc_purposes = "KYC purposes is required";
        }

        if (!investor.password.trim()) {
            errors.password = "Password is required";
          } else if (investor.password.trim().length < 8) {
            errors.password = "Password must be at least 8 characters long";
          }
        
          if (!investor.confirmPassword.trim()) {
            errors.confirmPassword = "Confirm Password is required";
          } else if (investor.confirmPassword.trim() !== investor.password.trim()) {
            errors.confirmPassword = "Confirm Password does not match Password";
          }

        return errors;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setinvestor((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    }
    useEffect(() => {
        getConuntries();
    }, []);

    const getConuntries = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/countries`);
            const data = res.data;
            setcountries(data.data);
        } catch (err) {
            console.log(err);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const errors = validateInvestor();
            if (Object.keys(errors).length === 0) {
                console.log(investor);
                const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/investor-register`, investor);
                const data = res.data;
                if (data.status === true) {
                    console.log(data.otp);
                    toast.success(data.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    setShowPopup(true);
                }else{
                    toast.error(`Registration failed!`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                }
            } else {
                setErrors(errors);
                Object.values(errors).forEach((error) => {
                    toast.error(`${error}`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                  });
            }
            return false;
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div>
                {/* Start Page Title Area */}
                <div className="page-title-area item-bg-5">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="page-title-content">
                                    <h2>Preferences</h2>
                                    <ul>
                                        <li>
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li>Preferences 1</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Page Title Area */}
                {showPopup === true ? <OtpPopup /> : ""}
                {/* Start Contact Area */}
                <section className="contact-section pb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="contact-text text-center pt-5 pb-5">
                                    <h3>Lets Get Started</h3>
                                </div>
                                <div className="contact-form">
                                    <form id="contactForm" onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="form-group col-md-6">
                                                <label>First Name<span style={{ 'color': 'red' }}>*</span></label>
                                                <input
                                                    type="text"
                                                    name="firstname"
                                                    id="firstname"
                                                    className="form-control"
                                                    
                                                    onChange={handleChange}
                                                    data-error="Please enter your first name"
                                                />
                                                <div className="help-block with-errors" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>Last Name<span style={{ 'color': 'red' }}>*</span></label>
                                                <input
                                                    type="text"
                                                    name="lastname"
                                                    id="lastname"
                                                    className="form-control"
                                                    
                                                    onChange={handleChange}
                                                    data-error="Please enter your last name"
                                                />
                                                <div className="help-block with-errors" />
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label>Email<span style={{ 'color': 'red' }}>*</span></label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    className="form-control"
                                                    
                                                    onChange={handleChange}
                                                    data-error="Please enter your email"
                                                />
                                                <div className="help-block with-errors" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>Gender<span style={{ 'color': 'red' }}>*</span></label><br />
                                                <div className="d-flex justify-content-between">
                                                    <input className="form-check-input" onChange={handleChange} type="radio" name="gender" value="male" />Male
                                                    <input className="form-check-input" onChange={handleChange} type="radio" name="gender" value="female" />Female
                                                    <input className="form-check-input" onChange={handleChange} type="radio" name="gender" value="other" />Others
                                                </div>
                                                <div className="help-block with-errors" />
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label>Country of Citizenship<span style={{ 'color': 'red' }}>*</span></label>
                                                <select className="form-control" name="country" onChange={handleChange} aria-label="Default select example">
                                                    <option selected disabled>Enter the Country Name</option>
                                                    {
                                                        countries.map((country, index) => (
                                                            <option value={country.name}>{country.name}</option>
                                                        ))
                                                    }
                                                </select>
                                                <div className="help-block with-errors" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>Linkedin URL<span style={{ 'color': 'red' }}>*</span></label>
                                                <input
                                                    type="url"
                                                    name="linkedinurl"
                                                    id="linkedin"
                                                    className="form-control"
                                                    
                                                    onChange={handleChange}
                                                    data-error="Please enter your name"
                                                />
                                                <div className="help-block with-errors" />
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label>Which city do you live in?<span style={{ 'color': 'red' }}>*</span></label>
                                                <input
                                                    type="text"
                                                    name="city"
                                                    id="city"
                                                    className="form-control"
                                                    
                                                    onChange={handleChange}
                                                />
                                                <div className="help-block with-errors" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>Phone number<span style={{ 'color': 'red' }}>*</span></label>
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    id="phone"
                                                    className="form-control"
                                                    
                                                    onChange={handleChange}
                                                    data-error="Please enter your name"
                                                    placeholder="Enter Phone Number"
                                                />
                                                <div className="help-block with-errors" />
                                            </div>


                                            <div className="form-group col-md-6">
                                                <label>Password<span style={{ 'color': 'red' }}>*</span></label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    className="form-control"
                                                    
                                                    onChange={handleChange}
                                                />
                                                <div className="help-block with-errors" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>Confirm Password<span style={{ 'color': 'red' }}>*</span></label>
                                                <input
                                                    type="password"
                                                    name="confirmPassword"
                                                    id="confirmPassword"
                                                    className="form-control"
                                                    
                                                    onChange={handleChange}
                                                />
                                                <div className="help-block with-errors" />
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label>Which of these best describes you?<span style={{ 'color': 'red' }}>*</span></label>
                                                <select className="form-control" name='profile' onChange={handleChange} aria-label="Default select example">
                                                    <option selected disabled>Select Your Profile</option>
                                                    <option value="Business Owner">Business Owner</option>
                                                    <option value="Professional">Professional</option>
                                                    <option value="VC & PE Professional">VC & PE Professional</option>
                                                    <option value="Startup Founder">Startup Founder</option>
                                                    <option value="Corporate Institution">Corporate Institution</option>
                                                    <option value="Startup Founder">Startup Founder</option>

                                                </select>
                                                <div className="help-block with-errors" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>Do you have assets worth over INR 2 cr apart from your primary residence?<span style={{ 'color': 'red' }}>*</span></label>

                                                <div className="d-flex justify-content-between">
                                                    <input className="form-check-input" onChange={handleChange} type="radio" name="residence_worth" value="yes" />Yes
                                                    <input className="form-check-input" onChange={handleChange} type="radio" name="residence_worth" value="no" />No
                                                </div>
                                                <div className="help-block with-errors" />
                                            </div>

                                            <div className="form-group col-md-12">
                                                <label>Help us understand your experience better (multiple options can be selected)<span style={{ 'color': 'red' }}>*</span></label><br />

                                                <div className="form-check">
                                                    <input className="form-check-input" onChange={handleChange} type="checkbox" value="You have invested in startups before" name="experience" id="flexCheckDefault" />
                                                    <label className="form-check-label" >
                                                        You have invested in startups before
                                                    </label>
                                                </div>

                                                <div className="form-check">
                                                    <input className="form-check-input" onChange={handleChange} type="checkbox" value="You come from an entrepreneurial family or have been a founder/co-founder of a business venture family" name="experience" id="flexCheckDefault" />
                                                    <label className="form-check-label" for="flexCheckDefault">
                                                        You come from an entrepreneurial family or have been a founder/co-founder of a business venture family
                                                    </label>
                                                </div>

                                                <div className="form-check">
                                                    <input className="form-check-input" onChange={handleChange} type="checkbox" value="You have at least 10 years of work experience" name="experience" id="flexCheckDefault" />
                                                    <label className="form-check-label" for="flexCheckDefault">
                                                        You have at least 10 years of work experience
                                                    </label>
                                                </div>

                                                <div className="form-check">
                                                    <input className="form-check-input" onChange={handleChange} type="checkbox" value="" name="experience" id="flexCheckDefault" />
                                                    <label className="form-check-label" for="flexCheckDefault">
                                                        None of the above
                                                    </label>
                                                </div>

                                                <div className="help-block with-errors" />
                                            </div>

                                            <div className="form-group col-md-12 mt-3">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" onChange={handleChange} id="flexCheckDefault" name="kyc_purposes" required />
                                                    <label className="form-check-label" for="flexCheckDefault">
                                                        I certify that all the information provided by me is accurate and I am willing to provide evidence for the same for KYC purposes when requested.
                                                    </label>
                                                </div>

                                                <div className="help-block with-errors" />

                                                <div className="row mt-3">
                                                    <div className="col-md-6">
                                                        <button className="btn btn-outline-primary">Go Back</button>
                                                    </div>
                                                    <div className="col-md-6 text-right">
                                                        <button type="submit" className="btn btn-primary">Sign Up</button>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* End Contact Area */}
            </div>
        </>
    )
}
