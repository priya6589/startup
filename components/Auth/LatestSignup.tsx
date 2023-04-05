import React, { useState } from "react";
import {
    StepOne,
    StepTwo,
    StepThree,
  } from "../../components/SignupSteps";
import FormCard from "../../components/FormCard";
import FormCompleted from "../../components/FormCompleted";
export default function LatestSignUp() {
    const [formStep, setFormStep] = useState(0);
    const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
    const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);
    return (
        <>
            <div className="page-title-area item-bg-5">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="page-title-content">
                                <h2>Sign Up</h2>
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li>Sign Up</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="signup-section ptb-100">
                <div className="container">
                    <div className="signup-form">
                        <h3>Create your Account</h3>
                        <FormCard currentStep={formStep} prevFormStep={prevFormStep}>
                            {formStep >= 0 && (
                            <StepOne formStep={formStep} nextFormStep={nextFormStep} />
                            )}
                            {formStep >= 1 && (
                            <StepTwo formStep={formStep} nextFormStep={nextFormStep} />
                            )}
                            {formStep >= 2 && (
                            <StepThree formStep={formStep} nextFormStep={nextFormStep} />
                            )}

                            {formStep > 2 && <FormCompleted />}
                        </FormCard>
                    </div>
                </div>
                <div className="default-shape">
                    <div className="shape-1">
                        <img src="assets/img/shape/4.png" alt="image" />
                    </div>
                    <div className="shape-2 rotateme">
                        <img src="assets/img/shape/5.svg" alt="image" />
                    </div>
                    <div className="shape-3">
                        <img src="assets/img/shape/6.svg" alt="image" />
                    </div>
                    <div className="shape-4">
                        <img src="assets/img/shape/7.png" alt="image" />
                    </div>
                    <div className="shape-5">
                        <img src="assets/img/shape/8.png" alt="image" />
                    </div>
                </div>
            </div>
        </>
    )
}
