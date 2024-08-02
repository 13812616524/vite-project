import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => (
  <nav className="bg-gray-800 p-4">
    <div className="container mx-auto flex justify-between">
      <div className="text-white font-bold">
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link to="/dashboard" className="mr-4">
          Dashboard
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
