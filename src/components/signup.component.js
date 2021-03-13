import React, { useState } from "react";
import axios from 'axios';
import {ROOT} from '../Api';

export default function SignUp() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    function handleSignup(event){
        event.preventDefault()
        if(email!=="" && password!==""){
            axios({
                method:"POST",
                url:`${ROOT}/signup`,
                data:{
                    email:email,
                    password:password
                },
            }).then(function(res){
                alert("Your account has been created,kindly login");
                window.location=`http://localhost:3000/sign-in`;
            }).catch(function(err){
                alert('account with email already exists,please sign in');
            })
        }else{
            if(email==""){
                alert("Please enter email");
            }else if(password==""){
                alert("Please enter password");
            }else if(email=="" && password==""){
                alert("Password and email fields cannot be empty!")
            }
        }
        
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
                    Already registered?<a href="/sign-in">sign in</a>
                </p>
            </form>
        );
    
}