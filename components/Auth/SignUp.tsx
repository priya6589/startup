import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { userRegister } from "../../lib/frontendapi";
import { useRouter } from "next/router";
const Signup = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const SubmitForm = () => {
    const user = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      role: role,
    };

    userRegister(user)
      .then((res) => {
        //   console.log(res);
        if (res.status == true) {
          toast.success("User Registered succesfully", {
            position: toast.POSITION.TOP_RIGHT,
            toastId: "success",
          });
          setTimeout(() => {
            router.push("/"); // Redirect to login page
          }, 2000);
        } else {
          toast.error("User has been not registered succesfully", {
            position: toast.POSITION.TOP_RIGHT,
            toastId: "error",
          });
        }
      })
      .catch((err) => {
        toast.error("User has been not registered succesfully", {
          position: toast.POSITION.TOP_RIGHT,
          toastId: "error",
        });
      });
  };

  return (
    <>
      <div>
        {/* Start Page Title Area */}
        <div className="page-title-area item-bg-5">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="page-title-content">
                  <h2>Signup</h2>
                  <ul>
                    <li>
                      <a href={process.env.NEXT_PUBLIC_BASE_URL + "/"}>Home</a>
                    </li>
                    <li>Signup</li>
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
                  <form id="contactForm" onSubmit={handleSubmit(SubmitForm)}>
                    <div className="row">
                      <div className="form-group col-md-6">
                        <label>
                          First Name<span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="text"
                          id="firstname"
                          className="form-control"
                          {...register("firstname", {
                            onChange: (e) => setFirstName(e.target.value),
                            required: true,
                          })}
                        />
                        <div className="help-block with-errors" />
                        {errors.firstname &&
                          errors.firstname.type === "required" && (
                            <p
                              className="text-danger"
                              style={{ textAlign: "left" }}
                            >
                              Please Enter Your First Name.
                            </p>
                          )}
                      </div>
                      <div className="form-group col-md-6">
                        <label>
                          Last Name<span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="text"
                          id="lastname"
                          className="form-control"
                          {...register("lastname", {
                            onChange: (e) => setLastName(e.target.value),
                            required: true,
                          })}
                        />
                        <div className="help-block with-errors" />
                        {errors.lastname &&
                          errors.lastname.type === "required" && (
                            <p
                              className="text-danger"
                              style={{ textAlign: "left" }}
                            >
                              Please Enter Your Last Name.
                            </p>
                          )}
                      </div>

                      <div className="form-group col-md-6">
                        <label>
                          Email<span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          {...register("email", {
                            onChange: (e) => setEmail(e.target.value),
                            required: true,
                          })}
                        />
                        <div className="help-block with-errors" />
                        {errors.email && errors.email.type === "required" && (
                          <p
                            className="text-danger"
                            style={{ textAlign: "left" }}
                          >
                            Please Enter Your Email.
                          </p>
                        )}
                      </div>

                      <div className="form-group col-md-6">
                        <label>
                          Password<span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          {...register("password", {
                            onChange: (e) => setPassword(e.target.value),
                            required: true,
                          })}
                        />
                        {errors.password &&
                          errors.password.type === "required" && (
                            <p
                              className="text-danger"
                              style={{ textAlign: "left" }}
                            >
                              Please Enter Your Password.
                            </p>
                          )}
                      </div>

                      <div className="form-group col-md-6">
                        <label>
                          Register As:
                          <span style={{ color: "red" }}>*</span>
                        </label>

                        <div className="d-flex justify-content-start">
                          <label htmlFor="investor-radio">
                            <input
                              className="form-check-input gender-radio"
                              {...register("role", {
                                onChange: (e) => setRole(e.target.value),
                                required: true,
                              })}
                              type="radio"
                              name="role"
                              id="investor-radio"
                              value="investor"
                            />
                            {/* <label>Investor</label> */}
                            <span className="image-label investor-label"></span>
                            &nbsp;Investor&nbsp;
                          </label>
                          &nbsp;
                          <label htmlFor="startup-radio">
                            <input
                              className="form-check-input gender-radio"
                              {...register("role", {
                                onChange: (e) => setRole(e.target.value),
                                required: true,
                              })}
                              type="radio"
                              name="role"
                              id="startup-radio"
                              value="startup"
                            />
                           
                            <span className="image-label startup-label"></span>
                             &nbsp;Startup&nbsp;
                          </label>
                        </div>

                        {errors.role && errors.role.type === "required" && (
                          <p
                            className="text-danger"
                            style={{ textAlign: "left" }}
                          >
                            Please Select Your Role.
                          </p>
                        )}
                      </div>

                      <div className="form-group col-md-12 mt-3">
                        <div className="help-block with-errors" />

                        <div className="row mt-3">
                          <div className="col-md-6 text-right">
                            <button type="submit" className="btn btn-primary">
                              Sign Up
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
        </section>

        {/* End Contact Area */}
      </div>
    </>
  );
};

export default Signup;
