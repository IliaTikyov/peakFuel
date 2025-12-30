import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();

  const product = useMemo(() => {
    const numericId = Number(id);
    return products.find((p) => p.id === numericId);
  }, [id]);

  if (!product) {
    return (
      <section className="max-w-5xl mx-auto px-4 my-10">
        <div className="border border-slate-200 rounded-2xl p-6">
          <h1 className="text-xl font-bold">Product not found</h1>
          <p className="text-slate-600 mt-2">
            The product you’re looking for doesn’t exist.
          </p>
          <Link
            to="/shop"
            className="inline-block mt-4 px-4 py-2 rounded-xl bg-emerald-300 font-semibold text-white"
          >
            Back to Shop
          </Link>
        </div>
      </section>
    );
  }

  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      await navigator.share({ title: product.name, url });
      return;
    }

    await navigator.clipboard.writeText(url);
    alert("Link copied!");
  };

  return (
    <section className="max-w-5xl mx-auto px-4 my-10">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Image */}
        <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm">
          <div className="aspect-square bg-slate-50 relative">
            {product.isBestSeller && (
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-orange-400 text-white text-sm shadow">
                Best Seller
              </div>
            )}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Info */}
        <div className="space-y-4">
          <div>
            <p className="text-slate-500">{product.category}</p>

            <h1 className="text-2xl font-bold">{product.name}</h1>

            <div className="mt-2 flex items-center gap-3 text-slate-600">
              <span>⭐ {product.rating}</span>
              <span>({product.reviews} reviews)</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-slate-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <p className="text-slate-700 leading-relaxed">
            {product.description ||
              "No product description available. It will be added soon :)"}
          </p>

          <div className="flex gap-3">
            <button
              className="flex-1 py-3 rounded-2xl bg-emerald-300 font-bold shadow-md hover:opacity-90 text-white uppercase"
              onClick={() => alert(`Added: ${product.name}`)}
            >
              Add to cart
            </button>

            <button
              className="px-5 py-3 rounded-2xl border border-slate-300 font-semibold hover:bg-slate-50 uppercase"
              onClick={handleShare}
            >
              Share
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
