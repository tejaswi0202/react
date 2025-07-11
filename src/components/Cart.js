import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);

  const removeItem = (index) => {
    const updated = [...orders];
    updated.splice(index, 1);
    setOrders(updated);
    localStorage.setItem('orders', JSON.stringify(updated));
  };

  return (
    <div className="container mt-4">
      <h3>Customer Cart</h3>
      {orders.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div className="row">
          {orders.map((order, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5>{order.item}</h5>
                  <p><strong>Name:</strong> {order.name}</p>
                  <p><strong>Address:</strong> {order.address}</p>
                  <p><strong>Mobile:</strong> {order.mobile}</p>
                  <p><strong>Quantity:</strong> {order.quantity} kg</p>
                  {Number(order.discount) > 0 && (
                    <p className="text-success"><strong>Discount:</strong> ₹{order.discount}</p>
                  )}
                  <p><strong>Total:</strong> ₹{order.total}</p>
                  <button className="btn btn-danger w-100" onClick={() => removeItem(idx)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;