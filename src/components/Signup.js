import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [credentials, setcredentials] = useState({ name:"",email: "", password: "",location:"" });//geolocation for hit through api thats why
  const navigate=useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();//sinthetic event hota h
    // const {name,email,password,location} = user
    console.log(JSON.stringify(
        {
            name: credentials.name,
             email: credentials.email,
             password: credentials.password,
              location: credentials.location
        }))
        // const {name,password,email,location}=credentials;

    const response =  await fetch("/createuser", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            
        },
        body: JSON.stringify(
            {
                name: credentials.name, email: credentials.email,
                password: credentials.password, location: credentials.location
            }
        )


    });
    const data = await response.json()
    if(!data.success ){
        window.alert("invalid enteries")
        console.log("invalid entry")
    }
    else{
        alert("successfully register")
        navigate('/')
        console.log("succefully register")
    }
    


}
// alert(
//     "name="+credentials.name
// )



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
           Signup
        </div>
        <form class="p-3 mt-3" onSubmit={handleSubmit}>
        <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="name" name="name" id="userName" placeholder="name"  onChange={onchange} value={credentials.name}></input>
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="email" name="email" id="userName" placeholder="emailid"  onChange={onchange} value={credentials.email}></input>
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password"  onChange={onchange} value={credentials.password}></input>
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="location" name="location" id="pwd" placeholder="location"  onChange={onchange} value={credentials.location}></input>
            </div>
            <button class="btn mt-3">Sign-UP</button>
            
        </form>
        <div class="text-center fs-6">
            
        </div>
    </div>

      
    </div>
  )
}

export default Signup
