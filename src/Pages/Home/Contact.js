import React from 'react';

const Contact = () => {
      return (
            <div className="hero min-h-screen bg-base-200">
                  <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                              <h1 className="text-5xl font-bold">Contact Us</h1>
                              <p className="py-6">Provident your thoughts and query. We appreciate your valuable responses. </p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                              <div className="card-body">
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Email</span>
                                          </label>
                                          <input type="text" placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Comments</span>
                                          </label>
                                          <textarea type="text" placeholder="Write your thoughts...." className="input-bordered textarea" ></textarea>

                                    </div>
                                    <div className="form-control mt-6">
                                          <button className="btn btn-primary">Submit</button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Contact;