import React, {useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";
const alertStyle = {
  color: 'red',
};
const textStyle = {
  textTransform: 'capitalize',
};

export default function findbusiness() {
  const router = useRouter();
  const [blId, setBlId] = useState('');
  const [forwarduId, setForwarduId] = useState('');
  const [find_business_location, setFindBusinessLocation] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [signup_success, setSignupSuccess] = useState(false);

  const handleSubmit = (event:any) => {
      event.preventDefault();
      savedata();
  }

const savedata = () => {
  var uid = '1';
  const data = {
      find_business_location: find_business_location,
      lat:lat,
      lng:lng,
      bl_id:blId,
  }
  setSignupSuccess(true);
}

  const handleAdrChange = (find_business_location:any) => {
    setFindBusinessLocation(find_business_location);
  };

  const handleSelect = (find_business_location:any) => {
    setFindBusinessLocation(find_business_location);
  };

  
if (signup_success) return router.push('/steps/businessinfo');

return (
    <>
      <div className="page-title-area item-bg-5">
        <div className="d-table">
            <div className="d-table-cell">
                <div className="container">
                    <div className="page-title-content">
                        <h2>Complete Account Sign Up</h2>
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
            <li className="active">
                <div className="step_name">Step <span>1</span></div>
                <div className="step_border">
                  <div className="step"><i className="fa fa-circle"></i></div>
                </div>
                <div className="caption hidden-xs hidden-sm"><span>FIND YOUR BUSINESS</span></div>
            </li>
            <li className="">
                <div className="step_name">Step <span>2</span></div>
                <div className="step_border">
                  <div className="step"><i className="fa fa-circle"></i></div>
                </div>
                <div className="caption hidden-xs hidden-sm"><span>BUSINESS INFORMATION</span></div>
            </li>
            <li className="">
                <div className="step_name">Step <span>3</span></div>
                <div className="step_border">
                  <div className="step"><i className="fa fa-circle"></i></div>
                </div>
                <div className="caption hidden-xs hidden-sm"><span>CUSTOMIZE REVIEW SYSTEM</span></div>
            </li>
            <li className="">
                <div className="step_name">Step <span>4</span></div>
                <div className="step_border">
                  <div className="step"><i className="fa fa-circle"></i></div>
                </div>
                <div className="caption hidden-xs hidden-sm"><span>BILLING TO STRIPE</span></div>
            </li>
          </ol>

            <div className="row step_one">
              <div className="col-md-12">
                <form className="needs-validation mb-4" >
                    <h1 className="black_bk_col fontweight500 font_20 mb-4 text-center"> Find your business <i style={{"cursor":'pointer'}} className="fa fa-info-circle" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Please type in your full business name into the field below. This would be your registered company name."></i></h1>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <span style={alertStyle}>{find_business_location}</span>
                      </div>
                    </div>
                  </div>
                <div className="text-center mt-4">    
                  <button type="button" className="blue_btn_box" onClick={handleSubmit}>Next</button>
                </div>
                <p className="contact_support_section">if you can't find your business, please contact customer support</p>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer autoClose={5000} />
      </div>
    </>
  )
}
