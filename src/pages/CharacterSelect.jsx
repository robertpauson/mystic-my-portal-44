import React from 'react';
import { Link } from 'react-router-dom';

const CharacterSelect = () => {
  const characters = [
    { name: 'Necromancer', path: '/necromancer', bgColor: 'bg-[#0A0A0A]', textColor: 'text-[#E8E6E3]' },
    { name: 'Seductress', path: '/seductress', bgColor: 'bg-[#800020]', textColor: 'text-[#FFC0CB]' },
    { name: 'Seducer', path: '/seducer', bgColor: 'bg-[#5A2D2E]', textColor: 'text-[#E5E4E2]' },
    { name: 'Protector', path: '/protector', bgColor: 'bg-[#4682B4]', textColor: 'text-[#FFD700]' },
  ];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="grid grid-cols-2 gap-8">
        {characters.map((character) => (
          <Link
            key={character.name}
            to={character.path}
            className={`${character.bgColor} ${character.textColor} p-12 rounded-lg text-center hover:opacity-80 transition-opacity duration-300`}
          >
            <h2 className="text-3xl font-bold">{character.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CharacterSelect;