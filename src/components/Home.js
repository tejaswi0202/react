import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [crops, setCrops] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/crops')
      .then(res => res.json())
      .then(data => setCrops(data))
      .catch(err => console.error('Failed to load crops:', err));
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Available Crops</h3>
      <div className="row">
        {crops.map((item) => (
          <div className="col-md-3 mb-4" key={item.id}>
            <div className="card h-100 shadow-sm">
              <img src={item.img} className="card-img-top" alt={item.name} />
              <div className="card-body text-center">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text"><strong>Price:</strong> {item.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate('/order', { state: { item: item.name, price: item.price } })}
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;