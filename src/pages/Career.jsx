import React from 'react';

const Career = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <header className="bg-purple-600 text-white p-6">
          <h1 className="text-3xl font-bold">John Doe</h1>
          <p className="mt-2">Web Developer & Designer</p>
        </header>
        
        <main className="p-6">
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">Professional Summary</h2>
            <p>Experienced web developer with a strong background in front-end technologies and a passion for creating intuitive, user-friendly interfaces.</p>
          </section>
          
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">Work Experience</h2>
            <div className="mb-4">
              <h3 className="text-xl font-medium">Senior Web Developer - Tech Solutions Inc.</h3>
              <p className="text-gray-600">January 2018 - Present</p>
              <ul className="list-disc list-inside mt-2">
                <li>Lead a team of 5 developers in creating responsive web applications</li>
                <li>Implemented new front-end architecture, improving load times by 40%</li>
                <li>Mentored junior developers and conducted code reviews</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium">Web Developer - Creative Designs Co.</h3>
              <p className="text-gray-600">June 2015 - December 2017</p>
              <ul className="list-disc list-inside mt-2">
                <li>Developed and maintained client websites using HTML, CSS, and JavaScript</li>
                <li>Collaborated with designers to implement pixel-perfect layouts</li>
                <li>Optimized websites for maximum speed and scalability</li>
              </ul>
            </div>
          </section>
          
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">Education</h2>
            <div>
              <h3 className="text-xl font-medium">Bachelor of Science in Computer Science</h3>
              <p className="text-gray-600">University of Technology, Graduated 2015</p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-3">Skills</h2>
            <ul className="list-disc list-inside">
              <li>HTML5, CSS3, JavaScript (ES6+)</li>
              <li>React, Vue.js, Angular</li>
              <li>Node.js, Express</li>
              <li>Git, Webpack, Babel</li>
              <li>Responsive Web Design</li>
              <li>UI/UX Design Principles</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Career;