"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { useUser } from '@clerk/nextjs';
import toast, { Toaster } from 'react-hot-toast';

interface Course {
  courseId: number;
  courseTitle: string;
  courseImage: string;
  coursePrice: string;
  overview: string;
  instructor: {
    name: string;
    bio: string;
  };
  structure: {
    duration: string;
    numberOfClasses: number;
    classesPerWeek: number;
    modules: number;
    modeOfLearning: string;
    assessment: string;
  };
  detailedInformation: {
    foundationalModules: {
      moduleNumber: number;
      moduleName: string;
      topicsCovered: string[];
    }[];
    advancedModules: {
      moduleNumber: number;
      moduleName: string;
      topicsCovered: string[];
    }[];
  };
  keyFeatures: {
    guestLectures: string;
    researchPapersAndMaterials: string;
    bareActAndCaseLawStudy: string;
    practicalExposure: string;
  };
  conclusion: string;
}

interface isBoughtDataAPI {
  statusCode: number;
  success: boolean;
  message: string;
  enrolled: boolean;
}

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}
interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  image: string;
  order_id: string;
  handler: (response: RazorpayResponse) => void;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  notes: {
    address: string;
  };
  theme: {
    color: string;
  };
}

const CourseDetails: React.FC = () => {
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [isBought, setIsBought] = useState(false);
  const params = useParams<{ courseid: string }>()
  const courseid = params.courseid as string;
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter()
  const { isLoaded, isSignedIn, user } = useUser();


  useEffect(() => {
    const fetchcourse = async () => {
      console.log(user?.id)
      console.log("Running")

      try {
        const response = await axios.get<Course>(`https://ap-south-1.aws.data.mongodb-api.com/app/application-0-jvxnhwz/endpoint/getCourseDetails?courseId=${courseid}`);
        const response2 = await axios.get<isBoughtDataAPI>(`${process.env.NEXT_PUBLIC_WEB_URL}/checkUserEnrolledCourse?userid=${user?.id}&courseid=${courseid}`);
        setIsBought(response2.data.enrolled)
        setCourse(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching course data:', error);
        setLoading(false);
      }
    };

    if (user?.id !== undefined) {
      fetchcourse();

    }
  }, [courseid, user]);

  // console.log(JSON.stringify(user?.id));

  const checkoutHandler = async (amount: string) => {
    const checkOutPrice = parseInt(amount);
    //setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const { data: { key } } = await axios.get(`${process.env.NEXT_PUBLIC_WEB_URL}/razorpay_getkey`);
      const { data: { order } } = await axios.post(`${process.env.NEXT_PUBLIC_WEB_URL}/checkout?amount=${checkOutPrice}`);
      setSuccess(true);

      const options = {
        key: key,
        amount: order.amount,
        currency: "INR",
        name: `${course?.courseTitle}`,
        description: `Live Transaction For Buying ${course?.courseTitle}`,
        image: "https://example.com/your_logo",
        order_id: order.id,
        handler: async function (response: RazorpayResponse) {
          try {
            const postData = {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
              userid: user?.id,
              useremail: user?.emailAddresses[0].emailAddress,
              usernumber: user?.phoneNumbers[0].phoneNumber,
              username: user?.username,
              courseid: params.courseid,
              coursename: course?.courseTitle,
              courseimage: course?.courseImage,//Need To Insert An Image
              coursedesc: course?.overview,
              courseduration: course?.structure?.duration, //Has Done Manually Need To Be Stored In DB
            };
            console.log("Post Data:", postData); // Log postData for debugging

            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_WEB_URL}/paymentverification`, postData, {
              headers: {
                'Content-Type': 'application/json'
              }
            });
            console.log("Payment verification response:", data);
            router.push(data.redirectUrl);
          } catch (error) {
            console.error("Error during payment verification:", error);
          }
        },
        // "callback_url": `${process.env.NEXT_PUBLIC_WEB_URL}/paymentverification?userid=${user?.id}&useremail=${user?.emailAddresses[0].emailAddress}&usernumber=${user?.phoneNumbers[0].phoneNumber}&username=${user?.username}&courseid=${params.courseid}`,
        // "callback_url": `${process.env.NEXT_PUBLIC_WEB_URL}/paymentverification`,
        prefill: {
          name: `${user?.fullName}`,
          email: `${user?.emailAddresses}`,
          contact: `${user?.primaryPhoneNumber}`
        },
        notes: {
          address: "Razorpay Corporate Office"
        },
        theme: {
          color: "#3399cc"
        }
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.on('payment.failed', function (response: any) {
        setError(`Payment failed: ${response.error.description}`);
        console.error('Payment failed', response.error);
      });
      rzp1.open();

    } catch (error) {
      setError('Error during checkout');
      console.error('Error during checkout', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4">

      {course && (
        <>
          <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto bg-gray-200">
              <div className="lg:w-full mx-auto flex flex-wrap">
                <Image
                  src='/photos/rachana.jpg'
                  alt="image"
                
                  width={400}
                  height={300}
                  className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-xl"
                />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest">The Ambitious Academy Certificate Courses</h2>
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{course?.courseTitle}</h1>
                  <div className="flex mb-4">
                    <span className="flex items-center">
                      <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    </span>
                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                      <a className="text-gray-500">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="text-gray-500">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="text-gray-500">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                  <p className="leading-relaxed">{course?.overview}</p>

                  <div className="mt-8 flex">
                    <span className="title-font font-medium text-2xl text-gray-900">₹ 2999/-</span>
                    {isBought ? <button onClick={() => {
                      toast.success("Already Bought!...")
                    }} className="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Already Bought</button> : <button onClick={() => {
                      toast.success("Initiating The Payment Process.")
                      checkoutHandler(course?.coursePrice)
                    }} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Buy Now</button>}

                  </div>
                </div>


              </div>
              </div>
              <div className="container px-5 mx-auto">

              <h2 className="mt-12 text-3xl font-bold font-heading mb-4">
                What you’ll get
              </h2>
              <div className="grid divide-y divide-neutral-20  mx-auto mt-8">
                {course?.detailedInformation.foundationalModules.map((data, index) => (
                  <div key={index} className="py-5">
                    <details className="group">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <span>{data.moduleNumber}: {data.moduleName}</span>
                        <span className="transition group-open:rotate-180">
                          <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                        <h3 className='font-extrabold'>Topic Covered:</h3>
                        <ul>
                          {data.topicsCovered.map((uldata) => (
                            <>
                              <li>{uldata}</li>
                            </>
                          ))}
                        </ul>

                      </p>
                    </details>
                  </div>
                ))}
              </div>

              <div className="mb-8 mt-8">
                <h3 className="text-lg font-bold font-heading mb-2">
                  Course Structure
                </h3>
                <p>
                  <span className="font-bold">Duration:</span>{" "}
                  {course?.structure.duration}
                </p>
                <p>
                  <span className="font-bold">Number of Classes:</span>{" "}
                  {course?.structure.numberOfClasses}
                </p>
                <p>
                  <span className="font-bold">Classes per Week:</span>{" "}
                  {course?.structure.classesPerWeek}
                </p>
                <p>
                  <span className="font-bold">Modules:</span>{" "}
                  {course?.structure.modules}
                </p>
                <p>
                  <span className="font-bold">Mode of Learning:</span>{" "}
                  {course?.structure.modeOfLearning}
                </p>
                <p>
                  <span className="font-bold">Assessment:</span>{" "}
                  {course?.structure.assessment}
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-lg font-bold font-heading mb-2">
                  Key Features
                </h3>
                <ul className="list-disc list-inside">
                  <li>{course?.keyFeatures.guestLectures}</li>
                  <li>{course?.keyFeatures.researchPapersAndMaterials}</li>
                  <li>{course?.keyFeatures.bareActAndCaseLawStudy}</li>
                  <li>{course?.keyFeatures.practicalExposure}</li>
                </ul>
              </div>
              <div className="mb-8">
                <h3 className="text-lg font-bold font-heading mb-2">
                  Instructor
                </h3>
                <p>
                  <span className="font-bold">Name:</span>{" "}
                  {course?.instructor?.name}
                </p>
                <p>
                  <span className="font-bold">Bio:</span>{" "}
                  {course?.instructor?.bio}
                </p>
              </div>

            </div>
          </section></>
      )}
      <Toaster />
    </div>

  );
};

export default CourseDetails;
