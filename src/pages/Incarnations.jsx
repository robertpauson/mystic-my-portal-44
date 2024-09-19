import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Briefcase, Users, Eye, Repeat } from 'lucide-react';

const Incarnations = () => {
  const incarnations = [
    {
      title: "Dark Elf",
      image: "https://placekitten.com/300/200",
      education: "Studied at the Shadowmere Academy of Arcane Arts",
      personalLife: "Lived in the underground city of Nighthold, mastering shadow magic",
    },
    {
      title: "Vampire",
      image: "https://placekitten.com/301/200",
      education: "Mentored by Count Dracula himself",
      personalLife: "Spent centuries perfecting the art of blood magic in Transylvania",
    },
    {
      title: "Demon",
      image: "https://placekitten.com/302/200",
      education: "Graduated from the Infernal University of Demontown",
      personalLife: "Ruled over a district in Demontown, specializing in soul contracts",
    },
    {
      title: "Spy",
      image: "https://placekitten.com/303/200",
      education: "Trained at the Clandestine Academy of Espionage",
      personalLife: "Completed numerous high-risk missions across dimensions",
    },
    {
      title: "Bird",
      image: "https://placekitten.com/304/200",
      education: "Self-taught in the ways of aerial magic",
      personalLife: "Soared through the skies, gathering secrets from the winds",
    },
    {
      title: "Necromancer",
      image: "https://placekitten.com/305/200",
      education: "Apprenticed under the legendary Lich King",
      personalLife: "Devoted existence to unraveling the mysteries of life and death",
    },
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
        <h1 className="text-4xl font-bold text-center mb-12 text-crimson">Past Incarnations</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {incarnations.map((incarnation, index) => (
            <div key={index} className="bg-gray-900 rounded-lg shadow-md overflow-hidden border border-sickly-green">
              <img src={incarnation.image} alt={incarnation.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-2xl font-semibold text-bone-white mb-2">{incarnation.title}</h2>
                <h3 className="text-lg font-semibold text-crimson mb-1">Education</h3>
                <p className="text-gray-400 mb-2">{incarnation.education}</p>
                <h3 className="text-lg font-semibold text-crimson mb-1">Personal Life</h3>
                <p className="text-gray-400">{incarnation.personalLife}</p>
              </div>
            </div>
          ))}
        </div>
        
        <section className="mt-16 bg-gray-900 rounded-lg shadow-md p-8 border border-dark-purple">
          <h2 className="text-3xl font-bold mb-6 text-sickly-green">Demon Incarnation: Life in Demontown</h2>
          <p className="text-gray-400 mb-4">
            During my time as a demon in Demontown, I experienced a world bathed in rusty colors, where the sky was a perpetual swirl of dark yellow and deep orange. The buildings, constructed from blackened iron and tarnished bronze, stretched impossibly high, their spires piercing the smoky atmosphere.
          </p>
          <p className="text-gray-400 mb-4">
            The streets were paved with obsidian, reflecting the dim light of floating fire orbs that served as streetlamps. The air was thick with the scent of brimstone and the constant hum of dark energy. In this incarnation, I honed my skills in the art of soul manipulation and contract binding, becoming a respected (and feared) member of Demontown's elite.
          </p>
          <p className="text-gray-400">
            My personal quarters were adorned with tapestries woven from shadowthread, depicting the great wars between celestial and infernal beings. Each day brought new challenges and opportunities to expand my influence in the intricate political landscape of the demon realm.
          </p>
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

export default Incarnations;