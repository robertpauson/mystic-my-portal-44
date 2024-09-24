import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Heart, Users, Eye, Repeat } from 'lucide-react';

const Seducer = () => {
  const chakras = [
    { name: 'Charm Core', description: 'Raw charm and sexual magnetism', color: 'bg-[#5A2D2E]' },
    { name: 'Eros Nexus', description: 'Tapping into the primal force of desire', color: 'bg-[#191970]' },
    { name: 'Pulse of Command', description: 'Control over emotional influence', color: 'bg-[#FF4500]' },
    { name: 'Heart of Persuasion', description: 'Mastery of seductive language and persuasion', color: 'bg-[#E5E4E2]' },
    { name: 'Charm Plexus', description: 'Amplification of physical magnetism', color: 'bg-[#C0C0C0]' },
    { name: "Illusion's Veil", description: 'Manipulation of perceptions', color: 'bg-[#3A3A3A]' },
    { name: 'Crown of Desire', description: 'Sovereignty over the desires of others', color: 'bg-[#FFD700]' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#5A2D2E] to-[#191970] text-[#E5E4E2]">
      <nav className="bg-[#3A3A3A] p-4">
        <ul className="flex justify-center space-x-6">
          <NavItem to="/" icon={<Home className="h-6 w-6" />} text="Home" />
          <NavItem to="/seducer" icon={<Heart className="h-6 w-6" />} text="Seducer" />
          <NavItem to="/social-connections" icon={<Users className="h-6 w-6" />} text="Social" />
          <NavItem to="/world-perception" icon={<Eye className="h-6 w-6" />} text="World" />
          <NavItem to="/incarnations" icon={<Repeat className="h-6 w-6" />} text="Incarnations" />
        </ul>
      </nav>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center mb-12 text-[#E5E4E2]">Path of the Seducer</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#3A3A3A] p-6 rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold mb-4 text-[#FF4500]">Master of Allure</h2>
            <p>The Seducer embodies the art of attraction, wielding charm and charisma as potent weapons. With a mere glance or a carefully chosen word, he can ignite passion and desire in the hearts of others.</p>
          </div>
          <div className="bg-[#3A3A3A] p-6 rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold mb-4 text-[#FF4500]">Architect of Desire</h2>
            <p>Through subtle manipulation and irresistible appeal, the Seducer shapes the desires of those around him. He is a master of reading and exploiting hidden wants, bending wills to align with his own ambitions.</p>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold mb-8 text-center text-[#E5E4E2]">The Enchanter's Seven Chakras</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chakras.map((chakra) => (
            <div key={chakra.name} className="bg-[#3A3A3A] p-6 rounded-lg shadow-xl">
              <div className={`w-12 h-12 ${chakra.color} rounded-full mb-4`}></div>
              <h3 className="text-xl font-semibold mb-2 text-[#E5E4E2]">{chakra.name}</h3>
              <p className="text-[#C0C0C0]">{chakra.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ to, icon, text }) => (
  <li>
    <Link to={to} className="text-[#E5E4E2] hover:text-[#FF4500] transition duration-300 flex items-center">
      {icon}
      <span className="ml-2">{text}</span>
    </Link>
  </li>
);

export default Seducer;