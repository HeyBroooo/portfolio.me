import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <>
   <Navbar />
   <Hero />
   <div className="px-[20px] lg:container lg:px-20 mx-auto">
   <Project />
   <Cta />
   <Footer />
   </div>
   </>
  );
}
