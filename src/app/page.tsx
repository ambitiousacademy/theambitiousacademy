"use client"
import Agendaof from "@/components/Agendaof";
import Courses from "../components/Courses";
import FAQ from "../components/Faqs";
import HeaderSection from "../components/Header";
import Ourservices from "../components/Ourservices";
import Ourteam from "../components/Ourteam";
import Benefits from "@/components/Benefits";
import Reviews from "@/components/Reviews";
import { useEffect, useState } from "react";

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
      {loading ? (
        <div className="loader flex justify-center items-center h-screen">
          <h1 className="text-sm">Relax! The Page is loading...</h1>
          {/* Add your loader animation or spinner here */}
        </div>
      ) : (
        <>
          <HeaderSection />
          {/* <Courses /> */}
          <Ourservices />
          <Agendaof />
          <Benefits />
          <Ourteam />
          <Reviews />
          <FAQ />
        </>
      )}
    </main>
  );
}
