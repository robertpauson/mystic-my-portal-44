import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-gray-900/50 backdrop-blur-lg p-4">
      <ul className="flex justify-center space-x-6">
        <li>
          <Link to="/" className="text-bone-white hover:text-sickly-green transition duration-300">Home</Link>
        </li>
        <li>
          <Link to="/career" className="text-bone-white hover:text-sickly-green transition duration-300">Career</Link>
        </li>
        <li>
          <Link to="/social-connections" className="text-bone-white hover:text-sickly-green transition duration-300">Social Connections</Link>
        </li>
        <li>
          <Link to="/unique-perspective" className="text-bone-white hover:text-sickly-green transition duration-300">Unique Perspective</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;