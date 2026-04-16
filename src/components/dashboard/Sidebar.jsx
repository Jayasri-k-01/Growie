import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BarChart2, 
  Receipt, 
  Briefcase, 
  Wallet, 
  Target, 
  Bell, 
  Settings,
  LogOut,
  X,
  Leaf
} from 'lucide-react';

const Sidebar = ({ isOpen, setIsOpen, onLogout }) => {
  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/dashboard' },
    { name: 'Analytics', icon: <BarChart2 size={20} />, path: '/analytics' },
    { name: 'Transactions', icon: <Receipt size={20} />, path: '/transactions' },
    { name: 'Investments', icon: <Briefcase size={20} />, path: '/investments' },
    { name: 'Wallet', icon: <Wallet size={20} />, path: '/wallet' },
    { name: 'Savings Goals', icon: <Target size={20} />, path: '/goals' },
    { name: 'Notifications', icon: <Bell size={20} />, path: '/notifications' },
    { name: 'Settings', icon: <Settings size={20} />, path: '/settings' },
  ];

  return (
    <aside 
      className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-100 flex flex-col transition-transform duration-300 ease-in-out growie-shadow ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
    >
      <div className="h-16 flex items-center justify-between px-6 border-b border-gray-50">
        <div className="flex items-center gap-2 text-growie-dark font-bold text-xl">
          <span className="text-growie-green"><Leaf size={24} /></span>
          Growie
        </div>
        <button className="lg:hidden text-gray-400 hover:text-growie-dark" onClick={() => setIsOpen(false)}>
          <X size={20} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => 
              `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                isActive
                  ? 'bg-growie-green text-growie-dark shadow-[0_4px_14px_rgba(0,208,132,0.2)]'
                  : 'text-[#526B5F] hover:bg-[#E0F8EC] hover:text-growie-dark'
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </div>

      <div className="p-4 border-t border-gray-50">
        <button 
          onClick={onLogout}
          className="flex w-full items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 hover:text-red-600 rounded-xl font-medium transition-colors"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
