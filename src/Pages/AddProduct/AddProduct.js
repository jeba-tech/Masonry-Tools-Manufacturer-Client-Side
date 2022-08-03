import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
      const { register, handleSubmit } = useForm();
      const onSubmit = data => {
            console.log(data);
            const url = `https://mysterious-wildwood-50422.herokuapp.com/purchase`;
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


                              <h1 className='text-5xl font-bold'>Add New Products</h1>

                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                              <div className="card-body">
                                    <h2 className='text-center form-title'>Add products</h2>
                                    <form onSubmit={handleSubmit(onSubmit)}>




                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Name</span>
                                                </label>
                                                <input {...register("name")} placeholder="Name" className="input input-bordered" required />
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Price</span>
                                                </label>
                                                <input {...register("price")} placeholder="Price" className="input input-bordered" required />
                                          </div>

                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Available Quantity</span>
                                                </label>
                                                <input {...register("quantity")} placeholder="Available Quantity" className="input-bordered textarea" required></input>
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Minimum Order Quantity</span>
                                                </label>
                                                <input {...register("minimumorderquantity")} placeholder="Minimum Order Quantity" className="input-bordered textarea" required></input>
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Description</span>
                                                </label>
                                                <input {...register("address")} placeholder="Product Description" className="input-bordered textarea" required></input>
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Picture URL</span>
                                                </label>
                                                <input {...register("photograph")} placeholder="Product Picture" className="input-bordered textarea" required></input>
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

export default AddProduct;