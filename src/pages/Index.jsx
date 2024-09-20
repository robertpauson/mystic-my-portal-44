import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Users, Briefcase, Eye } from 'lucide-react';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-bone-white relative overflow-hidden">
      <Navigation />
      {/* Hero section with elliptic gradient and necro border */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-dark-purple via-black to-gray-900"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3/4 h-3/4 bg-gradient-radial from-sickly-green via-dark-purple to-black rounded-full opacity-30 animate-pulse"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1/2 h-1/2 border-2 border-crimson rounded-full shadow-lg shadow-crimson/50"></div>
        </div>
        {/* Refined necro-themed chessboard border */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="h-2 w-full flex">
            {[...Array(32)].map((_, i) => (
              <div key={i} className={`flex-1 h-full ${i % 2 === 0 ? 'bg-bone-white/20' : 'bg-dark-purple/20'}`}></div>
            ))}
          </div>
          <div className="h-2 w-full flex absolute bottom-0">
            {[...Array(32)].map((_, i) => (
              <div key={i} className={`flex-1 h-full ${i % 2 === 0 ? 'bg-sickly-green/20' : 'bg-crimson/20'}`}></div>
            ))}
          </div>
          <div className="w-2 h-full absolute left-0 flex flex-col">
            {[...Array(32)].map((_, i) => (
              <div key={i} className={`flex-1 w-full ${i % 2 === 0 ? 'bg-bone-white/20' : 'bg-dark-purple/20'}`}></div>
            ))}
          </div>
          <div className="w-2 h-full absolute right-0 flex flex-col">
            {[...Array(32)].map((_, i) => (
              <div key={i} className={`flex-1 w-full ${i % 2 === 0 ? 'bg-sickly-green/20' : 'bg-crimson/20'}`}></div>
            ))}
          </div>
        </div>
        <div className="relative z-10 text-center p-8 bg-black/50 backdrop-blur-md rounded-xl shadow-2xl">
          <h1 className="text-6xl font-bold text-bone-white mb-4 text-shadow-necro">Enter the Void</h1>
          <p className="text-2xl text-sickly-green">Where Magic and Mystery Collide</p>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-bone-white mb-8 text-center text-shadow-necro">Explore My World</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureCard
            icon={<Sparkles className="h-12 w-12 text-sickly-green" />}
            title="Magic & Mystery"
            description="Exploring the unknown and embracing the magical aspects of life."
          />
          <FeatureCard
            icon={<Users className="h-12 w-12 text-crimson" />}
            title="Social Connections"
            description="Building meaningful relationships and fostering a strong community."
            link="/social-connections"
          />
          <FeatureCard
            icon={<Briefcase className="h-12 w-12 text-dark-purple" />}
            title="Career Journey"
            description="Navigating the professional world with passion and determination."
            link="/career"
          />
          <FeatureCard
            icon={<Eye className="h-12 w-12 text-bone-white" />}
            title="Unique Perspective"
            description="Seeing the world through a lens of curiosity and wonder."
            link="/unique-perspective"
          />
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl text-bone-white mb-4 text-shadow-necro">
            Dive into my world of endless possibilities and discover the magic within.
          </p>
          <button className="bg-dark-purple hover:bg-crimson text-bone-white font-bold py-3 px-6 rounded-full transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, link }) => {
  return (
    <Link to={link || "#"} className="block">
      <div className="bg-gray-900/50 backdrop-blur-lg rounded-lg p-8 shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
        <div className="flex items-center mb-4">
          {icon}
          <h2 className="text-2xl font-semibold text-bone-white ml-4 text-shadow-necro">{title}</h2>
        </div>
        <p className="text-sickly-green">{description}</p>
      </div>
    </Link>
  );
};

export default Index;
