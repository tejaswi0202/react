import React from 'react';
import { useNavigate } from 'react-router-dom';

const crops = [
  { type: 'vegetables', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqHkfs8klnT6qN8Q3xPyfCC9sXXTP3fhKGEQ&s' },
  { type: 'fruits', img: 'https://media.post.rvohealth.io/wp-content/uploads/sites/3/2025/01/sugar-fruit-GettyImages-2195839879-Header-1024x575.jpg' },
  { type: 'grains', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGBW0FNk51psNfDN7YyfHxJODwpdys35O3wLi5AWwyjG8oGM4-u3szpCJ8dqwm_GBY3TQ&usqp=CAU' },
  { type: 'millets', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpI8vrBi1Et9DrN0_Lix6IKajW-aVr0E74uA&s' },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <h3>Select Crop Category</h3>
      <div className="row">
        {crops.map(crop => (
          <div className="col-md-3" key={crop.type}>
            <div className="card" onClick={() => navigate(`/crops/${crop.type}`)}>
              <img src={crop.img} className="card-img-top" alt={crop.type} />
              <div className="card-body text-center">
                <h5 className="card-title text-capitalize">{crop.type}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;