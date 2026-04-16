import React, { useState } from 'react';
import { 
  Building2, 
  RefreshCw, 
  ArrowDownToLine, 
  ArrowUpFromLine, 
  AlertCircle,
  Search,
  Filter,
  DollarSign,
  ShoppingBag,
  Coffee,
  Car,
  FileText,
  TrendingUp,
  TrendingDown,
  Calendar,
  AlertTriangle
} from 'lucide-react';
import Sidebar from '../components/dashboard/Sidebar';
import TopNavbar from '../components/dashboard/TopNavbar';

// Dummy Transactions Data
const initialTransactions = [
  { id: 1, name: 'Swiggy', amount: 187, date: '2023-10-27T14:32:00', roundUp: 13, insight: 'Higher than your usual spending on weekends.' },
  { id: 2, name: 'Uber Trips', amount: 320, date: '2023-10-26T09:15:00', roundUp: 80, insight: 'You saved ₹80 through automated round-up.' },
  { id: 3, name: 'Amazon Shopping', amount: 1250, date: '2023-10-25T18:45:00', roundUp: 50, insight: 'Frequent spending detected.' },
  { id: 4, name: 'Netflix Subscription', amount: 649, date: '2023-10-24T10:00:00', roundUp: 1, insight: 'Monthly recurring bill.' },
  { id: 5, name: 'Starbucks', amount: 350, date: '2023-10-23T08:30:00', roundUp: 50, insight: 'You saved ₹50 through round-up!' },
  { id: 6, name: 'Zomato', amount: 210, date: '2023-10-22T20:00:00', roundUp: 40, insight: null },
  { id: 7, name: 'Electricity Bill', amount: 1800, date: '2023-10-20T12:00:00', roundUp: 0, insight: 'Rounding suppressed for large bill payments.' },
];

// Simple Category Mapping Logic
const categorizeTransaction = (name) => {
  const lowerName = name.toLowerCase();
  if (lowerName.includes('swiggy') || lowerName.includes('zomato') || lowerName.includes('starbucks')) return { category: 'Food', icon: Coffee };
  if (lowerName.includes('uber') || lowerName.includes('ola')) return { category: 'Travel', icon: Car };
  if (lowerName.includes('amazon') || lowerName.includes('flipkart')) return { category: 'Shopping', icon: ShoppingBag };
  if (lowerName.includes('netflix') || lowerName.includes('bill')) return { category: 'Bills', icon: FileText };
  return { category: 'Other', icon: DollarSign };
};

