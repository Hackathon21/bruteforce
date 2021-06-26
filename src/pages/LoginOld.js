import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { googleProvider } from '../config/authMethods';
import '../css/Login.css';
import logo from "../media/student-logo.png";
import socialMediaAuth from '../service/auth';

function Login(){

    const [loggedIn, setLoggedIn] = useState(false)
    const handleOnClick = (provider) =>{
        socialMediaAuth(provider).then( async res =>{
            console.log(res);
            const data = {
                name: res.displayName,
                email: res.email,
                verified: res.emailVerified,
                id: res.uid
            }
            if(typeof window !== "undefined"){
                await localStorage.setItem("userData", JSON.stringify(data));
            }
            setLoggedIn(true)
            console.log('LoggedIn')
        })
        .catch(err =>{
            console.log(err);
        })
        // console.log(res);
    }
    return(
        <>
        <div className="login">
            
            {/* <button onClick={() => handleOnClick(facebookProvider)}>Facebook</button> */}
            <div className="login__logo">
                <img src={logo} />
            </div>
            <button type="submit" onClick={() => handleOnClick(googleProvider)}>LogIn with Google</button>

        </div>
        {loggedIn ? <Redirect to="/dashboard" />: ''}
        </>
    )
}

export default Login