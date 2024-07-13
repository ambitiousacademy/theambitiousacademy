"use client"
import { useUser } from "@clerk/nextjs";
import axios from 'axios';
import { useParams } from "next/navigation";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import Image from "next/image";

type Props = {
  amount: number;
};

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

interface CourseWhatYouWillGet {
  point1: string;
  point2: string;
  point3: string;
  point4: string;
}

interface FAQ {
  question1: string;
  answer1: string;
  question2: string;
  answer2: string;
  question3: string;
  answer3: string;
  question4: string;
  answer4: string;
}

interface CourseFAQ {
  q1: FAQ;
  q2: FAQ;
  q3?: FAQ;
  q4?: FAQ;
  q5?: FAQ;
  q6?: FAQ;
  q7?: FAQ;
}

interface Data {
  _id: string;
  courseid: string;
  coursename: string;
  coursedesc: string;
  courseimage: string;
  courseprice: number;
  coursewhatyouwillget: CourseWhatYouWillGet;
  coursefaqs: CourseFAQ[];
}

interface ApiResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: Data;
}


export default function Product({ amount }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const { isLoaded, isSignedIn, user } = useUser();
  const params = useParams<{ courseid: string }>()
  const router = useRouter()
  const [coursedata, setCoursedata] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (user?.id) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_WEB_URL}/coursedetails?courseid=${params.courseid}`
        );
        const data: ApiResponse = await res.json();
        setCoursedata(data);
        console.log("Fetching User Course Data Paid Ones");
      }
    };

    fetchData();
  }, [params.courseid, user]);

  console.log(coursedata);

 

  const checkoutHandler = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const { data: { key } } = await axios.get(`${process.env.NEXT_PUBLIC_WEB_URL}/razorpay_getkey`);
      const { data: { order } } = await axios.post(`${process.env.NEXT_PUBLIC_WEB_URL}/checkout?amount=${amount}`);
      setSuccess(true);
      console.log('Checkout successful');

      const options = {
        key: key,
        amount: order.amount,
        currency: "INR",
        name: "The Ambitious Academy",
        description: "Live Transaction For Course Buying.",
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
              coursename: coursedata?.data?.coursename,
              courseimage: coursedata?.data?.courseimage,
              coursedesc: coursedata?.data?.coursedesc,
              courseduration: "12 Days", //Has Done Manually Need To Be Stored In DB
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
    <div>
      {coursedata && (
        coursedata.message === "Course found" ? 
        <>
       
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap mb-24 -mx-4">
              <div className="w-full lg:w-1/2 p-4">
                <div className="lg:px-8">
                  <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-4"> {coursedata?.data?.coursename} </h2>
                  <p className="text-gray-600 text-lg mb-4 max-w-md">{coursedata?.data?.coursedesc}</p>
                  <h2 className="text-lg font-bold font-heading mb-4">What you’ll get</h2>
<div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
		<div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> What is a SAAS platform?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
					 SAAS platform is a cloud-based software service that allows users to access
					and use a variety of tools and functionality.
				</p>
			</details>
		</div>
		<div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> How does  billing work?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
					We offers a variety of billing options, including monthly and annual subscription plans,
					as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit
					card or other secure online payment method.
				</p>
			</details>
		</div>
		<div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> Can I get a refund for my subscription?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
					We offers a 30-day money-back guarantee for most of its subscription plans. If you are not
					satisfied with your subscription within the first 30 days, you can request a full refund. Refunds
					for subscriptions that have been active for longer than 30 days may be considered on a case-by-case
					basis.
				</p>
			</details>
		</div>
		<div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> How do I cancel my subscription?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
					To cancel your We subscription, you can log in to your account and navigate to the
					subscription management page. From there, you should be able to cancel your subscription and stop
					future billing.
				</p>
			</details>
		</div>
		<div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> Can I try this platform for free?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
					We offers a free trial of its  platform for a limited time. During the trial period,
					you will have access to a limited set of features and functionality, but you will not be charged.
				</p>
			</details>
		</div>
		<div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> How do I access   documentation?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
					  Documentation is available on the company&apos;s website and can be accessed by
					logging in to your account. The documentation provides detailed information on how to use the ,
					as well as code examples and other resources.
				</p>
			</details>
		</div>
		<div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> How do I contact support?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
					If you need help with the platform or have any other questions, you can contact the
					company&apos;s support team by submitting a support request through the website or by emailing
					support@We.com.
				</p>
			</details>
		</div>
		<div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> Do you offer any discounts or promotions?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
					We may offer discounts or promotions from time to time. To stay up-to-date on the latest
					deals and special offers, you can sign up for the company&apos;s newsletter or follow it on social media.
				</p>
			</details>
		</div>
		<div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> How do we compare to other similar services?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
					 This platform is a highly reliable and feature-rich service that offers a wide range
					of tools and functionality. It is competitively priced and offers a variety of billing options to
					suit different needs and budgets.
				</p>
			</details>
		</div>
	</div>
                </div>
              </div>

              <div className="w-full md:w-1/2 p-8">
                <div className="md:max-w-md mx-auto overflow-hidden rounded-3xl shadow-8xl">
                  <div className="p-9">
                    <Image src={`${coursedata?.data.courseimage}`} alt="image" width={400} height={300} className="rounded-xl"/>                    
                  </div>
                  <div className="p-9 bg-white">
                    <div className="flex flex-wrap -m-8">
                      <div className="w-full sm:w-1/2 p-8">
                        <span className="mb-2 inline-block text-sm text-gray-500 font-semibold uppercase tracking-px">Best Deal</span>
                        <p className="text-gray-900 font-semibold leading-normal">You are getting the best price for this course</p>
                      </div>
                      <div className="w-full sm:w-1/2 p-8">
                        <div className="sm:max-w-max ml-auto">
                          <p className="font-bold">
                            <span className="text-5xl leading-tight tracking-px-n">{coursedata?.data.courseprice}</span>
                            <span className="text-lg text-gray-500 leading-snug tracking-px-n">/LifeTime</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-9">
                      <button className="py-4 px-5 w-full text-white font-semibold rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button" onClick={checkoutHandler} disabled={loading}>{loading ? 'Processing...' : 'Buy Now'}</button>{error && <p style={{ color: 'red' }}>{error}</p>}
                      {success && <p style={{ color: 'green' }}>Checkout successful!</p>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
           

           {/* FAQ */}
           <div className="container px-0 px-8 mx-auto sm:px-12 xl:px-5 tails-selected-element">
        <p className="text-xs font-bold text-left text-pink-500 uppercase sm:mx-6 sm:text-center sm:text-normal sm:font-bold" data-primary="pink-500">
            Got a Question? We’ve got answers.
        </p>
        <h3 className="mt-1 text-2xl font-bold text-left text-gray-800 sm:mx-6 sm:text-3xl md:text-4xl lg:text-5xl sm:text-center sm:mx-0">
            Frequently Asked Questions
        </h3>
        <div className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3" data-rounded="rounded-lg" data-rounded-max="rounded-full">
         <h3 className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl" data-primary="purple-500">{coursedata?.data.coursefaqs[0].q1.question1}</h3>
         <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
         {coursedata?.data.coursefaqs[0].q1.answer1}
         </p>
     </div>
    </div>
          </div>
        </section></> : null
      )}
    </div>
    
  )
}
