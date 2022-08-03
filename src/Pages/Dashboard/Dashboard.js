import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Dashboard = () => {
      return (
            <div className="drawer drawer-mobile">
                  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                  <div className="drawer-content ">
                        <h2 className='text-5xl text-blue-500'>Welcome to Dashboard</h2>
                        <Outlet></Outlet>


                  </div>
                  <div className="drawer-side">
                        <label for="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                              {/* <!-- Sidebar content here --> */}
                              <li><Link to="/dashboard">My Orders</Link></li>
                              <li><Link to="/dashboard/addReview">Add A Review</Link></li>
                              <li><Link to="/dashboard/myProfile">My Profile</Link></li>
                        </ul>

                  </div>
            </div>
      );
};

export default Dashboard;