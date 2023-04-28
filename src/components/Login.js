import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/login.css'
export default function Login() {
  const [credentials, setcredentials] = useState({ email: "", password: "" });//geolocation for hit through api thats why
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();//sinthetic event hota h
    // const {name,email,password,location} = user
    console.log(JSON.stringify(
      {
        
        email: credentials.email,
        password: credentials.password,
        
      }))
    const {name,password,email,location}=credentials;

    const response = await fetch("/loginuser", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(
        {
          email: credentials.email,
          password: credentials.password
        }
      )


    });
    const data = await response.json()
    if (!data.success) {
      window.alert("invalid enteries")
      console.log("invalid entry")
    }
    if(data.success){
      // localStorage.setItem("authToken",data.authToken);
      // console.log(localStorage.getItem("authToken"));
      alert("successfully register");
      localStorage.setItem("authToken",data.authToken);
      console.log(localStorage.getItem("authToken"));
      navigate('/home')      
      console.log("succefully register");
      // navigate('/home')      
    }
  }
  const onchange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })

}



  return (
    <div>
    <div class="wrapper">
        <div class="logo">
            <img src="https://vectorified.com/image/monkey-logo-vector-4.png" alt=""></img>
        </div>
        <div class="text-center mt-4 name">
            Login
        </div>
        <form class="p-3 mt-3" onSubmit={handleSubmit}>
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="email" name="email" id="userName" placeholder="emailid"  onChange={onchange} value={credentials.email}></input>
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password"  onChange={onchange} value={credentials.password}></input>
            </div>
            <button class="btn mt-3">Login</button>
            <Link class="btn mt-3" to="/signup">Sign up</Link>
        </form>
        <div class="text-center fs-6">
            
        </div>
    </div>

      
    </div>
  )
}
