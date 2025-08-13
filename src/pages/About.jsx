import React from 'react';

const AboutUs = () => (
  <section className="bg-white text-gray-800">

    {/* Hero Section */}
    <div className="bg-blue-100 py-16 px-6 text-center">
      <h2 className="text-4xl font-bold mb-4">Who We Are</h2>
      <p className="text-lg max-w-3xl mx-auto leading-relaxed">
        We are a passionate team committed to bridging the gap between top talent and leading organizations. 
        With trust, clarity, and consistency, we turn hiring into a seamless and human experience.
      </p>
    </div>

    {/* Mission + Vision Split */}
    <div className="flex flex-col md:flex-row max-w-5xl mx-auto my-16 gap-8 px-6">
      <div className="bg-blue-50 p-6 rounded-2xl shadow-md flex-1">
        <h3 className="text-2xl font-semibold mb-2 text-blue-600">Our Mission</h3>
        <p className="text-gray-700 leading-relaxed">
          To empower businesses and professionals by creating meaningful career opportunities and long-term value
          through integrity, insight, and innovation.
        </p>
      </div>
      <div className="bg-blue-50 p-6 rounded-2xl shadow-md flex-1">
        <h3 className="text-2xl font-semibold mb-2 text-blue-600">Our Vision</h3>
        <p className="text-gray-700 leading-relaxed">
          To become the most trusted partner in workforce solutions, known for our quality placements, people-first approach,
          and lasting impact in the recruitment space.
        </p>
      </div>
    </div>

    {/* Meet the Team */}
    <div className="bg-blue-50 py-16 px-6 text-center">
      <h3 className="text-3xl font-bold mb-10">Meet Our Team</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {[
          { name: "Aarav Mehta", role: "Founder & CEO", img: "/team/aarav.jpg" },
          { name: "Riya Kapoor", role: "Talent Head", img: "/team/riya.jpg" },
          { name: "Siddharth Roy", role: "Operations Lead", img: "/team/sid.jpg" },
        ].map((member, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow text-center">
            <img
              src={member.img}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h4 className="text-xl font-semibold">{member.name}</h4>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
    
  </section>
);

export default AboutUs;
