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
    <div className="container mx-auto px-4 py-8">
      {isValidAdmin && isSignedIn ? (
        <>
          <h1 className="text-2xl font-semibold mb-4">User List</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.map((user) => (
              <div key={user._id} className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-lg font-medium">{user.fullName}</h2>
                <p className="text-gray-600">{user.email}</p>
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
  );
};

export default UserListPage;