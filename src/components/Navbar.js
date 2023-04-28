import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  localStorage.setItem('temp', "first")
  return (
    <header>
      <a href="/">Shopping Cart</a>
      
     
    </header>
    
  ); 
};

export default Navbar;