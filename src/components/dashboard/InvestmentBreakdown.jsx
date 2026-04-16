import React from 'react';
import { 
  LineChart as LineChartIcon, 
  Bitcoin, 
  PieChart as PieIcon, 
  DollarSign, 
  ArrowUpRight, 
  ArrowDownRight,
  Sparkles
} from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const InvestmentBreakdown = () => {
  const categories = [
    { name: 'Stocks', value: 4500, profit: '+12.4%', isPositive: true, icon: <LineChartIcon size={20} />, color: '#00D084', bg: 'bg-emerald-50 text-emerald-600' },
    { name: 'Crypto', value: 2100, profit: '-2.1%', isPositive: false, icon: <Bitcoin size={20} />, color: '#3B82F6', bg: 'bg-blue-50 text-blue-600' },
    { name: 'Mutual Funds', value: 3400, profit: '+8.2%', isPositive: true, icon: <PieIcon size={20} />, color: '#8B5CF6', bg: 'bg-indigo-50 text-indigo-600' },
    { name: 'Cash Reserve', value: 2450, profit: '+0.5%', isPositive: true, icon: <DollarSign size={20} />, color: '#F59E0B', bg: 'bg-amber-50 text-amber-600' },
  ];

  const tableData = [
    { asset: 'Apple Inc. (AAPL)', type: 'Stock', amount: '$1,200', current: '$1,450', profit: '+20.8%', date: '10 Jan, 2026', status: 'Active' },
    { asset: 'Bitcoin (BTC)', type: 'Crypto', amount: '$800', current: '$760', profit: '-5.0%', date: '15 Feb, 2026', status: 'Active' },
    { asset: 'Vanguard S&P 500', type: 'Mutual Fund', amount: '$2,000', current: '$2,240', profit: '+12.0%', date: '20 Dec, 2025', status: 'Active' },
    { asset: 'Ethereum (ETH)', type: 'Crypto', amount: '$500', current: '$850', profit: '+70.0%', date: '05 Mar, 2025', status: 'Sold' },
  ];

  return (
    <div className="bg-white rounded-3xl p-6 lg:p-8 growie-shadow border border-gray-50 flex flex-col gap-8">
      
      {/* Header & Smart Insights */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
        <div>
          <h2 className="text-2xl font-bold text-growie-dark flex items-center gap-2">
            Investment Breakdown <Sparkles className="text-amber-400" size={24} />
          </h2>
          <p className="text-sm text-[#526B5F] mt-1">See exactly where your money is building value.</p>
        </div>
        
        <div className="flex gap-3 bg-[#F7FAF8] p-3 rounded-2xl border border-gray-100">
          <div className="text-sm">
            <span className="text-gray-500 block text-xs">Top Performer</span>
            <span className="font-bold text-growie-dark">Stocks (+12.4%)</span>
          </div>
          <div className="w-px bg-gray-200"></div>
          <div className="text-sm">
            <span className="text-gray-500 block text-xs">Largest Allocation</span>
            <span className="font-bold text-growie-dark">Stocks (36%)</span>
          </div>
        </div>
      </div>

      {/* Category Cards & Pie Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Cards */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {categories.map((cat, i) => (
            <div key={i} className="p-4 rounded-2xl border border-gray-100 hover:border-growie-green/30 transition-colors flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-2 rounded-xl ${cat.bg}`}>
                  {cat.icon}
                </div>
                <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-lg ${cat.isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {cat.isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                  {cat.profit}
                </div>
              </div>
              <p className="text-sm font-medium text-[#526B5F]">{cat.name}</p>
              <h3 className="text-xl font-bold text-growie-dark">${cat.value.toLocaleString()}</h3>
            </div>
          ))}
        </div>

        {/* Pie Chart */}
        <div className="lg:col-span-1 h-64 flex flex-col items-center justify-center relative bg-[#F7FAF8] rounded-2xl border border-gray-100">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categories}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {categories.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => `$${value}`}
                contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.08)'}}
              />
            </PieChart>
          </ResponsiveContainer>
          {/* Centered Text inside Pie */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-xs font-semibold text-gray-400">Total Portfolio</span>
            <span className="text-xl font-bold text-growie-dark">$12,450</span>
          </div>
        </div>
      </div>

      {/* Investment Details Table */}
      <div className="mt-4">
        <h3 className="text-lg font-bold text-growie-dark mb-4">Recent Allocations</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-xs text-gray-400 uppercase tracking-wider border-b border-gray-100">
                <th className="pb-3 font-semibold pl-2">Asset</th>
                <th className="pb-3 font-semibold">Type</th>
                <th className="pb-3 font-semibold">Invested</th>
                <th className="pb-3 font-semibold">Current Value</th>
                <th className="pb-3 font-semibold">Profit/Loss</th>
                <th className="pb-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-[#F7FAF8] transition-colors group">
                  <td className="py-4 pl-2 font-semibold text-growie-dark text-sm">{row.asset}</td>
                  <td className="py-4 text-sm text-[#526B5F]">{row.type}</td>
                  <td className="py-4 text-sm text-[#526B5F]">{row.amount}</td>
                  <td className="py-4 text-sm font-semibold text-growie-dark">{row.current}</td>
                  <td className={`py-4 text-sm font-bold ${row.profit.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                    {row.profit}
                  </td>
                  <td className="py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${row.status === 'Active' ? 'bg-growie-green/20 text-growie-dark' : 'bg-gray-100 text-gray-500'}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default InvestmentBreakdown;
