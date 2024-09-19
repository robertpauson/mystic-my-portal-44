import React from 'react';

const SocialConnections = () => {
  const people = [
    { id: 1, name: 'Alice Johnson', image: 'https://placekitten.com/200/200' },
    { id: 2, name: 'Bob Smith', image: 'https://placekitten.com/201/201' },
    { id: 3, name: 'Carol Williams', image: 'https://placekitten.com/202/202' },
    { id: 4, name: 'David Brown', image: 'https://placekitten.com/203/203' },
    { id: 5, name: 'Eva Davis', image: 'https://placekitten.com/204/204' },
    { id: 6, name: 'Frank Miller', image: 'https://placekitten.com/205/205' },
    { id: 7, name: 'Grace Wilson', image: 'https://placekitten.com/206/206' },
    { id: 8, name: 'Henry Taylor', image: 'https://placekitten.com/207/207' },
    { id: 9, name: 'Ivy Anderson', image: 'https://placekitten.com/208/208' },
    { id: 10, name: 'Jack Thomas', image: 'https://placekitten.com/209/209' },
    { id: 11, name: 'Kate Martin', image: 'https://placekitten.com/210/210' },
    { id: 12, name: 'Liam White', image: 'https://placekitten.com/211/211' },
    { id: 13, name: 'Mia Harris', image: 'https://placekitten.com/212/212' },
    { id: 14, name: 'Noah Clark', image: 'https://placekitten.com/213/213' },
    { id: 15, name: 'Olivia Lewis', image: 'https://placekitten.com/214/214' },
    { id: 16, name: 'Peter Hall', image: 'https://placekitten.com/215/215' },
    { id: 17, name: 'Quinn Young', image: 'https://placekitten.com/216/216' },
    { id: 18, name: 'Rachel King', image: 'https://placekitten.com/217/217' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">People I've Met</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {people.map((person) => (
            <div key={person.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={person.image} alt={person.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{person.name}</h2>
              </div>
            </div>
          ))}
        </div>
        
        <section className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold mb-6">Networking Events</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="text-xl font-semibold">Tech Meetup 2023</h3>
              <p className="text-gray-600">Connected with fellow developers and discussed latest trends in web development.</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">Design Conference</h3>
              <p className="text-gray-600">Attended workshops on UI/UX design and met creative professionals from various industries.</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">Startup Pitch Night</h3>
              <p className="text-gray-600">Networked with entrepreneurs and investors, gaining insights into the startup ecosystem.</p>
            </li>
          </ul>
        </section>
        
        <section className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold mb-6">Community Involvement</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="text-xl font-semibold">Code for Good Hackathon</h3>
              <p className="text-gray-600">Participated in a 48-hour coding marathon to develop solutions for local non-profits.</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">Mentorship Program</h3>
              <p className="text-gray-600">Volunteered as a mentor for aspiring developers, guiding them through their coding journey.</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">Tech Talks at Local Schools</h3>
              <p className="text-gray-600">Gave presentations to high school students about careers in technology and the importance of STEM education.</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default SocialConnections;