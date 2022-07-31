import React from 'react';
import servedcustomers from '../../images/servedcustomers.jpg'
import ReviewsStar from '../../images/ReviewsStar.png'
import Annualrevenue from '../../images/Annualrevenue.png'

const BusinessSummary = () => {
      return (
            <div>
                  <h1 className='title'>Business Summary</h1>
                  <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        <div class="card w-96 bg-base-100 image-full">
                              <figure>

                                    <img src={servedcustomers} />
                              </figure>
                              <div class="card-body">
                                    <h2 class="card-title">we served 100+ customers</h2>


                              </div>
                        </div>
                        <div class="card w-96 bg-base-100 image-full">
                              <figure>

                                    <img src={ReviewsStar} />
                              </figure>
                              <div class="card-body">
                                    <h2 class="card-title">33K+ Reviews</h2>

                              </div>
                        </div>
                        <div class="card w-96 bg-base-100 image-full">
                              <figure>

                                    <img src={Annualrevenue} />
                              </figure>
                              <div class="card-body">
                                    <h2 class="card-title">120M+ Annual revenue</h2>

                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default BusinessSummary;