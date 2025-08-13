import React from 'react';

const Services = () => (
  <section className="bg-gray-100 py-16 text-center">
    <h2 className="text-3xl font-bold mb-12 text-gray-800">Services We Provide</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 max-w-6xl mx-auto">
      
      {/* Recruitment Service Card */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300">
        <img
          src="recruit.jpg" // Replace with actual image path
          alt="Recruitment"
          className="w-full h-60 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-2 text-gray-800">Recruitment</h3>
          <p className="text-gray-600">
            Helping companies find the best candidates for long-term growth.
          </p>
        </div>
      </div>

      {/* Staffing Service Card */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300">
        <img
          src="training.avif" // Replace with actual image path
          alt="Staffing"
          className="w-full h-60 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-2 text-gray-800">Staffing</h3>
          <p className="text-gray-600">
            Providing flexible and scalable staffing solutions tailored to your needs.
          </p>
        </div>
      </div>

    </div>
  </section>
);

export default Services;
