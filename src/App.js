import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import BlogPage from "./components/BlogPage/BlogPage";
import Article from "./components/BlogPage/Article/Article";
import ServicePage from "./components/ServicePage/ServicePage";
import ServiceArticle from "./components/ServiceArticle/ServiceArticle";
import { getAllBlogs } from "./services/fetchBlogs";

function App() {
  const aboutSection = useRef(null);
  const serviceSection = useRef(null);
  const contcatSection = useRef(null);
  const [blogs,setBlogs] = useState([]);

  const location = window.location.pathname;
  const [active, setActive] = useState(location === "/blogs" ? "blog" : "home");

  useEffect(() => {
    const blogs = getAllBlogs().then((data) => {
      const blog = data.data;
      const sortedBlog = blog?.sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.created_at) - new Date(a.created_at);
      });
      setBlogs(sortedBlog);
      return sortedBlog;
    });
    
  }, []);

  const scrollAbout = () => {
    window.scrollTo({
      top: aboutSection.current.offsetTop,
      behavior: "smooth",
    });
  };

  const scrollService = () => {
    window.scrollTo({
      top: serviceSection.current.offsetTop,
      behavior: "smooth",
    });
  };

  const scrollContact = () => {
    window.scrollTo({
      top: contcatSection.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <BrowserRouter>
      <Navbar
        scrollDown={scrollAbout}
        scrollService={scrollService}
        scrollContact={scrollContact}
        active={active}
        setActive={setActive}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              aboutSection={aboutSection}
              serviceSection={serviceSection}
              contcatSection={contcatSection}
              blogs={blogs}
            />
          }
        />
        <Route path="/blogs" element={<BlogPage blogs={blogs}/>} />
        <Route path="/article/:id" element={<Article blogs={blogs}/>} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/service/:id" element={<ServiceArticle />} />
        <Route
          path="*"
          element={
            <Home
              aboutSection={aboutSection}
              serviceSection={serviceSection}
              contcatSection={contcatSection}
            />
          }
        />
      </Routes>
      <Footer
        scrollDown={scrollAbout}
        scrollService={scrollService}
        scrollContact={scrollContact}
        active={active}
        setActive={setActive}
      />
    </BrowserRouter>
  );
}

export default App;
