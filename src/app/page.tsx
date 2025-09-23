"use client";

import Navbar from "../component/sections/navbar";
import HeroSection from "../component/sections/herosection";
import Services from "../component/sections/services";
import CompanyProfile from "../component/sections/company-profile";
import Testimonials from "../component/sections/testimonials";
import Certifications from "../component/sections/certifications";
import ServiceDetails from "../component/sections/service-details";
import Careers from "../component/sections/careers";
import Contact from "../component/sections/contact";
import Footer from "../component/sections/footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="max-w-5xl mx-auto px-4 py-20 flex flex-col gap-20">
        <Services />
        <CompanyProfile />
        <Testimonials />
        <Certifications />
        <ServiceDetails />
        <Careers />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
