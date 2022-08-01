import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const PurchaseDetails = () => {
      const { toolId } = useParams();
      const [tool, setBook] = useState({});
      useEffect(() => {
            const url = `http://localhost:5000/purchaseDetails/${toolId}`;
            fetch(url)
                  .then(res => res.json())
                  .then(data => setBook(data));

      }, [])
      return (
            <div>
                  <img className='service-img ms-5' src={tool.photograph} />

                  <h1 className='mt-5 ms-5'>Book Name:{tool.name}</h1>
                  <h1 className='mt-5 ms-5'>Book Price:{tool.price}</h1>
                  <h1 className='mt-5 ms-5'>Book Quantity:{tool.quantity}</h1>
                  <h1 className='mt-5 ms-5'>Description:{tool.address}</h1>

            </div>
      );
};

export default PurchaseDetails;