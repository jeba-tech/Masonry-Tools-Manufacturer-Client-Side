import React from 'react';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const ManageAllOrders = () => {
      const queryClient = new QueryClient()

      const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/manageAllOrders')
            .then(res => res.json()));
      if (isLoading) {
            return <Loading></Loading>
      }
      return (
            <div>
                  <h2 className="text-2xl">All Users: {users.length}</h2>
                  {/* <div class="overflow-x-auto">
                        <table class="table w-full">
                              <thead>
                                    <tr>
                                          <th></th>
                                          <th>Name</th>
                                          <th>Job</th>
                                          <th>Favorite Color</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {
                                          users.map(user => <UserRow
                                                key={user._id}
                                                user={user}
                                                refetch={refetch}
                                          ></UserRow>)
                                    }
                              </tbody>
                        </table>
                  </div> */}
            </div>
      );
};

export default ManageAllOrders;
