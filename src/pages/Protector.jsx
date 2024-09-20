import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Shield, Users, Eye, Repeat } from 'lucide-react';

const Protector = () => {
  const chakras = [
    { name: 'Guardian Core', description: 'Embodiment of protection', color: 'bg-[#4682B4]' },
    { name: 'Bulwark Nexus', description: 'Channeling protective energies', color: 'bg-[#525252]' },
    { name: 'Pulse of Valor', description: 'Courage and bravery in the face of adversity', color: 'bg-[#FFD700]' },
    { name: 'Heart of Sacrifice', description: 'Willingness to sacrifice for the greater good', color: 'bg-[#C0C0C0]' },
    { name: 'Shield Plexus', description: 'Mastery of protective forces', color: 'bg-[#1C1C1C]' },
    { name: 'Veil of Guardianship', description: 'Perception of threats and dangers', color: 'bg-[#A9A9A9]' },
    { name: 'Crown of Duty', description: 'Absolute dedication to protection and service', color: 'bg-[#FFD700]' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4682B4] to-[#525252] text-[#C0C0C0]">
      <nav className="bg-[#1C1C1C] p-4">
        <ul className="flex justify-center space-x-6">
          <NavItem to="/" icon={<Home className="h-6 w-6" />} text="Home" />
          <NavItem to="/protector" icon={<Shield className="h-6 w-6" />} text="Protector" />
          <NavItem to="/social-connections" icon={<Users className="h-6 w-6" />} text="Social" />
          <NavItem to="/world-perception" icon={<Eye className="h-6 w-6" />} text="World" />
          <NavItem to="/incarnations" icon={<Repeat className="h-6 w-6" />} text="Incarnations" />
        </ul>
      </nav>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center mb-12 text-[#FFD700]">Path of the Protector</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#1C1C1C] p-6 rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold mb-4 text-[#FFD700]">Guardian of the Realm</h2>
            <p>The Protector stands as an unwavering shield against the forces of chaos and destruction. With an unbreakable will and a heart full of courage, they defend the innocent and uphold justice in all realms.</p>
          </div>
          <div className="bg-[#1C1C1C] p-6 rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold mb-4 text-[#FFD700]">Bastion of Hope</h2>
            <p>In times of darkness, the Protector shines as a beacon of hope and safety. Their presence alone can inspire courage in others, and their unwavering dedication to their duty serves as an example to all.</p>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold mb-8 text-center text-[#FFD700]">The Shieldbearer's Seven Chakras</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chakras.map((chakra) => (
            <div key={chakra.name} className="bg-[#1C1C1C] p-6 rounded-lg shadow-xl">
              <div className={`w-12 h-12 ${chakra.color} rounded-full mb-4`}></div>
              <h3 className="text-xl font-semibold mb-2 text-[#FFD700]">{chakra.name}</h3>
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
    <Link to={to} className="text-[#C0C0C0] hover:text-[#FFD700] transition duration-300 flex items-center">
      {icon}
      <span className="ml-2">{text}</span>
    </Link>
  </li>
);

export default Protector;