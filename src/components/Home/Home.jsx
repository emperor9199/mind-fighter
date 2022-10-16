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
import Feedback from "../Feedback/Feedback";

const Home = ({ aboutSection, serviceSection, contcatSection, blogs }) => {
  return (
    <>
      {" "}
      <HeroSection />
      <CoreServices />
      <AboutUs aboutSection={aboutSection} />
      <AboutTwo />
      <AboutThree />
      <Services serviceSection={serviceSection} />
      <TestiMonials />
      {/* <Counter /> */}
      <Blog blogs={blogs}/>
      <ContactUs contcatSection={contcatSection} />
      <FAQ />
      <Feedback />
    </>
  );
};

export default Home;
