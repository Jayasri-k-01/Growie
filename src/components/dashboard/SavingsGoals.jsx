import React from 'react';
import { Plane, ShieldAlert, Laptop } from 'lucide-react';

const SavingsGoals = () => {
  const goals = [
    {
      id: 1,
      title: 'Emergency Fund',
      target: 10000,
      current: 8500,
      icon: <ShieldAlert size={20} className="text-red-500" />,
      bg: 'bg-red-50',
      color: 'bg-red-500'
    },
    {
      id: 2,
      title: 'Japan Trip 2026',
      target: 5000,
      current: 2150,
      icon: <Plane size={20} className="text-blue-500" />,
      bg: 'bg-blue-50',
      color: 'bg-blue-500'
    },
    {
      id: 3,
      title: 'New MacBook Pro',
      target: 2500,
      current: 2400,
      icon: <Laptop size={20} className="text-purple-500" />,
      bg: 'bg-purple-50',
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="bg-white rounded-3xl p-6 growie-shadow border border-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-growie-dark">Savings Goals</h2>
        <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-growie-dark hover:bg-growie-green transition-colors text-lg font-bold">
          +
        </button>
      </div>

      <div className="space-y-6">
        {goals.map(goal => {
          const percentage = Math.round((goal.current / goal.target) * 100);
          return (
            <div key={goal.id} className="group cursor-pointer">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${goal.bg}`}>
                    {goal.icon}
                  </div>
                  <h4 className="font-bold text-sm text-growie-dark">{goal.title}</h4>
                </div>
                <span className="text-xs font-bold text-[#526B5F]">{percentage}%</span>
              </div>
              
              <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full ${goal.color} transition-all duration-1000 ease-out group-hover:brightness-110`} 
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between items-center mt-2 text-xs font-medium text-gray-400">
                <span>${goal.current.toLocaleString()} saved</span>
                <span>Goal: ${goal.target.toLocaleString()}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SavingsGoals;
