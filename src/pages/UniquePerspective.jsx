import React from 'react';
import Navigation from '../components/Navigation';

const UniquePerspective = () => {
  const insights = [
    { title: 'The Veil Between Worlds', description: 'Exploring the thin line between life and death.' },
    { title: 'Whispers of the Ancients', description: 'Listening to the wisdom of long-gone civilizations.' },
    { title: 'The Alchemy of the Soul', description: 'Understanding the transformative power of spiritual energy.' },
    { title: 'Shadows and Light', description: 'Finding balance in the duality of existence.' },
  ];

  return (
    <div className="min-h-screen bg-black text-bone-white">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-shadow-necro">Unique Perspective</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {insights.map((insight, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-lg rounded-lg p-6 shadow-xl">
              <h2 className="text-2xl font-semibold mb-2 text-sickly-green">{insight.title}</h2>
              <p className="text-bone-white">{insight.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-gray-900/50 backdrop-blur-lg rounded-lg p-8 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-crimson">Necromantic Philosophy</h2>
          <p className="text-bone-white mb-4">
            In the realm of necromancy, we seek to understand the intricate tapestry of life and death. Our unique perspective allows us to see beyond the veil, to communicate with spirits, and to manipulate the very essence of existence.
          </p>
          <p className="text-bone-white">
            Through our studies and rituals, we gain insights into the nature of the soul, the power of sacrifice, and the eternal cycle of rebirth. We do not fear death, for we know it is but a doorway to new realms of knowledge and power.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UniquePerspective;
