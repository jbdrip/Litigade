import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const testimonials = [
  {
    description: "Slate helps you see how many more days you need to work to reach your financial goal.",
    name: "Regina Miles",
    job: "Designer",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    description: "Slate helps you see how many more days you need to work to reach your financial goal.",
    name: "Regina Miles",
    job: "Designer",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    description: "Slate helps you see how many more days you need to work to reach your financial goal.",
    name: "Regina Miles",
    job: "Designer",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="pb-20 pt-9 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-text-color sm:text-4xl">What Clients Say</h2>
          <p className="mt-4 text-md text-second-text-color px-12 md:px-64">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 md:px-0">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg border">
              <div className="flex items-center mb-4">
                {Array(4).fill(<FaStar className="text-yellow-400" />)}
                <FaRegStar className="text-yellow-400" />
              </div>
              <p className="pb-6 pt-2 text-sm text-second-text-color font-semibold pr-3">{testimonial.description}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-sm font-bold text-yellow-500">{testimonial.name}</h3>
                  <p className="text-sm font-bold text-text-color">{testimonial.job}</p>
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
