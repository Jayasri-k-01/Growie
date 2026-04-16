import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';

const TopNavbar = ({ onMenuClick }) => {
  return (
    <header className="h-16 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-4 sm:px-6 sticky top-0 z-20">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 -ml-2 text-gray-500 hover:text-growie-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-growie-green"
        >
          <Menu size={24} />
        </button>
        
        <div className="hidden sm:flex relative max-w-md w-64 xl:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search transactions, goals..."
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-growie-green/50 transition-shadow"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-gray-400 hover:text-growie-dark transition-colors">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
        </button>
        
        <div className="flex items-center gap-3 ml-2 border-l border-gray-100 pl-4">
          <div className="text-right hidden md:block">
            <p className="text-sm font-bold text-growie-dark">Alex Doe</p>
            <p className="text-xs text-[#526B5F]">Free Plan</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-growie-green/20 border-2 border-growie-green text-growie-dark flex items-center justify-center font-bold">
            AD
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
