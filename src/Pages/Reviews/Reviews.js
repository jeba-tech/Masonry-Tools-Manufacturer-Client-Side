import React from 'react';
import ReviewCard from './ReviewCard';
import review from '../../images/review.png'
import './Reviews.css';

const Reviews = () => {
      return (
            <div className='reviews'>
                  <h1 className='title '>Reviews</h1>
                  <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 '>
                        <ReviewCard cardTitle="James Jeson" cardDescription="Enjoyed staying: location is great, not far from a subway station and only 15 minutes ride from all the sights. There are lots of restaurants and shops nearby. Cheerful and welcoming atmosphere. Thanks for the hospitality." img={review}></ReviewCard>
                        <ReviewCard cardTitle="Rimika Ghosh" cardDescription="Every hotel today should have an unspoken promise to provide a comfortable place to stay and a high level of customer service to each of its guests. If that promise is being met, let travelers know through review response. " img={review}></ReviewCard>
                        <ReviewCard cardTitle="Aftab Rahman" cardDescription="Thank you for finding the time to share the details of your recent visit. While we are delighted to learn that you found our spacious lobby to be remarkable and our guest service to be accommodating and friendly." img={review}></ReviewCard>
                  </div>
            </div>
      );
};

export default Reviews;