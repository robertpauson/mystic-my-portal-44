import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Heart, Users, Eye, Repeat } from 'lucide-react';

const Seductress = () => {
  const chakras = [
    { name: 'Allure Core', description: 'Embodiment of irresistible attraction', color: 'bg-[#800020]' },
    { name: 'Velvet Nexus', description: 'Manipulation of emotional energies', color: 'bg-[#35063E]' },
    { name: 'Whispering Pulse', description: 'Control over subtle communication and manipulation', color: 'bg-[#B76E79]' },
    { name: "Siren's Heart", description: 'Center of love, lust, and emotional mastery', color: 'bg-[#FFC0CB]' },
    { name: 'Desire Plexus', description: 'Mastery over physical attraction and charm', color: 'bg-[#FF4500]' },
    { name: 'Glamour Veil', description: 'Illusions of perfection', color: 'bg-[#C0C0C0]' },
    { name: 'Crown of Temptation', description: 'Ultimate dominion over desires', color: 'bg-[#FFD700]' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#800020] to-[#35063E] text-[#FFC0CB]">
      <nav className="bg-[#2E2C2F] p-4">
        <ul className="flex justify-center space-x-6">
          <NavItem to="/" icon={<Home className="h-6 w-6" />} text="Home" />
          <NavItem to="/seductress" icon={<Heart className="h-6 w-6" />} text="Seductress" />
          <NavItem to="/social-connections" icon={<Users className="h-6 w-6" />} text="Social" />
          <NavItem to="/world-perception" icon={<Eye className="h-6 w-6" />} text="World" />
          <NavItem to="/incarnations" icon={<Repeat className="h-6 w-6" />} text="Incarnations" />
        </ul>
      </nav>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center mb-12 text-[#FFC0CB]">Path of the Seductress</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#2E2C2F] p-6 rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold mb-4 text-[#B76E79]">Mistress of Desire</h2>
            <p>The Seductress wields desire as her ultimate weapon, bending hearts and minds to her will with a mere glance. Her power lies in the art of attraction, manipulation, and the intricate dance of emotions.</p>
          </div>
          <div className="bg-[#2E2C2F] p-6 rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold mb-4 text-[#B76E79]">Emotional Alchemy</h2>
            <p>Through subtle gestures and carefully chosen words, the Seductress transforms the emotional landscape of those around her. She is a master of creating and manipulating connections, weaving webs of devotion and obsession.</p>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold mb-8 text-center text-[#FFC0CB]">The Siren's Seven Chakras</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chakras.map((chakra) => (
            <div key={chakra.name} className="bg-[#2E2C2F] p-6 rounded-lg shadow-xl">
              <div className={`w-12 h-12 ${chakra.color} rounded-full mb-4`}></div>
              <h3 className="text-xl font-semibold mb-2 text-[#FFC0CB]">{chakra.name}</h3>
              <p className="text-[#B76E79]">{chakra.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ to, icon, text }) => (
  <li>
    <Link to={to} className="text-[#FFC0CB] hover:text-[#B76E79] transition duration-300 flex items-center">
      {icon}
      <span className="ml-2">{text}</span>
    </Link>
  </li>
);

export default Seductress;