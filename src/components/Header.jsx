import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import MenuHamburgar from "./MenuHamburgar";

const Header = () => {
  return (
    <div className="h-[75px] font-semibold text-[18px] flex items-center justify-between max-lg:px-8 lg:px-20 max-sm:py-7 py-14 cursor-pointer no-copy">
      <div className="hover:scale-105 transition-all group">
        <Link to="/" className="group-hover:opacity-75 lg:text-2xl">
          D_ProficientPhilip
        </Link>
      </div>
      <div className="hidden lg:block">
        <Navigation />
      </div>
      <div className="lg:hidden">
        <MenuHamburgar />
      </div>
    </div>
  );
};

export default Header;
