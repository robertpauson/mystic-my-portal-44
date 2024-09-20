import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Briefcase, Users, Eye, Repeat } from 'lucide-react';

const WorldPerception = () => {
  const subtleBodies = [
    { name: 'Physical Body', description: 'The dense, material form we inhabit in the physical world.' },
    { name: 'Etheric Body', description: 'The energy template that underlies and sustains the physical body.' },
    { name: 'Emotional Body', description: 'The seat of our feelings, emotions, and desires.' },
    { name: 'Mental Body', description: 'The realm of thoughts, beliefs, and intellectual processes.' },
    { name: 'Astral Body', description: 'The bridge between the physical and higher spiritual realms.' },
    { name: 'Causal Body', description: 'The repository of our karmic patterns and soul's wisdom.' },
    { name: 'Spiritual Body', description: 'Our highest connection to universal consciousness and divinity.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      <nav className="bg-gray-900 p-4">
        <ul className="flex justify-center space-x-6">
          <NavItem to="/" icon={<Home className="h-6 w-6" />} text="Home" />
          <NavItem to="/career" icon={<Briefcase className="h-6 w-6" />} text="Career" />
          <NavItem to="/social-connections" icon={<Users className="h-6 w-6" />} text="Social" />
          <NavItem to="/world-perception" icon={<Eye className="h-6 w-6" />} text="World" />
          <NavItem to="/incarnations" icon={<Repeat className="h-6 w-6" />} text="Incarnations" />
        </ul>
      </nav>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center mb-12">World Perception</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold mb-4 text-purple-300">The Veil of Reality</h2>
            <p>Our perception of the world is but a thin veil, obscuring the true nature of existence. Beyond the physical lies a vast tapestry of energies, dimensions, and consciousness that shape our reality in ways beyond ordinary comprehension.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold mb-4 text-purple-300">Chakras: Gateways of Consciousness</h2>
            <p>Chakras are not mere concepts, but living vortexes of energy that connect our physical form to the subtle realms. They act as gateways, allowing the flow of life force and consciousness between different layers of existence.</p>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold mb-8 text-center">The Seven Subtle Bodies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subtleBodies.map((body, index) => (
            <div key={body.name} className="bg-gray-800 p-6 rounded-lg shadow-xl">
              <div className={`w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full mb-4`}></div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-300">{body.name}</h3>
              <p className="text-gray-300">{body.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-800 p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-purple-300">The Interconnected Web of Existence</h2>
          <p className="text-gray-300 mb-4">
            As we delve deeper into the nature of reality, we begin to perceive the intricate web that connects all things. Every thought, emotion, and action ripples through this cosmic tapestry, influencing the fabric of existence in ways both subtle and profound.
          </p>
          <p className="text-gray-300">
            By understanding and mastering our subtle bodies and chakras, we gain the ability to navigate this interconnected reality with greater awareness and intention. We become not just observers of the world, but active participants in the cosmic dance of creation and transformation.
          </p>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ to, icon, text }) => (
  <li>
    <Link to={to} className="text-white hover:text-purple-300 transition duration-300 flex items-center">
      {icon}
      <span className="ml-2">{text}</span>
    </Link>
  </li>
);

export default WorldPerception;