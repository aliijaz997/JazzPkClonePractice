import React from "react";
import './logsign.css';
import { Link } from "react-router-dom";
import { useState } from 'react';

const Login=()=>{

    const [name, setName]=useState("");
    const [password, setPassword]=useState("");
    const checkLog = (e) => {
        
            if(name==="ali" && password==="1234")
            {
                alert("login Successfull");
                setName("");
                setPassword("");
            }
            else{
                alert("Invalid Username Password");
                setName("");
                setPassword("");
            }
    }
return(
    <>
    
    <div className="form">
        <p className="logp">Log-In Form</p>        
                <form className="login">
                    <label className="logf">User Name: </label>
                    <input type="text" name="name"  onChange={(e)=> setName(e.target.value)} autoComplete="off" required></input>
                    <label className="logf">Password: </label>
                    <input type="password" name="password"  onChange={(e)=> setPassword(e.target.value)} autoComplete="off" required ></input>
                    <button type="submit" onClick={checkLog}>Log-in</button>
                    <p className="nav-item">
                        <Link className="nav-link"  to="/signup">Sign Up if you want to create an account</Link>
                    </p>
                </form>
    </div>
    
    </>
)
}
export default Login;
================================================================

