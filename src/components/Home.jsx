import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./Hero";
import Footer from "./Footer";
import Service from "./Service";
import WhyUs from "./WhyUs";
import Faqs from "./Faqs";


function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <HeroSection />
      <main className="flex-grow">
        <WhyUs/>
        <Service/>
        <Faqs/>
       
       
      </main>

    </div>
  );
}

export default Home;
