import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Purchase = () => {

      const { toolId } = useParams();
      const [tool, setBook] = useState({});
      useEffect(() => {
            const url = `https://mysterious-wildwood-50422.herokuapp.com/purchase/${toolId}`;
            fetch(url)
                  .then(res => res.json())
                  .then(data => setBook(data));

      }, [])


      const [user] = useAuthState(auth);
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [address, setAddress] = useState('');

      const [phone, setPhone] = useState('');
      const [quantity, setQuantity] = useState('');
      const [error, setError] = useState('');


      const onSubmit = data => {
            console.log(data);
            fetch('https://haunted-labyrinth-83183.herokuapp.com/bookings', {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(data)
            })
                  .then(res => res.json)
                  .then(data => {


                        alert('Booked Successfully')


                  })
      };
      const handleAddressBlur = event => {
            setAddress(event.target.value);
      }

      const handlePhoneBlur = event => {
            setPhone(event.target.value);
      }

      const handleCreateUser = event => {
            event.preventDefault();
            const shipping = { name, email, address, phone, quantity };
            console.log(shipping);
      }

      return (
            <div className="hero min-h-screen ">




                  <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left px-8">


                              <h1 className='text-5xl font-bold'>Purchase your desired products </h1>
                              <h1 className='mt-5 ms-5'>ID:{toolId}</h1>
                              <Link className='btn btn-outline-dark inventory-btn ' to="/purchaseDetails/${toolId}">Product Details</Link>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                              <div className="card-body">
                                    <h2 className='form-title'> Shipping Info</h2>
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
                                                <input onBlur={handlePhoneBlur} name="phone" type="text" placeholder="Phone Number" className="input input-bordered" required />

                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Address</span>
                                                </label>
                                                <input onBlur={handleAddressBlur} name="address" type="text" placeholder="Address" className="input input-bordered" required />

                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Order Quantity</span>
                                                </label>
                                                <input name="quantity" type="number" placeholder="Order Quantity" className="input input-bordered" required />

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

export default Purchase;