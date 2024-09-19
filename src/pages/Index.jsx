import React from 'react';
import { Sparkles, Users, Briefcase, Eye } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Void portal hero section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-blue-900 to-black animate-pulse"></div>
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
          <p className="text-2xl text-blue-200">Discover the Magic Within</p>
        </div>
      </div>

      {/* Content */}
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
          />
          <FeatureCard
            icon={<Briefcase className="h-12 w-12 text-green-400" />}
            title="Career Journey"
            description="Navigating the professional world with passion and determination."
          />
          <FeatureCard
            icon={<Eye className="h-12 w-12 text-red-400" />}
            title="Unique Perspective"
            description="Seeing the world through a lens of curiosity and wonder."
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
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300">
      <div className="flex items-center mb-4">
        {icon}
        <h2 className="text-2xl font-semibold text-white ml-4">{title}</h2>
      </div>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default Index;
