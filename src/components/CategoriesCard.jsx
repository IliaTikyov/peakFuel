import { Link } from "react-router-dom";

const CategoriesCard = ({ item, to = "#" }) => {
  return (
    <Link
      to={to}
      className="
        bg-emerald-600 hover:bg-emerald-700 hover:scale-[1.02]
        transition duration-200 
        rounded-md uppercase text-white text-center py-4
        shadow-md font-bold focus:outline-none focus:ring-2 
      "
    >
      {item}
    </Link>
  );
};

export default CategoriesCard;
