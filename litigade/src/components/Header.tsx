// src/components/Header.tsx
import React, { useState } from 'react';
import { FiSearch, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="container mx-auto flex items-center justify-between py-2 px-4 absolute top-0 left-0 right-0 z-50 bg-transparent md:bg-transparent">
      <div className="text-2xl font-bold text-gray-900 md:text-white">Litigade</div>
      <nav className="hidden md:flex space-x-8 text-gray-300">
        <a href="#" className="hover:text-white">Home</a>
        <a href="#" className="hover:text-white">Product</a>
        <a href="#" className="hover:text-white">Pricing</a>
        <a href="#" className="hover:text-white">Contact</a>
      </nav>
      <div className="flex items-center space-x-4">
        <FiSearch className="text-gray-900 md:text-gray-300 hover:text-white cursor-pointer" />
        <FiShoppingCart className="text-gray-900 md:text-gray-300 hover:text-white cursor-pointer" />
        <FiMenu onClick={toggleMobileMenu} className="text-gray-900 md:text-gray-300 hover:text-white cursor-pointer md:hidden" />
      </div>
      {isMobileMenuOpen && (
        <div className="absolute top-0 left-0 right-0 bg-white md:hidden z-50 p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="text-2xl font-bold text-gray-900">Litigade</div>
            <FiX onClick={toggleMobileMenu} className="text-gray-900 cursor-pointer" />
          </div>
          <nav className="flex flex-col items-center space-y-4 text-gray-900">
            <a href="#" className="hover:text-gray-700">Home</a>
            <a href="#" className="hover:text-gray-700">Product</a>
            <a href="#" className="hover:text-gray-700">Pricing</a>
            <a href="#" className="hover:text-gray-700">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;