const TransactionsPage = ({ onLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showRoundUp, setShowRoundUp] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState('All');

  // Processed Transactions
  const processedTransactions = initialTransactions.map(t => ({
    ...t,
    ...categorizeTransaction(t.name)
  })).filter(t => {
    const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || t.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex h-screen bg-[#F7FAF8] font-outfit overflow-hidden">
      
      {/* Sidebar Component */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} onLogout={onLogout} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col w-full h-full relative overflow-y-auto overflow-x-hidden scroll-smooth">
        
        {/* Top Navbar Component */}
        <TopNavbar onMenuClick={() => setSidebarOpen(true)} />

        {/* Transactions Content */}
        <main className="p-4 sm:p-6 lg:p-8 w-full max-w-7xl mx-auto space-y-6 lg:space-y-8">
          
          {/* 1. Header Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-growie-dark">Transactions</h1>
              <p className="text-[#526B5F] mt-1">Track, analyze, and optimize your spending</p>
            </div>
          </div>

          {/* 2. Top Insights Bar */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white rounded-2xl p-5 growie-shadow flex items-center justify-between">
               <div>
                 <p className="text-sm font-medium text-gray-500 mb-1">Total Spent (This Month)</p>
                 <h2 className="text-2xl font-bold text-growie-dark">₹4,766</h2>
               </div>
               <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-500">
                 <ArrowDownToLine size={24} />
               </div>
            </div>
            <div className="bg-white rounded-2xl p-5 growie-shadow flex items-center justify-between">
               <div>
                 <p className="text-sm font-medium text-gray-500 mb-1">Top Category</p>
                 <h2 className="text-2xl font-bold text-growie-dark text-orange-500 flex items-center gap-2">Food <Coffee size={20}/></h2>
               </div>
               <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-500">
                 <ShoppingBag size={24} />
               </div>
            </div>
            <div className="bg-white rounded-2xl p-5 growie-shadow flex items-center justify-between border-l-4 border-growie-green">
               <div>
                 <p className="text-sm font-medium text-gray-500 mb-1">Total Round-Ups Saved</p>
                 <h2 className="text-2xl font-bold text-growie-dark text-growie-green">₹154</h2>
               </div>
               <div className="w-12 h-12 bg-growie-green/20 rounded-full flex items-center justify-center text-growie-dark">
                 <RefreshCw size={24} />
               </div>
            </div>
            <div className="bg-white rounded-2xl p-5 growie-shadow flex items-center justify-between">
               <div>
                 <p className="text-sm font-medium text-gray-500 mb-1">Avg Daily Spending</p>
                 <h2 className="text-2xl font-bold text-growie-dark">₹680</h2>
               </div>
               <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-500">
                 <Calendar size={24} />
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Left Column (Transactions & Filters) */}
            <div className="xl:col-span-2 space-y-6">
              
              {/* 3. Filters & Controls */}
              <div className="bg-white p-4 rounded-2xl growie-shadow flex flex-col md:flex-row gap-4 justify-between items-center z-10 relative">
                {/* Search */}
                <div className="relative w-full md:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="Search by name..." 
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-growie-green focus:ring-1 focus:ring-growie-green transition-all"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Filters */}
                <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
                  <div className="flex items-center bg-gray-50 rounded-lg p-1 border border-gray-100 min-w-max">
                     {['All', 'Food', 'Travel', 'Shopping'].map((cat) => (
                       <button
                         key={cat}
                         onClick={() => setCategoryFilter(cat)}
                         className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                           categoryFilter === cat 
                           ? 'bg-white text-growie-dark shadow-sm border border-gray-200' 
                           : 'text-gray-500 hover:text-growie-dark'
                         }`}
                       >
                         {cat}
                       </button>
                     ))}
                  </div>

                  {/* Round Up Toggle */}
                  <div className="flex items-center gap-2 bg-growie-green/10 px-3 py-2 rounded-xl border border-growie-green/30 min-w-max">
                     <span className="text-sm font-bold text-growie-dark flex items-center gap-1"><RefreshCw size={14}/> Show Impact</span>
                     <div 
                       className={`w-10 h-5 rounded-full relative cursor-pointer shadow-inner transition-colors ml-2 ${showRoundUp ? 'bg-growie-green' : 'bg-gray-300'}`}
                       onClick={() => setShowRoundUp(!showRoundUp)}
                     >
                       <div className={`w-4 h-4 bg-white rounded-full absolute top-0.5 shadow-sm transition-transform ${showRoundUp ? 'right-0.5' : 'left-0.5'}`}></div>
                     </div>
                  </div>
                </div>
              </div>

              {/* 4. Smart Transaction List */}
              <div className="space-y-4">
                {processedTransactions.map((tx) => {
                  const Icon = tx.icon;
                  return (
                    <div key={tx.id} className={`bg-white rounded-2xl p-5 growie-shadow hover:shadow-md transition-shadow border-l-4 ${tx.roundUp > 0 && showRoundUp ? 'border-growie-green' : 'border-transparent'}`}>
                      <div className="flex justify-between items-start sm:items-center gap-4 flex-col sm:flex-row">
                        
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl ${tx.category === 'Food' ? 'bg-orange-50 text-orange-500' : tx.category === 'Travel' ? 'bg-blue-50 text-blue-500' : tx.category === 'Shopping' ? 'bg-purple-50 text-purple-500' : 'bg-gray-50 text-gray-500'}`}>
                            <Icon size={24} />
                          </div>
                          <div>
                            <h3 className="font-bold text-growie-dark text-lg">{tx.name}</h3>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <span>{new Date(tx.date).toLocaleDateString()}</span>
                              <span>•</span>
                              <span className="bg-gray-100 px-2 py-0.5 rounded text-xs font-medium border border-gray-200 flex items-center gap-1">
                                {tx.category}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="font-bold text-xl text-growie-dark">₹{tx.amount}</div>
                          {showRoundUp && tx.roundUp > 0 && (
                            <div className="text-sm font-bold text-growie-green flex items-center justify-end gap-1 mt-1 bg-growie-green/10 px-2 py-0.5 rounded-md w-max ml-auto">
                              <RefreshCw size={12} /> +₹{tx.roundUp} auto-saved
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Transaction Level Insight */}
                      {tx.insight && (
                        <div className="mt-4 pt-3 border-t border-gray-50 flex items-start gap-2 text-sm">
                           <AlertCircle size={16} className={`${tx.insight.includes('saved') ? 'text-growie-green' : 'text-orange-400'} shrink-0 mt-0.5`} />
                           <span className={tx.insight.includes('saved') ? 'text-[#526B5F] font-medium' : 'text-gray-500'}>{tx.insight}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
                
                {processedTransactions.length === 0 && (
                  <div className="text-center py-10 text-gray-400 bg-white rounded-2xl">
                    <Search size={40} className="mx-auto mb-3 opacity-20" />
                    <p>No transactions found matching your criteria.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column (Insights) */}
            <div className="xl:col-span-1 space-y-6">
              
              {/* 9. Smart Alerts */}
              <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
                <h3 className="text-red-600 font-bold flex items-center gap-2 mb-4">
                  <AlertTriangle size={20} /> Action Needed
                </h3>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-xl border border-red-100 shadow-sm">
                    <p className="text-sm font-bold text-growie-dark mb-1">Weekly Budget Exceeded</p>
                    <p className="text-xs text-gray-600 mb-2">You have spent 15% more than your planned budget for this week.</p>
                    <button className="text-xs font-bold text-red-500 hover:text-red-700">Review Budget →</button>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-orange-100 shadow-sm">
                    <p className="text-sm font-bold text-growie-dark mb-1">High Food Spend</p>
                    <p className="text-xs text-gray-600 mb-2">Reduce food spending by ₹500/mo to hit your Macbook goal faster.</p>
                  </div>
                </div>
              </div>

              {/* 8. Spending Pattern Insights */}
              <div className="bg-white rounded-2xl p-6 growie-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-growie-green opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                <h3 className="text-xl font-bold text-growie-dark mb-2">Pattern Discovery</h3>
                <p className="text-sm text-gray-500 mb-6">AI analysis of your recent activity</p>

                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                      <Calendar size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">Most spending occurs on weekends.</p>
                      <p className="text-xs text-gray-500 mt-1">Consider planning weekend budgets ahead of time.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                      <Coffee size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">Food is your highest expense category.</p>
                      <p className="text-xs text-gray-500 mt-1">Currently accounts for 45% of discretionary spend.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500 shrink-0">
                      <TrendingUp size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">Your daily spending increased this week.</p>
                      <p className="text-xs text-gray-500 mt-1">Up ₹120/day compared to last week.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Highlight System Promo */}
              <div className="bg-gradient-to-br from-[#0c2317] to-growie-dark text-white rounded-2xl p-6 relative overflow-hidden shadow-lg">
                <div className="absolute top-0 right-0 w-24 h-24 bg-growie-green opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                <h3 className="font-bold mb-2">Round-Ups are working! 🚀</h3>
                <p className="text-sm text-gray-300 mb-4 h-max mb-10">You've saved a total of <strong className="text-growie-green">₹154</strong> entirely from spare change this month.</p>
                <button className="bg-growie-green text-growie-dark font-bold py-2 px-4 rounded-lg text-sm hover:bg-[#00F098] transition-colors w-full">View Investment</button>
              </div>

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

export default TransactionsPage;
