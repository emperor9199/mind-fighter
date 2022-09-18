import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import CoreServices from "./components/CoreServices/CoreServices";
import AboutUs from "./components/AboutUs/AboutUs";
import AboutTwo from "./components/AboutTwo/AboutTwo";
import Services from "./components/Services/Services";
import TestiMonials from "./components/Testinomials/TestiMonials";
import Counter from "./components/Counter/Counter";
import Blog from "./components/Blog/Blog";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import FAQ from "./components/FAQ/FAQ";
import AboutThree from "./components/AboutThree/AboutThree";

function App() {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
}

export default App;
