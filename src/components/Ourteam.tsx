 // ReviewsCarousel.js
 import Image from 'next/image';
import React from 'react';
 import Carousel from 'react-multi-carousel';
 import 'react-multi-carousel/lib/styles.css';

const Ourteam = () => {   
//   const review = [
//     {
//       id: 1,
//       name: 'John Doe',
//       review: 'This is an amazing product! I highly recommend it.',
//       image: 'https://dummyimage.com/150x150/000/fff&text=John+Doe'
//     },
//     {
//       id: 2,
//       name: 'Jane Smith',
//       review: 'I had a fantastic experience with this service.',
//       image: 'https://dummyimage.com/150x150/000/fff&text=Jane+Smith'
//     },
//     {
//       id: 3,
//       name: 'Sam Wilson',
//       review: 'Great quality and support. Will use again.',
//       image: 'https://dummyimage.com/150x150/000/fff&text=Sam+Wilson'
//     },
//     // Add more dummy reviews as needed
//   ];

//   const responsive = {
//     superLargeDesktop: {
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1
//     }
//   };

//   return (
// <>
//     <div className="mt-8 max-w-md md:max-w-2xl mx-auto xl:max-w-7xl">
//       <div className="flex flex-wrap mb-4 -mx-4 items-center">
//         <div className="w-full xl:w-1/2 px-4">
//           <div>
//             <h1 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-gray-900 mb-8">
//               <span>Our Faculties</span>
//             </h1>
//           </div>
//         </div>
//         <div className="w-full xl:w-1/2 px-4">
//           <div className="max-w-lg xl:ml-auto">
//             <p className="text-lg text-gray-500"></p>
//           </div>
//         </div>
//       </div>
//       </div>
//     <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={3000} infinite={true}>
//       {/* {reviews.map((review) => (
//           <div className="flex flex-wrap -mx-4 -mb-12 transition-transform duration-700">
//                 <div key={review.id} className="w-full md:w-1/2 xl:w-1/3 px-4 mb-12">
//                   <a href="#" className="max-w-xs md:max-w-none mx-auto">
//                     <Image className="block mb-4 w-full h-72 object-cover rounded-3xl" src={review.image} alt={`alt text`} width={400} height={350} />
//                     <h5 className="text-2xl font-semibold text-gray-900 mb-2">{review.name}</h5>
//                     <span className="text-gray-500">{review.review}</span>
//                   </a>
//                 </div>
//         </div>
//       ))} */}





//       <div className="mt-3">
//         <div className='m-10'>
//           <div className="w-full p-4 mb-6 bg-white rounded-lg sm:inline-block">
//           <div className="w-full px-4 mb-12">
//           <div className="max-w-xs md:max-w-none mx-auto">
//             <div className="flex flex-col items-center">
//               <img className="block h-48 w-48" src="https://shuffle.dev/saturn-assets/images/team/circle-team-members1.png" alt=""/>
//               <div className="inline-flex -mt-6 mb-5 items-center justify-center py-3 px-5 bg-white rounded-full">
//                 <a className="inline-block mr-3 p-1 hover:bg-orange-100 rounded-md" href="#">
//                   <img src="https://shuffle.dev/saturn-assets/images/team/icon-facebook.svg" alt=""/>
//                 </a>
//                 <a className="inline-block mr-3 p-1 hover:bg-orange-100 rounded-md" href="#">
//                   <img src="https://shuffle.dev/saturn-assets/images/team/icon-linkedin.svg" alt=""/>
//                 </a>
//                 <a className="inline-block mr-3 p-1 hover:bg-orange-100 rounded-md" href="#">
//                   <img src="https://shuffle.dev/saturn-assets/images/team/icon-instagram.svg" alt=""/>
//                 </a>
//                 <a className="inline-block p-1 hover:bg-orange-100 rounded-md" href="#">
//                   <img src="https://shuffle.dev/saturn-assets/images/team/icon-twitter.svg" alt=""/>
//                 </a>
//               </div>
//               <h5 className="text-2xl font-bold">Aditya Trivedi</h5>
//               <span className="text-sm text-gray-500">Founder, CTO</span>
//             </div>
//           </div>
//         </div>
//           </div>
//         </div>
//       </div>
//       <div className="mt-3">
//         <div className='m-10'>
//           <div className="w-full p-4 mb-6 bg-white rounded-lg sm:inline-block">
//           <div className="w-full px-4 mb-12">
//           <div className="max-w-xs md:max-w-none mx-auto">
//             <div className="flex flex-col items-center">
//               <img className="block h-48 w-48" src="https://shuffle.dev/saturn-assets/images/team/circle-team-members1.png" alt=""/>
//               <div className="inline-flex -mt-6 mb-5 items-center justify-center py-3 px-5 bg-white rounded-full">
//                 <a className="inline-block mr-3 p-1 hover:bg-orange-100 rounded-md" href="#">
//                   <img src="https://shuffle.dev/saturn-assets/images/team/icon-facebook.svg" alt=""/>
//                 </a>
//                 <a className="inline-block mr-3 p-1 hover:bg-orange-100 rounded-md" href="#">
//                   <img src="https://shuffle.dev/saturn-assets/images/team/icon-linkedin.svg" alt=""/>
//                 </a>
//                 <a className="inline-block mr-3 p-1 hover:bg-orange-100 rounded-md" href="#">
//                   <img src="https://shuffle.dev/saturn-assets/images/team/icon-instagram.svg" alt=""/>
//                 </a>
//                 <a className="inline-block p-1 hover:bg-orange-100 rounded-md" href="#">
//                   <img src="https://shuffle.dev/saturn-assets/images/team/icon-twitter.svg" alt=""/>
//                 </a>
//               </div>
//               <h5 className="text-2xl font-bold">Ankita Pandey</h5>
//               <span className="text-sm text-gray-500">Founder, CTO</span>
//             </div>
//           </div>
//         </div>
//           </div>
//         </div>
//       </div>
//       <div className="mt-3">
//         <div className='m-10'>
//           <div className="w-full p-4 mb-6 bg-white rounded-lg sm:inline-block">
//           <div className="w-full px-4 mb-12">
//           <div className="max-w-xs md:max-w-none mx-auto">
//             <div className="flex flex-col items-center">
//               <img className="block h-48 w-48" src="https://shuffle.dev/saturn-assets/images/team/circle-team-members1.png" alt=""/>
//               <div className="inline-flex -mt-6 mb-5 items-center justify-center py-3 px-5 bg-white rounded-full">
//                 <a className="inline-block mr-3 p-1 hover:bg-orange-100 rounded-md" href="#">
//                   <img src="https://shuffle.dev/saturn-assets/images/team/icon-facebook.svg" alt=""/>
//                 </a>
//                 <a className="inline-block mr-3 p-1 hover:bg-orange-100 rounded-md" href="#">
//                   <img src="https://shuffle.dev/saturn-assets/images/team/icon-linkedin.svg" alt=""/>
//                 </a>
//                 <a className="inline-block mr-3 p-1 hover:bg-orange-100 rounded-md" href="#">
//                   <img src="https://shuffle.dev/saturn-assets/images/team/icon-instagram.svg" alt=""/>
//                 </a>
//                 <a className="inline-block p-1 hover:bg-orange-100 rounded-md" href="#">
//                   <img src="https://shuffle.dev/saturn-assets/images/team/icon-twitter.svg" alt=""/>
//                 </a>
//               </div>
//               <h5 className="text-2xl font-bold">Nitesh Dwivedi</h5>
//               <span className="text-sm text-gray-500">Founder, CTO</span>
//             </div>
//           </div>
//         </div>
//           </div>
//         </div>
//       </div>
//       <div className="mt-3">
//         <div className='m-10'>
//           <div className="w-full p-4 mb-6 bg-white rounded-lg sm:inline-block">
//           <div className="w-full px-4 mb-12">
//           <div className="max-w-xs md:max-w-none mx-auto">
//             <div className="flex flex-col items-center">
//               <img className="block h-48 w-48" src="https://shuffle.dev/saturn-assets/images/team/circle-team-members1.png" alt=""/>
//               <div className="inline-flex -mt-6 mb-5 items-center justify-center py-3 px-5 bg-white rounded-full">
//                 <a className="inline-block mr-3 p-1 hover:bg-orange-100 rounded-md" href="#">
//                   <img src="https://shuffle.dev/saturn-assets/images/team/icon-facebook.svg" alt=""/>
//                 </a>
//                 <a className="inline-block mr-3 p-1 hover:bg-orange-100 rounded-md" href="#">
//                   <img src="https://shuffle.dev/saturn-assets/images/team/icon-linkedin.svg" alt=""/>
//                 </a>
//                 <a className="inline-block mr-3 p-1 hover:bg-orange-100 rounded-md" href="#">
//                   <img src="https://shuffle.dev/saturn-assets/images/team/icon-instagram.svg" alt=""/>
//                 </a>
//                 <a className="inline-block p-1 hover:bg-orange-100 rounded-md" href="#">
//                   <img src="https://shuffle.dev/saturn-assets/images/team/icon-twitter.svg" alt=""/>
//                 </a>
//               </div>
//               <h5 className="text-2xl font-bold">Rachana Jha</h5>
//               <span className="text-sm text-gray-500">Founder, CTO</span>
//             </div>
//           </div>
//         </div>
//           </div>
//         </div>
//       </div>
//       <div className="mt-3">
//         <div className='m-10'>
//           <div className="w-full p-4 mb-6 bg-white rounded-lg sm:inline-block">
//           <div className="w-full px-4 mb-12">
//           <div className="max-w-xs md:max-w-none mx-auto">
//             <div className="flex flex-col items-center">
//               <img className="block h-48 w-48" src="https://shuffle.dev/saturn-assets/images/team/circle-team-members1.png" alt=""/>
//               <div className="inline-flex -mt-6 mb-5 items-center justify-center py-3 px-5 bg-white rounded-full">
//                 <a className="inline-block mr-3 p-1 hover:bg-orange-100 rounded-md" href="#">
//                   <img src="https://shuffle.dev/saturn-assets/images/team/icon-facebook.svg" alt=""/>
//                 </a>
//                 <a className="inline-block mr-3 p-1 hover:bg-orange-100 rounded-md" href="#">
//                   <img src="https://shuffle.dev/saturn-assets/images/team/icon-linkedin.svg" alt=""/>
//                 </a>
//                 <a className="inline-block mr-3 p-1 hover:bg-orange-100 rounded-md" href="#">
//                   <img src="https://shuffle.dev/saturn-assets/images/team/icon-instagram.svg" alt=""/>
//                 </a>
//                 <a className="inline-block p-1 hover:bg-orange-100 rounded-md" href="#">
//                   <img src="https://shuffle.dev/saturn-assets/images/team/icon-twitter.svg" alt=""/>
//                 </a>
//               </div>
//               <h5 className="text-2xl font-bold">Trisandhaya</h5>
//               <span className="text-sm text-gray-500">Founder, CTO</span>
//             </div>
//           </div>
//         </div>
//           </div>
//         </div>
//       </div>

//     </Carousel>
//     </>
//   );
 };
 export default Ourteam;
