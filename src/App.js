import React, { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import Payment from "./components/Payment";
import Signup from "./components/Signup";

function App() {
  const [order, setOrder] = useState(null);
  const navigate = useNavigate();
  
  const createOrder = (order) => {
    setOrder(order);
    navigate("/payment");
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/payment" element={<Payment order={order} />} /> 
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<Home/>} /> 
        <Route path="/signup" element={<Signup/>} /> 
        

      </Routes>

       {/* <Route path="/" element={<Main createOrderApp={createOrder} />} /> */}

        

    </div>
   

       
      




      
  );
}

export default App;
