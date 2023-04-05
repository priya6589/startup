import React, { useState, useEffect } from "react";
import {login} from '../../lib/frontendapi';
import { removeToken, removeStorageData } from "../../lib/session";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Login() {
    const [email, setEmail] = useState("");
  	const [password, setPassword] = useState("");
  	const [rememberMe, setRememberMe] = useState(false);
    //const {register, handleSubmit, formState: { errors },} = useForm();
    useEffect(() => {
      removeToken();
      removeStorageData();
    }, []);
    const handleSubmit = (e:any) => {
    	e.preventDefault();
    	const logindata = {
    		email: email,
    		password: password
    	}
    	login(logindata)
	    .then(res => {
	    	if(res.status==true){
	    		//if(res.authorisation.token){
		    		window.localStorage.setItem("id", res.data.id);
		    		window.localStorage.setItem("email", res.data.email);
			        window.localStorage.setItem("username", res.data.name);
			        window.localStorage.setItem("user_role", res.data.role);
			        /*if (rememberMe) {
			          window.localStorage.setItem("token", res.authorisation.token);
			        } else {
			          window.sessionStorage.setItem("token", res.authorisation.token);
			        }*/
			        if(window.localStorage.getItem("user_role") == 'admin'){
		        		window.location.href = '/services';
		        	} else {
		        		window.location.href = '/';
		        	}
		      	/*} else {
		      		toast.success(res.message, {
                    	position: toast.POSITION.TOP_RIGHT,
                    	toastId: 'success',
                	});
		      	}*/
                toast.success(res.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    toastId: 'success',
                });
	    	} else {
	    		toast.error(res.message, {
                	position: toast.POSITION.TOP_RIGHT,
                	toastId: 'error',
            	});
	    	}
	    })
	    .catch(err => {
	    	toast.error(err, {
            	position: toast.POSITION.TOP_RIGHT
        	});
	    });
  	}
    return (
        <>
            <div className="page-title-area item-bg-1">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="page-title-content">
                                <h2>Log In</h2>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li>Log In</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="login-section ptb-100">
                <div className="container">
                    <div className="login-form">
                        <div className="login-title">
                            <h3>Welcome Back!</h3>
                            <p>Please login to your account.</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" required />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-check">
                                        <input type="checkbox" name="remember" onChange={(e) => setRememberMe(true)} className="form-check-input" id="checkme" />
                                        <label className="form-check-label" htmlFor="checkme">Keep me Log In</label>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <p className="forgot-password"><a href="#">Forgot Password?</a></p>
                                </div>
                                <div className="col-lg-12">
                                    <div className="send-btn">
                                        <button type="submit" className="default-btn">
                                            Log In Now
                                        </button>
                                    </div>
                                    <br />
                                    <span>Don't have account? <a href="sign-up.html">Signup!</a></span>
                                </div>
                            </div>
                        </form>
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
                <ToastContainer/>
            </div>
        </>
    )
}
