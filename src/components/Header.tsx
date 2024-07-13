// "use client"
// import React, { useEffect, useState } from 'react';

// export default function Header() {
//     const images = [
//         { src: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RWR1Y2F0aW9ufGVufDB8fDB8fHww', caption: 'Ambitious Academy' },
//         { src: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RWR1Y2F0aW9ufGVufDB8fDB8fHww', caption: 'Discover Knowledge' },
//         { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RWR1Y2F0aW9ufGVufDB8fDB8fHww', caption: 'Build Connect' },
//         { src: 'https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RWR1Y2F0aW9ufGVufDB8fDB8fHww', caption: 'Foresee and Invent' },
//       ];
    
//       const [currentIndex, setCurrentIndex] = useState(0);
    
//       useEffect(() => {
//         const interval = setInterval(() => {
//           const newIndex = (currentIndex + 1) % images.length;
//           setCurrentIndex(newIndex);
//         }, 3000); // Change slide every 5 seconds
    
//         return () => clearInterval(interval);
//       }, [currentIndex, images.length]);


//   return (
//     <header className="bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${images[currentIndex].src})` }}>
//       <div className="container mx-auto px-4 py-2 flex justify-between items-center flex-wrap">         
//       </div>
//       <div className="banner bg-cover bg-center py-20 md:py-40 text-white">
//         <div className="container mx-auto px-4">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">{images[currentIndex].caption}</h1>
//           <p className="text-lg md:text-2xl mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//           <div className="buttons">
//             <a href="#" className="inline-block px-6 py-3 bg-black text-white rounded-md mr-4 hover:bg-gray-800 transition duration-300">Learn More</a>
//             <a href="#" className="inline-block px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300">Another Button</a>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// import React, { useState, useEffect, useRef } from 'react';

// const Header = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slides = [
//     {
//       title: 'Lorem Ipsum', 
//       description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, velit.",
//       imageUrl: 'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=600',
//     },
//     {
//       title: 'Lorem Ipsum', 
//       description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, velit.",
//       imageUrl: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
//     },
//     {
//       title: 'Lorem Ipsum', 
//       description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, velit.",
//       imageUrl: 'https://images.pexels.com/photos/267586/pexels-photo-267586.jpeg?auto=compress&cs=tinysrgb&w=600',
//     },
//   ];

//   const totalSlides = slides.length;
//   const slideInterval = useRef<NodeJS.Timeout | null>(null);

//   useEffect(() => {
//     console.log("Running");
//     startSlideInterval();
//     return () => stopSlideInterval();
//   }, []);

//   const startSlideInterval = () => {
//     slideInterval.current = setInterval(() => {
//       nextSlide();
//     }, 3000);
//   };

//   const stopSlideInterval = () => {
//     if (slideInterval.current) {
//       clearInterval(slideInterval.current);
//     }
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % totalSlides);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
//   };

//   return (
//     <div className="mb-24 relative w-1500px overflow-hidden">
//       <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
//         {slides.map((slide, index) => (
//           <div key={index} className="min-w-1500px h-[30rem] md:h-[calc(100vh-200px)] flex-shrink-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${slide.imageUrl})` }}>
//             <div className="h-full flex flex-col justify-end w-2/3 md:max-w-1500px p-5 md:p-10 text-white">
//               <span>{slide.title}</span>
//               <span className="text-xl md:text-3xl">{slide.description}</span>
//               <div className="mt-5">
//                 <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white text-black hover:bg-gray-100" href="#">
//                   Learn More
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <button onClick={prevSlide} className="absolute inset-y-0 start-0 flex items-center justify-center w-12 h-full text-black bg-white/20 hover:bg-white/40 rounded-s-2xl focus:outline-none">
//         <span className="text-2xl" aria-hidden="true">
//           <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
//             <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
//           </svg>
//         </span>
//       </button>

//       <button onClick={nextSlide} className="absolute inset-y-0 end-0 flex items-center justify-center w-12 h-full text-black bg-white/20 hover:bg-white/40 rounded-e-2xl focus:outline-none">
//         <span className="text-2xl" aria-hidden="true">
//           <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
//             <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
//           </svg>
//         </span>
//       </button>
//     </div>
//   );
// };

// export default Header;

import React, { useState, useEffect, useRef } from 'react';
import image1 from '../../public/photos/carousel1.jpg';
 import image2 from '../../public/photos/carousel2.jpg';
 import image3 from '../../public/photos/carousel3.jpg';
 import image4 from '../../public/photos/carousel4.jpg';
 import image5 from '../../public/photos/carousel5.png';
import '/src/app/globals.css';


const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      // title: 'Lorem Ipsum', 
      // description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, velit.",
      // imageUrl: 'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=600',
       imageUrl:image1.src,
    },
    {
      // title: 'Lorem Ipsum', 
      // description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, velit.",
      // imageUrl: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
       imageUrl:image2.src,
    },
    {
      // title: 'Lorem Ipsum', 
      // description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, velit.",
       imageUrl:image3.src,

      // imageUrl: 'https://img.freepik.com/premium-vector/flat-law-firm-instagram-posts-collection_23-2149340592.jpg',
    },
    {
      // title: 'Lorem Ipsum', 
      // description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, velit.",
       imageUrl:image4.src,

      // imageUrl: 'https://img.freepik.com/premium-vector/flat-law-firm-instagram-posts-collection_23-2149340592.jpg',
    },
    {
      // title: 'Lorem Ipsum', 
      // description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, velit.",
       imageUrl:image5.src,

      // imageUrl: 'https://img.freepik.com/premium-vector/flat-law-firm-instagram-posts-collection_23-2149340592.jpg',
    },
  ];

  const totalSlides = slides.length;
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startSlideInterval();
    return () => stopSlideInterval();
  }, []);

  const startSlideInterval = () => {
    slideInterval.current = setInterval(() => {
      nextSlide();
    }, 3000);
  };

  const stopSlideInterval = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="header-container">
      <div className="slide-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="slide" style={{ backgroundImage: `url(${slide.imageUrl})`}}>
            <div className="slide-content">
              {/* <h2 className="slide-title">{slide.title}</h2>
              <p className="slide-description">{slide.description}</p> */}
              {/* <div className="mt-5">
                <a className="learn-more" href="#">
                  Learn More
                </a>
              </div> */}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="nav-button left"
        aria-label="Previous Slide"
      >
        <span className="text-2xl" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
          </svg>
        </span>
      </button>

      <button
        onClick={nextSlide}
        className="nav-button right"
        aria-label="Next Slide"
      >
        <span className="text-2xl" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Header;