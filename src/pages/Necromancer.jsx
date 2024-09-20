import React from 'react';
import { Link } from 'react-router-dom';

const Necromancer = () => {
  const necroChakras = [
    { name: 'Void Core', description: 'Connection to the abyss and nothingness' },
    { name: 'Spirit Nexus', description: 'Channeling and manipulating spiritual energies' },
    { name: 'Death Pulse', description: 'Harnessing the power of life and death' },
    { name: 'Shadow Heart', description: 'Center of dark emotions and necromantic passion' },
    { name: 'Decay Plexus', description: 'Control over decay and undeath' },
    { name: 'Veil Sight', description: 'Perception beyond the mortal realm' },
    { name: 'Crown of Bones', description: 'Supreme necromantic wisdom and power' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#2E2C2F] text-[#E8E6E3]">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#4B0082]">The Necromancer's Path</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {necroChakras.map((chakra, index) => (
            <div key={index} className="bg-[#191970] p-6 rounded-lg shadow-lg border border-[#5B7C50]">
              <h2 className="text-2xl font-semibold mb-2 text-[#D1D1D1]">{chakra.name}</h2>
              <p className="text-[#B76E79]">{chakra.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/character-select" className="bg-[#4B0082] hover:bg-[#35063E] text-white font-bold py-3 px-6 rounded-full transition duration-300">
            Return to Character Select
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Necromancer;