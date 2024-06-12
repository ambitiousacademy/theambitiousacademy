import Image from 'next/image'
import React from 'react'
import { courseData } from "../mockdata/course"

const Ourservices = () => {
  return (
    <div><section className="py-32">
      <div className="container mx-auto px-4">

        <h1 className="tracking-tight font-heading text-4xl md:text-6xl text-center font-medium mb-20">Our Courses</h1>
        <div className="flex flex-wrap -m-4 mb-20">
          {courseData.map((data, index) => (
            <div key={index} className={`w-full text-${data.textColor} lg:w-1/3 p-4`}>
              <div className={`border border-gray-200 p-12 rounded-3xl h-full bg-${data.color}`}>
                {/* <Image className="mb-12 h-20" src="https://www.svgrepo.com/show/488253/law.svg" alt="" height={100} width={500}/> */}
                <p className="text-xl tracking-tight font-semibold mb-4">{data.coursename}</p>
                <p className="tracking-tight mb-12">{data.description}</p>
                <a href="#" className="bg-black h-14 w-full rounded-full px-5 py-3 inline-flex items-center justify-center gap-2 tracking-tight hover:bg-orange-600 focus:bg-orange-500 focus:ring-4 focus:ring-orange-200 transition duration-200">
                  <span className="text-white text-sm font-semibold tracking-tight">{data.course_fee.current_price}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M14 6.66669H7.33333C4.38781 6.66669 2 9.0545 2 12V13.3334M14 6.66669L10 10.6667M14 6.66669L10 2.66669" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>


        {/* MAILING STORAGE */}
        <section className="text-gray-600 body-font">
          <div className="container mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Ambitious Academy Premium Notification</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Stay ahead of the curve! Sign up for our notifications by entering your email. Be the first to receive updates from us, completely free of charge.</p>
            </div>
            <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
              <div className="relative flex-grow w-full">
                <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
                <input type="text" id="full-name" name="full-name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative flex-grow w-full">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
            </div>
          </div>
        </section>

      </div>
    </section></div>
  )
}

export default Ourservices