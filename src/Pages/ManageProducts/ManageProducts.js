import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const ManageProducts = ({ tool }) => {

      const { _id, name, photograph, price, address, quantity, minimumorderquantity } = tool;
      const navigate = useNavigate();
      const navigateToServiceDetail = id => {
            navigate(`/purchase/${id}`)
      }

      const [tools, setTools] = useProducts();
      const handleDelete = id => {
            const proceed = window.confirm('Are you sure?');
            if (proceed) {
                  const url = `http://localhost:5000/purchase/${id}`;
                  fetch(url, {
                        method: 'DELETE'
                  })
                        .then(res => res.json())
                        .then(data => {
                              console.log(data);
                              const remaining = tools.filter(tool => tool._id !== id);
                              setTools(remaining);
                        })
            }
      }
      return (
            <div>


                  <div className='service'>
                        <img className='service-img' src={photograph} />
                        <h1 className='dish-name'>{name}</h1>
                        <h2>${price}</h2>
                        <h2>Available Quantity:{quantity}</h2>
                        <h2>Minimum order quantity:{minimumorderquantity}</h2>
                        <h4 className='description'>{address}</h4>
                        <button className='btn btn-outline-dark mt-2 m-2' onClick={() => handleDelete(tool._id)} >Delete</button>

                        <button onClick={() => navigateToServiceDetail(_id)} className='btn btn-outline-dark mt-2'>Buy now</button>



                  </div>
            </div>

      );
};

export default ManageProducts;