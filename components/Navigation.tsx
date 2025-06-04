"use client"
import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Gérer le scroll pour changer l'apparence de la navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile quand on clique sur un lien
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Empêcher le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-80 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-6'
      } px-4 sm:px-6 md:px-12`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="#home" className="cursor-pointer flex items-center">
              <span className="text-white font-bold text-xl sm:text-2xl tracking-tighter font-space">
                Mr. <span className="text-[var(--primary-color)]">Code</span>
              </span>
            </Link>

            {/* Menu Desktop */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link 
                href="#home" 
                className="cursor-pointer text-gray-300 hover:text-white transition-colors duration-300 font-space text-sm font-medium relative group"
                scroll={false}
              >
                Accueil
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary-color)] transition-all group-hover:w-full"></span>
              </Link>
              <Link 
                href="#about" 
                className="cursor-pointer text-gray-300 hover:text-white transition-colors duration-300 font-space text-sm font-medium relative group"
                scroll={false}
              >
                A propos
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary-color)] transition-all group-hover:w-full"></span>
              </Link>
              <Link 
                href="#services" 
                className="cursor-pointer text-gray-300 hover:text-white transition-colors duration-300 font-space text-sm font-medium relative group"
                scroll={false}
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary-color)] transition-all group-hover:w-full"></span>
              </Link>
              <Link 
                href="#projects" 
                className="cursor-pointer text-gray-300 hover:text-white transition-colors duration-300 font-space text-sm font-medium relative group"
                scroll={false}
              >
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary-color)] transition-all group-hover:w-full"></span>
              </Link>
              <button className="cursor-pointer bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-color)] hover:from-[var(--primary-color)] hover:to-[var(--primary-color)] text-white px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 font-space text-sm font-medium shadow-lg hover:shadow-purple-500/25">
                Contactez-nous
              </button>
            </div>

            {/* Bouton Menu Mobile - Avec z-index élevé */}
            <div className="lg:hidden relative z-60">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay pour le menu mobile */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Menu Mobile - Slide depuis la droite */}
      <div className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gray-900/95 backdrop-blur-md z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header du menu mobile */}
          <div className="flex cursor-pointer justify-between items-center p-6 border-b border-gray-700">
            <Link href="#home" className="flex items-center">
              <span className="text-white font-bold text-xl tracking-tighter font-space">
                Mr. <span className="text-[var(--primary-color)]">Code</span>
              </span>
            </Link>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col flex-1 px-6 py-8 space-y-6">
            <Link 
              href="#home" 
              onClick={handleLinkClick}
              className="cursor-pointer text-gray-300 hover:text-white transition-colors duration-300 py-3 font-space text-lg font-medium border-b border-gray-700/50 hover:border-purple-500/50"
              scroll={false}
            >
              Home
            </Link>
            <Link 
              href="#about" 
              onClick={handleLinkClick}
              className="cursor-pointer text-gray-300 hover:text-white transition-colors duration-300 py-3 font-space text-lg font-medium border-b border-gray-700/50 hover:border-purple-500/50"
              scroll={false}
            >
              About
            </Link>
            <Link 
              href="#services" 
              onClick={handleLinkClick}
              className="cursor-pointer text-gray-300 hover:text-white transition-colors duration-300 py-3 font-space text-lg font-medium border-b border-gray-700/50 hover:border-purple-500/50"
              scroll={false}
            >
              Services
            </Link>
            <Link 
              href="#projects" 
              onClick={handleLinkClick}
              className="cursor-pointer text-gray-300 hover:text-white transition-colors duration-300 py-3 font-space text-lg font-medium border-b border-gray-700/50 hover:border-purple-500/50"
              scroll={false}
            >
              Projects
            </Link>
            
            {/* Bouton Contact dans le menu mobile */}
            <div className="pt-6">
              <Link href="#contact" onClick={handleLinkClick}>
              <button 
                className="cursor-pointer w-full bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-color)] hover:from-[var(--primary-color)] hover:to-[var(--primary-color)] text-white px-6 py-3 rounded-full transition-all duration-300 font-space text-lg font-medium shadow-lg"
              >
                Contactez-nous
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;