import React from 'react'
import { useState ,useEffect } from 'react';
import axios from "axios";

export default function Preferences1() {
    const [countries, setcountries] = useState([]);
    const [investor, setinvestor] = useState({
        firstname:"",
        lastname:"",
        email:"",
        gender:"",
        country:"",
        linkedinurl:"",
        city:"",
        phoneno:""
    });
    const handleChange = (event)=>{
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

    const getConuntries = async ()=>{
        try{
            const res = await axios.get('http://127.0.0.1:8000/api/countries');
            const data = res.data;
            setcountries(data.data);
        }catch(err){
            console.log(err);
        }
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            console.log(investor);
            const res = await axios.post('http://127.0.0.1:8000/api/investor-register',investor);
            console.log(res);
            return false;
        }catch(err){
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
                                                    required
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
                                                    required
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
                                                    required
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
                                                        countries.map((country,index)=>(
                                                            <option value={country.id}>{country.name}</option>
                                                        ))
                                                    }
                                                </select>
                                                <div className="help-block with-errors" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>Linkedin URL<span style={{ 'color': 'red' }}>*</span></label>
                                                <input
                                                    type="text"
                                                    name="linkedinurl"
                                                    id="linkedin"
                                                    className="form-control"
                                                    required
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
                                                    required
                                                    onChange={handleChange}
                                                />
                                                <div className="help-block with-errors" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>Phone number<span style={{ 'color': 'red' }}>*</span></label>
                                                <input
                                                    type="text"
                                                    name="phoneno"
                                                    id="phoneno"
                                                    className="form-control"
                                                    required
                                                    onChange={handleChange}
                                                    data-error="Please enter your name"
                                                    placeholder="Enter Phone Number"
                                                />
                                                <div className="help-block with-errors" />
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label>Which of these best describes you?<span style={{ 'color': 'red' }}>*</span></label>
                                                <select className="form-control" aria-label="Default select example">
                                                    <option selected disabled>Select Your Profile</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                                <div className="help-block with-errors" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>Do you have assets worth over INR 2 cr apart from your primary residence?<span style={{ 'color': 'red' }}>*</span></label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    className="form-control"
                                                    required
                                                    data-error="Please enter your name"
                                                    placeholder="Name"
                                                />
                                                <div className="help-block with-errors" />
                                            </div>

                                            <div className="form-group col-md-12">
                                                <label>Help us understand your experience better (multiple options can be selected)<span style={{ 'color': 'red' }}>*</span></label><br />

                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" for="flexCheckDefault">
                                                        You have invested in startups before
                                                    </label>
                                                </div>

                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" for="flexCheckDefault">
                                                        You come from an entrepreneurial family or have been a founder/co-founder of a business venture family
                                                    </label>
                                                </div>

                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" for="flexCheckDefault">
                                                        You have at least 10 years of work experience
                                                    </label>
                                                </div>

                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" for="flexCheckDefault">
                                                        None of the above
                                                    </label>
                                                </div>

                                                <div className="help-block with-errors" />
                                            </div>

                                            <div className="form-group col-md-12 mt-3">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
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
