import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OrderPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state?.item || 'Unknown';

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  
  const [mobile, setMobile] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleOrder = () => {
    if (!name || !address || !mobile || quantity <= 0) {
      alert('Please fill all fields correctly');
      return;
    }

    let total = quantity * 30;
    let discount = 0;

    if (quantity > 5) {
      discount = total * 0.1;
      total = total - discount;
    }

    const newOrder = {
      name,
      address,
      mobile,
      
      item,
      quantity,
      discount: discount.toFixed(2),
      total: total.toFixed(2),
    };

    
    const firstConfirm = window.confirm(
      `Please confirm your order:\n\nItem: ${item}\nQuantity: ${quantity} kg\nDiscount: ₹${newOrder.discount}\nTotal: ₹${newOrder.total}
    `);

    if (!firstConfirm) return;

    
    const secondConfirm = window.confirm('Are you sure you want to place this order?');

    if (!secondConfirm) return;

    
    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
    existingOrders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(existingOrders));

    alert('✅ Order placed successfully!');
    navigate('/cart');
  };

  return (
    <div className="container mt-4 col-md-6">
      <div className="card p-4 shadow">
        <h3 className="mb-3 text-center">Order: {item}</h3>
        <input
          type="text"
          placeholder="Name"
          className="form-control mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          className="form-control mb-3"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Mobile Number"
          className="form-control mb-3"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity (kg)"
          className="form-control mb-3"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <button className="btn btn-success w-100" onClick={handleOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default OrderPage;