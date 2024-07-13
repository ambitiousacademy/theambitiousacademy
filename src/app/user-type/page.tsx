"use client";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from 'react';

const Page: React.FC = () => {
  const { user, isLoaded } = useUser();
  const [userType, setUserType] = useState<string>("");

  useEffect(() => {
    if (isLoaded && user) {
      // Retrieve the userType from the metadata
      const storedUserType = (user.unsafeMetadata as { userType?: string })?.userType || "";
      setUserType(storedUserType);
    }
  }, [isLoaded, user]);

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">User Type</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            What Defines You The Best!.. This will help us to serve you better.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="border rounded p-2 mb-4"
          >
            <option value="" disabled>Select your user type</option>
            <option value="Student">Student</option>
            <option value="Faculty">Faculty</option>
            <option value="Blogger">Blogger</option>
            <option value="Freelancer">Freelancer</option>
            <option value="Customer">Customer</option>
          </select>
          <button 
            onClick={() => {
              if (user) {
                user.update({
                  unsafeMetadata: {
                    userType
                  }
                });
              }
            }} 
            className="bg-blue-500 text-white p-2 rounded"
          >
            Update User Type
          </button>
        </div>
        {userType && (
          <div className="mt-8 text-center">
            <h2 className="text-xl">You are a: <span className="font-bold">{userType}</span></h2>
          </div>
        )}
      </div>
    </section>
  );
};

export default Page;