import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Tool.css';

const Tool = ({ tool }) => {
      const { _id, name, photograph, price, address, quantity, minimumorderquantity } = tool;
      const navigate = useNavigate();
      const navigateToServiceDetail = id => {
            navigate(`/purchase/${id}`)
      }
      return (
            <div className='service'>
                  <img className='service-img' src={photograph} />
                  <h1 className='dish-name'>{name}</h1>
                  <h2>${price}</h2>
                  <h2>Available Quantity:{quantity}</h2>
                  <h2>Minimum order quantity:{minimumorderquantity}</h2>
                  <h4 className='description'>{address}</h4>
                  <button onClick={() => navigateToServiceDetail(_id)} className='btn btn-outline-dark mt-2'>Buy now</button>


            </div>
      );
};

export default Tool;