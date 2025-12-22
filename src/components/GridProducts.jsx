import React from "react";

const GridProducts = ({ children }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
      {children}
    </div>
  );
};

export default GridProducts;
