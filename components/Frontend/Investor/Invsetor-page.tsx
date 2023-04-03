import React, { useState } from "react";
import { Formik, Form, Field } from 'formik';
import axios from "axios";
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const Invsetor = () => {
  const [email, setemail] = useState("");
  const router = useRouter();
  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/join_to_invest`, { email: email });
      const data = res.data;
      if(data.status === true){
        toast.success('Thank you! Please wait while we redirect you.', {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
        router.push('/join/join-investor');
      }else{
        toast.error(data.message, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }
      return false;
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      {/* Start Page Title Area */}
      <div className="page-title-area item-bg-5 h-100" id="fill-image">
        <div className="signup-section ptb-100">
          <div className="container">
            <div className="signup-form">
              <h3>Sign-up on Startup</h3>
              <form onSubmit={HandleSubmit}>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your Email*"
                        name="email"
                        onChange={e => setemail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12" id="invest">
                    <div className="send-btn">
                      <button type="submit" className="default-btn button">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Title Area */}
    </>
  );
};

export default Invsetor;
