import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Purchase = () => {

      const { toolId } = useParams();
      const [tool, setBook] = useState({});
      useEffect(() => {
            const url = `http://localhost:5000/purchase/${toolId}`;
            fetch(url)
                  .then(res => res.json())
                  .then(data => setBook(data));

      }, [])
      return (
            <div className='detail'>
                  <h1 className='mt-5 ms-5'>welcome to Inventory</h1>
                  <h1 className='mt-5 ms-5'>ID:{toolId}</h1>
                  <Link className='btn btn-outline-dark inventory-btn ' to="/purchaseDetails/${toolId}">Product Details</Link>



            </div>
      );





};

export default Purchase;