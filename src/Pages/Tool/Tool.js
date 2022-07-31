import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Tool.css';

const Tool = ({ tool }) => {
      const { _id, name, photograph, price, address, quantity, supplierName } = tool;
      const navigate = useNavigate();
      const navigateToServiceDetail = id => {
            navigate(`/tool/${id}`)
      }
      return (
            <div className='service'>
                  <img className='service-img' src={photograph} />
                  <h1 className='dish-name'>{name}</h1>
                  <h2>${price}</h2>
                  <h2>Quantity:{quantity}</h2>
                  <h2>Supplier Name:{supplierName}</h2>
                  <h4 className='description'>{address}</h4>
                  <button onClick={() => navigateToServiceDetail(_id)} className='btn btn-outline-dark mt-2'>Buy now</button>


            </div>
      );
};

export default Tool;