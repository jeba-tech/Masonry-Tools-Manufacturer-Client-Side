import React from 'react';

const Review = ({ review }) => {

      const { _id, name, rating, address } = review;

      return (
            // <div class="card-body">



            //       <h1 class="card-title">{name}</h1>
            //       <h2 >{rating}</h2>
            //       <h2 >{address}</h2>

            // </div>


            <div class="card lg:max-w-lg bg-primary text-primary-content">
                  <div class="card-body">
                        <h2 class="card-title">{name}</h2>
                        <h2 class="card-title">Ratings:  {rating.length} out of 5</h2>
                        <p>{address}</p>
                        {/* <div class="card-actions justify-end">
                              <button class="btn">Buy Now</button>
                        </div> */}
                  </div>
            </div>
      );
};

export default Review;