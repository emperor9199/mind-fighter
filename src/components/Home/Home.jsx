import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import CoreServices from "../CoreServices/CoreServices";
import AboutUs from "../AboutUs/AboutUs";
import AboutTwo from "../AboutTwo/AboutTwo";
import Services from "../Services/Services";
import TestiMonials from "../Testinomials/TestiMonials";
import Counter from "../Counter/Counter";
import Blog from "../Blog/Blog";
import ContactUs from "../ContactUs/ContactUs";
import FAQ from "../FAQ/FAQ";
import AboutThree from "../AboutThree/AboutThree";

const Home = () => {
  return (
    <>
      {" "}
      <HeroSection />
      <CoreServices />
      <AboutUs />
      <AboutTwo />
      <AboutThree />
      <Services />
      <TestiMonials />
      {/* <Counter /> */}
      <Blog />
      <FAQ />
      <ContactUs />
    </>
  );
};

export default Home;
