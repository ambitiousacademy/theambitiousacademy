"use client"
import Courses from "../components/Courses";
import FAQ from "../components/Faqs";
import HeaderSection from "../components/Header";
import Ourteam from "../components/Ourteam";
// import Reviews from "@/components/Reviews";
import { useEffect, useState } from "react";
import Services from "@/components/Services";
import Subscribe from "../components/Subscribe";

export default function Home() {
  const [loading, setLoading] = useState(true); // Initialize loading state as true

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 5000ms (5 seconds)
    }, 3000);

    return () => clearTimeout(timer); // Clean up timer
  }, []);

  // You can use async/await if you have async operations to fetch data

  return (
    <main>
      {/* {loading ? (
        <div className="loader flex justify-center items-center h-screen">
          <h1 className="text-sm">Relax! The Page is loading...</h1>
         </div>
      ) : (
        
      )} */}
      <>
          {/* This Contains The Carousel Part */}
          <HeaderSection /> 

        {/* This is the courses section */}
          <Courses />

        {/* This is the services section contains 3 things right now test series, webinars, study materials */}
          <Services/>

        {/* This is the subscription component for taking user emails and all */}
          <Subscribe />

          {/* The team component */}
          <Ourteam />

          {/* FAQ's
          <FAQ /> */}
        </>
    </main>
  );
}
