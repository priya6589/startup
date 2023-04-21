import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { businessInfoSave, getBusinessInformation } from "../../lib/frontendapi";
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

export default function businessinfo(props: any) {
  const router = useRouter();
  const [blId, setBlId] = useState("");
  const [forwarduId, setForwarduId] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [business_page_id, setBusinessPageId] = useState("");

  const [current_user_id, setCurrentUserId] = useState(false);
  const [business_name, setBusinessName] = useState("");

  const [business_address, setBusinessAddress] = useState("");
  const [numberOfLocations, setNumberOfLocations] = useState("");
  const [signup_success, setSignupSuccess] = useState(false);
  const [disableBaddr, setDisableBaddr] = useState(false);
  const [disableBemail, setDisableBemail] = useState(false);

  const {register,handleSubmit,formState: { errors },} = useForm();
  const [businessDetails, setBusinessDetails] = useState({
      user_id: current_user_id,
      //  id:"",
      business_name: "",
      reg_businessname: "",
      website_url: "",
      sector: "",
      stage: "",
      startup_date: "",
      tagline: "",
      logo: "",
      description: "",
      cofounder: "0",
      kyc_purposes: "0",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setBusinessDetails((prevState) => {
      return {
        ...prevState,
        [name]: value,
        user_id: current_user_id,
      };
    });
  };
 useEffect(() => {
  const current_user_data = getCurrentUserData();
  if (current_user_data.id) {
    setCurrentUserId(current_user_data.id);

    getBusinessInformation(current_user_data.id)
      .then((res) => {
        if (res.status === true) {
          setBusinessDetails(res.data);
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
}, []);

  const SubmitForm = async () => {
    // event.preventDefault();
    savedata();
    try {
      const res = await businessInfoSave(businessDetails);
      if (res.status == true) {
        // toast.success("Business Details saved successfully", {
        //   position: toast.POSITION.TOP_RIGHT,
        //   toastId: "success",
        // });
        setTimeout(() => {
          router.push("/steps/customizereview");
        }, 1000);
      } else {
        toast.error("Business Details has not been saved successfully", {
          position: toast.POSITION.TOP_RIGHT,
          toastId: "error",
        });
      }
    } catch (err) {
      toast.error("Business Details has not been saved successfully", {
        position: toast.POSITION.TOP_RIGHT,
        toastId: "error",
      });
    }
  };

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
    };
    setSignupSuccess(true);
  };
  if (signup_success) return router.push("/steps/customizereview");
  return (
    <>
      <div className="page-title-area item-bg-5">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-content">
                <h2>Complete Account Details</h2>
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
              <li className="active">
                <div className="step_name">
                  Step <span>2</span>
                </div>
                <div className="step_border">
                  <div className="step">
                    <img
                      className="sidebar-img w-75"
                      src="/assets/img/sidebar/business.png"
                    />
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
                    <img
                      className="sidebar-img w-75"
                      src="/assets/img/sidebar/docs.png"
                    />
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
                    <img
                      className="sidebar-img w-75"
                      src="/assets/img/sidebar/bank.png"
                    />
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
                    <form className="needs-validation mb-4"  onSubmit={handleSubmit(SubmitForm)}>
                      <h4 className="black_bk_col fontweight500 font_20 mb-4 text-center">
                        {" "}
                        Business Information{" "}
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
                                htmlFor="business_name"
                                className="form-label"
                              >
                                Name of Startup{" "}
                                <span style={{ color: "red" }}>*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control same-input"
                                id="business_name"
                                {...register("business_name", {
                                  required: ! businessDetails,
                                })}  name="business_name"  onChange={handleChange} value={businessDetails.business_name}
                              />
                            </div>
                            <div className="col-md-6 mt-3">
                              <label
                                htmlFor="reg_businessname"
                                className="form-label"
                              >
                                Registered name of Startup
                                <span style={{ color: "red" }}>*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control same-input"
                                id="reg_businessname"
                                {...register("reg_businessname", {required: ! businessDetails,})} 
                                name="reg_businessname"  onChange={handleChange} value={businessDetails.reg_businessname}
                              />
                            </div>
                            <div className="col-md-6 mt-3">
                              <label
                                htmlFor="website_url"
                                className="form-label"
                              >
                                Website URL
                                <span style={{ color: "red" }}>*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control same-input"
                                id="website_url"
                                {...register("website_url", {required: ! businessDetails,})}   
                                name="website_url"  onChange={handleChange} value={businessDetails.website_url}
                              />
                            </div>
                            <div className="col-md-6 mt-3">
                              <label
                                htmlFor="sector"
                                className="form-label mb-4"
                              >
                                Sector of Startup
                                <span style={{ color: "red" }}>*</span>
                              </label>
                              <select
                                className="form-select form-select-lg mb-3 css-1492t68"
                                aria-label="Default select example"
                                {...register("sector", {required: ! businessDetails,})} 
                                name="sector"  onChange={handleChange}   value={businessDetails ? businessDetails.sector : ""}
                              >
                                <option selected>--SELECT SECTOR--</option>
                                <option value="App Development">App Development</option>
                                <option value="IT/Technologies">IT/Technologies</option>
                                <option value="AI">AI</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Agriculture">Agriculture</option>
                              </select>
                            </div>
                            <div className="col-md-6 mt-3">
                              <label
                                htmlFor="stage"
                                className="form-label mb-4"
                              >
                                Stage of Startup
                                <span style={{ color: "red" }}>*</span>
                              </label>
                              <select
                                className="form-select form-select-lg mb-3 css-1492t68"
                                aria-label="Default select example"
                                {...register("stage", {required: ! businessDetails,})}
                                name="stage"  onChange={handleChange}  value={businessDetails ? businessDetails.stage : ""}
                              >
                                <option selected>--SELECT STAGE--</option>
                                <option value="Idea Stage">Idea Stage</option>
                                <option value="Intermediate Stage">Intermediate Stage</option>
                                <option value="Final Stage">Final Stage</option>
                              </select>
                            </div>
                            {/* <div className="col-sm-6 mt-3">
                              <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label mb-4"
                              >
                                Which of these best describes you?{" "}
                                <span style={{ color: "red" }}>*</span>
                              </label>
                              <select
                                className="form-select form-select-lg css-1492t68"
                                aria-label=".form-select-lg example"
                                {...register("department", {required: ! businessDetails,})}
                                name="stage"  onChange={handleChange}
                              >
                                <option selected>--SELECT DEPARTMENT--</option>
                                <option value="App Development">
                                  App Development
                                </option>
                                <option value="IT/Technologies">
                                  IT/Technologies
                                </option>
                                <option value="AI">AI</option>
                                <option value="Web Development">
                                  Web Development
                                </option>
                              </select>
                            </div> */}
                            <div className="col-md-6 mt-3">
                              <label
                                htmlFor="startup_date"
                                className="form-label"
                              >
                                Month & year of inception
                                <span style={{ color: "red" }}>*</span>
                              </label>
                              <input
                                type="date"
                                className="form-control same-input"
                                id="startup_date"
                                {...register("startup_date", {required: ! businessDetails,})}
                                name="startup_date"  onChange={handleChange} value={businessDetails.startup_date}
                              />
                            </div>
                            <div className="col-md-6 mt-3">
                              <label htmlFor="tagline" className="form-label">
                                Tagline
                                <span style={{ color: "red" }}>*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control same-input"
                                id="tagline"
                                {...register("tagline", {required: ! businessDetails,})}
                                name="tagline"  onChange={handleChange} value={businessDetails.tagline}
                              />
                            </div>

                            <div className="col-md-6 mt-3">
                              <div
                                id="divHabilitSelectors"
                                className="input-file-container"
                              >
                                <label
                                  htmlFor="logo"
                                  className="form-label"
                                >
                                  Startup Logo
                                  <span style={{ color: "red" }}>*</span>
                                </label>
                                <input
                                  className="input-file"
                                  id="logo"
                                  type="file"
                                  {...register("logo", {required: ! businessDetails,})} 
                                  name="logo"  onChange={handleChange} 
                                />
                                <label
                                  htmlFor="fileupload"
                                  className="input-file-trigger"
                                  id="labelFU"
                                  tabIndex={0}
                                >
                                  Drop your pitch deck here to{" "}
                                  <a href="#">Upload</a> <br />
                                  <p>
                                    You can upload a pdf file only (max size 20
                                    MB)
                                  </p>
                                </label>
                              </div>
                            </div>

                            <div className="col-sm-6 ">
                              <label
                                htmlFor="description"
                                className="form-label"
                              >
                                100 characters to tell us what you are building
                                <span style={{ color: "red" }}>*</span>
                              </label>
                              <textarea
                                rows={4}
                                maxLength={100}
                                placeholder="Enter details here"
                                className="form-control text"
                                {...register("description", {required: ! businessDetails,})}
                                name="description"  onChange={handleChange} value={businessDetails.description}
                              />
                            </div>

                            {/* <div className="mt-5">
                              <label htmlFor="" className="d-block mb-4">
                                Do you have assets worth over INR 2 cr apart
                                from your primary residence?{" "}
                                <span style={{ color: "red" }}>*</span>
                              </label>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  id="primary_residence"
                                  value="1" {...register('primary_residence', { onChange: (e) => setPrimary_residence(e.target.value), required: ! businessDetails })}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="primary_residence"
                                >
                                  YES
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  id="primary_residence"
                                  value="0" {...register('primary_residence', { onChange: (e) => setPrimary_residence(e.target.value), required: ! businessDetails })}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="primary_residence"
                                >
                                  NO
                                </label>
                              </div>
                              <p>
                                This information is required as per SEBI
                                guidelines
                              </p>
                            </div>

                            <label htmlFor="" className="mt-5">
                              Help us understand your experience better
                              (multiple options can be selected)
                              <span style={{ color: "red" }}>*</span>
                            </label>
                            <div className=" mt-3 d-flex align-content-center">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="checkboxNoLabel"
                                value="1"{...register('prev_experience', { onChange: (e) => setPrev_experience(e.target.value), required: ! businessDetails })}
                              />
                              <p className="">
                                You have invested in startups before
                              </p>
                            </div>
                           
                            <div className=" mt-3 d-flex align-content-center">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="checkboxNoLabel"
                                value="1" {...register('experience', { onChange: (e) => setExperience(e.target.value), required: ! businessDetails })}
                              />
                              <p className="">
                                You have at least 10 years of work experience
                              </p>
                            </div>
                            <div className=" mt-3 d-flex align-content-center">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="checkboxNoLabel"
                                value="1"{...register('none_select', { onChange: (e) => setNoneSelect(e.target.value), required: ! businessDetails })}
                              />
                              <p className="">None of the above</p>
                            </div> */}
                            <div className=" mt-5 d-flex align-content-center">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="checkboxNoLabel"
                                value="1"
                                {...register("cofounder", {required: ! businessDetails,})}
                                name="cofounder"  onChange={handleChange}  checked={businessDetails.cofounder === '1'}
                              />
                              <p className="">
                                You come from an entrepreneurial family or have
                                been a founder/co-founder of a business venture
                                family
                              </p>
                            </div>
                            <div className=" mt-2 d-flex align-items-left">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="checkboxNoLabel"
                                value="1"
                                {...register("kyc_purposes", {required: ! businessDetails,})}
                                name="kyc_purposes"  onChange={handleChange}  checked={businessDetails.kyc_purposes === '1'}
                              />
                              <p className="">
                                I certify that all the information provided by
                                me is accurate and I am willing to provide
                                evidence for the same for KYC purposes when
                                requested.
                              </p>
                            </div>
                          </div>
                          <div className="row mt-3">
                            <div
                              className="col-md-6"
                              style={{ textAlign: "left" }}
                            >
                              <a
                                href={`/steps/findbusiness`}
                                className="btn btn-primary"
                                id="back"
                              >
                                Go back
                              </a>
                            </div>

                            <div
                              className="col-md-6"
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
        <ToastContainer autoClose={2000} />
      </div>
    </>
  );
}
