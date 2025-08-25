const ContactForm = () => (
  <section className="bg-gray-50 py-20 px-6 text-center">
    <h2 className="text-4xl font-bold mb-10 text-gray-900 tracking-tight">
      Connect With Us
    </h2>
    
    <form 
      action="https://formsubmit.co/shitanshujhassv@gmail.com" 
      method="POST"
      className="max-w-xl mx-auto bg-white p-10 shadow-lg text-left space-y-6 border border-gray-200"
    >
      {/* Hidden Inputs for FormSubmit */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_subject" value="New Contact Form Submission!" />

      {/* Name */}
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900 transition"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900 transition"
        />
      </div>

      {/* Phone Number */}
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Phone</label>
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          required
          className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900 transition"
        />
      </div>

      {/* Subject */}
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Subject</label>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900 transition"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Message</label>
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full px-4 py-3 border border-gray-300 h-32 resize-none focus:outline-none focus:border-gray-900 transition"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 bg-gray-900 text-white font-medium text-lg hover:bg-gray-700 transition"
      >
        Send Message
      </button>
    </form>
  </section>
);

export default ContactForm;
