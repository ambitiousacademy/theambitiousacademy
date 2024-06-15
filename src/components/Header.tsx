"use client"
import React, { useEffect, useState } from 'react';

export default function Header() {
    const images = [
        { src: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RWR1Y2F0aW9ufGVufDB8fDB8fHww', caption: 'Ambitious Academy' },
        { src: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RWR1Y2F0aW9ufGVufDB8fDB8fHww', caption: 'Discover Knowledge' },
        { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RWR1Y2F0aW9ufGVufDB8fDB8fHww', caption: 'Build Connect' },
        { src: 'https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RWR1Y2F0aW9ufGVufDB8fDB8fHww', caption: 'Foresee and Invent' },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          const newIndex = (currentIndex + 1) % images.length;
          setCurrentIndex(newIndex);
        }, 3000); // Change slide every 5 seconds
    
        return () => clearInterval(interval);
      }, [currentIndex, images.length]);


  return (
    <header className="bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${images[currentIndex].src})` }}>
      <div className="container mx-auto px-4 py-2 flex justify-between items-center flex-wrap">         
      </div>
      <div className="banner bg-cover bg-center py-20 md:py-40 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{images[currentIndex].caption}</h1>
          <p className="text-lg md:text-2xl mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="buttons">
            <a href="#" className="inline-block px-6 py-3 bg-black text-white rounded-md mr-4 hover:bg-gray-800 transition duration-300">Learn More</a>
            <a href="#" className="inline-block px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300">Another Button</a>
          </div>
        </div>
      </div>
    </header>
  );
}