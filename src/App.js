import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import BlogPage from "./components/BlogPage/BlogPage";
import Article from "./components/BlogPage/Article/Article";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/article" element={<Article />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
