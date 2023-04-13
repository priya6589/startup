import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { businessInfoSave } from "../../lib/frontendapi";
import {removeToken,removeStorageData,getCurrentUserData,} from "../../lib/session";

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
  const [reg_businessname,setReg_businessname]=useState("");
  const [website_url,setWebsite_url] =useState("");
  const [sector,setSector]=useState("");
  const [stage,setStage]=useState("");
  const [department,setDepartment]=useState("");
  const [startup_date,setStartup_date] =useState("");
  const [tagline,setTagline]=useState("");
  const [logo,setLogo]=useState("");
  const [description,setDescription]=useState("");
  const [primary_residence,setPrimary_residence]=useState("");
  const [prev_experience,setPrev_experience]=useState("0");
  const [experience,setExperience]=useState("0");
  const [cofounder,setCofounder]=useState("0");
  const [none_select,setNoneSelect]=useState("0");
  const [kyc_purposes,setKyc_purposes]=useState("0");

  const [business_address, setBusinessAddress] = useState("");
  const [numberOfLocations, setNumberOfLocations] = useState("");
  const [signup_success, setSignupSuccess] = useState(false);
  const [disableBaddr, setDisableBaddr] = useState(false);
  const [disableBemail, setDisableBemail] = useState(false);
  const {register,formState: { errors },} = useForm();
  const handleSubmit = async(event: any) => {
    event.preventDefault();
    savedata();

    const businessData={
        business_name:business_name,
        reg_businessname:reg_businessname,
        website_url:website_url,
        sector:sector,
        stage:stage,
        department:department,
        startup_date:startup_date,
        logo:logo,
        description:description,
        primary_residence:primary_residence,
        prev_experience:prev_experience,
        experience:experience,
        cofounder:cofounder,
        none_select:none_select,
        kyc_purposes:kyc_purposes,
        id : current_user_id
    }

    try {
        const res = await businessInfoSave(businessData);
        if (res.status == true) {
          toast.success("Business Details saved successfully", {
            position: toast.POSITION.TOP_RIGHT,
            toastId: "success",
          });
          setTimeout(() => {
            router.push("/steps/businessinfo");
          }, 2000);
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

  useEffect(() => {

    const current_user_data = getCurrentUserData();
    if(current_user_data.id != null){
      current_user_data.id ? setCurrentUserId(current_user_data.id ) : setCurrentUserId('');
    }else {

      window.location.href = '/login';
    }
}, []);
  if (signup_success) return router.push("/steps/customizereview");
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
              <li className="">
                <div className="step_name">
                  Step <span>1</span>
                </div>
                <div className="step_border">
                  <div className="step_complete">
                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="caption hidden-xs hidden-sm">
                  <span>PERSONAL INFORMATION</span>
                </div>
              </li>
              <li className="active">
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
                    <form className="needs-validation mb-4">
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
                                <span className="text-mandatory">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control same-input" id="business_name"
                                {...register("business_name", {
                                    onChange: (e) => setBusinessName(e.target.value),
                                    required: true,
                                  })}
                              />
                            </div>
                            <div className="col-md-6 mt-3">
                              <label
                                htmlFor="reg_businessname"
                                className="form-label"
                              >
                                Registered name of Startup
                                <span className="text-mandatory">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control same-input" id="reg_businessname"
                                {...register("reg_businessname", {
                                    onChange: (e) => setReg_businessname(e.target.value),
                                    required: true,
                                  })}
                              />
                            </div>
                            <div className="col-md-6 mt-3">
                              <label
                                htmlFor="website_url"
                                className="form-label"
                              >
                                Website URL
                                <span className="text-mandatory">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control same-input" id="website_url"
                                {...register("website_url", {
                                    onChange: (e) => setWebsite_url(e.target.value),
                                    required: true,
                                  })}
                              />
                            </div>
                            <div className="col-md-6 mt-3">
                              <label
                                htmlFor="sector"
                                className="form-label mb-4"
                              >
                                Sector of Startup
                                <span className="text-mandatory">*</span>
                              </label>
                              <select
                                className="form-select form-select-lg mb-3 css-1492t68"
                                aria-label="Default select example"
                                {...register("sector", {
                                    onChange: (e) => setSector(e.target.value),
                                    required: true,
                                  })}
                              >
                                <option selected>--SELECT SECTOR--</option>
                                <option value="One Sector">One Sector</option>
                                <option value="Two Sector">Two Sector</option>
                                <option value="Three Sector">Three Sector</option>
                              </select>
                            </div>
                            <div className="col-md-6 mt-3">
                              <label
                                htmlFor="stage"
                                className="form-label mb-4"
                              >
                                Stage of Startup
                                <span className="text-mandatory">*</span>
                              </label>
                              <select
                                className="form-select form-select-lg mb-3 css-1492t68"
                                aria-label="Default select example"
                                {...register("stage", {
                                    onChange: (e) => setStage(e.target.value),
                                    required: true,
                                  })}
                              >
                                <option selected>--SELECT STAGE--</option>
                                <option value="Idea Stage">Idea Stage</option>
                                <option value="Intermediate Stage">Intermediate Stage</option>
                                <option value="Final Stage">Final Stage</option>
                              </select>
                            </div>
                            <div className="col-sm-6 mt-3">
                              <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label mb-4"
                              >
                                Which of these best describes you?{" "}
                                <span className="text-mandatory">*</span>
                              </label>
                              <select
                                className="form-select form-select-lg css-1492t68"
                                aria-label=".form-select-lg example"
                                {...register("department", {
                                    onChange: (e) => setDepartment(e.target.value),
                                    required: true,
                                  })}
                              >
                                <option selected>--SELECT DEPARTMENT--</option>
                                <option value="App Development">App Development</option>
                                <option value="IT/Technologies">IT/Technologies</option>
                                <option value="AI">AI</option>
                                <option value="Web Development">Web Development</option>
                              </select>
                            </div>
                            <div className="col-md-6 mt-3">
                              <label
                                htmlFor="startup_date"
                                className="form-label"
                              >
                                Month & year of inception
                                <span className="text-mandatory">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control same-input" id="startup_date"
                                {...register("startup_date", {
                                    onChange: (e) => setStartup_date(e.target.value),
                                    required: true,
                                  })}
                              />
                            </div>
                            <div className="col-md-6 mt-3">
                              <label
                                htmlFor="tagline"
                                className="form-label"
                              >
                               Tagline
                                <span className="text-mandatory">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control same-input" id="tagline"
                                {...register("tagline", {
                                    onChange: (e) => setTagline(e.target.value),
                                    required: true,
                                  })}
                              />
                            </div>
                          
                            <div className="col-sm-6 mt-4">
                              <label
                                htmlFor="description"
                                className="form-label"
                              >
                                100 characters to tell us what you are building
                                <span className="text-mandatory">*</span>
                              </label>
                              <textarea
                                rows={4}
                                maxLength={100}
                                placeholder="Enter details here"
                                className="form-control same-input"
                                {...register("description", {
                                    onChange: (e) => setDescription(e.target.value),
                                    required: true,
                                  })}
                              />
                            </div>

                            <div className="col-md-6 mt-5">
                              <div
                                id="divHabilitSelectors"
                                className="input-file-container"
                              >
                                <input
                                  className="input-file"
                                  id="logo"
                                  type="file"
                                  {...register("logo", {
                                    onChange: (e) => setLogo(e.target.value),
                                    required: true,
                                  })}
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
                            <div className="mt-5">
                              <label htmlFor="" className="d-block mb-4">
                                Do you have assets worth over INR 2 cr apart
                                from your primary residence?{" "}
                                <span className="text-mandatory">*</span>
                              </label>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  id="primary_residence"
                                  value="1" {...register('primary_residence', { onChange: (e) => setPrimary_residence(e.target.value), required: true })}
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
                                  value="0" {...register('primary_residence', { onChange: (e) => setPrimary_residence(e.target.value), required: true })}
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
                              <span className="text-mandatory">*</span>
                            </label>
                            <div className=" mt-3 d-flex align-content-center">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="checkboxNoLabel"
                                value="1"{...register('prev_experience', { onChange: (e) => setPrev_experience(e.target.value), required: true })}
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
                                value="1"{...register('cofounder', { onChange: (e) => setCofounder(e.target.value), required: true })}
                              />
                              <p className="">
                                You come from an entrepreneurial family or have
                                been a founder/co-founder of a business venture
                                family
                              </p>
                            </div>
                            <div className=" mt-3 d-flex align-content-center">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="checkboxNoLabel"
                                value="1" {...register('experience', { onChange: (e) => setExperience(e.target.value), required: true })}
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
                                value="1"{...register('none_select', { onChange: (e) => setNoneSelect(e.target.value), required: true })}
                              />
                              <p className="">None of the above</p>
                            </div>
                            <div className=" mt-3 d-flex align-items-center">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="checkboxNoLabel"
                                value="1"{...register('kyc_purposes', { onChange: (e) => setKyc_purposes(e.target.value), required: true })}
                              />
                              <p className="">
                                I certify that all the information provided by
                                me is accurate and I am willing to provide
                                evidence for the same for KYC purposes when
                                requested.
                              </p>
                            </div>
                          </div>
                          <div className="banner-btn justify-content-between d-md-flex mt-5 mb-5">
                            <a
                              href={`/steps/findbusiness`}
                              className="default-btn"
                            >
                              Go back
                            </a>
                            <button type="submit"
                              className="default-btn"
                              onClick={handleSubmit}
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
