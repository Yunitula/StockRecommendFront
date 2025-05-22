import React from 'react';
import { MdOutlineAccountBalance } from 'react-icons/md';
import { BiBrain } from 'react-icons/bi';
import { FaChartLine } from 'react-icons/fa';

const features = [
  {
    title: 'Portfolio Tracking',
    description: 'Track your investments in real-time with detailed performance metrics and visualizations.',
    icon: MdOutlineAccountBalance,
    link: '/signup'
  },
  {
    title: 'Smart Recommendations',
    description: 'Get personalized stock recommendations based on your investment style and market conditions.',
    icon: BiBrain,
    link: '/signup'
  },
  {
    title: 'Growth Analysis',
    description: 'Visualize stock performance with interactive charts and detailed growth analysis.',
    icon: FaChartLine,
    link: '/signup'
  },
];

const KeyFeatures = () => {
  return (
    <section className="text-center py-16">
      <h2 className="text-4xl font-bold mb-4">Key Features</h2>
      <p className="text-gray-600 mb-12">Everything you need to make informed investment decisions</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
        {features.map((feature, index) => (
          <div key={index} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="mb-6">
              <feature.icon className="w-12 h-12 mx-auto text-black" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
            <div className="mt-4 flex items-center justify-end">
              <a href={feature.link} className="text-sm font-medium flex items-center gap-2 text-gray-900 hover:opacity-70 transition-opacity">
                Learn more
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 7.38197L15.4495 7.10674L15.4484 7.10617L15.4455 7.10464L15.4188 7.09062C15.393 7.07688 15.3516 7.05438 15.2965 7.02295C15.1862 6.96006 15.0213 6.86173 14.8166 6.72686C14.4066 6.45661 13.8417 6.0427 13.2383 5.47699C12.029 4.34323 10.6931 2.62752 10.1006 0.257465L8.16032 0.742531C8.87215 3.58987 10.4711 5.62416 11.8704 6.93606C11.8933 6.95756 11.9162 6.97887 11.9391 7H0V9H11.9391C11.9162 9.02112 11.8933 9.04244 11.8704 9.06394C10.4711 10.3758 8.87215 12.4101 8.16032 15.2575L10.1006 15.7425C10.6931 13.3725 12.029 11.6568 13.2383 10.523C13.8417 9.9573 14.4066 9.54339 14.8166 9.27313C15.0213 9.13826 15.1862 9.03994 15.2965 8.97705C15.3516 8.94562 15.393 8.92311 15.4188 8.90937L15.4455 8.89535L15.4484 8.89383L15.4495 8.89326L16 8.61803V7.38197Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
