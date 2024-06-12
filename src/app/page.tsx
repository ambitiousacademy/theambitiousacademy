import Agendaof from "@/components/Agendaof";
import Courses from "../components/Courses";
import FAQ from "../components/Faqs";
import HeaderSection from "../components/Header";
import Ourservices from "../components/Ourservices";
import Ourteam from "../components/Ourteam";
import Benefits from "@/components/Benefits";
import Reviews from "@/components/Reviews";

export default async function Home() {
 
  return (

    <main>
      <HeaderSection/>
      {/* <Courses/> */}
      <Ourservices/>
      <Agendaof/>
      <Benefits/>
      <Ourteam/>
      <Reviews/>
      <FAQ/>
    </main>
  );
}
