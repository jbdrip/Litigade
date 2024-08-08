import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const testimonials = [
  {
    description: "This is an amazing product! It has changed my life for the better.",
    name: "John Doe",
    job: "Software Engineer",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    description: "I can't believe how much easier my job has become thanks to this.",
    name: "Jane Smith",
    job: "Project Manager",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    description: "A wonderful experience from start to finish. Highly recommended!",
    name: "Alice Johnson",
    job: "Designer",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Customer Testimonials</h2>
          <p className="mt-4 text-lg text-gray-500">
            Hear what our satisfied customers have to say about our product.
          </p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {Array(4).fill(<FaStar className="text-yellow-400" />)}
                <FaRegStar className="text-yellow-400" />
              </div>
              <p className="mb-4 text-gray-700">{testimonial.description}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.job}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
