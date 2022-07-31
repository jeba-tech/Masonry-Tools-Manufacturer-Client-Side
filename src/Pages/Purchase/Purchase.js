import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Purchase = () => {

      const { toolId } = useParams();
      const [tool, setBook] = useState({});
      useEffect(() => {
            const url = `http://localhost:5000/tool/${toolId}`;
            fetch(url)
                  .then(res => res.json())
                  .then(data => setBook(data));

      }, [])
      return (
            <div className='detail'>
                  <h1 className='mt-5 ms-5'>welcome to Inventory</h1>
                  <h1 className='mt-5 ms-5'>ID:{toolId}</h1>
                  <img className='service-img ms-5' src={tool.photograph} />

                  <h1 className='mt-5 ms-5'>Book Name:{tool.name}</h1>
                  <h1 className='mt-5 ms-5'>Book Price:{tool.price}</h1>
                  <h1 className='mt-5 ms-5'>Book Quantity:{tool.quantity}</h1>
                  <h1 className='mt-5 ms-5'>Supplier Name:{tool.supplierName}</h1>
                  <h1 className='mt-5 ms-5'>Description:{tool.address}</h1>




            </div>
      );
};

export default Purchase;