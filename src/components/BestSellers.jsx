import React from "react";
import { bestSellers } from "../data/bestSellers";
import { ShoppingBasket } from "lucide-react";
import BestSellersCard from "./BestSellersCard";

const BestSellers = () => {
  const renderStars = (rating) => {
    const fullStars = Math.max(0, Math.min(5, Math.floor(rating)));

    if (fullStars === 0)
      return <span className="text-slate-500">No ratings</span>;

    return (
      <span
        className="text-amber-500"
        aria-label={`Rating ${fullStars} out of 5`}
      >
        {Array.from({ length: fullStars }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </span>
    );
  };

  return (
    <section>
      <div className="max-w-5xl mx-auto px-4 space-y-8">
        <h1 className="text-center uppercase font-bold text-2xl tracking-wide">
          Best Sellers
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {bestSellers.map((b) => (
            <BestSellersCard
              id={b.id}
              image={b.image}
              name={b.name}
              price={b.price}
              originalPrice={b.originalPrice}
              rating={b.rating}
              reviews={b.reviews}
              category={b.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
