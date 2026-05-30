"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import Tools from "@/components/Tools";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-navy" />
    );
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <HowItWorks />
      <WhyUs />
      <Tools />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
