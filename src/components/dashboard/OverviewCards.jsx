import React from 'react';
import { PiggyBank, Briefcase, TrendingUp, RefreshCw, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const OverviewCards = () => {
  const stats = [
    {
      title: "Total Savings",
      amount: "₹1,02,450.00",
      change: "+12.5%",
      isPositive: true,
      icon: <PiggyBank className="text-emerald-500" size={24} />,
      bg: "bg-emerald-50"
    },
    {
      title: "Total Invested",
      amount: "₹68,240.50",
      change: "+4.2%",
      isPositive: true,
      icon: <Briefcase className="text-blue-500" size={24} />,
      bg: "bg-blue-50"
    },
    {
      title: "Monthly Growth",
      amount: "₹3,140.25",
      change: "-1.2%",
      isPositive: false,
      icon: <TrendingUp className="text-purple-500" size={24} />,
      bg: "bg-purple-50"
    },
    {
      title: "Round-Ups Collected",
      amount: "452",
      change: "+28",
      isPositive: true,
      icon: <RefreshCw className="text-orange-500" size={24} />,
      bg: "bg-orange-50"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-3xl p-6 growie-shadow border border-gray-50 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
          <div className="flex justify-between items-start mb-4">
            <div className={`p-3 rounded-2xl ${stat.bg}`}>
              {stat.icon}
            </div>
            <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-lg ${stat.isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {stat.isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
              {stat.change}
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-[#526B5F] mb-1">{stat.title}</p>
            <h3 className="text-2xl font-bold text-growie-dark">{stat.amount}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OverviewCards;
