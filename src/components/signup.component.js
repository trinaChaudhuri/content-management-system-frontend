import React, { useState } from "react";
import axios from 'axios';
import {ROOT} from '../Api';

export default function SignUp() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [userId,setUserId]=useState(null);
    function handleSignup(event){
        event.preventDefault()
        axios({
            method:"POST",
            url:`${ROOT}/signup`,
            data:{
                email:email,
                password:password
            },
        }).then(function(res){
            console.log('sign up res',res)
            window.location=`http://localhost:3000/sign-in`;
        }).catch(function(err){
            console.log('sign up err',err);
        })
        
    }
        return (
            <form>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" 
                    onChange={(event)=>setEmail(event.target.value)} value={email}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" 
                    onChange={(event)=>setPassword(event.target.value)} value={password}/>
                </div>
                <button type="submit" className="btn btn-primary btn-block"
                onClick={(event)=>handleSignup(event)}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </form>
        );
    
}