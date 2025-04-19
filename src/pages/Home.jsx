import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import KeyFeatures from '../components/KeyFeatures';
import Button from '../components/Button';
import Card from '../components/Card';
import Footer from '../components/Footer';

const Home = () => {
  const keyFeaturesRef = useRef(null);
  const navigate = useNavigate();

  const handleViewFeaturesClick = () => {
    keyFeaturesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleGetStartedClick = () => {
    navigate('/signup');
  };

  const marketData = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 182.63, change: '+2.4%' },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: 415.32, change: '+1.8%' },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 178.75, change: '+3.2%' },
    { symbol: 'NVDA', name: 'NVIDIA Corp.', price: 924.67, change: '+4.1%' },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 165.93, change: '+1.5%' },
  ];

  return (
    <div>
      <Navbar />
      <main className="pt-32 pb-20  px-6 flex flex-col md:flex-row items-center justify-center gap-16 max-w-screen-xl mx-auto">
        <div className="flex-1 max-w-lg">
          <h1 className="text-6xl font-bold mb-8 text-center md:text-left leading-tight">
            Smart Stock Recommendations
          </h1>
          <p className="text-xl text-gray-600 mb-10 text-center md:text-left">
            Track your investments and get personalized stock recommendations based on your portfolio and market trends.
          </p>
          <div className="flex gap-6 justify-center md:justify-start">
            <Button text="Get Started" onClick={handleGetStartedClick} />
            <Button text="View Features" variant="outline" onClick={handleViewFeaturesClick} />
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center w-full">
          <Card title="Market Overview">
            <div className="space-y-5">
              {marketData.map((stock) => (
                <div key={stock.symbol} className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{stock.symbol}</p>
                    <p className="text-gray-500 text-sm">{stock.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">${stock.price}</p>
                    <p className="text-green-500 text-sm">{stock.change}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
      <section ref={keyFeaturesRef} className="pt-24 pb-32 px-12 bg-gray-50">
        <KeyFeatures />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
