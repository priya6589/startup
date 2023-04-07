import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import router from "next/router";
import { useForm } from "react-hook-form";
import { getCountries,personalInformationSave } from "../../lib/frontendapi";
import {removeToken,removeStorageData,getCurrentUserData,} from "../../lib/session";


const alertStyle = {
  color: "red",
};
const textStyle = {
  textTransform: "capitalize",
};

interface UserData {
  id: number;
}
export default function findbusiness() {
  const [blId, setBlId] = useState("");
  const [forwarduId, setForwarduId] = useState("");
  const [find_business_location, setFindBusinessLocation] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [signup_success, setSignupSuccess] = useState(false);
  const [user,setUser]=useState({});

  const [current_user_id, setCurrentUserId] = useState(false);
  const [email, setEmail] = useState("");
  const [linkedin_url, setLinkedin_url] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [countries, setcountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [phone, setPhone] = useState([]);
  const {
    register,
    formState: { errors },
  } = useForm();


  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const user = {
      email: email,
      gender: gender,
      linkedin_url: linkedin_url,
      city: city,
      phone: phone,
      countries: selectedCountry,
      id : current_user_id
    };


    try {
      const res = await personalInformationSave(user);
      if (res.status == true) {
        toast.success("User Details saved successfully", {
          position: toast.POSITION.TOP_RIGHT,
          toastId: "success",
        });
        setTimeout(() => {
          router.push("/steps/businessinfo");
        }, 2000);
      } else {
        toast.error("User Details has not been saved successfully", {
          position: toast.POSITION.TOP_RIGHT,
          toastId: "error",
        });
      }
    } catch (err) {
      toast.error("User Details has not been saved successfully", {
        position: toast.POSITION.TOP_RIGHT,
        toastId: "error",
      });
    }
  };
  useEffect(() => {

    const current_user_data = getCurrentUserData();
    if(current_user_data.id != null){
      current_user_data.email ? setEmail(current_user_data.email ) : setCurrentUserId('');
      current_user_data.id ? setCurrentUserId(current_user_data.id ) : setCurrentUserId('');
    }else {

      window.location.href = '/login';
    }
   
    const fetchData = async () => {
      const data = await getCountries({});
      if (data) {
        setcountries(data.data);
      }
    };

    fetchData();
}, []);


  const handleCountryChange = async (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleAdrChange = (find_business_location: any) => {
    setFindBusinessLocation(find_business_location);
  };

  const handleSelect = (find_business_location: any) => {
    setFindBusinessLocation(find_business_location);
  };
  
  

  if (signup_success) return router.push("/steps/businessinfo");

  return (
    <>
      <div className="page-title-area item-bg-5">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-content">
                <h2>Complete Account Details</h2>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
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
                <div className="step_name">
                  Step <span>1</span>
                </div>
                <div className="step_border">
                  <div className="step">
                    <i className="fa fa-circle"></i>
                  </div>
                </div>
                <div className="caption hidden-xs hidden-sm">
                  <span>PERSONAL INFORMATION</span>
                </div>
              </li>
              <li className="">
                <div className="step_name">
                  Step <span>2</span>
                </div>
                <div className="step_border">
                  <div className="step">
                    <i className="fa fa-circle"></i>
                  </div>
                </div>
                <div className="caption hidden-xs hidden-sm">
                  <span>BUSINESS INFORMATION</span>
                </div>
              </li>
              <li className="">
                <div className="step_name">
                  Step <span>3</span>
                </div>
                <div className="step_border">
                  <div className="step">
                    <i className="fa fa-circle"></i>
                  </div>
                </div>
                <div className="caption hidden-xs hidden-sm">
                  <span>CONTACT INFORMATION</span>
                </div>
              </li>
              <li className="">
                <div className="step_name">
                  Step <span>4</span>
                </div>
                <div className="step_border">
                  <div className="step">
                    <i className="fa fa-circle"></i>
                  </div>
                </div>
                <div className="caption hidden-xs hidden-sm">
                  <span>KYC INFORMATION</span>
                </div>
              </li>
            </ol>
            <div className="container">
              <div className="register-form">
                {/*<h4 className="text-center mt-5">Find your business</h4>*/}
                <div className="row step_one">
                  <div className="col-md-12">
                    <form className="needs-validation mb-4" onSubmit={handleSubmit}>
                      <h4 className="black_bk_col fontweight500 font_20 mb-4 text-center">
                        Let's Get Started
                        <i
                          style={{ cursor: "pointer" }}
                          className="fa fa-info-circle"
                          aria-hidden="true"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Please type in your full business name into the field below. This would be your registered company name."
                        ></i>
                      </h4>
                      <div className="row justify-content-center">
                        <div className="col-md-8" id="register">
                          <div className="row">
                            <div className="col-md-6 mt-3">
                              <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label"
                              >
                                Email ID{" "}
                                <span className="text-mandatory">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control same-input" value=""
                                id="email"
                                {...register("email", {
                                  onChange: (e) => setEmail(e.target.value),
                                  required: true,
                                })}
                              />
                            </div>
                            <div className="col-md-6 mt-3">
                              <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label"
                              >
                                Linkedin URL{" "}
                                <span className="text-mandatory">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control same-input"
                                id="linkedin_url"
                                {...register("linkedin_url", {
                                  onChange: (e) =>
                                    setLinkedin_url(e.target.value),
                                  required: true,
                                })}
                              />
                            </div>
                            <div className="col-md-6 mt-3">
                              <label htmlFor="" className="d-block mb-4">
                                Gender <span className="text-mandatory">*</span>
                              </label>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  id="inlineRadio1"
                                  value="male" {...register('gender', { onChange: (e) => setGender(e.target.value), required: true })}
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
                                  id="inlineRadio2"
                                  value="female" {...register('gender', { onChange: (e) => setGender(e.target.value), required: true })}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  id="inlineRadio3"
                                  value="other"  {...register('gender', { onChange: (e) => setGender(e.target.value), required: true })}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="inlineRadio3"
                                >
                                  Others
                                </label>
                              </div>
                            </div>

                            <div className="col-md-6 mt-3">
                              <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label"
                              >
                                Phone number{" "}
                                <span className="text-mandatory">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control same-input" id="phone"
                                {...register('phone', { onChange: (e) => setPhone(e.target.value), required: true })}
                              />
                              <p>
                                Please enter the number with respective country
                                code.
                              </p>
                            </div>
                            <div className="col-sm-6 mt-4">
                              <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label mb-4"
                              >
                                Country of Citizenship{" "}
                                <span className="text-mandatory">*</span>
                              </label>
                              <select
                                className="form-select form-select-lg mb-3 css-1492t68"
                                value={selectedCountry}
                                onChange={handleCountryChange}
                                aria-label="Default select example"
                              >
                                <option selected>Please select</option>
                                {countries.map((country) => (
                                  <option key={country.id} value={country.id}>
                                    {country.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="col-sm-6 mt-4">
                              <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label mb-4"
                              >
                                Which city do you live in?{" "}
                                <span className="text-mandatory">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control same-input"
                                id="city"
                                {...register("city", {
                                  onChange: (e) => setCity(e.target.value),
                                  required: true,
                                })}
                              />
                            </div>
                          </div>
                          <div
                            className="banner-btn justify-content-between mt-5 mb-5"
                            style={{ textAlign: "right" }}
                          >
                            <a
                              href="#"
                              className="default-btn"
                              onClick={handleSubmit}
                            >
                             NEXT
                            </a>
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
  );
}
