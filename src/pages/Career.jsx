import React from 'react';
import Navigation from '../components/Navigation';

const Career = () => {
  return (
    <div className="min-h-screen bg-black text-bone-white">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-shadow-necro">Career Journey</h1>
        <div className="bg-gray-900/50 backdrop-blur-lg rounded-lg p-8 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-crimson">Experience</h2>
          <div className="mb-6">
            <h3 className="text-xl font-medium text-sickly-green">Necromancer - Dark Arts Inc.</h3>
            <p className="text-gray-400">2018 - Present</p>
            <ul className="list-disc list-inside mt-2 text-bone-white">
              <li>Mastered the art of raising the dead</li>
              <li>Developed new rituals for communicating with spirits</li>
              <li>Managed a team of apprentice necromancers</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-medium text-sickly-green">Apprentice Sorcerer - Mystic Academy</h3>
            <p className="text-gray-400">2015 - 2018</p>
            <ul className="list-disc list-inside mt-2 text-bone-white">
              <li>Studied various forms of arcane magic</li>
              <li>Assisted in potion brewing and spell creation</li>
              <li>Conducted research on ancient magical artifacts</li>
            </ul>
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-crimson">Skills</h2>
          <ul className="list-disc list-inside text-bone-white">
            <li>Necromancy</li>
            <li>Spirit Summoning</li>
            <li>Dark Rituals</li>
            <li>Potion Brewing</li>
            <li>Ancient Runes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Career;
