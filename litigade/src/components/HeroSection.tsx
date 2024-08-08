// src/components/HeroSection.tsx
import React from 'react';
import Header from './Header';

const HeroSection: React.FC = () => {
  return (
    <section
      className="bg-cover bg-center min-h-screen py-20 relative"
      style={{ backgroundImage: `url('https://s3-alpha-sig.figma.com/img/4719/6499/b7c887b760cd65685a6f0ca9b9efbc72?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PTlRNdSEiKo42j8xQrvgpRs9DaFkjNuaBSq97egprnhpasd5pg6GOnvAs75I4dt3Ic-ioLmbSa6S4~4t3GKjl4UVgRGS0W6EcPclc805zfOh961a-8c-GHlVk-W2l4i9SYQEo-uujFm-aoEGgM2QP5hKwwshwVlmOLYmCtdy~WgU7cDCz9Q9~BDvA5ywEIw94eB00W7pIIrpvScxBuwr-2jmNTZHJRcEXdNogxZNtirRXu6q1USJYQDiMEnW2JVAwSM-tG0EtgjmnLjrkB7g0rC8WdxKr-Hh5g3DiiaooqzAJHEfagYWamv3hpgbz3QRvZtrVYiA-f~KuIaKMBONBw__')` }}
    >
      <Header />
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-white mt-16 px-4">
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">
            Help to reclaim your life and freedom
          </h1>
          <p className="text-lg mb-8">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-start">
            <button className="bg-brown-500 text-white px-6 py-3 rounded">Get Quote Now</button>
            <button className="border border-brown-500 text-brown-500 px-6 py-3 rounded">Learn More</button>
          </div>
        </div>
        <div className="md:w-1/2 bg-white p-8 shadow-md rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center md:text-left">Book Appointment</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name*
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email*
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department">
                Department *
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="department"
              >
                <option>Please Select</option>
                {/* Add more options here */}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
                Time *
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="time"
              >
                <option>4:00 Available</option>
                {/* Add more options here */}
              </select>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-auto"
                type="button"
              >
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
