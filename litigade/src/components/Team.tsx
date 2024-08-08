import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const teamMembers = [
  {
    name: "John Doe",
    role: "Chief Executive Officer",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Jane Smith",
    role: "Chief Operating Officer",
    photo: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Alice Johnson",
    role: "Chief Financial Officer",
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

const Team: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Meet Our Team</h2>
          <p className="mt-4 text-lg text-gray-500">
            Our dedicated team of professionals.
          </p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="text-center mt-4">
                <h3 className="text-xl font-medium text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
                <div className="flex justify-center mt-4 space-x-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <FaInstagram />
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
