import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";

const AddReview = () => {
      const { register, handleSubmit } = useForm();
      const onSubmit = data => {
            console.log(data);
            const url = `https://mysterious-wildwood-50422.herokuapp.com/reviews`;
            fetch(url, {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(data)
            })
                  .then(res => res.json())
                  .then(result => {
                        console.log(result);
                  })
      };
      return (


            <div className="hero min-h-screen ">

                  <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left px-8">


                              <h1 className='text-5xl font-bold'>Give Us a Review</h1>

                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                              <div className="card-body">
                                    <h2 className='text-center form-title'> Review</h2>
                                    <form onSubmit={handleSubmit(onSubmit)}>




                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Name</span>
                                                </label>
                                                <input {...register("name")} placeholder="Name" className="input input-bordered" required />
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Ratings</span>
                                                </label>
                                                <input {...register("rating")} placeholder="Ratings out of 5" className="input input-bordered" required />
                                          </div>

                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Your Thoughts</span>
                                                </label>
                                                <textarea {...register("address")} placeholder="Write your thoughts...." className="input-bordered textarea" required></textarea>
                                          </div>


                                          <div className="form-control mt-6">

                                                <input className="btn btn-primary form-submit" type="submit" value="Submit" />
                                          </div>
                                    </form>
                              </div>
                        </div>
                  </div>


            </div >
      );
};

export default AddReview;