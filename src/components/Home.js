import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Payment from "./Payment";

const Home = () => {
  const [order, setOrder] = useState(null);
  const navigate = useNavigate();
  const createOrder = (order) => {
    setOrder(order);
    navigate("/payment");
  };
  const [click,setClick]=useState(false);
  

  return (
    <div className="container">
      {/* <Route path="/" element={<Main createOrderApp={createOrder} />} />

          <Route path="/payment" element={<Payment order={order} />} /> */}

      <Main createOrderApp={createOrder} />

      <footer>All rights reserved.<div><Link className="button1" to="/">Logout</Link>
      
      </div></footer>
      
    </div>
  );
};

export default Home;
