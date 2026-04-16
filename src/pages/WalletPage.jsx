import React, { useState, useEffect } from 'react';
import { Building2, RefreshCw, ArrowDownToLine, ArrowUpFromLine, AlertCircle } from 'lucide-react';
import Sidebar from '../components/dashboard/Sidebar';
import TopNavbar from '../components/dashboard/TopNavbar';
import TransactionsList from '../components/dashboard/TransactionsList';

const WalletPage = ({ onLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [walletData, setWalletData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWalletData = async () => {
      try {
        const response = await fetch('/api/wallet', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        
        if (!response.ok) {
          throw new Error('API not available or failed. Generating dummy data.');
        }
        
        const data = await response.json();
        setWalletData(data);
      } catch (error) {
        console.log(error.message);
        // Fallback dummy data if backend endpoint doesn't exist yet
        setWalletData({
          balance: 4209.50,
          currency: 'INR',
          linkedBank: {
            name: 'HDFC Bank',
            mask: '**** 4829'
          },
          autoRoundUp: {
            active: true,
            multiplier: 2
          }
        });
      } finally {
        setLoading(false);
      }
    };

    fetchWalletData();
  }, []);

  return (
    <div className="flex h-screen bg-[#F7FAF8] font-outfit overflow-hidden">
      
      {/* Sidebar Component */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} onLogout={onLogout} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col w-full h-full relative overflow-y-auto overflow-x-hidden scroll-smooth">
        
        {/* Top Navbar Component */}
        <TopNavbar onMenuClick={() => setSidebarOpen(true)} />

        {/* Wallet Content */}
        <main className="p-4 sm:p-6 lg:p-8 w-full max-w-5xl mx-auto space-y-8">
          
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-growie-dark">My Wallet</h1>
            <p className="text-[#526B5F] mt-1">Manage your funds, linked accounts, and transactions securely.</p>
          </div>

          {loading ? (
            <div className="animate-pulse space-y-8">
              <div className="h-64 bg-gray-200 rounded-3xl w-full"></div>
              <div className="h-96 bg-gray-200 rounded-3xl w-full"></div>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Top Wallet Card */}
              <div className="bg-gradient-to-br from-[#0c2317] to-growie-dark text-white rounded-[2rem] p-8 md:p-10 growie-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-growie-green opacity-10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
                
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                  
                  {/* Left: Balance & Actions */}
                  <div className="space-y-8">
                    <div>
                      <p className="text-gray-300 font-medium mb-2 uppercase tracking-wider text-sm">Available Balance</p>
                      <h2 className="text-5xl md:text-6xl font-bold text-white flex items-baseline gap-2">
                        ₹{walletData?.balance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                        <span className="text-lg md:text-xl text-growie-green font-medium">INR</span>
                      </h2>
                    </div>

                    <div className="flex gap-4">
                      <button className="flex-1 flex items-center justify-center gap-2 bg-growie-green text-growie-dark py-4 rounded-2xl font-bold hover:bg-[#00F098] transition-colors shadow-[0_4px_14px_rgba(0,208,132,0.25)]">
                        <ArrowDownToLine size={20} />
                        Deposit
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-2 bg-white/10 text-white backdrop-blur-md py-4 rounded-2xl font-bold border border-white/10 hover:bg-white/20 transition-colors">
                        <ArrowUpFromLine size={20} />
                        Withdraw
                      </button>
                    </div>
                  </div>

                  {/* Right: Bank & Settings */}
                  <div className="space-y-4 md:pl-8 md:border-l border-white/10">
                    <div className="bg-white/5 rounded-2xl p-5 flex items-center justify-between backdrop-blur-md border border-white/5 hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/10 text-white rounded-xl">
                          <Building2 size={24} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 mb-0.5">Linked Bank</p>
                          <p className="font-semibold text-base">{walletData?.linkedBank?.name} {walletData?.linkedBank?.mask}</p>
                        </div>
                      </div>
                      <button className="text-growie-green text-sm font-bold hover:text-white transition-colors">Manage</button>
                    </div>

                    <div className="bg-white/5 rounded-2xl p-5 flex items-center justify-between backdrop-blur-md border border-white/5 hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-growie-green/20 text-growie-green rounded-xl">
                          <RefreshCw size={24} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 mb-0.5">Auto Round-Up</p>
                          <p className={`font-semibold text-base ${walletData?.autoRoundUp?.active ? 'text-growie-green' : 'text-gray-400'}`}>
                            {walletData?.autoRoundUp?.active ? `Active (${walletData?.autoRoundUp?.multiplier}x)` : 'Inactive'}
                          </p>
                        </div>
                      </div>
                      <div className={`w-12 h-6 rounded-full relative cursor-pointer shadow-inner transition-colors ${walletData?.autoRoundUp?.active ? 'bg-growie-green' : 'bg-gray-600'}`}>
                        <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-sm transition-transform ${walletData?.autoRoundUp?.active ? 'right-0.5' : 'left-0.5'}`}></div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Transactions List */}
              <div className="bg-white rounded-3xl p-6 lg:p-8 growie-shadow border border-gray-50">
                <TransactionsList />
              </div>
            </div>
          )}

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

export default WalletPage;
