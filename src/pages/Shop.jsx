import { useMemo, useState } from "react";
import GridProducts from "../components/GridProducts";
import ProductCards from "../components/ProductCards";
import { products } from "../data/products";

const Shop = () => {
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Default");

  // category list (only real categories)
  const categories = useMemo(() => {
    const unique = Array.from(new Set(products.map((p) => p.category)));
    return ["All", ...unique];
  }, []);

  const visibleProducts = useMemo(() => {
    let list = products;

    // Filter by categories
    if (category !== "All") {
      list = list.filter((p) => p.category === category);
    }

    // Sort by prices, newest and oldest
    const copy = [...list];

    if (sortBy === "Low-Price") {
      copy.sort((a, b) => a.price - b.price);
    } else if (sortBy === "Newest") {
      copy.sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));
    } else if (sortBy === "Oldest") {
      copy.sort((a, b) => new Date(a.addedAt) - new Date(b.addedAt));
    }

    return copy;
  }, [category, sortBy]);

  return (
    <section>
      <div className="max-w-5xl mx-auto px-4 space-y-6 my-10">
        <h1 className="text-center uppercase font-bold text-2xl tracking-wide">
          Shop Your Favorite Products
        </h1>
        <div className=" grid grid-cols-1 w sm:flex">
          <div className="flex flex-col gap-3 w-full sm:flex-row sm:items-center">
            <div className="flex flex-wrap gap-3 items-center">
              {/* Category select */}
              <div
                className="flex items-center gap-3 py-2 px-4 bg-emerald-300 text-white uppercase 
              font-bold rounded-2xl border border-black shadow-md w-full sm:w-auto"
              >
                <label htmlFor="category" className="whitespace-nowrap">
                  Category
                </label>

                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="ml-auto text-black rounded-2xl text-right focus:outline-0 px-2 py-1 w-full sm:w-auto max-w-[180px]"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort select */}
              <div
                className="flex items-center gap-3 py-2 px-4 bg-emerald-300 text-white uppercase 
              font-bold rounded-2xl border border-black shadow-md w-full sm:w-auto"
              >
                <label htmlFor="sort" className="whitespace-nowrap">
                  Sort
                </label>

                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="ml-auto text-black rounded-2xl text-right focus:outline-0 px-2 py-1 w-full sm:w-auto max-w-[180px]"
                >
                  <option value="Default">Default</option>
                  <option value="Low-Price">Lowest price</option>
                  <option value="Newest">Newest</option>
                  <option value="Oldest">Oldest</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <GridProducts>
          {visibleProducts.map((p) => (
            <ProductCards key={p.id} {...p} />
          ))}
        </GridProducts>
      </div>
    </section>
  );
};

export default Shop;
