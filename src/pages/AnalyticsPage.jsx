import React, { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Lightbulb, 
  Target, 
  Clock, 
  Calendar, 
  PieChart as PieChartIcon, 
  Coins, 
  Activity 
} from 'lucide-react';
import { 
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell 
} from 'recharts';
import Sidebar from '../components/dashboard/Sidebar';
import TopNavbar from '../components/dashboard/TopNavbar';

// Dummy Data
const savingsVsSpendingData = [
  { name: 'Jan', spending: 4000, savings: 2400 },
  { name: 'Feb', spending: 3000, savings: 1398 },
  { name: 'Mar', spending: 2000, savings: 9800 },
  { name: 'Apr', spending: 2780, savings: 3908 },
  { name: 'May', spending: 1890, savings: 4800 },
  { name: 'Jun', spending: 2390, savings: 3800 },
];

const expenseBreakdownData = [
  { name: 'Food', value: 400, percentage: 35 },
  { name: 'Travel', value: 300, percentage: 25 },
  { name: 'Shopping', value: 300, percentage: 25 },
  { name: 'Bills', value: 200, percentage: 15 },
];

const COLORS = ['#00D084', '#0c2317', '#526B5F', '#A3E6C8'];

const investmentGrowthData = [
  { name: 'Week 1', roi: 100 },
  { name: 'Week 2', roi: 150 },
  { name: 'Week 3', roi: 130 },
  { name: 'Week 4', roi: 200 },
  { name: 'Week 5', roi: 250 },
  { name: 'Week 6', roi: 230 },
  { name: 'Week 7', roi: 340 },
];

