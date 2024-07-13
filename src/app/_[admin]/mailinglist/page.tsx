"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '@clerk/nextjs';

interface User {
  _id: string;
  fullName: string;
  email: string;
}

const UserListPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const { isSignedIn, user } = useUser();
  const [isValidAdmin, setIsValidAdmin] = useState(false);
  const [loading, setLoading] = useState(true); // Initialize loading state as true

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 5000ms (5 seconds)
    }, 3000);

    return () => clearTimeout(timer); // Clean up timer
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Check if the current user is a valid admin
        const adminResponse = await axios.get(`https://ap-south-1.aws.data.mongodb-api.com/app/application-0-jvxnhwz/endpoint/admins?adminId=${user?.id}`);
        setIsValidAdmin(adminResponse.data); // Assuming API returns a boolean for admin validation

        // Fetch user list if admin is valid
        if (isValidAdmin && isSignedIn) {
          const userListResponse = await axios.get('https://ap-south-1.aws.data.mongodb-api.com/app/application-0-jvxnhwz/endpoint/mailingList');
          setUsers(userListResponse.data); // Assuming API response is an array of users
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (isSignedIn && user) {
      fetchUsers();
    }
  }, [isSignedIn, user, isValidAdmin]); // Dependencies include isSignedIn, user, and isValidAdmin

  return (
    <>
    {loading ? (
      <div className="loader flex justify-center items-center h-screen">
        <h1 className="text-sm">Relax! The Page is loading...</h1>
        {/* Add your loader animation or spinner here */}
      </div>
    ) : (
      <div className="container mx-auto px-4 py-8">
      {isValidAdmin && isSignedIn ? (
        <>
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200">
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-800">
                                            Subscribed Users
                                        </h2>
                                        <p className="text-sm text-gray-600">
                                            List Of Users Who Have Subscribed The Email Campaign.
                                        </p>
                                    </div>
                                </div>

                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50 divide-y divide-gray-200">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-start border-s border-gray-200">
                                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                                    Topic Name
                                                </span>
                                            </th>

                                            <th scope="col" className="px-6 py-3 text-start">
                                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                                    Total Questions
                                                </span>
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody className="justify-end divide-y divide-gray-200">
                                        {users.map((data:any,index:number)=>(
                                            <tr key={index}>
                                            <td className="h-px w-auto whitespace-nowrap">
                                                <div className="px-6 py-2 flex items-center gap-x-3">
                                                    <span className="text-sm text-gray-600">{index + 1}</span>
                                                    <a className="flex items-center gap-x-2" href="#">
                                                        <span className="text-sm text-blue-600 decoration-2 hover:underline">{data.fullName}</span>
                                                    </a>
                                                </div>
                                            </td>
                                            <td className="h-px w-auto whitespace-nowrap">
                                                <div className="px-6 py-2">
                                                    <span className="font-semibold text-sm text-gray-800">{data.email}</span>
                                                </div>
                                            </td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>

                                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200">
                                    <div>
                                        <p className="text-sm text-gray-600">
                                            <span className="font-semibold text-gray-800">{users.length}</span> results
                                        </p>
                                    </div>

                                    {/* <div>
                                        <div className="inline-flex gap-x-2">
                                            <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                                                Prev
                                            </button>

                                            <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                                                Next
                                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                            </button>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>          
        </>
      ) : (
        <div className="text-center">
          <p className="text-lg font-semibold text-red-500">You are not authorized to view this page.</p>
        </div>
      )}
    </div>
    )}
    </>
  );
};

export default UserListPage;