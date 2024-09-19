import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Briefcase, Users, Eye } from 'lucide-react';

const UniquePerspective = () => {
  const necroChakras = [
    { name: 'Void Core', color: 'bg-black', description: 'Connection to the abyss and nothingness' },
    { name: 'Spirit Nexus', color: 'bg-gray-500', description: 'Channeling and manipulating spiritual energies' },
    { name: 'Death Pulse', color: 'bg-crimson', description: 'Harnessing the power of life and death' },
    { name: 'Shadow Heart', color: 'bg-dark-purple', description: 'Center of dark emotions and necromantic passion' },
    { name: 'Decay Plexus', color: 'bg-sickly-green', description: 'Control over decay and undeath' },
    { name: 'Veil Sight', color: 'bg-gray-700', description: 'Perception beyond the mortal realm' },
    { name: 'Crown of Bones', color: 'bg-bone-white', description: 'Supreme necromantic wisdom and power' },
  ];

  const necromancerPerspectives = [
    { title: 'The Veil Between Worlds', description: 'Perceiving the thin barrier between life and death, and the ability to traverse it.' },
    { title: 'Eternal Cycle', description: 'Understanding death not as an end, but as part of an endless cycle of existence and non-existence.' },
    { title: 'Whispers of the Dead', description: 'Hearing and interpreting the messages from those who have passed beyond the mortal coil.' },
    { title: 'Essence of Undeath', description: 'Grasping the fundamental energies that allow the animation of lifeless bodies.' },
    { title: 'Shadows of Fate', description: 'Seeing the threads of destiny and how they can be manipulated through necromantic arts.' },
    { title: 'Resonance of Souls', description: 'Feeling the vibrations of souls and using them to power spells and rituals.' },
  ];

  return (
    <div className="min-h-screen bg-black text-bone-white">
      <nav className="bg-dark-purple p-4">
        <ul className="flex justify-center space-x-6">
          <NavItem to="/" icon={<Home className="h-6 w-6" />} text="Home" />
          <NavItem to="/career" icon={<Briefcase className="h-6 w-6" />} text="Career" />
          <NavItem to="/social-connections" icon={<Users className="h-6 w-6" />} text="Social" />
          <NavItem to="/unique-perspective" icon={<Eye className="h-6 w-6" />} text="Perspective" />
        </ul>
      </nav>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-crimson">Necromancer's Perspective</h1>
        
        {/* Necromancer's Silhouette with Chakras */}
        <div className="relative h-[600px] bg-gradient-to-b from-gray-900 to-dark-purple rounded-lg overflow-hidden mb-16">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-48 h-[500px] bg-gray-800 rounded-full">
              {necroChakras.map((chakra, index) => (
                <div
                  key={chakra.name}
                  className={`absolute w-8 h-8 ${chakra.color} rounded-full left-1/2 transform -translate-x-1/2`}
                  style={{ bottom: `${index * 14 + 5}%` }}
                >
                  <span className="absolute left-full ml-2 text-bone-white text-sm">{chakra.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Necromancer's Perspectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {necromancerPerspectives.map((perspective, index) => (
            <div key={index} className="bg-gray-900 rounded-lg shadow-md p-6 border border-sickly-green">
              <h2 className="text-xl font-semibold mb-3 text-crimson">{perspective.title}</h2>
              <p className="text-gray-400">{perspective.description}</p>
            </div>
          ))}
        </div>
        
        {/* Necro-Chakras Description */}
        <div className="mt-16 bg-gray-900 rounded-lg shadow-md p-8 border border-dark-purple">
          <h2 className="text-3xl font-bold mb-6 text-sickly-green">The Seven Necro-Chakras</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {necroChakras.map((chakra) => (
              <div key={chakra.name} className="flex items-center space-x-4">
                <div className={`w-8 h-8 ${chakra.color} rounded-full`}></div>
                <div>
                  <h3 className="text-lg font-semibold text-bone-white">{chakra.name}</h3>
                  <p className="text-gray-400">{chakra.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ to, icon, text }) => (
  <li>
    <Link to={to} className="text-bone-white hover:text-sickly-green transition duration-300 flex items-center">
      {icon}
      <span className="ml-2">{text}</span>
    </Link>
  </li>
);

export default UniquePerspective;
