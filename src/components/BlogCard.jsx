import React from "react";
import { useState } from "react";

const BlogCard = ({ id, image, authorImg, title, description, author }) => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleReadMore = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const isExpanded = expandedId === id;
  const shouldTruncate = description.length > 200;

  return (
    <div
      key={id}
      className="
    w-72 sm:w-80 md:w-96
    h-[460px]
    flex flex-col
    border rounded-lg shadow-md
    shrink-0 overflow-hidden
    bg-white
  "
    >
      {/* Top image area */}
      <div className="relative h-40">
        <img src={image} alt={title} className="h-full w-full object-cover" />

        <div className="absolute inset-0 bg-black/30" />

        {/* Author avatar */}
        <img
          src={authorImg}
          alt={author}
          className="
        absolute -bottom-8 right-4
        h-16 w-16 rounded-full
        border-2 border-white
        object-cover
        shadow-md
      "
        />
      </div>

      {/* Content area */}
      <div className="flex flex-col gap-3 p-4 pt-10">
        <h2 className="text-center font-bold text-lg line-clamp-2">{title}</h2>
        <div className="max-h-32 overflow-y-auto">
          <p
            className={`text-sm text-slate-700 ${
              isExpanded ? "" : "line-clamp-4"
            }`}
          >
            {description}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between">
          {shouldTruncate && (
            <button
              onClick={() => toggleReadMore(id)}
              className="text-emerald-600 font-semibold hover:underline text-sm"
              type="button"
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          )}
        </div>
        <p className="italic text-slate-500 text-sm text-right">{author}</p>
      </div>
    </div>
  );
};

export default BlogCard;
