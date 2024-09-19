import React from 'react';

const UniquePerspective = () => {
  const chakras = [
    { name: 'Root', color: 'bg-red-500', description: 'Grounding and stability' },
    { name: 'Sacral', color: 'bg-orange-500', description: 'Creativity and emotion' },
    { name: 'Solar Plexus', color: 'bg-yellow-500', description: 'Personal power and confidence' },
    { name: 'Heart', color: 'bg-green-500', description: 'Love and compassion' },
    { name: 'Throat', color: 'bg-blue-500', description: 'Communication and self-expression' },
    { name: 'Third Eye', color: 'bg-indigo-500', description: 'Intuition and insight' },
    { name: 'Crown', color: 'bg-purple-500', description: 'Spiritual connection and enlightenment' },
  ];

  const auraLayers = [
    { name: 'Physical', color: 'bg-red-200' },
    { name: 'Astral', color: 'bg-blue-200' },
    { name: 'Mental', color: 'bg-yellow-200' },
    { name: 'Spiritual', color: 'bg-purple-200' },
  ];

  const perspectives = [
    { title: 'Holistic Wellness', description: 'Embracing the interconnectedness of mind, body, and spirit for overall well-being.' },
    { title: 'Conscious Living', description: 'Making mindful choices that align with personal values and contribute to a better world.' },
    { title: 'Spiritual Growth', description: 'Exploring inner dimensions and expanding consciousness through various practices.' },
    { title: 'Quantum Thinking', description: 'Applying principles of quantum physics to understand reality and manifest intentions.' },
    { title: 'Sacred Geometry', description: 'Recognizing patterns and shapes that form the building blocks of creation.' },
    { title: 'Energy Healing', description: 'Utilizing subtle energies to promote balance, harmony, and healing in the body and mind.' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Unique Perspective</h1>
        
        {/* Hero Section with Human Body and Chakras */}
        <div className="relative h-[600px] bg-gradient-to-b from-indigo-900 to-purple-900 rounded-lg overflow-hidden mb-16">
          <div className="absolute inset-0 flex items-center justify-center">
            {auraLayers.map((layer, index) => (
              <div
                key={layer.name}
                className={`absolute rounded-full ${layer.color} opacity-50`}
                style={{
                  width: `${100 - index * 15}%`,
                  height: `${100 - index * 15}%`,
                }}
              ></div>
            ))}
            <div className="relative w-48 h-[500px] bg-gray-300 rounded-full">
              {chakras.map((chakra, index) => (
                <div
                  key={chakra.name}
                  className={`absolute w-8 h-8 ${chakra.color} rounded-full left-1/2 transform -translate-x-1/2`}
                  style={{ bottom: `${index * 14 + 5}%` }}
                >
                  <span className="absolute left-full ml-2 text-white text-sm">{chakra.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Perspectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {perspectives.map((perspective, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-3">{perspective.title}</h2>
              <p className="text-gray-600">{perspective.description}</p>
            </div>
          ))}
        </div>
        
        {/* Chakras Description */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold mb-6">The Seven Chakras</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {chakras.map((chakra) => (
              <div key={chakra.name} className="flex items-center space-x-4">
                <div className={`w-8 h-8 ${chakra.color} rounded-full`}></div>
                <div>
                  <h3 className="text-lg font-semibold">{chakra.name} Chakra</h3>
                  <p className="text-gray-600">{chakra.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniquePerspective;