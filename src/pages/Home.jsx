import React from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Blog from "../components/Blog";
import BestSellers from "../components/BestSellers";

const Home = () => {
  return (
    <div className="flex flex-col my-6 space-y-12">
      <Hero />
      <Categories />
      <BestSellers />
      <Blog />
    </div>
  );
};

export default Home;
