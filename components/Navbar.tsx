import React, { useState, useEffect } from 'react';
import { Search, Bell, Menu, X, Gift } from 'lucide-react';

interface NavbarProps {
  onSearchClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSearchClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-neutral-900 shadow-xl' : 'bg-transparent bg-gradient-to-b from-black/70 to-transparent'}`}>
      <div className="px-4 md:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="text-red-600 font-bold text-2xl md:text-3xl tracking-tighter cursor-pointer">NETFLUX</div>
          <ul className="hidden md:flex gap-6 text-sm text-gray-200">
            <li className="font-medium cursor-pointer hover:text-gray-400 transition">Home</li>
            <li className="cursor-pointer hover:text-gray-400 transition">Series</li>
            <li className="cursor-pointer hover:text-gray-400 transition">Films</li>
            <li className="cursor-pointer hover:text-gray-400 transition">New & Popular</li>
            <li className="cursor-pointer hover:text-gray-400 transition">My List</li>
          </ul>
        </div>

        <div className="flex items-center gap-6 text-white">
          <button 
            onClick={onSearchClick}
            className="hidden md:flex items-center gap-2 hover:bg-neutral-800 px-3 py-1 rounded-full transition group"
          >
            <span className="text-xs font-semibold text-gray-300 group-hover:text-white">ASK AI</span>
            <Search className="w-5 h-5" />
          </button>
          
          <Search onClick={onSearchClick} className="w-5 h-5 md:hidden cursor-pointer" />
          
          <Gift className="w-5 h-5 cursor-pointer hover:text-gray-300 hidden sm:block" />
          <Bell className="w-5 h-5 cursor-pointer hover:text-gray-300" />
          
          <div className="flex items-center gap-2 cursor-pointer group">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
              alt="Profile" 
              className="w-8 h-8 rounded-md"
            />
          </div>

           {/* Mobile Menu Toggle */}
           <div className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
             {isMobileMenuOpen ? <X /> : <Menu />}
           </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-neutral-900/95 absolute top-16 left-0 w-full p-6 flex flex-col gap-4 text-center border-t border-gray-800 animate-fade-in">
          <div className="text-white hover:text-gray-400 py-2">Home</div>
          <div className="text-white hover:text-gray-400 py-2">TV Shows</div>
          <div className="text-white hover:text-gray-400 py-2">Movies</div>
          <div className="text-white hover:text-gray-400 py-2">New & Popular</div>
          <button onClick={() => { onSearchClick(); setIsMobileMenuOpen(false); }} className="text-red-500 font-bold py-2 flex items-center justify-center gap-2">
            <Search className="w-4 h-4" /> Ask AI Assistant
          </button>
        </div>
      )}
    </nav>
  );
};
