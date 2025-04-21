import React from 'react';

const features = [
  {
    title: 'Portfolio Tracking',
    description: 'Track your investments in real-time with detailed performance metrics and visualizations.',
  },
  {
    title: 'Smart Recommendations',
    description: 'Get personalized stock recommendations based on your investment style and market conditions.',
  },
  {
    title: 'Growth Analysis',
    description: 'Visualize stock performance with interactive charts and detailed growth analysis.',
  },
];

const KeyFeatures = () => {
  return (
    <section className="text-center py-16">
      <h2 className="text-4xl font-bold mb-4">Key Features</h2>
      <p className="text-gray-600 mb-12">Everything you need to make informed investment decisions</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
        {features.map((feature, index) => (
          <div key={index} className="p-6 bg-white rounded shadow">
            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
