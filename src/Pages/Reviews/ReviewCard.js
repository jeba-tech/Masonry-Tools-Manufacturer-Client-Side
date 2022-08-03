import React from 'react';

const ReviewCard = ({ img, cardTitle, cardDescription }) => {
      return (
            <div className="card lg:card-side bg-accent shadow-xl">
                  <figure className='pl-5'>
                        <img src={img} style={{ height: '90px', width: '90px' }} />
                  </figure>
                  <div className="card-body">
                        <h2 className="card-title">{cardTitle}</h2>
                        <p>{cardDescription}</p>
                        <div className="card-actions justify-end">
                              <button className="btn btn-primary">Read More</button>
                        </div>
                  </div>
            </div>
      );
};

export default ReviewCard;