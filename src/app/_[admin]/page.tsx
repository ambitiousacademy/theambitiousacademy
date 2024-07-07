"use client"
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Admin(){
  const { isSignedIn, user } = useUser();
  const [isvalidadmin, setIsValidAdmin] = useState(false);

    useEffect(() => {
        const fetchcourse = async () => {
          try {
            const response = await axios.get(`https://ap-south-1.aws.data.mongodb-api.com/app/application-0-jvxnhwz/endpoint/admins?adminId=${user?.id}`);
            // console.log(response.data.data)
            setIsValidAdmin(response.data.data);
          } catch (error) {
            console.error('Error fetching course data:', error);
          }
        };
    
        fetchcourse();
      }, [user]);

    return (
        <>
        {isvalidadmin && isSignedIn ? <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">TheAmbitiousAcademy</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">TheAmbitiousAcademy Admin Panel</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Welcome To The Admin Dashboard User : {}</p>
    </div>
    <div className="flex flex-wrap">
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Mailing List</h2>
        <p className="leading-relaxed text-base mb-4">Click Here To Check The Mailing List.</p>
        <a href="/admin/mailinglist" className="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">All Course Enrolled Users</h2>
        <p className="leading-relaxed text-base mb-4">Click Here To Check All The Paid Users That Have Enrolled In The Course</p>
        <a href="/admin/enrolledusers" className="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section> : <div className="loader flex justify-center items-center h-screen">
    <h1 className="text-sm">Sorry You are Not Authorised!...</h1>
    {/* Add your loader animation or spinner here */}
  </div>}
        
        </>
    )
}