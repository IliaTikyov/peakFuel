import { Link } from "react-router-dom";

const CategoriesCard = ({ item, to = "#" }) => {
  return (
    <Link
      to={to}
      className="
        bg-emerald-400 hover:bg-emerald-500 hover:scale-[1.02]
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
