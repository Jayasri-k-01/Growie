import React, { useEffect, useState } from 'react';
import { Target, Zap, AlertCircle } from 'lucide-react';

const SmartInsights = () => {
  const [plantState, setPlantState] = useState(0);

  // Animate plant growth slightly over time on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setPlantState(1);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col gap-6">
      
      {/* Financial Health Score */}
      <div className="bg-white rounded-3xl p-6 growie-shadow border border-gray-50 flex flex-col items-center justify-center text-center">
        <h2 className="text-lg font-bold text-growie-dark mb-4">Financial Health</h2>
        <div className="relative w-32 h-32 flex items-center justify-center mb-4">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#F3F4F6" strokeWidth="8" />
            <circle 
              cx="50" 
              cy="50" 
              r="45" 
              fill="none" 
              stroke="#00D084" 
              strokeWidth="8" 
              strokeDasharray="283" 
              strokeDashoffset={283 - (283 * 0.78)} 
              strokeLinecap="round" 
              className="transition-all duration-1500 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-black text-growie-dark">78</span>
            <span className="text-xs font-bold text-gray-400">/100</span>
          </div>
        </div>
        <p className="text-sm font-semibold text-[#526B5F]">Excellent! Your automated savings are keeping you highly resilient.</p>
      </div>

      {/* Insight Alerts */}
      <div className="bg-white rounded-3xl p-6 growie-shadow border border-gray-50 space-y-4">
        <h2 className="text-lg font-bold text-growie-dark mb-2">Smart AI Insights ✨</h2>
        
        <div className="flex gap-3 p-3 bg-amber-50 rounded-2xl">
          <Zap className="text-amber-500 shrink-0 mt-0.5" size={18} />
          <div>
            <p className="text-sm font-bold text-growie-dark">Weekly Challenge</p>
            <p className="text-xs text-[#526B5F] mt-1">Save $100 this week. You're already 65% there! Skip the coffee today?</p>
          </div>
        </div>

        <div className="flex gap-3 p-3 bg-blue-50 rounded-2xl">
          <Target className="text-blue-500 shrink-0 mt-0.5" size={18} />
          <div>
            <p className="text-sm font-bold text-growie-dark">Goal Approaching</p>
            <p className="text-xs text-[#526B5F] mt-1">Your 'New MacBook Pro' goal is 96% complete. You might reach it on Friday!</p>
          </div>
        </div>
        
        <div className="flex gap-3 p-3 bg-green-50 rounded-2xl">
           <AlertCircle className="text-green-500 shrink-0 mt-0.5" size={18} />
           <div>
             <p className="text-sm font-bold text-growie-dark">Dividend Payout</p>
             <p className="text-xs text-[#526B5F] mt-1">Your Vanguard S&P 500 generated $14.20 in dividends yesterday.</p>
           </div>
        </div>
      </div>

      {/* Animated Growth Visual */}
      <div className="relative bg-growie-dark rounded-3xl overflow-hidden h-40 growie-shadow flex items-end justify-center p-4">
         <div className="absolute top-4 left-6 z-10">
            <p className="text-white font-bold text-lg">Money Tree</p>
            <p className="text-growie-green text-xs font-medium">Level 4 Sapling</p>
         </div>
         {/* Simple CSS animation depicting plant growth */}
         <div className="relative w-full h-full flex flex-col items-center justify-end">
            {/* Ground */}
            <div className="w-3/4 h-2 bg-[#1b4f3b] rounded-full absolute bottom-2"></div>
            {/* The Plant */}
            <div 
              className={`w-2 bg-growie-green rounded-full transform origin-bottom transition-all duration-1000 ${plantState === 1 ? 'h-20 scale-100' : 'h-0 scale-50'}`}
            ></div>
            {/* Leaves */}
            <div className={`absolute bottom-12 ml-4 w-6 h-6 bg-[#00F098] rounded-tl-[100%] rounded-br-[100%] transform transition-all delay-500 duration-1000 ${plantState === 1 ? 'scale-100 rotate-12' : 'scale-0'}`}></div>
            <div className={`absolute bottom-8 mr-6 w-5 h-5 bg-[#00A669] rounded-tr-[100%] rounded-bl-[100%] transform transition-all delay-700 duration-1000 ${plantState === 1 ? 'scale-100 -rotate-12' : 'scale-0'}`}></div>
         </div>
      </div>

    </div>
  );
};

export default SmartInsights;
