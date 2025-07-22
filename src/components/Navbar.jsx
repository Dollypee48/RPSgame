import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  const navLinkClass = (path) =>
    `px-4 py-2 rounded-md text-sm font-medium transition duration-200 ${
      pathname === path
        ? "bg-primary-600 text-white"
        : "text-gray-200 hover:bg-primary-500 hover:text-white"
    }`;

  return (
    <nav className="bg-gray-900 shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-white text-2xl font-bold tracking-tight">
              RPS Pro
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-2 sm:space-x-4">
            <Link to="/" className={navLinkClass("/")}>
              Home
            </Link>
            <Link to="/game" className={navLinkClass("/game")}>
              Game
            </Link>
            <Link to="/about" className={navLinkClass("/about")}>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
