import React from 'react'
import { useState ,useEffect } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export default function OtpPopup() {
  const [otp, setotp] = useState("");
  const [userId, setUserId] = useState(1);
  const router = useRouter();
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/confirm-otp`,{otp,userId});
      const data = res.data;
      if(data.status === true){
        toast.success(data.message, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
          router.push('/join/investor/thank-you');
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
    }catch(err){
        console.log(err);
    }
}

const sendOtp =async (e)=>{
  e.preventDefault();
  try{
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/send-otp`);
    const data = res.data;
    if(data.status === true){
      toast.success(data.message, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      console.log(data);
    }else{
      toast.error('Otp not send', {
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
  }catch(err){
    console.log(err)
  }
}

        return (
          <>
          {/* Start Page Title Area */}
          <div className="modal show" style={{'display':'block','background':'#00000094'}} id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle">
          <div className="modal-dialog" role="document" style={{'max-width':'50%','pointer-events':'all'}}>
    <div className="signup-form">
        <h3>Enter OTP</h3>
        <p className="text-center">Enter the four digit OTP sent to your Email or Mobile Number</p>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-12">
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter OTP*"
                  name="otp"
                  onChange={e => setotp(e.target.value)}
                />
              </div>
              <p className="text-center">Didn't receive the OTP? <a href="#" onClick={sendOtp} style={{'text-decoration':'underline','color':'#086AD8'}}>Resend OTP</a></p>
              <p className="text-center"><a href="#" style={{'text-decoration':'underline'}}>Change Number</a></p>
            </div>
            <div className="col-lg-12" id="invest">
              <div className="send-btn">
                <button type="submit" className="default-btn button">
                  Verify
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      </div>
      </div>
          {/* End Page Title Area */}
        </>
        )
}