import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Briefcase, Users, Eye, Repeat } from 'lucide-react';

const SocialConnections = () => {
  const connections = [
    { id: 1, name: 'Morticia Shadowweaver', image: 'https://placekitten.com/200/200' },
    { id: 2, name: 'Zephyr Bonecaller', image: 'https://placekitten.com/201/201' },
    { id: 3, name: 'Lilith Soulreaper', image: 'https://placekitten.com/202/202' },
    { id: 4, name: 'Thanatos Grimoire', image: 'https://placekitten.com/203/203' },
    { id: 5, name: 'Raven Cryptkeeper', image: 'https://placekitten.com/204/204' },
    { id: 6, name: 'Azrael Tombwhisper', image: 'https://placekitten.com/205/205' },
  ];

  return (
    <div className="min-h-screen bg-black text-bone-white">
      <nav className="bg-dark-purple p-4">
        <ul className="flex justify-center space-x-6">
          <NavItem to="/" icon={<Home className="h-6 w-6" />} text="Home" />
          <NavItem to="/career" icon={<Briefcase className="h-6 w-6" />} text="Career" />
          <NavItem to="/social-connections" icon={<Users className="h-6 w-6" />} text="Social" />
          <NavItem to="/unique-perspective" icon={<Eye className="h-6 w-6" />} text="Perspective" />
          <NavItem to="/incarnations" icon={<Repeat className="h-6 w-6" />} text="Incarnations" />
        </ul>
      </nav>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-crimson">Necromantic Network</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {connections.map((person) => (
            <div key={person.id} className="bg-gray-900 rounded-lg shadow-md overflow-hidden border border-sickly-green">
              <img src={person.image} alt={person.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-bone-white">{person.name}</h2>
              </div>
            </div>
          ))}
        </div>
        
        <section className="mt-16 bg-gray-900 rounded-lg shadow-md p-8 border border-crimson">
          <h2 className="text-3xl font-bold mb-6 text-sickly-green">Unholy Gatherings</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="text-xl font-semibold text-crimson">Annual Necromancers' Conclave</h3>
              <p className="text-gray-400">Connected with fellow practitioners of the dark arts and discussed latest trends in necromancy.</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-crimson">Midnight Séance Soirée</h3>
              <p className="text-gray-400">Attended spirit summoning workshops and networked with mediums from the astral plane.</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-crimson">Dark Moon Ritual Circle</h3>
              <p className="text-gray-400">Participated in forbidden rites and exchanged arcane knowledge with fellow dark magic practitioners.</p>
            </li>
          </ul>
        </section>
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

export default SocialConnections;
