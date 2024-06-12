"use client"

import Image from 'next/image';
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from 'react';

interface CourseDetails {
   courseid: string;
   isvalid: boolean;
   orderid: string;
   paymentid: string;
   signature: string;
   courseimage:string;
   coursename:string;
   coursedesc:string;

 }
 
 interface User {
   _id: string;
   userid: string;
   useremail: string;
   enrolledCourses: { coursesdetails: CourseDetails[] }[];
 }
 
 interface ResponseData {
   statusCode: number;
   success: boolean;
   message: string;
   user?: User;
 }


export default function Dashboard() {
   const { isLoaded, isSignedIn, user } = useUser();

   const [coursedata, setCoursedata] = useState<ResponseData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (user?.id) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_WEB_URL}/userAllEnrolledCourses?userid=${user.id}`
        );
        const data: ResponseData = await res.json();
        setCoursedata(data);
        console.log("Fetching User Course Data Paid Ones");
      }
    };

    fetchData();
  }, [user]);

   return (
        <>
 
{coursedata?.message === "User found" ? 
   <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
   <div className="container m-auto">
      <div className="flex flex-wrap -mx-4">
         {coursedata?.user?.enrolledCourses[0].coursesdetails.map((data,index)=>(
            <div key={index} className="w-full md:w-1/2 xl:w-1/3 px-4">
            <div className="bg-white rounded-lg overflow-hidden mb-10">
               <Image
                  src={`${data.courseimage}`}
                  alt="image"
                  className="w-full rounded-xl"
                  width={200}
                  height={200}
                  />
               <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                     <a
                        href={`/dashboard/${data.courseid}`}
                        className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                        >
                     {data?.coursename}
                     </a>
                  </h3>
                  <p className="text-base text-body-color leading-relaxed mb-7">
                  {data?.coursedesc}
                  </p>
                  <a
                     href={`/dashboard/${data.courseid}`}
                     className="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-gray-900
                     transition
                     "
                     >
                  View Details
                  </a>
               </div>
            </div>
         </div>
         ))}
      </div>
   </div>
</section>
: <div className="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
<div className="max-w-xl mx-auto sm:px-6 lg:px-8">
    <div className="flex items-center pt-8 sm:justify-start sm:pt-0">
        <div className="px-4 text-lg ">
        <p>Hi There {user?.firstName}</p>
        <p>Your Dashboard is Empty Because You Have Not Enrolled In Any Courses.</p>
        </div>
    </div>
</div>
</div>}
        </>
    );
}
