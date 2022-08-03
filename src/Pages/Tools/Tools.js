import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Tool from '../Tool/Tool';
import './Tools.css';

const Tools = () => {

      const [tools, setTools] = useState([]);
      useEffect(() => {
            fetch('http://localhost:5000/purchase')
                  .then(res => res.json())
                  .then(data => setTools(data));
      }, [])
      return (
            <div id='books'>
                  <h1 className='service-title title'>Masonry Tools</h1>

                  <div className='services-container'>
                        {
                              tools.map(tool => <Tool
                                    key={tool._id}
                                    tool={tool}
                              ></Tool>)
                        }
                  </div>



            </div>
      );
};

export default Tools;
