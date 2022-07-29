import React from 'react';

const ReviewCard = ({ img, cardTitle, cardDescription }) => {
      return (
            <div class="card lg:card-side bg-accent shadow-xl">
                  <figure className='pl-5'>
                        <img src={img} style={{ height: '90px', width: '90px' }} />
                  </figure>
                  <div class="card-body">
                        <h2 class="card-title">{cardTitle}</h2>
                        <p>{cardDescription}</p>
                        <div class="card-actions justify-end">
                              <button class="btn btn-primary">Read More</button>
                        </div>
                  </div>
            </div>
      );
};

export default ReviewCard;