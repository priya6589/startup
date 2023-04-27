import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import router from "next/router";
import { useForm } from "react-hook-form";
import { getSingleUserData, getCountries, personalInformationSave } from "../../lib/frontendapi";
import { removeToken, removeStorageData, getCurrentUserData } from "../../lib/session";
import { log } from "console";

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
    id: current_user_id,
    email: "",
    linkedin_url: "",
    gender: "",
    country: "",
    city: "",
    phone: "",
    country_code: ""
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChange = (event) => {
    let { name, value } = event.target;
    if (name === 'phone') {
      // Remove all non-digit characters from value
      value = value.replace(/\D/g, '');
      // Limit the length of value to 12 characters
      value = value.substring(0, 12);
    }

    var selectedCountry = countries.find(
      (country) => country.name === value
    );
    var countryCode = "";
    if (selectedCountry) {
      countryCode = selectedCountry.country_code;
    }
  
    setUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
        id: current_user_id,
        country_code: countryCode ? `${countryCode}` : " ",
      };
    });
    
  };

  const phonClick=(event)=>{
    let { name, value } = event.target;
    var selectedCountry = countries.find(
      (country) => country.name === value
    );
    var countryCode = "";
    if (selectedCountry) {
      countryCode = selectedCountry.country_code;
    }
  
    setUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
        id: current_user_id,
        country_code: countryCode ? `${countryCode}` : " ",
      };
    });
  }

  useEffect(() => {
    const current_user_data = getCurrentUserData();
    if (current_user_data.id != null) {
      current_user_data.id
        ? setCurrentUserId(current_user_data.id)
        : setCurrentUserId("");

      getSingleUserData(current_user_data.id)
        .then((res) => {
          if (res.status == true) {
            setUser(res.data);
            // console.log(setUser);
          } else {
            toast.error(res.message, {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
        })
        .catch((err) => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        });
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

  const SubmitForm = async (event: any) => {
    try {
      const res = await personalInformationSave(user);
      if (res.status == true) {
        setTimeout(() => {
          router.push("/investor-steps/investor-type");
        }, 1000);
      } else {
        toast.error(res.message, {
          position: toast.POSITION.TOP_RIGHT,
          toastId: "error",
        });
      }
    } catch (err) {
      toast.error(err, {
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
                {/* <ul>
                  <li>
                    <a href="/"></a>
                  </li>
                </ul> */}
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
                            <li className="">
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
                {/*<h4 className="text-center mt-5">Find your business</h4>*/}
                <div className="row step_one">
                  <div className="col-md-12">
                    <form
                      className="needs-validation mb-4"
                      onSubmit={handleSubmit(SubmitForm)}
                    >
                      <h4 className="black_bk_col fontweight500 font_20 mb-4 text-center">
                        Let's Get Started&nbsp;
                        <i
                          style={{ cursor: "pointer" }}
                          className="fa fa-info-circle"
                          aria-hidden="true"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Please type in your full personal information into the field below. This would be helpfull to verify your account."
                        ></i>
                      </h4>
                      <div className="row justify-content-center">
                        <div className="col-md-8" id="register">
                          <div className="row">
                            <div className="col-md-6 mt-3 mb-3">
                              <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label"
                              >
                                Email ID{" "}
                                <span style={{ color: "red" }}>*</span>
                              </label>
                              <input
                                type="email"
                                className="form-control same-input"
                                {...register("email", {
                                  value: true,
                                  required: true,
                                })}
                                id="email"
                                name="email"
                                onChange={handleChange}
                                value={user.email ? user.email : ""}
                                readOnly
                              />
                            </div>
                            <div className="col-md-6 mt-3">
                              <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label"
                              >
                                Linkedin URL{" "}
                                <span style={{ color: "red" }}>*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control same-input"
                                {...register("linkedin_url", {
                                  value: true,
                                  required: true,
                                  // pattern: {
                                  //   value: /^((http|https):\/\/)?(www\.)?linkedin\.com\/?$/,
                                  //   message: "Please Enter a Valid LinkedIn url",
                                  // },
                                })}
                                id="linkedin_url"
                                name="linkedin_url"
                                onChange={handleChange}
                                value={user.linkedin_url}
                              />
                              <div className="help-block with-errors" />
                              {errors.linkedin_url &&
                                errors.linkedin_url.type === "required" && (
                                  <p
                                    className="text-danger"
                                    style={{ textAlign: "left", fontSize: "12px" }}
                                  >
                                    *Please Enter Your Linkedin url.
                                  </p>
                                )}
                              {/* {errors.linkedin_url && errors.linkedin_url.type === "pattern" && (
                                <p className="text-danger" style={{ textAlign: "left", fontSize: "12px" }}>
                                  *{errors.linkedin_url.message}
                                </p>
                              )} */}
                            </div>


                            <div className="col-sm-6 mt-3">
                              <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label mb-4"
                              >
                                Country of Citizenship{" "}
                                <span style={{ color: "red" }}>*</span>
                              </label>
                              <select
                                className="form-select form-select-lg mb-3 css-1492t68"
                                {...register("country", {
                                  validate: (value) => value != "",
                                  required: true,
                                })}
                                name="country"
                                onChange={handleChange}
                                aria-label="Default select example"
                              >
                                <option value="">
                                  --SELECT COUNTRY--
                                </option>
                                {countries.map((country, index) => (
                                  <option
                                    key={country.id}
                                    value={country.name}
                                    selected={user.country === country.name}
                                  >
                                    {country.name}
                                  </option>
                                ))}
                              </select>
                              <div className="help-block with-errors" />
                              {errors.country &&
                                errors.country.type === "required" &&
                                !user.country && (
                                  <p className="text-danger" style={{ textAlign: "left", fontSize: "12px" }}>
                                    *Please Select Country.
                                  </p>
                                )}

                            </div>

                            <div className="col-md-6 mt-3">
                              <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label"
                              >
                                Phone number{" "}
                                <span style={{ color: "red" }}>*</span>
                              </label>
                              <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">
                                  {user.country_code}
                                </span>
                              </div>
                              <input type="text"
                                className="form-control same-input"
                                {...register("phone", {
                                  value: true,
                                  required: true,
                                  minLength: {
                                    value: 10,
                                    message: 'Please Enter a Valid Phone Number',
                                  },
                                  pattern: {
                                    value: /^[0-9]*$/,
                                    message: "Please Enter a Valid Phone Number",
                                  },
                                })}
                                id="phone"
                                name="phone"
                                onChange={handleChange} onClick={phonClick}
                                maxLength={10}
                                value={user.phone ? user.phone.replace(/^\+91-/, '') : ''}
                              />
                              </div>
                              <div className="help-block with-errors" />
                              {errors.phone && errors.phone.type === "required" && (
                                <p
                                  className="text-danger"
                                  style={{ textAlign: "left", fontSize: "12px" }}
                                >
                                  *Please Enter Your Phone Number.
                                </p>
                              )}
                              {errors.phone && errors.phone.type === "minLength" && (
                                <p className="text-danger" style={{ textAlign: "left", fontSize: "12px" }}>
                                  *{errors.phone.message}
                                </p>
                              )}


                            </div>

                            <div className="col-md-6 mt-3">
                              <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label"
                              >
                                Which city do you live in?{" "}
                                <span style={{ color: "red" }}>*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control same-input"
                                {...register("city", {
                                  value: true,
                                  required: true,
                                })}
                                id="city"
                                name="city"
                                onChange={handleChange}
                                value={user.city}
                              />
                              <div className="help-block with-errors" />
                              {errors.city &&
                                errors.city.type === "required" && (
                                  <p
                                    className="text-danger"
                                    style={{ textAlign: "left", fontSize: "12px" }}
                                  >
                                    *Please Enter Your City.
                                  </p>
                                )}
                            </div>
                            <div className="col-sm-6 mt-3">
                              <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label mb-4"
                              >
                                Gender  <span style={{ color: "red" }}>*</span>
                              </label>

                              <select
                                className="form-select form-select-lg mb-3 css-1492t68"
                                {...register("gender", {
                                  validate: (value) => value != "",
                                  required: true,
                                })}
                                name="gender"
                                onChange={handleChange}
                                aria-label="Default select example"
                                value={user ? user.gender : ""}
                              >
                                <option value="">--SELECT GENDER--</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                              </select>
                              <div className="help-block with-errors" />
                              {errors.gender && errors.gender.type === "required" &&
                                !user.gender && (
                                  <p
                                    className="text-danger"
                                    style={{ textAlign: "left", fontSize: "12px" }}
                                  >
                                    *Please Select Gender.
                                  </p>
                                )}
                            </div>
                          </div>
                          <div className="row mt-3">
                            <div
                              className="col-md-12"
                              style={{ textAlign: "right" }}
                            >
                              <button type="submit" className="btn btn-primary">
                                NEXT
                              </button>
                            </div>
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
