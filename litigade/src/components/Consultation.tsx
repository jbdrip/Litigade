import React from 'react';

const Consultation = () => {
  return (
    <section className="bg-white w-full py-8 px-10 sm:px-10 lg:px-8">
      <div className="max-w-7xl mx-auto lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-2/3">
          <h3 className="text-2xl font-bold text-gray-900">Request A Free Consultation</h3>
          <p className="mt-2 text-sm text-gray-500">the quick fox jumps over the lazy dog</p>
        </div>
        <div className="mt-12 md:mt-4 lg:mt-0 lg:w-1/3 lg:flex lg:justify-end">
          <button
            type="button"
            className="py-4 px-8 bg-brown text-white text-sm font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brown w-full md:w-auto"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
