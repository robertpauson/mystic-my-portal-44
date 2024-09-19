import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Home, Users, Eye } from 'lucide-react';

const Career = () => {
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

      <div className="max-w-4xl mx-auto bg-gray-900 shadow-xl rounded-lg overflow-hidden mt-8">
        <header className="bg-crimson text-bone-white p-6">
          <h1 className="text-3xl font-bold">Necromancer's Career Path</h1>
          <p className="mt-2">Master of the Dark Arts & Forbidden Knowledge</p>
        </header>
        
        <main className="p-6">
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3 text-sickly-green">Professional Summary</h2>
            <p>Experienced necromancer with a strong background in dark rituals and a passion for manipulating the boundaries between life and death.</p>
          </section>
          
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3 text-sickly-green">Work Experience</h2>
            <div className="mb-4">
              <h3 className="text-xl font-medium text-crimson">Senior Necromancer - Dark Realms Inc.</h3>
              <p className="text-gray-400">January 1666 - Present</p>
              <ul className="list-disc list-inside mt-2 text-bone-white">
                <li>Lead a team of 5 apprentices in raising undead armies</li>
                <li>Implemented new soul-binding techniques, improving resurrection success rates by 40%</li>
                <li>Mentored junior necromancers and conducted forbidden rituals</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium text-crimson">Apprentice Necromancer - Shadows & Spirits Co.</h3>
              <p className="text-gray-400">June 1650 - December 1665</p>
              <ul className="list-disc list-inside mt-2 text-bone-white">
                <li>Assisted in maintaining the company's legion of undead servants</li>
                <li>Collaborated with warlocks to create more potent dark magic spells</li>
                <li>Optimized summoning circles for maximum spirit manifestation</li>
              </ul>
            </div>
          </section>
          
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3 text-sickly-green">Education</h2>
            <div>
              <h3 className="text-xl font-medium text-crimson">Master of Dark Arts</h3>
              <p className="text-gray-400">Necropolis University, Graduated 1650</p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-sickly-green">Skills</h2>
            <ul className="list-disc list-inside text-bone-white">
              <li>Resurrection Rituals</li>
              <li>Soul Binding</li>
              <li>Necromantic Enchantments</li>
              <li>Forbidden Knowledge Acquisition</li>
              <li>Undead Army Management</li>
              <li>Dark Energy Manipulation</li>
            </ul>
          </section>
        </main>
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

export default Career;
