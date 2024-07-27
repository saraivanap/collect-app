import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-300 p-4">
      <div className="container mx-auto flex justify-center items-center">
        <nav className="flex space-x-4">
          <Link to="/" className="text-white text-lg ">Home</Link>
          <Link to="/albums" className="text-white text-lg ">Albuns</Link>
          <Link to="/photocards" className="text-white text-lg ">Photocards</Link>
          <Link to="/contact" className="text-white text-lg ">Contato</Link>
        </nav>
        <div className="absolute right-4">
          <button className="bg-gray-700 text-white text-lg  px-4 py-2 rounded">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
