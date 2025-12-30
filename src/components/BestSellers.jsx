import React, { useState } from "react";
import { products } from "../data/products";
import ProductCards from "../components/ProductCards";
import GridProducts from "./GridProducts";

const BestSellers = () => {
  const [visibleItemCount, setVisibleItemCount] = useState(4);

  const bestSellers = products.filter((b) => b.isBestSeller);

  const handleLoadMore = () => {
    setVisibleItemCount((prev) => prev + 4);
  };

  const handShowLess = () => {
    setVisibleItemCount(4);
  };

  return (
    <section>
      <div className="max-w-5xl mx-auto px-4 space-y-8">
        <h1 className="text-center uppercase font-bold text-2xl tracking-wide">
          Best Sellers
        </h1>

        <GridProducts>
          {bestSellers.slice(0, visibleItemCount).map((b) => (
            <ProductCards key={b.id} {...b} />
          ))}
        </GridProducts>
        <div className="flex justify-center text-white font-semibold">
          {visibleItemCount < bestSellers.length && (
            <button
              className="bg-emerald-300 px-4 py-2 rounded-full hover:bg-white hover:text-emerald-300 hover:border-emerald-300 border transition duration-200"
              onClick={handleLoadMore}
            >
              Show More
            </button>
          )}
          {visibleItemCount > 4 && (
            <button
              className="bg-emerald-300 px-4 py-2 rounded-full hover:bg-white hover:text-emerald-300 hover:border-emerald-300 border transition duration-200"
              onClick={handShowLess}
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
