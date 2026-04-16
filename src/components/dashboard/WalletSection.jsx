import React from 'react';
import { Building2, RefreshCw, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WalletSection = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Wallet Card */}
      <div className="bg-gradient-to-br from-growie-dark to-[#0f2c1d] text-white rounded-3xl p-6 growie-shadow relative overflow-hidden">
        {/* Decorative dots pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl"></div>
        
        <div className="relative z-10 flex flex-col gap-6">
          <div>
            <p className="text-sm text-gray-300 font-medium mb-1">Available Balance</p>
            <h2 className="text-4xl font-bold text-white flex items-end gap-2">
              ₹4,209.50
              <span className="text-base text-growie-green mb-1 pb-1 font-medium">INR</span>
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-white/10 rounded-2xl p-4 flex items-center justify-between backdrop-blur-md border border-white/5">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 text-white rounded-xl">
                  <Building2 size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-300">Linked Bank</p>
                  <p className="font-semibold text-sm">HDFC **** 4829</p>
                </div>
              </div>
              <button className="text-growie-green text-sm font-bold hover:text-white transition-colors">Edit</button>
            </div>

            <div className="bg-white/10 rounded-2xl p-4 flex items-center justify-between backdrop-blur-md border border-white/5">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-growie-green text-growie-dark rounded-xl">
                  <RefreshCw size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-300">Auto Round-Up</p>
                  <p className="font-semibold text-sm text-growie-green">Active (2x multiplier)</p>
                </div>
              </div>
              {/* Toggle switch visual dummy */}
              <div className="w-10 h-6 bg-growie-green rounded-full relative cursor-pointer shadow-inner">
                <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1 shadow-sm transition-transform"></div>
              </div>
            </div>
          </div>

          <button className="w-full bg-growie-green text-growie-dark py-3.5 rounded-xl font-bold text-sm tracking-wide hover:bg-[#00F098] transition-colors mt-2 shadow-[0_4px_14px_rgba(0,208,132,0.25)]">
            Deposit Funds
          </button>
        </div>
      </div>

      {/* Secondary CTA */}
      <div className="flex justify-end px-2">
        <Link 
          to="/wallet" 
          className="flex items-center gap-1.5 text-sm font-bold text-growie-green hover:text-growie-dark transition-colors group"
        >
          View Wallet <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default WalletSection;
