import { useEffect } from "react";

import Footer from "../Base/Footer";
import Header from "../Base/Header";
import Blogs from "../Blogs/ShowBlogs";
import AboutHome from "./Helper/About/AboutHome";
import Hero from "./Helper/Hero";

const Home = () => {
  useEffect(() => {
    document.title = "Waymore | Home";
  }, []);
  
  return (
    <>
      <Header />
      <Hero />
      <Blogs />
      <AboutHome />
      <Footer />
    </>
  );
};

export default Home;
