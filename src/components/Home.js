import React from 'react';
import { Link } from 'react-router-dom';  // Import Link component from React Router
import DarkModeToggle from './DarkModeToggle';

const seasonColors = {
  spring: 'bg-green-500 dark:bg-green-700',
  summer: 'bg-blue-500 dark:bg-blue-700',
  autumn: 'bg-yellow-500 dark:bg-yellow-700',
  winter: 'bg-gray-500 dark:bg-gray-700'
};

const Home = () => {
  const currentSeason = 'spring'; // This could be dynamic based on actual data

  return (
    <div className={`min-h-screen bg-white dark:bg-black text-black dark:text-white`}>
        <DarkModeToggle />
        <div className="max-w-4xl mx-auto mt-10 p-5">
        <h1 className="text-center text-4xl font-bold text-blue-800 mb-4 sm:text-3xl">Welcome to the Japan Travel Guide</h1>
        <p className="text-center text-lg mb-6">Explore the best places to visit in Japan by season.</p>
        <p className="text-center text-lg text-gray-700 mb-6 sm:text-base">
          Discover the beauty and culture of Japan through our comprehensive travel guide. 
          Explore the best destinations to visit in each season, from the cherry blossoms of spring 
          to the vibrant autumn leaves.
        </p>
          <blockquote className="italic border-l-4 border-blue-500 pl-4 text-gray-600">
            "Every aspect of Japan, from its tea to its temples, adds up to a colorful tapestry of culture
            waiting to be explored."
          </blockquote>
          <div className="text-center mt-8 space-x-4">
            <Link to="/season/spring" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200">Spring</Link>
            <Link to="/season/summer" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-200">Summer</Link>
            <Link to="/season/autumn" className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors duration-200">Autumn</Link>
            <Link to="/season/winter" className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors duration-200">Winter</Link>
            <br/>
            <span/><br/>
            <Link to="/itinerary" className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200">Manage Itineraries</Link>
          </div>
        </div>
      </div>
  );
};

export default Home;

