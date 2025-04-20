import React, { useState } from 'react';
import DashboardNavbar from '../components/DashboardNavbar';
import Footer from '../components/Footer';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div>
      <DashboardNavbar />

      <div className="max-w-screen-xl mx-auto p-6 mt-20"> {/* Added mt-20 for margin */}
        <h1 className="text-3xl font-bold mb-4">Welcome back, User!</h1>
        <p className="text-gray-600 mb-8">Your personalized stock dashboard overview</p>

        <div className="flex gap-4 mb-6 border-b pb-2">
          {['Overview', 'Portfolio', 'Recommendations'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded ${activeTab === tab ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="border rounded p-4 mb-6 bg-gray-50">
          <h2 className="font-semibold text-lg mb-1">Demo Mode</h2>
          <p className="text-gray-600">
            This is a limited demo of your dashboard. Sign up for full access to all features, including personalized recommendations and real-time data.
          </p>
        </div>

        {/* Active Tab Content */}
        {activeTab === 'Overview' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="border rounded p-5 bg-white shadow-sm">
              <h3 className="text-sm mb-1 text-gray-500">Total Value</h3>
              <p className="text-2xl font-bold">$16,098.07</p>
              <p className="text-green-600 text-sm">+ $1,824.56 (12.8%)</p>
            </div>

            {/* Card 2 */}
            <div className="border rounded p-5 bg-white shadow-sm">
              <h3 className="text-sm mb-1 text-gray-500">Today's Change</h3>
              <p className="text-2xl font-bold text-green-600">+ $432.18</p>
              <p className="text-green-600 text-sm">+2.76% today</p>
            </div>

            {/* Card 3 */}
            <div className="border rounded p-5 bg-white shadow-sm">
              <h3 className="text-sm mb-1 text-gray-500">Top Performer</h3>
              <p className="text-xl font-bold">AMZN</p>
              <p className="text-green-600 text-sm">+3.2% today</p>
            </div>

            {/* Card 4 */}
            <div className="border rounded p-5 bg-white shadow-sm">
              <h3 className="text-sm mb-1 text-gray-500">New Recommendations</h3>
              <p className="text-2xl font-bold">2</p>
              <p className="text-gray-600 text-sm">2 Buy, 0 Hold</p>
            </div>

            {/* Card 5 */}
            <div className="border rounded p-5 bg-white shadow-sm">
              <h3 className="text-sm mb-1 text-gray-500">Watchlist Gains</h3>
              <p className="text-2xl font-bold text-green-600">+ $678.45</p>
              <p className="text-green-600 text-sm">+4.3% this week</p>
            </div>

            {/* Card 6 */}
            <div className="border rounded p-5 bg-white shadow-sm">
              <h3 className="text-sm mb-1 text-gray-500">Market News</h3>
              <p className="text-gray-600 text-sm">5 new updates</p>
            </div>
          </div>
        )}

        {activeTab === 'Recommendations' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Stock Recommendations</h2>
            <div className="border rounded p-5 mb-4 bg-white shadow-sm">
              <div className="flex justify-between items-center">
                <p className="font-semibold">TSLA</p>
                <div>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded mr-3">Buy</span>
                  <span className="font-semibold">$177.58</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Portfolio' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Your Portfolio</h2>
            <p className="text-gray-600">Coming soon: a detailed view of your holdings, performance, and history.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