const AnalyticsPage = ({ onLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filter, setFilter] = useState('Monthly');

  // Custom tooltips
  const CustomTooltipBar = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-xl shadow-lg border border-gray-100">
          <p className="font-bold text-growie-dark mb-1">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm font-medium" style={{ color: entry.color }}>
              {entry.name}: ₹{entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const CustomTooltipLine = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-growie-dark text-white p-3 rounded-xl shadow-lg">
          <p className="font-bold mb-1">{label}</p>
          <p className="text-growie-green text-sm font-bold">
            ROI: +₹{payload[0].value}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex h-screen bg-[#F7FAF8] font-outfit overflow-hidden">
      
      {/* Sidebar Component */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} onLogout={onLogout} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col w-full h-full relative overflow-y-auto overflow-x-hidden scroll-smooth">
        
        {/* Top Navbar Component */}
        <TopNavbar onMenuClick={() => setSidebarOpen(true)} />

        {/* Analytics Content */}
        <main className="p-4 sm:p-6 lg:p-8 w-full max-w-7xl mx-auto space-y-6 lg:space-y-8">
          
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-growie-dark">Financial Analytics</h1>
              <p className="text-[#526B5F] mt-1">Understand your spending behavior and improve your financial growth</p>
            </div>
            
            <div className="bg-white rounded-xl border border-gray-100 p-1 flex shadow-sm">
              {['Weekly', 'Monthly', 'Yearly'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
                    filter === f 
                    ? 'bg-growie-green text-growie-dark' 
                    : 'text-gray-500 hover:text-growie-dark'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Smart Insights Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-red-50 rounded-2xl p-5 border border-red-100 flex gap-4">
              <div className="bg-red-100 p-3 rounded-xl h-fit text-red-500">
                <TrendingUp size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-red-600 mb-1">Alert</p>
                <p className="text-growie-dark font-medium text-sm">You spent 22% more on food compared to last month.</p>
              </div>
            </div>

            <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100 flex gap-4">
              <div className="bg-orange-100 p-3 rounded-xl h-fit text-orange-500">
                <Activity size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-orange-600 mb-1">Consistency</p>
                <p className="text-growie-dark font-medium text-sm">Your savings consistency dropped by 10% this week.</p>
              </div>
            </div>

            <div className="bg-[#E0F8EC] rounded-2xl p-5 border border-[#A3E6C8] flex gap-4">
              <div className="bg-growie-green/20 p-3 rounded-xl h-fit text-growie-dark">
                <Coins size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-growie-dark mb-1">Round-ups</p>
                <p className="text-[#0c2317] font-medium text-sm">Round-ups contributed 18% of your total savings.</p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 flex gap-4">
              <div className="bg-blue-100 p-3 rounded-xl h-fit text-blue-500">
                <Target size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-blue-600 mb-1">Prediction</p>
                <p className="text-growie-dark font-medium text-sm">You are likely to reach your goal 2 weeks early.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Main Center Column (Charts) */}
            <div className="xl:col-span-2 space-y-6 lg:space-y-8">
              
              {/* Spending vs Savings Chart */}
              <div className="bg-white rounded-3xl p-6 lg:p-8 growie-shadow border border-gray-50">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-growie-dark">Spending vs Savings</h2>
                    <p className="text-sm text-[#526B5F]">Monthly overview of your cash flow</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-growie-green rounded-full"></div>
                      <span className="text-sm font-medium text-gray-500">Spending</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-growie-dark rounded-full"></div>
                      <span className="text-sm font-medium text-gray-500">Savings</span>
                    </div>
                  </div>
                </div>
                
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={savingsVsSpendingData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                      <Tooltip content={<CustomTooltipBar />} cursor={{ fill: '#f9fafb' }} />
                      <Bar dataKey="spending" fill="#00D084" radius={[4, 4, 0, 0]} maxBarSize={40} />
                      <Bar dataKey="savings" fill="#0c2317" radius={[4, 4, 0, 0]} maxBarSize={40} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Investment Growth Trend */}
              <div className="bg-white rounded-3xl p-6 lg:p-8 growie-shadow border border-gray-50">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-growie-dark">Investment Growth Trend</h2>
                    <p className="text-sm text-[#526B5F]">ROI progression over time</p>
                  </div>
                </div>
                
                <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={investmentGrowthData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                      <Tooltip content={<CustomTooltipLine />} />
                      <Line 
                        type="monotone" 
                        dataKey="roi" 
                        stroke="#00D084" 
                        strokeWidth={4} 
                        dot={{ r: 4, strokeWidth: 2, fill: '#fff', stroke: '#00D084' }} 
                        activeDot={{ r: 8, fill: '#00D084', stroke: '#fff', strokeWidth: 3 }} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

            </div>

            {/* Right Column (Widgets) */}
            <div className="xl:col-span-1 space-y-6 lg:space-y-8">
              
              {/* Expense Breakdown */}
              <div className="bg-white rounded-3xl p-6 lg:p-8 growie-shadow border border-gray-50 relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-xl font-bold text-growie-dark mb-1">Expense Breakdown</h2>
                  <p className="text-sm text-[#526B5F] mb-4">Where your money goes</p>

                  <div className="h-[200px] flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={expenseBreakdownData}
                          innerRadius={60}
                          outerRadius={90}
                          paddingAngle={3}
                          dataKey="value"
                          stroke="none"
                        >
                          {expenseBreakdownData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="space-y-3 mt-4">
                    {expenseBreakdownData.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                          <span className="font-medium text-gray-700">{item.name}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-bold text-growie-dark">₹{item.value}</span>
                          <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{item.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Behavior Analysis */}
              <div className="bg-growie-dark rounded-3xl p-6 lg:p-8 growie-shadow relative overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-32 h-32 bg-growie-green opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Lightbulb size={24} className="text-growie-green" />
                  Behavior Analysis
                </h2>
                
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/10 flex items-start gap-3 backdrop-blur-sm">
                    <Calendar size={18} className="text-gray-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-300">Most of your discretionary spending occurs on weekends.</p>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/10 flex items-start gap-3 backdrop-blur-sm">
                    <TrendingUp size={18} className="text-growie-green shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-300">You save 15% more effectively at the beginning of the month.</p>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/10 flex items-start gap-3 backdrop-blur-sm">
                    <PieChartIcon size={18} className="text-gray-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-300">Highest recurrent expense category is consistently <strong>Food</strong>.</p>
                  </div>
                </div>
              </div>

              {/* Goal Progress Analytics */}
              <div className="bg-white rounded-3xl p-6 lg:p-8 growie-shadow border border-gray-50">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-growie-dark">Goal Progress</h2>
                  <Target size={20} className="text-growie-green" />
                </div>
                
                <div className="mb-2 flex justify-between items-end">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">New MacBook</p>
                    <p className="font-bold text-2xl text-growie-dark">₹6,500</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">Target</p>
                    <p className="font-bold text-lg text-gray-400">₹10,000</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-100 rounded-full h-3 mb-2 overflow-hidden shadow-inner">
                  <div className="bg-growie-green h-3 rounded-full transition-all duration-1000 ease-out" style={{ width: '65%' }}></div>
                </div>
                <div className="flex justify-between items-center text-xs font-bold text-[#526B5F]">
                  <span>65% Completed</span>
                  <span>Est. 2 mo left</span>
                </div>
              </div>

              {/* Round-up Impact */}
              <div className="bg-gradient-to-br from-[#00D084] to-[#059669] rounded-3xl p-6 lg:p-8 growie-shadow text-white relative overflow-hidden">
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
                <h2 className="text-xl font-bold mb-4">Round-up Impact</h2>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-white/80 mb-1">Total Collected</p>
                    <p className="text-2xl font-bold">₹1,245</p>
                  </div>
                  <div>
                    <p className="text-sm text-white/80 mb-1">Monthly Trend</p>
                    <p className="text-2xl font-bold flex items-center">
                      <TrendingUp size={20} className="mr-1" />
                      12%
                    </p>
                  </div>
                </div>
                <div className="bg-white/10 rounded-xl p-3 inline-block backdrop-blur-sm border border-white/20">
                  <p className="text-sm font-medium">Avg. ₹14 per transaction</p>
                </div>
              </div>

            </div>
          </div>

        </main>
      </div>

      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AnalyticsPage;
