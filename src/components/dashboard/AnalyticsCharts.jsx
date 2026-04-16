import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Cell,
  LineChart, Line, Area, AreaChart
} from 'recharts';

const AnalyticsCharts = () => {
  const [activeTab, setActiveTab] = useState('savings'); // 'savings' | 'growth'

  const savingsData = [
    { name: 'Jan', amount: 400 },
    { name: 'Feb', amount: 300 },
    { name: 'Mar', amount: 550 },
    { name: 'Apr', amount: 450 },
    { name: 'May', amount: 600 },
    { name: 'Jun', amount: 750 },
    { name: 'Jul', amount: 820 }
  ];

  const growthData = [
    { name: 'Jan', value: 8000 },
    { name: 'Feb', value: 8400 },
    { name: 'Mar', value: 8100 },
    { name: 'Apr', value: 9200 },
    { name: 'May', value: 9800 },
    { name: 'Jun', value: 11200 },
    { name: 'Jul', value: 12450 }
  ];

  return (
    <div className="bg-white rounded-3xl p-6 lg:p-8 growie-shadow border border-gray-50">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-growie-dark">Analytics Portfolio</h2>
          <p className="text-sm text-[#526B5F]">Visualize your savings patterns and ROI.</p>
        </div>

        <div className="flex items-center p-1 bg-gray-50 rounded-xl border border-gray-100">
          <button 
            onClick={() => setActiveTab('savings')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === 'savings' ? 'bg-white text-growie-dark shadow-sm' : 'text-gray-500 hover:text-growie-dark'}`}
          >
            Monthly Savings
          </button>
          <button 
            onClick={() => setActiveTab('growth')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === 'growth' ? 'bg-white text-growie-dark shadow-sm' : 'text-gray-500 hover:text-growie-dark'}`}
          >
            Investment Growth
          </button>
        </div>
      </div>

      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          {activeTab === 'savings' ? (
            <BarChart data={savingsData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#526B5F', fontSize: 12}} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#526B5F', fontSize: 12}} tickFormatter={(value) => `$${value}`} />
              <RechartsTooltip 
                cursor={{fill: '#F7FAF8'}}
                contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.08)'}}
                formatter={(value) => [`$${value}`, 'Saved']}
              />
              <Bar dataKey="amount" radius={[6, 6, 0, 0]}>
                {savingsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === savingsData.length - 1 ? '#00D084' : '#E0F8EC'} />
                ))}
              </Bar>
            </BarChart>
          ) : (
            <AreaChart data={growthData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00D084" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#00D084" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#526B5F', fontSize: 12}} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#526B5F', fontSize: 12}} tickFormatter={(value) => `$${value / 1000}k`} />
              <RechartsTooltip 
                contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.08)'}}
                formatter={(value) => [`$${value}`, 'Portfolio Value']}
              />
              <Area type="monotone" dataKey="value" stroke="#00D084" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
            </AreaChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalyticsCharts;
