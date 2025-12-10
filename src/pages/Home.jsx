import React from "react";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="flex flex-col mt-4">
      <Hero />
      <h1>Categories</h1>
      <div className="grid grid-cols-2">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </div>
  );
};

export default Home;
