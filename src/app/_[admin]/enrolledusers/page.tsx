"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '@clerk/nextjs';

interface User {
  _id: string;
  userid: string;
  useremail: string;
  coursename: string[];
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
        // Fetch admin validation status
        const adminResponse = await axios.get(`https://ap-south-1.aws.data.mongodb-api.com/app/application-0-jvxnhwz/endpoint/admins?adminId=${user?.id}`);
        setIsValidAdmin(adminResponse.data);

        // Fetch enrolled users if admin is valid
        if (isValidAdmin && isSignedIn) {
          const userListResponse = await axios.get(`https://ap-south-1.aws.data.mongodb-api.com/app/application-0-jvxnhwz/endpoint/allEnrolledUsers?adminId=${user?.id}`);
          setUsers(userListResponse.data.data); // Assuming API response is structured as { data: User[] }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (isSignedIn && user) {
      fetchUsers();
    }
  }, [isSignedIn, user, isValidAdmin]); // Dependency array includes isSignedIn, user, and isValidAdmin

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
          <h1 className="text-2xl font-semibold mb-4">Enrolled Users</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.map((user) => (
              <div key={user._id} className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-lg font-medium">{user.useremail}</h2>
                <div className="mt-2">
                  <h3 className="text-base font-semibold mb-1">Courses Enrolled:</h3>
                  <ul className="list-disc list-inside">
                    {user.coursename.map((course, index) => (
                      <li key={index} className="text-gray-600">{course}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center">
          <p className="text-lg font-semibold text-red-500">You are not authorized to view this page.</p>
        </div>
      )}
    </div>
    )
    }
    
    </>
  );
};

export default UserListPage;