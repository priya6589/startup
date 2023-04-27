import React, { useState,useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {getCurrentUserData} from "../../lib/session";
import { investorCategoryTermsSave,getAngelTerms } from "../../lib/frontendapi";
const alertStyle = {
  color: 'red',
};

const textStyle = {
  textTransform: 'capitalize',
};


export default function customizereview() {
  const router = useRouter();
  const {register,handleSubmit,formState: { errors },} = useForm();
  const [current_user_id, setCurrentUserId] = useState(false);
  const [terms,  setTerms] = useState({
    user_id: current_user_id,
    principal_residence: "0",
    cofounder:"0",
    prev_investment_exp:"0",
    experience:"0",
    net_worth:"0",
    no_requirements:"0"
});

useEffect(() => {
  const current_user_data = getCurrentUserData();
  if (current_user_data.id) {
    setCurrentUserId(current_user_data.id);
    getAngelTerms(current_user_data.id)
      .then((res) => {
        if (res.status === true) {
          setTerms(res.data);
          
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

const handleChange = (event) => {
  const { name, value, type, checked } = event.target;
  if (type === 'checkbox' && name === 'principal_residence') {
    // Set the value of cofounder to '1' if the checkbox is checked, '0' otherwise
    const principal_residenceValue = checked ? '1' : '0';
    setTerms((prevState) => {
      return {
        ...prevState,
        cofounder: principal_residenceValue,
        user_id: current_user_id,
      };
    });
  } else if (type === 'checkbox' && name === 'cofounder') {
    // Set the value of cofounder to '1' if the checkbox is checked, '0' otherwise
    const cofounderValue = checked ? '1' : '0';
    setTerms((prevState) => {
      return {
        ...prevState,
        cofounder: cofounderValue,
        user_id: current_user_id,
      };
    });
  } else if (type === 'checkbox' && name === 'prev_investment_exp') {
    // Set the value of prev_investment_exp to '1' if the checkbox is checked, '0' otherwise
    const prev_investment_expValue = checked ? '1' : '0';
    setTerms((prevState) => {
      return {
        ...prevState,
        prev_investment_exp: prev_investment_expValue,
        user_id: current_user_id,
      };
    });
  } else if (type === 'checkbox' && name === 'experience') {
    // Set the value of experience to '1' if the checkbox is checked, '0' otherwise
    const experienceValue = checked ? '1' : '0';
    setTerms((prevState) => {
      return {
        ...prevState,
        experience: experienceValue,
        user_id: current_user_id,
      };
    });
  } else if (type === 'checkbox' && name === 'net_worth') {
    // Set the value of net_worth to '1' if the checkbox is checked, '0' otherwise
    const net_worthValue = checked ? '1' : '0';
    setTerms((prevState) => {
      return {
        ...prevState,
        net_worth: net_worthValue,
        user_id: current_user_id,
      };
    });
  } else if (type === 'checkbox' && name === 'no_requirements') {
    // Set the value of no_requirements to '1' if the checkbox is checked, '0' otherwise
    const no_requirementsValue = checked ? '1' : '0';
    setTerms((prevState) => {
      return {
        ...prevState,
        no_requirements: no_requirementsValue,
        user_id: current_user_id,
      };
    });
  }else {
    setTerms((prevState) => {
      return {
        ...prevState,
        [name]: value,
        user_id: current_user_id,
      };
    });
  }
};
  const SubmitForm = async () => {
    try {
      const res = await investorCategoryTermsSave(terms);
     
      if (res.status == true) {
        setTimeout(() => {
          router.push("/steps/customizereview");
        }, 1000);
      } else {
        toast.error("Details has not been saved successfully", {
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

  }
 
  

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
              <li className="active">
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
                <div className="row step_one">
                  <div className="col-md-12">
                  <h4 className="black_bk_col fontweight500 font_20 mb-4 text-center">
                                                {" "}
                                               Terms & Conditions{" "}
                                                <i
                                                    style={{ cursor: "pointer" }}
                                                    className="fa fa-info-circle"
                                                    aria-hidden="true"
                                                    data-toggle="tooltip"
                                                    data-placement="top"
                                                    title="Please select your investor type.That would be helpful to verify your account."
                                                ></i>
                  </h4>
                    <form className="needs-validation mb-4" onSubmit={handleSubmit(SubmitForm)}>
                      <section>
                        <div className="container" id="option_select">
                          <div className="row">
                            <div className="col-md-12">
                              <select className="options">
                                <option selected disabled>--SELECT CATEGORY--</option>
                                <option value={1}>Individual</option>
                                <option value={2}>Body Corporate/VC/PE/Family Office 1 /Corporate Institution</option>
                                <option value={3}>Accelerators and Incubators</option>
                              </select>
                              <div id="checkbox-group-1" className="hidden">
                                <div className="same-card">
                                  <div className="row">
                                    <div className="col-auto">
                                      <input type="checkbox" id="checkbox1"  {...register("principal_residence", )} name="principal_residence" value="1" onChange={handleChange} checked={terms.principal_residence === '1' ? true : false}/>
                                    </div>
                                    <div className="col">
                                      <label htmlFor="checkbox1">
                                      Net tangible assets of at least INR 2 Crore excluding value of his principal residence
                                      </label>
                                      {errors.principal_residence &&
                                         errors.principal_residence.type === "required" && (
                                  <p
                                    className="text-danger"
                                    style={{ textAlign: "left", fontSize: "12px" }}
                                  >
                                    *Please Select the Principal residence.
                                  </p>
                                )}
                                    </div>
                                  </div>
                                </div>
                                <div className="same-card">
                                  <div className="row">
                                    <div className="col-auto">
                                      <input type="checkbox" id="checkbox2" {...register("prev_investment_exp",{ required:true, } )}
                                      name="prev_investment_exp"  value="1" onChange={handleChange}   checked={terms.prev_investment_exp === '1' ? true : false}/>
                                    </div>
                                    <div className="col">
                                      <label htmlFor="checkbox2">Has invested in startups before</label>
                                    </div>
                                  </div>
                                </div>
                                <div className="same-card">
                                  <div className="row">
                                    <div className="col-auto">
                                      <input type="checkbox" id="checkbox3"    {...register("cofounder", )}
                                      name="cofounder"  value="1" onChange={handleChange}   checked={terms.cofounder === '1' ? true : false} />
                                    </div>
                                    <div className="col">
                                      <label htmlFor="checkbox3">Come from an entrepreneurial family or have been a
                                        founder/co-founder of a business
                                        venture</label>
                                    </div>
                                  </div>
                                </div>
                                <div className="same-card">
                                  <div className="row">
                                    <div className="col-auto">
                                      <input type="checkbox" id="checkbox4"  {...register("experience", )}
                                      name="experience"  value="1" onChange={handleChange}   checked={terms.experience === '1' ? true : false} />
                                    </div>
                                    <div className="col">
                                      <label htmlFor="checkbox4">Senior management professional with at least 10 years of
                                        experience
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div id="checkbox-group-2" className="hidden">
                                <div className="same-card">
                                  <div className="row">
                                    <div className="col-auto">
                                      <input type="checkbox" id="checkbox5" {...register("net_worth", )}
                                      name="net_worth"  value="1" onChange={handleChange}   checked={terms.net_worth === '1' ? true : false}/>
                                    </div>
                                    <div className="col">
                                      <label htmlFor="checkbox5">Net worth of at least INR 10 Crore</label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div id="checkbox-group-3" className="hidden">
                                <div className="same-card">
                                  <div className="row">
                                    <div className="col-auto">
                                      <input type="checkbox" id="checkbox6" {...register("no_requirements", )}
                                      name="no_requirements"  value="1" onChange={handleChange}   checked={terms.no_requirements === '1' ? true : false} />
                                    </div>
                                    <div className="col">
                                      <label htmlFor="checkbox6">No Requirement</label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

                      <div className="row mt-3">
                        <div
                          className="col-md-6"
                          style={{ textAlign: "left" }}
                        >
                          <a
                            href={`/investor-steps/investor-type`}
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
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <ToastContainer autoClose={5000} /> */}
      </div>
    </>
  );
}
