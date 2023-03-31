import React from "react";
import './logsign.css';
import { useState } from 'react';


function Signup() {
    const[name, setName]=useState("");
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");
    const setVal = (e) =>{
        
    }
    return (
        <>

            <div className="form">
                <p className="logp">Sign-up Form</p>
                <form className="login">
                    <label className="logf">User Name</label>
                    <input type="text" name="name" onChange={(e)=> setName(e.target.value)} autoComplete="off" required></input>
                    <label className="logf">E-mail</label>
                    <input type="email" name="email" onChange={(e)=> setEmail(e.target.value)} autoComplete="off" required></input>
                    <label className="logf">Password</label>
                    <input type="password" name="password" onChange={(e)=> setPassword(e.target.value)} autoComplete="off" required></input>
                    <button type="submit" onClick={setVal}>Sign-Up</button>

                </form>
            </div>

        </>
    );
}
export default Signup;