// Categories.jsx
import React from "react";
import CategoriesCard from "./CategoriesCard";
import { categories } from "../data/categories";

const Categories = () => {
  return (
    <section>
      <div className="max-w-5xl mx-auto px-4 space-y-8">
        <h1 className="text-center uppercase font-bold text-2xl tracking-wide">
          Categories
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <CategoriesCard
              key={cat.slug}
              item={cat.label}
              to={`/category/${cat.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
