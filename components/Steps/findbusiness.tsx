import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import router from "next/router";
import { useForm } from "react-hook-form";
import { getCountries, personalInformationSave } from "../../lib/frontendapi";
import {
  removeToken,
  removeStorageData,
  getCurrentUserData,
} from "../../lib/session";

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

  const [current_user_id, setCurrentUserId] = useState(false);
  const [countries, setcountries] = useState([]);
  const [user, setUser] = useState({
    id:current_user_id,
    email: "",
    linkedin_url: "",
    gender: "",
    country: "",
    city: "",
    phone: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
        id: current_user_id
      };
    });
  };
  useEffect(() => {
    const current_user_data = getCurrentUserData();
    if (current_user_data.id != null) {
      current_user_data.id
        ? setCurrentUserId(current_user_data.id)
        : setCurrentUserId("");
    } else {
      window.location.href = "/login";
    }

    const fetchData = async () => {
      const data = await getCountries({});
      if (data) {
        setcountries(data.data);
      }
    };

    fetchData();
  }, []);

  
  const SubmitForm  = async (event: any) => {
    // event.preventDefault();

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
                  <span>BASIC INFORMATION</span>
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
                  <span>BANK INFORMATION</span>
                </div>
              </li>
            </ol>
            <div className="container">
              <div className="register-form">
                {/*<h4 className="text-center mt-5">Find your business</h4>*/}
                <div className="row step_one">
                  <div className="col-md-12">
                    <form
                      className="needs-validation mb-4"
                      onSubmit={handleSubmit(SubmitForm)}
                    >
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
                                className="form-control same-input"  {...register("email", {
                                  required: true,})} id="email" name="email"  onChange={handleChange}
                              />
                              <div className="help-block with-errors" />
                              {errors.email &&
                                errors.email.type === "required" && (
                                  <p
                                    className="text-danger"
                                    style={{ textAlign: "left" }}
                                  >
                                    *Please Enter Your Valid Email.
                                  </p>
                                )}
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
                                className="form-control same-input" {...register("linkedin_url", {
                                  required: true,})} id="linkedin_url" name="linkedin_url" onChange={handleChange}
                              />
                               <div className="help-block with-errors" />
                              {errors.linkedin_url &&
                                errors.linkedin_url.type === "required" && (
                                  <p
                                    className="text-danger"
                                    style={{ textAlign: "left" }}
                                  >
                                    *Please Enter Your Valid Linkedin Url.
                                  </p>
                                )}
                            </div>
                            <div className="col-md-6 mt-3">
                              <label htmlFor="" className="d-block mb-4">
                                Gender <span className="text-mandatory">*</span>
                              </label>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  id="inlineRadio1" {...register("gender", {required: true,})}
                                  value="male" name="gender" onChange={handleChange}
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
                                  id="inlineRadio2"{...register("gender", {required: true,})}
                                  value="female"
                                  name="gender" onChange={handleChange}
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
                                  id="inlineRadio3" {...register("gender", {required: true,})}
                                  value="other" name="gender" onChange={handleChange}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="inlineRadio3"
                                >
                                  Others
                                </label>
                              </div>
                              <div className="help-block with-errors" />
                              {errors.gender &&
                                errors.gender.type === "required" && (
                                  <p
                                    className="text-danger"
                                    style={{ textAlign: "left" }}
                                  >
                                    *Please Select Your Gender.
                                  </p>
                                )}
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
                                className="form-control same-input" {...register("phone", {required: true,})}
                                id="phone" name="phone" onChange={handleChange} maxLength={13}
                              />
                              <p>
                                Please enter the number with respective country
                                code.
                              </p>
                              <div className="help-block with-errors" />
                              {errors.gender &&
                                errors.gender.type === "required" && (
                                  <p
                                    className="text-danger"
                                    style={{ textAlign: "left" }}
                                  >
                                    *Please Select Your Gender.
                                  </p>
                                )}
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
                                className="form-select form-select-lg mb-3 css-1492t68" {...register("country", {required: true,})} name="country" onChange={handleChange} 
                                aria-label="Default select example"
                              >
                               <option selected disabled>--SELECT COUNTRY--</option>
                                                    {
                                                        countries.map((country, index) => (
                                                            <option value={country.name}>{country.name}</option>
                                                        ))
                                                    }
                              </select>
                              <div className="help-block with-errors" />
                              {errors.country&&
                                errors.country.type === "required" && (
                                  <p
                                    className="text-danger"
                                    style={{ textAlign: "left" }}
                                  >
                                    *Please Select Country.
                                  </p>
                                )}
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
                                className="form-control same-input" {...register("city", {required: true,})}
                                id="city" name="city" onChange={handleChange}
                              />
                               <div className="help-block with-errors" />
                              {errors.city&&
                                errors.city.type === "required" && (
                                  <p
                                    className="text-danger"
                                    style={{ textAlign: "left" }}
                                  >
                                    *Please Enter Your City.
                                  </p>
                                )}
                            </div>
                          </div>
                          <div
                            className="banner-btn justify-content-between mt-5 mb-5"
                            style={{ textAlign: "right" }}
                          >
                            <button type="submit"
                              className="default-btn"
                            >
                              NEXT
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
        <ToastContainer autoClose={5000} />
      </div>
    </>
  );
}
