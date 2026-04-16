import React from 'react';
import { Coffee, ShoppingBag, ShoppingCart, Zap, TrendingUp, RefreshCw } from 'lucide-react';

const TransactionsList = () => {
  const transactions = [
    {
      id: 1,
      title: 'Starbucks Coffee',
      date: 'Today, 8:45 AM',
      amount: '$4.50',
      type: 'Purchase',
      rounded: '+$0.50',
      icon: <Coffee size={20} className="text-amber-600" />,
      bg: 'bg-amber-100',
    },
    {
      id: 2,
      title: 'Whole Foods Market',
      date: 'Yesterday, 6:30 PM',
      amount: '$142.30',
      type: 'Purchase',
      rounded: '+$0.70',
      icon: <ShoppingCart size={20} className="text-green-600" />,
      bg: 'bg-green-100',
    },
    {
      id: 3,
      title: 'Weekly Auto-Invest',
      date: '10 Apr 2026',
      amount: '$50.00',
      type: 'Investment',
      rounded: null,
      icon: <TrendingUp size={20} className="text-blue-600" />,
      bg: 'bg-blue-100',
    },
    {
      id: 4,
      title: 'Netflix Subscription',
      date: '08 Apr 2026',
      amount: '$15.99',
      type: 'Purchase',
      rounded: '+$0.01',
      icon: <Zap size={20} className="text-red-600" />,
      bg: 'bg-red-100',
    },
    {
      id: 5,
      title: 'Round-Up Sweep',
      date: '05 Apr 2026',
      amount: '$12.45',
      type: 'Deposit',
      rounded: null,
      icon: <RefreshCw size={20} className="text-growie-dark" />,
      bg: 'bg-growie-green',
    }
  ];

  return (
    <div className="bg-white rounded-3xl p-6 lg:p-8 growie-shadow border border-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-growie-dark">Recent Activity</h2>
        <button className="text-sm font-semibold text-growie-green hover:text-growie-dark transition-colors">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {transactions.map((tx) => (
          <div key={tx.id} className="flex items-center justify-between p-3 sm:p-4 rounded-2xl hover:bg-[#F7FAF8] transition-colors border border-transparent hover:border-gray-50">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${tx.bg}`}>
                {tx.icon}
              </div>
              <div>
                <h4 className="font-bold text-growie-dark text-sm sm:text-base">{tx.title}</h4>
                <p className="text-xs text-[#526B5F] flex items-center gap-2">
                  {tx.date} 
                  <span className="w-1 h-1 rounded-full bg-gray-300"></span> 
                  {tx.type}
                </p>
              </div>
            </div>

            <div className="text-right">
              <p className="font-bold text-growie-dark text-sm sm:text-base">{tx.amount}</p>
              {tx.rounded && (
                <p className="text-xs font-bold text-growie-green flex items-center justify-end gap-1">
                  <RefreshCw size={10} /> {tx.rounded}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionsList;
