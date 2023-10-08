import React from 'react';

const Header = () => {
  return (
<header className="bg-gradient-to-r from-blue-700 to-indigo-900 text-white">
  <div className="container mx-auto flex items-center justify-between">
    <div className="flex items-center space-x-20">
      <a href="/">
        <img
          src="/logo.png" // Reemplaza con la ruta de tu imagen de inicio
          alt="Logo"
          className="h-20 w-35"
        />
      </a>
      <div className="flex space-x-20">
        <div className="flex hover:scale-110 transition-transform">
          <a className="inline-block px-5 py-2 text-2xl text-white no-underline hover:text-blue-700 hover:-bg-gray-300 hover:-translate transition-transform transform origin-center hover:-skew-y-3 hover:bg-lime-300 " href="/  ">Home</a>
        </div>
        <div className="flex hover:scale-110 transition-transform">
          <a className="inline-block px-5 py-2 text-2xl text-white no-underline hover:text-blue-700 hover:-bg-gray-300 hover:-translate transition-transform transform origin-center hover:-skew-y-3 hover:bg-lime-300 " href="/projects">Projects</a>
        </div>
        <div className="flex hover:scale-110 transition-transform">
          <a className="inline-block px-5 py-2 text-2xl text-white no-underline hover:text-blue-700 hover:-bg-gray-300 hover:-translate transition-transform transform origin-center hover:-skew-y-3 hover:bg-lime-300 " href="#/">Developers</a>
        </div>
        <div className="flex ml-auto hover:scale-110 transition-transform">
          <a className="inline-block px-5 py-2 text-2xl text-white no-underline hover:text-blue-700 hover:-bg-gray-300 hover:-translate transition-transform transform origin-center hover:-skew-y-3 hover:bg-lime-300 " href="#/">Donations</a>
        </div>

     
      </div>
    </div>
  </div>
</header>

  );
};

export default Header;