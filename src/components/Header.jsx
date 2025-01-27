import { GiSpoon } from "react-icons/gi";
import { BiSolidUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-gray-900 text-white shadow-md flex items-center justify-between px-6 py-4">
      <Link to="/" className="flex items-center text-2xl font-satisfy gap-2 text-white hover:text-amber-500">
        <h1>
          All Recipes
          <GiSpoon />
        </h1>
      </Link>
      <Link to="/profile" className="text-3xl text-white hover:text-amber-500 transition-transform duration-300 hover:scale-110">
        <BiSolidUserCircle />
      </Link>
    </div>
  );
};

export default Header;
