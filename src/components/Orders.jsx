import { useEffect, useState } from "react";
import axios from "axios";

function Orders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/orders")
      .then(res => setOrders(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Your Orders</h2>

      {orders.map((order, index) => (
        <div key={index}>
          {order.products.map((item, i) => (
            <div key={i}>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.quantity}</p>
            </div>
          ))}
          <h4>Total: {order.totalAmount}</h4>
        </div>
      ))}

    </div>
  );
}

export default Orders;