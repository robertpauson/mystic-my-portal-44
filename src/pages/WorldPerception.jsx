import React from 'react';
import { Link } from 'react-router-dom';

const WorldPerception = () => {
  const subtleBodies = [
    { name: 'Physical Body', description: 'The dense, material form we inhabit in the physical world.' },
    { name: 'Etheric Body', description: 'The energetic blueprint of the physical body, governing life force.' },
    { name: 'Emotional Body', description: 'The seat of our feelings, emotions, and desires.' },
    { name: 'Mental Body', description: 'The realm of thoughts, beliefs, and intellectual processes.' },
    { name: 'Astral Body', description: 'The bridge between the physical and higher spiritual realms.' },
    { name: 'Causal Body', description: 'The repository of our karmic patterns and soul\'s wisdom.' },
    { name: 'Spiritual Body', description: 'Our highest connection to universal consciousness and divinity.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">World Perception</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">The Subtle Bodies</h2>
          <p className="mb-6">In many esoteric traditions, the human being is understood to consist of multiple layers or bodies, each vibrating at different frequencies. These subtle bodies interact with and influence one another, shaping our perception of reality and our spiritual experiences.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subtleBodies.map((body, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{body.name}</h3>
                <p>{body.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Chakras as Concepts</h2>
          <p className="mb-6">Chakras are energy centers within the subtle body that act as conduits for life force energy. Each chakra is associated with specific physical, emotional, and spiritual aspects of our being.</p>
          <p>To explore the chakras of different archetypes, please choose your path:</p>
          <div className="flex justify-center space-x-4 mt-8">
            <Link to="/necromancer" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Necromancer</Link>
            <Link to="/seductress" className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">Seductress</Link>
            <Link to="/seducer" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Seducer</Link>
            <Link to="/protector" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Protector</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WorldPerception;