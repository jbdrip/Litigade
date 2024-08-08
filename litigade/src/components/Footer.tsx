import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start">
            <h3 className="text-2xl font-bold">Litigade</h3>
            <div className="mt-4 flex space-x-4">
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
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <h4 className="font-bold mb-2">Company Info</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Carrier</a></li>
              <li><a href="#" className="hover:underline">We are hiring</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Carrier</a></li>
              <li><a href="#" className="hover:underline">We are hiring</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Features</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Business Marketing</a></li>
              <li><a href="#" className="hover:underline">User Analytic</a></li>
              <li><a href="#" className="hover:underline">Live Chat</a></li>
              <li><a href="#" className="hover:underline">Unlimited Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">IOS & Android</a></li>
              <li><a href="#" className="hover:underline">Watch a Demo</a></li>
              <li><a href="#" className="hover:underline">Customers</a></li>
              <li><a href="#" className="hover:underline">API</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Get In Touch</h4>
            <form className="flex space-x-2">
              <input
                type="email"
                className="w-full py-2 px-4 rounded-md text-gray-800"
                placeholder="Your Email"
              />
              <button
                type="submit"
                className="py-2 px-4 bg-yellow-500 text-white rounded-md"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-gray-400">Lorem ipsum dolor amit</p>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-blue-600 py-4 text-center">
        <p>Made With Love By Figmaland All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
