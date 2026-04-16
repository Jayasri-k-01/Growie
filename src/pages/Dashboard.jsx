import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import TopNavbar from '../components/dashboard/TopNavbar';
import OverviewCards from '../components/dashboard/OverviewCards';
import WalletSection from '../components/dashboard/WalletSection';
import AnalyticsCharts from '../components/dashboard/AnalyticsCharts';
import InvestmentBreakdown from '../components/dashboard/InvestmentBreakdown';
import TransactionsList from '../components/dashboard/TransactionsList';
import SavingsGoals from '../components/dashboard/SavingsGoals';
import SmartInsights from '../components/dashboard/SmartInsights';

const Dashboard = ({ onLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#F7FAF8] font-outfit overflow-hidden">
      
      {/* Sidebar Component */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} onLogout={onLogout} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col w-full h-full relative overflow-y-auto overflow-x-hidden scroll-smooth">
        
        {/* Top Navbar Component */}
        <TopNavbar onMenuClick={() => setSidebarOpen(true)} />

        {/* Dashboard Content Grid */}
        <main className="p-4 sm:p-6 lg:p-8 w-full max-w-7xl mx-auto space-y-8">
          
          {/* Header Title */}
          <div>
            <h1 className="text-3xl font-bold text-growie-dark">Welcome back, User! 👋</h1>
            <p className="text-[#526B5F] mt-1">Here is a detailed overview of your automated financial growth.</p>
          </div>

          <OverviewCards />
          
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="xl:col-span-2 space-y-8">
              <AnalyticsCharts />
              <InvestmentBreakdown />
              <TransactionsList />
            </div>
            
            <div className="xl:col-span-1 space-y-8">
              <WalletSection />
              <SavingsGoals />
              <SmartInsights />
            </div>
          </div>

        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
