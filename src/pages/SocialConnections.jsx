import React from 'react';
import Navigation from '../components/Navigation';

const SocialConnections = () => {
  const connections = [
    { name: 'Morticia Addams', role: 'Goth Queen' },
    { name: 'Dracula', role: 'Vampire Lord' },
    { name: 'Merlin', role: 'Wizard Extraordinaire' },
    { name: 'Elvira', role: 'Mistress of the Dark' },
    { name: 'Gandalf', role: 'Grey Wizard' },
  ];

  return (
    <div className="min-h-screen bg-black text-bone-white">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-shadow-necro">Social Connections</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {connections.map((connection, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-lg rounded-lg p-6 shadow-xl">
              <h2 className="text-2xl font-semibold mb-2 text-sickly-green">{connection.name}</h2>
              <p className="text-crimson">{connection.role}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-gray-900/50 backdrop-blur-lg rounded-lg p-8 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-crimson">Networking Events</h2>
          <ul className="space-y-4 text-bone-white">
            <li>
              <h3 className="text-xl font-medium text-sickly-green">Annual Necromancers' Ball</h3>
              <p>A gathering of the most influential practitioners of the dark arts.</p>
            </li>
            <li>
              <h3 className="text-xl font-medium text-sickly-green">Witches' Brew Coffee Meetup</h3>
              <p>Monthly casual meetings to discuss the latest in magical theory and practice.</p>
            </li>
            <li>
              <h3 className="text-xl font-medium text-sickly-green">Undead Poetry Slam</h3>
              <p>A unique event where the living and the dead share their artistic expressions.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SocialConnections;
