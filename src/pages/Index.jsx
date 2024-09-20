import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const Index = () => {
  const characters = [
    { name: 'Necromancer', path: '/necromancer', color: 'from-[#0A0A0A] to-[#4B0082]' },
    { name: 'Seductress', path: '/seductress', color: 'from-[#800020] to-[#35063E]' },
    { name: 'Seducer', path: '/seducer', color: 'from-[#5A2D2E] to-[#191970]' },
    { name: 'Protector', path: '/protector', color: 'from-[#4682B4] to-[#525252]' },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[#1C1C1C] opacity-50"></div>
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animation: `twinkle ${Math.random() * 5 + 3}s infinite`,
            }}
          ></div>
        ))}
      </div>
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
        {[...Array(64)].map((_, i) => (
          <div
            key={i}
            className={`${
              (Math.floor(i / 8) + i) % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'
            } opacity-20`}
          ></div>
        ))}
      </div>
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-purple-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3/4 h-3/4 bg-gradient-radial from-white via-purple-300 to-black rounded-full opacity-30 animate-pulse"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1/2 h-1/2 border-4 border-purple-500 rounded-full shadow-lg shadow-purple-500/50"></div>
        </div>
        {/* Refined necro-themed chessboard border */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="h-4 w-full flex">
            {[...Array(32)].map((_, i) => (
              <div key={i} className={`flex-1 h-full ${i % 2 === 0 ? 'bg-white/30' : 'bg-black/30'}`}></div>
            ))}
          </div>
          <div className="h-4 w-full flex absolute bottom-0">
            {[...Array(32)].map((_, i) => (
              <div key={i} className={`flex-1 h-full ${i % 2 === 0 ? 'bg-purple-800/30' : 'bg-yellow-700/30'}`}></div>
            ))}
          </div>
          <div className="w-4 h-full absolute left-0 flex flex-col">
            {[...Array(32)].map((_, i) => (
              <div key={i} className={`flex-1 w-full ${i % 2 === 0 ? 'bg-white/30' : 'bg-purple-800/30'}`}></div>
            ))}
          </div>
          <div className="w-4 h-full absolute right-0 flex flex-col">
            {[...Array(32)].map((_, i) => (
              <div key={i} className={`flex-1 w-full ${i % 2 === 0 ? 'bg-black/30' : 'bg-yellow-700/30'}`}></div>
            ))}
          </div>
        </div>
        <div className="relative z-10 text-center p-8 bg-black/50 backdrop-blur-md rounded-xl shadow-2xl">
          <h1 className="text-6xl font-bold text-white mb-4 text-shadow">Enter the Void</h1>
          <p className="text-2xl text-purple-300">Where Magic and Mystery Collide</p>
        </div>
      </div>

      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3/4 h-3/4 bg-gradient-to-r from-gray-900 via-white to-gray-900 rounded-full opacity-20 animate-pulse"></div>
        </div>
        <div className="absolute inset-0 opacity-50">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animation: `twinkle ${Math.random() * 5 + 3}s infinite`,
              }}
            ></div>
          ))}
        </div>
        <div className="relative z-10 text-center p-8 bg-black/50 backdrop-blur-md rounded-xl shadow-2xl">
          <h1 className="text-6xl font-bold text-white mb-4 text-shadow">Welcome to My Realm</h1>
          <p className="text-2xl text-gray-300">Discover the Magic Within</p>
        </div>
      </div>
      <div className="relative z-10 container mx-auto px-4 py-16">
        <h1 className="text-6xl font-bold text-white mb-8 text-center">Choose Your Path</h1>
        
        <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
          {characters.map((character) => (
            <Link
              key={character.name}
              to={character.path}
              className={`block p-8 rounded-lg shadow-2xl transition duration-300 transform hover:-translate-y-1 hover:shadow-3xl bg-gradient-to-br ${character.color}`}
            >
              <h2 className="text-3xl font-bold text-white mb-2">{character.name}</h2>
              <p className="text-gray-300">Explore the path of the {character.name.toLowerCase()}</p>
            </Link>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link
            to="/world-perception"
            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Sparkles className="inline-block mr-2 h-5 w-5" />
            Explore World Perception
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
