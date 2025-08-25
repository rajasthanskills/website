const testimonials = [
  {
    name: "Pawan Chauhan",
    feedback: "Provides great opportunities in private sector jobs. Professional team that guides you towards your dream job",
    image: "/avatars/person1.jpg",
  },
  {
    name: "Ravi Sharma",
    feedback: "Professional service and good communication.",
    image: "/avatars/person2.jpg",
  },
  {
    name: "Monika Sharma",
    feedback:
      "Helped us find quality candidates in record time! Very reliable, and easy to work with throughout the hiring process.",
    image: "/avatars/person3.jpg",
  },
  {
    name: "Saurabh Singh",
    feedback:
      "Reliable and consistent, highly recommended for both recruitment and staffing.",
    image: "/avatars/person4.jpg",
  },
];

const Testimonials = () => (
  <section className="py-16 bg-white text-center">
    <h2 className="text-3xl font-bold mb-12 text-gray-800">What Our Clients Say</h2>

    <div className="overflow-x-auto px-6 pb-4 hide-scrollbar">
      <div className="inline-flex gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-2xl shadow-md p-6 w-72 text-left break-words"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-500">Client</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              "{testimonial.feedback}"
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
