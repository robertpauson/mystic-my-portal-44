import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Users, Briefcase, Eye } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* New hero section with elliptic gradient and necro border */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-purple-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3/4 h-3/4 bg-gradient-radial from-white via-purple-300 to-black rounded-full opacity-30 animate-pulse"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1/2 h-1/2 border-8 border-purple-500 rounded-full"></div>
        </div>
        {/* Necro-themed chessboard border */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="h-8 w-full flex">
            {[...Array(16)].map((_, i) => (
              <div key={i} className={`flex-1 h-full ${i % 2 === 0 ? 'bg-white' : 'bg-black'}`}></div>
            ))}
          </div>
          <div className="h-8 w-full flex absolute bottom-0">
            {[...Array(16)].map((_, i) => (
              <div key={i} className={`flex-1 h-full ${i % 2 === 0 ? 'bg-purple-800' : 'bg-yellow-700'}`}></div>
            ))}
          </div>
          <div className="w-8 h-full absolute left-0 flex flex-col">
            {[...Array(16)].map((_, i) => (
              <div key={i} className={`flex-1 w-full ${i % 2 === 0 ? 'bg-white' : 'bg-purple-800'}`}></div>
            ))}
          </div>
          <div className="w-8 h-full absolute right-0 flex flex-col">
            {[...Array(16)].map((_, i) => (
              <div key={i} className={`flex-1 w-full ${i % 2 === 0 ? 'bg-black' : 'bg-yellow-700'}`}></div>
            ))}
          </div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold text-white mb-4">Enter the Void</h1>
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
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold text-white mb-4">Welcome to My Realm</h1>
          <p className="text-2xl text-gray-300">Discover the Magic Within</p>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">Explore My World</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureCard
            icon={<Sparkles className="h-12 w-12 text-purple-400" />}
            title="Magic & Mystery"
            description="Exploring the unknown and embracing the magical aspects of life."
          />
          <FeatureCard
            icon={<Users className="h-12 w-12 text-blue-400" />}
            title="Social Connections"
            description="Building meaningful relationships and fostering a strong community."
            link="/social-connections"
          />
          <FeatureCard
            icon={<Briefcase className="h-12 w-12 text-green-400" />}
            title="Career Journey"
            description="Navigating the professional world with passion and determination."
            link="/career"
          />
          <FeatureCard
            icon={<Eye className="h-12 w-12 text-red-400" />}
            title="Unique Perspective"
            description="Seeing the world through a lens of curiosity and wonder."
            link="/unique-perspective"
          />
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl text-white mb-4">
            Dive into my world of endless possibilities and discover the magic within.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            Explore More
          </button>
        </div>
      </div>

      <div className="absolute inset-0 z-0 opacity-10">
        <div className="grid grid-cols-8 h-full">
          {[...Array(64)].map((_, i) => (
            <div
              key={i}
              className={`${
                (Math.floor(i / 8) + i) % 2 === 0 ? 'bg-white' : 'bg-purple-900'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, link }) => {
  return (
    <Link to={link || "#"} className="block">
      <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300">
        <div className="flex items-center mb-4">
          {icon}
          <h2 className="text-2xl font-semibold text-white ml-4">{title}</h2>
        </div>
        <p className="text-gray-300">{description}</p>
      </div>
    </Link>
  );
};

export default Index;
