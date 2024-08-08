import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#252B42] py-12 text-white md:relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 px-6">
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-8 md:border-b border-gray-700 pb-8">
          <div className="text-2xl font-bold mb-4 md:mb-0">Litigade</div>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-pink-500 hover:text-pink-700">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-red-600 hover:text-red-800">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 pt-6">
          <div>
            <h4 className="font-bold mb-4">Company Info</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline text-sm text-input-border-color">About Us</a></li>
              <li><a href="#" className="hover:underline text-sm text-input-border-color">Carrier</a></li>
              <li><a href="#" className="hover:underline text-sm text-input-border-color">We are hiring</a></li>
              <li><a href="#" className="hover:underline text-sm text-input-border-color">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline text-sm text-input-border-color">About Us</a></li>
              <li><a href="#" className="hover:underline text-sm text-input-border-color">Carrier</a></li>
              <li><a href="#" className="hover:underline text-sm text-input-border-color">We are hiring</a></li>
              <li><a href="#" className="hover:underline text-sm text-input-border-color">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Features</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline text-sm text-input-border-color">Business Marketing</a></li>
              <li><a href="#" className="hover:underline text-sm text-input-border-color">User Analytic</a></li>
              <li><a href="#" className="hover:underline text-sm text-input-border-color">Live Chat</a></li>
              <li><a href="#" className="hover:underline text-sm text-input-border-color">Unlimited Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline text-sm text-input-border-color">IOS & Android</a></li>
              <li><a href="#" className="hover:underline text-sm text-input-border-color">Watch a Demo</a></li>
              <li><a href="#" className="hover:underline text-sm text-input-border-color">Customers</a></li>
              <li><a href="#" className="hover:underline text-sm text-input-border-color">API</a></li>
            </ul>
          </div>
          <div className="lg:ml-auto">
            <h4 className="font-bold mb-4">Get In Touch</h4>
            <form className="flex border-white">
              <input
                type="email"
                className="w-3/5 py-3 px-4 rounded-l-md text-gray-800 text-xs border border-white"
                placeholder="Your Email"
              />
              <button
                type="submit"
                className="w-2/5 py-3 px-4 bg-[#D0A144] text-white text-xs rounded-r-md border border-white"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-2 text-gray-400 text-xs">Lorem ipsum dolor amit</p>
          </div>
        </div>
      </div>
      <div className="md:absolute bottom-0 w-full bg-gradient-to-r from-[#0072B5] to-[#295C7A] py-4 px-4 text-center md:text-left">
        <p className='text-xs font-bold py-3 px-24'>Made With Love By Figmaland All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
