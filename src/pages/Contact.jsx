import React from 'react';

const Contact = () => (
  <section className="bg-white text-gray-800">
    
    {/* Hero Section */}
    <div className="bg-blue-100 py-16 px-6 text-center">
      <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
      <p className="text-lg max-w-2xl mx-auto leading-relaxed">
        Whether you're a company seeking top talent or a candidate ready for your next move, we’re here to help.
        Reach out and let’s make something great happen.
      </p>
    </div>

    {/* Contact Form & Info Section */}
    <div className="max-w-6xl mx-auto my-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* Contact Form */}
      <form className="bg-blue-50 p-8 rounded-2xl shadow-md space-y-5">
        <h3 className="text-2xl font-semibold text-blue-600 mb-2">Send Us a Message</h3>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full p-3 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 border border-gray-300 rounded h-32"
        ></textarea>
        <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition">
          Submit
        </button>
      </form>

      {/* Contact Details */}
      <div className="bg-blue-50 p-8 rounded-2xl shadow-md text-gray-700 flex flex-col justify-center">
        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Contact Information</h3>
        <p className="mb-4">
          <strong>Email:</strong> shitanshu@rajasthanskills.com
        </p>
        <p className="mb-4">
          <strong>Phone:</strong> +91 9116656324
        </p>
        <p className="mb-4">
          <strong>Office:</strong>  F-45, Near, Apex Cir, Malviya Nagar Industrial Area, Malviya Nagar, Jaipur, Rajasthan 302017
        </p>
        <p className="mt-6 text-sm text-gray-500">
          We aim to respond to all inquiries within 1–2 business days.
        </p>
      </div>
    </div>

  </section>
);

export default Contact;
