import React from 'react';
import { Link } from 'react-router-dom';

const Seductress = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#800020] to-[#4B0082] text-[#FFC0CB]">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#FFD700]">The Seductress's Path</h1>
        
        <div className="bg-[#4B0082] p-6 rounded-lg shadow-lg border border-[#FFD700] mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#FFC0CB]">Seductive Arts</h2>
          <ul className="list-disc list-inside">
            <li>Mastery of Allure and Charm</li>
            <li>Emotional Manipulation Techniques</li>
            <li>The Art of Subtle Persuasion</li>
            <li>Reading and Exploiting Desires</li>
          </ul>
        </div>
        
        <div className="bg-[#4B0082] p-6 rounded-lg shadow-lg border border-[#FFD700]">
          <h2 className="text-2xl font-semibold mb-4 text-[#FFC0CB]">Power Dynamics</h2>
          <p>As a seductress, you wield the power of desire and manipulation. Your influence extends beyond mere physical attraction, allowing you to shape the emotions and decisions of those around you.</p>
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/character-select" className="bg-[#FFD700] hover:bg-[#FFA500] text-[#800020] font-bold py-3 px-6 rounded-full transition duration-300">
            Return to Character Select
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Seductress;