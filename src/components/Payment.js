import React from "react";
import { useNavigate,useLocation} from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const order = location.state;

  console.log(location);
  if (order === null) {
    navigate("/");
  }
  return (
    <div className="order-details">
      {order && (
        <div>
          <h2>Order Details</h2>
          <p> Name: {order && order.name}</p>
          <p> Email: {order && order.email}</p>
          <p>Address: {order && order.address}</p>
          <p>
            {order &&
              order.cartItems.map((item, index) => (
                <div key={index}>
                  <div>{item.title}</div>
                  <div className="right">
                    {`$${item.price}`} x {item.count}{" "}
                  </div>
                </div>
              ))}
          </p>
        </div>
      )}
    </div>
  );
};

export default Payment;
