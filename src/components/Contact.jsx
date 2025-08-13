const ContactForm = () => (
  <section className="bg-blue-50 py-16 px-6 text-center">
    <h2 className="text-3xl font-bold mb-12 text-gray-800">Connect With Us</h2>
    
    <form className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-md text-left space-y-5">
      <div>
        <label className="block mb-1 text-sm text-gray-600">Name</label>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm text-gray-600">Email</label>
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm text-gray-600">Subject</label>
        <input
          type="text"
          placeholder="Subject"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm text-gray-600">Message</label>
        <textarea
          placeholder="Your Message"
          className="w-full px-4 py-2 border border-gray-300 rounded-md h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
      >
        Submit
      </button>
    </form>
  </section>
);

export default ContactForm;
