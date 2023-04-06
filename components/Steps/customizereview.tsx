import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";
const alertStyle = {
  color: 'red',
};

const textStyle = {
  textTransform: 'capitalize',
};


export default function customizereview(){
  const router = useRouter();
  const [blId, setBlId] = useState('');
  const [forwarduId, setForwarduId] = useState('');
  const [business_review_link, setBusinessReviewLink] = useState('');
  const [business_name, setBusinessName] = useState('');
  const [facebook_link, setFacebookLink] = useState('');
  const [twitter_link, setTwitterLink] = useState('');
  const [linkedin_link, setLinkedinLink] = useState('');
  const [instagram_link, setInstagramLink] = useState('');
  const [client_satisfaction, setClientSatisfaction] = useState('');
  const [signup_success, setSignupSuccess] = useState(false);
  const [disablePurl, setDisablePurl] = useState(false);
  const [disablePurls, setDisablePurls] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (event:any) => {
    event.preventDefault();
    savedata();
  }
  const savedata = () => {
    var blid = blId;
    const data = {
        user_id: forwarduId,
        business_review_link: business_review_link,
        facebook_link: facebook_link,
        twitter_link: twitter_link,
        linkedin_link: linkedin_link,
        instagram_link: instagram_link,
        client_satisfaction: client_satisfaction,
    }
  }

  const diasbleCopyMsg = () => {
    setCopied(true);
  }
  
  if (signup_success) return router.push('/steps/billing');

return (
    <div className="left-bar">
      <div className="col-sm-12">
        <h1 className="black_bk_col fontweight500 font_16 mb-4 pb-1">Complete Account Sign Up</h1>
      </div>
      <div className="container">
          <div id="app">     
            <ol className="step-indicator">
               <li className="">
                  <div className="step_name">Step <span>1</span></div>
                  <div className="step_border">
                     <div className="step_complete"><i className="fa fa-check-circle" aria-hidden="true"></i></div>
                  </div>
                  <div className="caption hidden-xs hidden-sm"><span>FIND YOUR BUSINESS</span></div>
               </li>
               <li className="">
                  <div className="step_name">Step <span>2</span></div>
                  <div className="step_border">
                     <div className="step_complete"><i className="fa fa-check-circle" aria-hidden="true"></i></div>
                  </div>
                  <div className="caption hidden-xs hidden-sm"><span>BUSINESS INFORMATION</span></div>
               </li>
               <li className="active">
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

                  <div className="row step_two">
                    <div className="col-md-12">
                      <form className="needs-validation mb-4" >
                          <h1 className="black_bk_col fontweight500 font_20 mb-4 text-center"> Choose your main location's Business Review Link  <i style={{cursor:'pointer'}} className="fa fa-info-circle" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="This is a specific URL hosted on the 5 Star Reviews website that would host your reviews. It is recommended to use your business name for this URL."></i> </h1>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input disabled={!disablePurl} type="text" className="form-control input_custom_style" id="purl" name="purl" value={PROFILE_URL} />
                            </div>
                          </div>
                          
                          <div className="col-md-4">
                            <div className="form-group">
                          <input type="text" className="form-control input_custom_style" id="business_review_link" name="business_review_link" placeholder="business-name" onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "business-name"} value={business_review_link} onChange={(e) => setBusinessReviewLink(e.target.value)} />
                          <span style={alertStyle}>{business_review_link}</span>
                            </div>
                          </div>
                        </div>
                        
                        <h1 className="black_bk_col fontweight500 font_20 mb-4 mt-3 text-center"> Choose your review requirements for satisfied customers  <i style={{cursor:'pointer'}} className="fa fa-info-circle" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="All your requested reviews will provide a star rating between 1 and 5. Please select whether you would like to include 4 & 5-star reviews or just 5-star reviews requesting a public review. Example: If you select “4 & 5-star reviews only”, all reviews with a 4 and 5-star review will be sent to Facebook & Google to leave a public review. However, if you choose “5 star reviews only”, the customers who provided a 4-star review will not be requested to leave a public review."></i> </h1>
                        <ul className="step_review">

                          <li className="step_review_li">
                            <div className="custom-control custom-radio text-right">

                              {client_satisfaction == '1'
                                ? <input type="radio" className="custom-control-input" id="customRadio2" name="client_satisfaction" value="1" checked onChange={(e) => setClientSatisfaction(e.target.value)} />
                              : <input type="radio" className="custom-control-input" id="customRadio2" name="client_satisfaction" value="1" checked={client_satisfaction === '1'} onChange={(e) => setClientSatisfaction(e.target.value)} />
                              }  

                            <label className="custom-control-label" htmlFor="customRadio2"></label>
                            </div>
                            <ul className="ratting_starr m-0">
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
                            </ul>
                            <p className="review_txt">4 & 5 star reviews only</p>
                          </li>

                          <li className="step_review_li">
                            <div className="custom-control custom-radio text-right">
                            
                            {client_satisfaction == '0'
                             ? <input type="radio" className="custom-control-input" id="customRadio" name="client_satisfaction" value="0" checked onChange={(e) => setClientSatisfaction(e.target.value)} />
                            : <input type="radio" className="custom-control-input" id="customRadio" name="client_satisfaction" value="0" checked={client_satisfaction === '0'} onChange={(e) => setClientSatisfaction(e.target.value)} />
                            }  

                           <label className="custom-control-label" htmlFor="customRadio"></label>
                            </div>
                            <ul className="ratting_starr m-0">
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                            </ul>
                            <p className="review_txt">5 star reviews only</p>
                          </li>

                      <span style={alertStyle}>{client_satisfaction}</span>    
                        </ul>
                        <h1 className="black_bk_col fontweight500 font_20 mb-4 mt-3 text-center"> Enter your social media accounts  <i style={{cursor:'pointer'}} className="fa fa-info-circle" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Please enter the full URL of your social media pages."></i> </h1>
                        
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-facebook" aria-hidden="true"></i></span>
                              </div>

                            <input type="text" className="form-control" id="facebook_link" name="facebook_link" placeholder="Facebook Url" value={facebook_link} onChange={(e) => setFacebookLink(e.target.value)} />
                            <span style={alertStyle}>{facebook_link}</span>

                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-twitter" aria-hidden="true"></i></span>
                              </div>

                            <input type="text" className="form-control" id="twitter_link" name="twitter_link" placeholder="Twitter Url" value={twitter_link} onChange={(e) => setTwitterLink(e.target.value)} />
                            <span style={alertStyle}>{twitter_link}</span>

                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-instagram" aria-hidden="true"></i></span>
                              </div>

                            <input type="text" className="form-control" id="instagram_link" name="instagram_link" placeholder="Instagram Url" value={instagram_link} onChange={(e) => setInstagramLink(e.target.value)} />
                            <span style={alertStyle}>{instagram_link}</span> 
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-linkedin" aria-hidden="true"></i></span>
                              </div>

                          <input type="text" className="form-control" id="linkedin_link" name="linkedin_link" placeholder="Linkedin Url" value={linkedin_link} onChange={(e) => setLinkedinLink(e.target.value)} />
                          <span style={alertStyle}>{linkedin_link}</span>

                            </div>
                          </div>
                        </div>
                        <div className="text-center mt-4">
                        <button type="button" className="blue_btn_box" onClick={handleSubmit}>Next</button>
                          <p className="m-0"><a href={`/steps/businessinfo`}>Back</a></p>
                        </div>
                      </form>
                    </div>
                  </div>

          </div>
      </div>
      <ToastContainer autoClose={5000} />
    </div>
  );
}
