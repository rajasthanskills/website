import React from 'react';

const JobTypes = () => (
  <section className="py-16 bg-white text-center ">
    <h2 className="text-3xl font-bold mb-12 text-gray-800">Job Types We Work On</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 max-w-6xl mx-auto">
      
      {/* White Collar Card */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300">
        <img
          src="whitecol.jpg" // Replace with actual image path
          alt="White Collar Jobs"
          className="w-full h-60 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-2 text-gray-800">White Collar Jobs</h3>
          <p className="text-gray-600">
            Tech, Accountant, Receptionist, Sales Executive, Data Entry...
          </p>
        </div>
      </div>

      {/* Blue Collar Card */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300">
        <img
          src="bluecol.jpg" // Replace with actual image path
          alt="Blue Collar Jobs"
          className="w-full h-60 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-2 text-gray-800">Blue Collar Jobs</h3>
          <p className="text-gray-600">
            Electrician, Delivery Executive, Housekeeping, Plumber, Driver...
          </p>
        </div>
      </div>

    </div>
  </section>
);

export default JobTypes;
