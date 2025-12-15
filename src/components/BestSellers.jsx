import React from "react";
import { bestSellers } from "../data/bestSellers";
import { ShoppingBasket } from "lucide-react";

const BestSellers = () => {
  return (
    <section>
      <div className="max-w-5xl mx-auto px-4 space-y-8">
        <h1 className="text-center uppercase font-bold text-2xl tracking-wide">
          Best Sellers
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {bestSellers.map((b) => (
            <div
              key={b.id}
              className="border rounded-md shadow-md p-4 space-y-4 "
            >
              <div className="aspect-square overflow-hidden rounded-md bg-slate-100">
                <img
                  src={b.image}
                  alt={b.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <h2 className="font-bold text-center uppercase tracking-wide line-clamp-2">
                {b.name}
              </h2>

              <div className="text-sm flex items-center justify-center gap-2">
                <span aria-label={`Rating ${b.rating} out of 5`}>
                  {b.rating} ★
                </span>
                <span className="text-slate-500">({b.reviews})</span>
              </div>

              <div className="text-center">
                {!b.originalPrice ? (
                  <span className="font-semibold">${b.price}</span>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <span className="line-through text-slate-400">
                      ${b.originalPrice}
                    </span>
                    <span className="text-red-500 font-bold">${b.price}</span>
                  </div>
                )}
              </div>

              <p className="text-sm text-slate-600 text-center">{b.category}</p>

              <div className="flex justify-center">
                <button className="border border-emerald-300 flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-300 text-white font-bold hover:text-emerald-300 hover:bg-white transition">
                  Add to Basket <ShoppingBasket />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
