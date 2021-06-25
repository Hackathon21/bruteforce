import { Button } from 'bootstrap';
import React from 'react';
import { facebookProvider, googleProvider } from '../config/authMethods';
import socialMediaAuth from '../service/auth';
import '../css/Login.css';
import logo from "../media/student-logo.png"
import Topbar from "../pages/Topbar";

function Login(){
    const handleOnClick = (provider) =>{
        const res = socialMediaAuth(provider);
        console.log(res);
    }
    return(
        
        <div className="login">
            
            {/* <button onClick={() => handleOnClick(facebookProvider)}>Facebook</button> */}
            <div className="login__logo">
                <img src={logo} />
            </div>
            <button type="submit" onClick={() => handleOnClick(googleProvider)}>LogIn with Google</button>

        </div>
        
    )
}

export default Login