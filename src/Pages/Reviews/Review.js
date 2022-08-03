import React from 'react';

const Review = ({ review }) => {

      const { _id, name, rating, address } = review;

      return (



            <div class="card lg:max-w-lg bg-primary text-primary-content">
                  <div class="card-body">
                        <h2 class="card-title">{name}</h2>
                        <h2 class="card-title">Ratings:  {rating} out of 5</h2>
                        <p>{address}</p>
                        {/* <div class="card-actions justify-end">
                              <button class="btn">Buy Now</button>
                        </div> */}
                  </div>
            </div>
      );
};

export default Review;