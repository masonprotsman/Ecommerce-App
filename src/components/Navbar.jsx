import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 80; // Adjust based on your navbar height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className='fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm border-bottom'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-14 sm:h-16 md:h-20'>
          <div className='flex items-center space-x-1 group cursor-pointer'>
            <div className=''>
              <img src={logo} alt="Code Flow" className='w-6 h-6 sm:w-8 sm:h-8' />
            </div>
            <span className='text-lg sm:text-xl md:text-2xl font-medium'>
              <span className='text-white'>Hyper</span>
              <span className='bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent'>Code</span>
            </span>
          </div>
          {/* nav links */}
          <div className='hidden md:flex items-center space-x-6 lg:space-x-8'>
            <a href='#features' onClick={(e) => handleNavClick(e, 'features')} className='text-gray-300 hover:text-white text-sm lg:text-base'>Features</a>
            <a href='#pricing' onClick={(e) => handleNavClick(e, 'pricing')} className='text-gray-300 hover:text-white text-sm lg:text-base'>Pricing</a>
            <a href='#testimonials' onClick={(e) => handleNavClick(e, 'testimonials')} className='text-gray-300 hover:text-white text-sm lg:text-base'>Testimonials</a>
          </div>
          <button className='md:hidden p-2 text-gray-300 hover:text-white' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className='md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300'>
          <div className='px-4 py-4 sm:py-6 space-y-3 sm:space-y-4'>
            <a href='#features' onClick={(e) => handleNavClick(e, 'features')} className='block text-gray-300 hover:text-white text-sm lg:text-base'>Features</a>
            <a href='#pricing' onClick={(e) => handleNavClick(e, 'pricing')} className='block text-gray-300 hover:text-white text-sm lg:text-base'>Pricing</a>
            <a href='#testimonials' onClick={(e) => handleNavClick(e, 'testimonials')} className='block text-gray-300 hover:text-white text-sm lg:text-base'>Testimonials</a>
          </div>
        </div>
      )}
    </nav>
  )
}
