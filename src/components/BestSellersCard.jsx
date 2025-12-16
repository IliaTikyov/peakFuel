import React from "react";
import { ShoppingBasket } from "lucide-react";

const BestSellersCard = ({
  id,
  image,
  name,
  rating,
  reviews,
  price,
  originalPrice,
  category,
}) => {
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
    <div
      key={id}
      className="border rounded-md shadow-md p-2 sm:p-3 md:p-4 space-y-2 sm:space-y-3 md:space-y-4"
    >
      {/*Product Image*/}
      <div className="aspect-square overflow-hidden rounded-md bg-slate-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      {/*Product Name*/}
      <h2 className="font-bold text-center uppercase tracking-wide line-clamp-2 text-xs sm:text-sm md:text-base">
        {name}
      </h2>
      {/*Product Rating*/}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm">
        <span aria-label={`Rating ${rating} out of 5`}>
          {renderStars(rating)}
        </span>
        <span className="text-slate-500">({reviews})</span>
      </div>
      {/*Product Price*/}
      <div className="text-center text-sm sm:text-base">
        {!originalPrice ? (
          <span className="font-semibold">${price}</span>
        ) : (
          <div className="flex items-center justify-center gap-2">
            <span className="line-through text-slate-400">
              ${originalPrice}
            </span>
            <span className="text-red-500 font-bold">${price}</span>
          </div>
        )}
      </div>
      {/*Product Category*/}
      <p className="hidden sm:block text-sm text-slate-600 text-center">
        {category}
      </p>
      {/*Add Button*/}
      <div className="flex justify-center">
        <button className="border border-emerald-300 flex items-center justify-center gap-2 px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-full bg-emerald-300 text-white font-bold text-xs sm:text-sm hover:text-emerald-300 hover:bg-white transition w-full sm:w-auto">
          <span className="sm:hidden">Add</span>
          <span className="hidden sm:inline">Add to Basket</span>
          <ShoppingBasket className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
    </div>
  );
};

export default BestSellersCard;
