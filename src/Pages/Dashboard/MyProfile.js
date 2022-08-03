import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const MyProfile = () => {

      const [user] = useAuthState(auth);
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [address, setAddress] = useState('');

      const [phone, setPhone] = useState('');
      const [education, setEducation] = useState('');
      const [error, setError] = useState('');

      const handleCreateUser = event => {
            event.preventDefault();
            const shipping = { name, email, address, phone, education };
            console.log(shipping);
      }
      return (
            <div className="hero min-h-screen ">

                  <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left px-8">


                              <h1 className='text-5xl font-bold'>Update your profile </h1>

                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                              <div className="card-body">
                                    <h2 className='text-center form-title'>Profile</h2>
                                    <form onSubmit={handleCreateUser}>

                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Name</span>
                                                </label>
                                                <input value={user?.displayName} name="name" type="text" placeholder="Name" className="input input-bordered" required />
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Email</span>
                                                </label>
                                                <input value={user?.email} name="email" type="text" placeholder="email" className="input input-bordered" required />
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Phone Number</span>
                                                </label>
                                                <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered" required />

                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Address</span>
                                                </label>
                                                <input name="address" type="text" placeholder="Address" className="input input-bordered" required />

                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Education</span>
                                                </label>
                                                <input name="education" type="text" placeholder="Education" className="input input-bordered" required />

                                          </div>
                                          <p style={{ color: 'red' }}>{error}</p>
                                          <div className="form-control mt-6">
                                                <button className="btn btn-primary form-submit" type="submit" >Purchase</button>
                                          </div>
                                    </form>
                              </div>
                        </div>
                  </div>


            </div >
      );
};

export default MyProfile;