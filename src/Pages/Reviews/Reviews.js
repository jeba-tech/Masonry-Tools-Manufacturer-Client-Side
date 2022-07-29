import React from 'react';
import ReviewCard from './ReviewCard';
import review from '../../images/review.png'

const Reviews = () => {
      return (
            <div>
                  <h1>Reviews</h1>
                  <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                        <ReviewCard cardTitle="James Jeson" cardDescription="dhbad" img={review}></ReviewCard>
                        <ReviewCard cardTitle="Rimika Ghosh" cardDescription="gooduj" img={review}></ReviewCard>
                        <ReviewCard cardTitle="Aftab Rahman" cardDescription="dhyjbjuj" img={review}></ReviewCard>
                  </div>
            </div>
      );
};

export default Reviews;