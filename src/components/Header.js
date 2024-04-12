import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="text-lg font-bold">
              Japan Travel Guide
            </Link>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link to="/season/spring" className="text-base font-medium">
              Spring
            </Link>
            <Link to="/season/summer" className="text-base font-medium">
              Summer
            </Link>
            <Link to="/season/autumn" className="text-base font-medium">
              Autumn
            </Link>
            <Link to="/season/winter" className="text-base font-medium">
              Winter
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
