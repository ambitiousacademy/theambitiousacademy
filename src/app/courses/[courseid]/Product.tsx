"use client"
import { useUser } from "@clerk/nextjs";
import axios from 'axios';
import { useParams } from "next/navigation";
import { useState } from 'react';

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

export default function Product({ amount }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const { isLoaded, isSignedIn, user } = useUser();
  const params = useParams<{ courseid: string }>()
 
 

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
        name: "Acme Corp",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: order.id,
        handler: async function (response: RazorpayResponse) {
          try {
            const postData = {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
              userid: user?.id,
              useremail:  user?.emailAddresses[0].emailAddress,
              usernumber:  user?.phoneNumbers[0].phoneNumber,
              username: user?.username
            };

            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_WEB_URL}/paymentverification`, postData, {
              headers: {
                  'Content-Type': 'application/json'
              }
          });
            console.log("Payment verification response:", data);
          } catch (error) {
            console.error("Error during payment verification:", error);
          }
        },
        // "callback_url": `${process.env.NEXT_PUBLIC_WEB_URL}/paymentverification?userid=${user?.id}&useremail=${user?.emailAddresses[0].emailAddress}&usernumber=${user?.phoneNumbers[0].phoneNumber}&username=${user?.username}&courseid=${params.courseid}`,
        // "callback_url": `${process.env.NEXT_PUBLIC_WEB_URL}/paymentverification`,
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9000090000"
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
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap mb-24 -mx-4">
            <div className="w-full lg:w-1/2 p-4">
              <div className="lg:px-8">
                <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-4"> Here comes the course name</h2>
                <p className="text-gray-600 text-lg mb-4 max-w-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tempora repudiandae obcaecati ipsum illo quos!</p>
                <p className="text-gray-600 text-lg mb-10 max-w-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aut pariatur explicabo voluptatibus, adipisci dolore delectus dolorum aliquid sunt sit velit necessitatibus placeat autem consequatur ipsa cupiditate quam quisquam voluptatem.</p>
                <h2 className="text-lg font-bold font-heading mb-4">What you’ll get</h2>
                <ul className="flex flex-col gap-4">
                  <li className="flex gap-4">
                    <div className="w-6 h-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.47692 6.47692 2 12 2C17.5231 2 22 6.47692 22 12C22 17.5231 17.5231 22 12 22C6.47692 22 2 17.5231 2 12ZM15.7026 10.1395C15.7641 10.0575 15.8086 9.96402 15.8335 9.86456C15.8584 9.76511 15.8632 9.66168 15.8475 9.56036C15.8319 9.45904 15.7962 9.36187 15.7424 9.27456C15.6887 9.18725 15.618 9.11157 15.5346 9.05195C15.4512 8.99233 15.3567 8.94999 15.2567 8.92741C15.1567 8.90484 15.0532 8.90248 14.9523 8.92047C14.8514 8.93847 14.755 8.97646 14.669 9.03222C14.583 9.08797 14.5089 9.16036 14.4513 9.24513L11.1323 13.8913L9.46667 12.2256C9.32085 12.0898 9.12798 12.0158 8.9287 12.0193C8.72941 12.0228 8.53927 12.1036 8.39834 12.2445C8.2574 12.3854 8.17667 12.5756 8.17315 12.7748C8.16964 12.9741 8.24361 13.167 8.37949 13.3128L10.6872 15.6205C10.7661 15.6994 10.8613 15.7602 10.9661 15.7986C11.071 15.837 11.1829 15.8522 11.2941 15.843C11.4054 15.8338 11.5133 15.8006 11.6104 15.7455C11.7075 15.6904 11.7914 15.6149 11.8564 15.5241L15.7026 10.1395Z" fill="#000000"></path>
                      </svg>
                    </div>
                    <span>Join public room</span>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-6 h-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.47692 6.47692 2 12 2C17.5231 2 22 6.47692 22 12C22 17.5231 17.5231 22 12 22C6.47692 22 2 17.5231 2 12ZM15.7026 10.1395C15.7641 10.0575 15.8086 9.96402 15.8335 9.86456C15.8584 9.76511 15.8632 9.66168 15.8475 9.56036C15.8319 9.45904 15.7962 9.36187 15.7424 9.27456C15.6887 9.18725 15.618 9.11157 15.5346 9.05195C15.4512 8.99233 15.3567 8.94999 15.2567 8.92741C15.1567 8.90484 15.0532 8.90248 14.9523 8.92047C14.8514 8.93847 14.755 8.97646 14.669 9.03222C14.583 9.08797 14.5089 9.16036 14.4513 9.24513L11.1323 13.8913L9.46667 12.2256C9.32085 12.0898 9.12798 12.0158 8.9287 12.0193C8.72941 12.0228 8.53927 12.1036 8.39834 12.2445C8.2574 12.3854 8.17667 12.5756 8.17315 12.7748C8.16964 12.9741 8.24361 13.167 8.37949 13.3128L10.6872 15.6205C10.7661 15.6994 10.8613 15.7602 10.9661 15.7986C11.071 15.837 11.1829 15.8522 11.2941 15.843C11.4054 15.8338 11.5133 15.8006 11.6104 15.7455C11.7075 15.6904 11.7914 15.6149 11.8564 15.5241L15.7026 10.1395Z" fill="#000000"></path>
                      </svg>
                    </div>
                    <span>Host events and virtual study club</span>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-6 h-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.47692 6.47692 2 12 2C17.5231 2 22 6.47692 22 12C22 17.5231 17.5231 22 12 22C6.47692 22 2 17.5231 2 12ZM15.7026 10.1395C15.7641 10.0575 15.8086 9.96402 15.8335 9.86456C15.8584 9.76511 15.8632 9.66168 15.8475 9.56036C15.8319 9.45904 15.7962 9.36187 15.7424 9.27456C15.6887 9.18725 15.618 9.11157 15.5346 9.05195C15.4512 8.99233 15.3567 8.94999 15.2567 8.92741C15.1567 8.90484 15.0532 8.90248 14.9523 8.92047C14.8514 8.93847 14.755 8.97646 14.669 9.03222C14.583 9.08797 14.5089 9.16036 14.4513 9.24513L11.1323 13.8913L9.46667 12.2256C9.32085 12.0898 9.12798 12.0158 8.9287 12.0193C8.72941 12.0228 8.53927 12.1036 8.39834 12.2445C8.2574 12.3854 8.17667 12.5756 8.17315 12.7748C8.16964 12.9741 8.24361 13.167 8.37949 13.3128L10.6872 15.6205C10.7661 15.6994 10.8613 15.7602 10.9661 15.7986C11.071 15.837 11.1829 15.8522 11.2941 15.843C11.4054 15.8338 11.5133 15.8006 11.6104 15.7455C11.7075 15.6904 11.7914 15.6149 11.8564 15.5241L15.7026 10.1395Z" fill="#000000"></path>
                      </svg>
                    </div>
                    <span>Invite up to 100 people to learn together</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-1/2 p-8">
              <div className="md:max-w-md mx-auto overflow-hidden rounded-3xl shadow-8xl">
                <div className="p-9">
                  <span className="mb-7 inline-block text-sm text-gray-500 font-semibold uppercase tracking-px">Features included:</span>
                  <ul>
                    <li className="mb-4 flex items-center">
                      <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      <p className="font-semibold leading-normal">3 Team Members</p>
                    </li>
                    <li className="mb-4 flex items-center">
                      <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      <p className="font-semibold leading-normal">1200+ UI Blocks</p>
                    </li>
                    <li className="mb-4 flex items-center">
                      <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      <p className="font-semibold leading-normal">10 GB Cloud Storage</p>
                    </li>
                    <li className="mb-4 flex items-center">
                      <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      <p className="font-semibold leading-normal">Individual Email Account</p>
                    </li>
                    <li className="flex items-center">
                      <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      <p className="font-semibold leading-normal">Premium Support</p>
                    </li>
                  </ul>
                </div>
                <div className="p-9 bg-white">
                  <div className="flex flex-wrap -m-8">
                    <div className="w-full sm:w-1/2 p-8">
                      <span className="mb-2 inline-block text-sm text-gray-500 font-semibold uppercase tracking-px">Pro Package</span>
                      <p className="text-gray-900 font-semibold leading-normal">Best for Startups & Small Businesses</p>
                    </div>
                    <div className="w-full sm:w-1/2 p-8">
                      <div className="sm:max-w-max ml-auto">
                        <p className="font-bold">
                          <span className="text-5xl leading-tight tracking-px-n">$49</span>
                          <span className="text-lg text-gray-500 leading-snug tracking-px-n">/mo</span>
                        </p>
                        <p className="font-medium text-gray-500 leading-relaxed">Billed anually</p>
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
          <h2 className="text-4xl font-bold font-heading mb-14">Pricing FAQs</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4">
              <div className="py-12 border-b border-gray-100 h-full">
                <h2 className="text-xl font-bold font-heading mb-2">What payment options are there?</h2>
                <p className="text-gray-500">You can pay by credit card, PayPal, or Stripe.</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="py-12 border-b border-gray-100 h-full">
                <h2 className="text-xl font-bold font-heading mb-2">Are there a free trial?</h2>
                <p className="text-gray-500">Yes! We offer 14-days of trial. Free and no credit card required.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4">
              <div className="py-12 border-b border-gray-100 h-full">
                <h2 className="text-xl font-bold font-heading mb-2">What type of pricing plans does Solstice offer?</h2>
                <p className="text-gray-500">We only have one monthly subscription plan, costs no more than the price of a cup of coffee</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="py-12 border-b border-gray-100 h-full">
                <h2 className="text-xl font-bold font-heading mb-2">Why am I paying a monthly basis over a one-time payment?</h2>
                <p className="text-gray-500">This is our way of keeping your costs low while giving you access to our platform level quality and peace of mind.</p>
              </div>
            </div>
          </div>
        </div>
      </section></div>
  )
}