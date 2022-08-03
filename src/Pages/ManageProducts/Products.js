import React from 'react';
import useProducts from '../../hooks/useProducts';
import ManageProducts from './ManageProducts';

const Products = () => {

      const [tools, setTools] = useProducts();
      return (
            <div>

                  <div className='services-container '>
                        {
                              tools.map(tool => <ManageProducts
                                    key={tool._id}
                                    tool={tool}

                              ></ManageProducts>)
                        }


                  </div>
            </div>
      );
};

export default Products;