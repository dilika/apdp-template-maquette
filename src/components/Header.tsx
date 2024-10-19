import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-2xl font-bold text-blue-700">APDP</Link>
          </div>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:flex items-center space-x-6`}>
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Acceuil</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">Apropos de Nous</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium">Services</Link>
            <Link to="/resources" className="text-gray-700 hover:text-blue-600 font-medium">Resources</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
            <Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
              Signaler un problème
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Search size={20} className="text-gray-600" />
            </button>
            <button 
              className="md:hidden p-2 rounded-full hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} className="text-gray-600" /> : <Menu size={20} className="text-gray-600" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;