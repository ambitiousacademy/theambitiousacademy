import Image from 'next/image'
import React, { useState } from 'react'
import { courseData } from "../mockdata/course"
import toast, { Toaster } from "react-hot-toast"
import axios from 'axios'

const Subscribe = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({ fullName: '', email: '' });

  const validate = () => {
    let fullNameError = '';
    let emailError = '';

    if (!fullName.trim() || fullName.trim().split(' ').length < 2) {
      fullNameError = 'Full name must contain at least two words.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      emailError = 'Invalid email format.';
    }

    if (fullNameError || emailError) {
      setErrors({ fullName: fullNameError, email: emailError });
      return false;
    }

    setErrors({ fullName: '', email: '' });
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      toast.error('Please fix the errors before submitting.');
      return;
    }

    try {
      const response = await axios.post(
        `https://ap-south-1.aws.data.mongodb-api.com/app/application-0-jvxnhwz/endpoint/mailAcceptingAPI?fullName=${fullName}&email=${email}`
      );

      console.log(response.data); // Log response data for debugging

      if (response.status === 200) {
        toast.success('Subscription successful!');
        setFullName('');
        setEmail('');
      } else {
        toast.error('Failed to subscribe');
        console.error('Failed to subscribe');
      }
    } catch (error) {
      toast.error('Error subscribing');
      console.error('Error subscribing:', error);
    }
  };

  return (
    <div className='mb-10'>
      <section className="">
        <div className="container mx-auto px-4 ">
          {/* MAILING STORAGE */}
          <section className="text-gray-600 body-font">
            <div className="container mx-auto">
              <div className="flex flex-col text-center w-full">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 mt-4 text-gray-900">
                  Ambitious Academy Premium Notification
                </h1>

              </div>
              <form onSubmit={handleSubmit}>
                <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                  <div className="relative flex-grow w-full">
                    <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="full-name"
                      name="full-name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                  </div>
                  <div className="relative flex-grow w-full">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <button
                    type="submit"
                    className="text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </section>
      <Toaster />
    </div>
  )
}

export default Subscribe
