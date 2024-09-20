import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Skull, Users, Eye, Repeat } from 'lucide-react';

const Necromancer = () => {
  const chakras = [
    { name: 'Void Core', description: 'Connection to the abyss and nothingness', color: 'bg-[#0A0A0A]' },
    { name: 'Spirit Nexus', description: 'Channeling and manipulating spiritual energies', color: 'bg-[#4B0082]' },
    { name: 'Death Pulse', description: 'Harnessing the power of life and death', color: 'bg-[#D1D1D1]' },
    { name: 'Shadow Heart', description: 'Center of dark emotions and necromantic passion', color: 'bg-[#2E2C2F]' },
    { name: 'Decay Plexus', description: 'Control over decay and undeath', color: 'bg-[#5B7C50]' },
    { name: 'Veil Sight', description: 'Perception beyond the mortal realm', color: 'bg-[#A9A9A9]' },
    { name: 'Crown of Bones', description: 'Dominion over death', color: 'bg-[#E8E6E3]' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0A] to-[#4B0082] text-[#E8E6E3]">
      <nav className="bg-[#2E2C2F] p-4">
        <ul className="flex justify-center space-x-6">
          <NavItem to="/" icon={<Home className="h-6 w-6" />} text="Home" />
          <NavItem to="/necromancer" icon={<Skull className="h-6 w-6" />} text="Necromancer" />
          <NavItem to="/social-connections" icon={<Users className="h-6 w-6" />} text="Social" />
          <NavItem to="/world-perception" icon={<Eye className="h-6 w-6" />} text="World" />
          <NavItem to="/incarnations" icon={<Repeat className="h-6 w-6" />} text="Incarnations" />
        </ul>
      </nav>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center mb-12 text-[#D1D1D1]">Path of the Necromancer</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#2E2C2F] p-6 rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold mb-4 text-[#5B7C50]">Mastery of Death</h2>
            <p>The Necromancer walks the thin line between life and death, commanding the forces of the afterlife with unparalleled skill. Through arcane rituals and forbidden knowledge, they bend the very fabric of existence to their will.</p>
          </div>
          <div className="bg-[#2E2C2F] p-6 rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold mb-4 text-[#5B7C50]">Ethereal Manipulation</h2>
            <p>With the power to commune with spirits and raise the dead, the Necromancer weaves intricate spells that defy the natural order. Their presence alone can chill the air and make the veil between worlds tremble.</p>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold mb-8 text-center text-[#D1D1D1]">The Seven Necro-Chakras</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chakras.map((chakra) => (
            <div key={chakra.name} className="bg-[#2E2C2F] p-6 rounded-lg shadow-xl">
              <div className={`w-12 h-12 ${chakra.color} rounded-full mb-4`}></div>
              <h3 className="text-xl font-semibold mb-2 text-[#D1D1D1]">{chakra.name}</h3>
              <p className="text-[#A9A9A9]">{chakra.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ to, icon, text }) => (
  <li>
    <Link to={to} className="text-[#E8E6E3] hover:text-[#5B7C50] transition duration-300 flex items-center">
      {icon}
      <span className="ml-2">{text}</span>
    </Link>
  </li>
);

export default Necromancer;