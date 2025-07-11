import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const sampleData = {
  vegetables: [
    { name: 'Tomato', price :20,img: 'https://images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg' },
    { name: 'Potato',price:30, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7MDMKlTeJtG0h6kbr2XoViUmoY7UQ-sK-GQ&s' },
    { name: 'Carrot', price:25,img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYpvXV8yAk_S1ZAWaquCgj-zx-U9wLeFvDDg&s' },
    { name: 'Onion',price:35, img: 'https://5.imimg.com/data5/ANDROID/Default/2021/3/GP/VO/XV/125443919/screenshot-20210320-183611-jpg-500x500.jpg' },
    { name: 'Cucumber',price:15, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM20eG_JDWdKry2aWzYLpaduo1k3Rq2EBt9w&s' },
    { name: 'Capsicum',price:20, img: '/images/banana.jpg' },
    { name: 'Green Beans',price:25, img: '/images/orange.jpg' },
    { name: 'Chili', price:35,img: '/images/grapes.jpg' }
  ],
  fruits: [
    { name: 'Apple', img: '/images/apple.jpg' },
    { name: 'Banana', img: '/images/banana.jpg' },
    { name: 'Orange', img: '/images/orange.jpg' },
    { name: 'Grapes', img: '/images/grapes.jpg' }
  ],
  grains: [
    { name: 'Rice', img: '/images/rice.jpg' },
    { name: 'Wheat', img: '/images/wheat.jpg' },
    { name: 'Barley', img: '/images/barley.jpg' },
    { name: 'Corn', img: '/images/corn.jpg' }
  ],
  'millets': [
    { name: 'Soap', img: '/images/soap.jpg' },
    { name: 'Toothpaste', img: '/images/toothpaste.jpg' },
    { name: 'Detergent', img: '/images/detergent.jpg' },
    { name: 'Shampoo', img: '/images/shampoo.jpg' }
  ]
};

const CropTypes = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <h3 className="text-capitalize">{type.replace('-', ' ')}</h3>
      <div className="row">
        {sampleData[type]?.map((item) => (
          <div className="col-md-3 mb-4" key={item.name}>
            <div className="card h-100 shadow-sm">
              <img src={item.img} className="card-img-top" alt={item.name} style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body text-center">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text"><strong>Price:</strong>{item.price}</p>
                <button
                  className="btn btn-success"
                  onClick={() => navigate('/order', { state: { item: item.name } })}
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
        {!sampleData[type] && (
          <div className="col-12">
            <p className="text-danger">No items found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CropTypes;