import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-dark-600 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white text-xl font-bold">
              RPS Pro
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link
              to="/"
              className="text-white hover:bg-primary-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/game"
              className="text-white hover:bg-primary-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Game
            </Link>
            <Link
              to="/about"
              className="text-white hover:bg-primary-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;