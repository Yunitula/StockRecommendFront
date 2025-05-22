import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import KeyFeatures from "../components/KeyFeatures";
import Button from "../components/Button";
import Card from "../components/Card";
import Footer from "../components/Footer";
import MarqueeSection from "../components/Marquee";
import { Typewriter } from "react-simple-typewriter";
import Custom3DCarousel from '../components/Carousel';

const Home = () => {
  const keyFeaturesRef = useRef(null);
  const navigate = useNavigate();

  const handleViewFeaturesClick = () => {
    const element = keyFeaturesRef.current;
    if (element) {
      const offset = 80;
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = window.pageYOffset + elementRect.top - offset;

      window.scrollTo({
        top: absoluteElementTop,
        behavior: "smooth"
      });
    }
  };

  const handleGetStartedClick = () => {
    navigate("/signup");
  };

  const handleDemoClick = () => {
    navigate("/dashboard");
  };

  const marketData = [
    { symbol: "AAPL", name: "Apple Inc.", price: 182.63, change: "-2.4%" },
    { symbol: "MSFT", name: "Microsoft Corp.", price: 415.32, change: "+1.8%" },
    { symbol: "AMZN", name: "Amazon.com Inc.", price: 178.75, change: "+3.2%" },
    { symbol: "NVDA", name: "NVIDIA Corp.", price: 924.67, change: "-4.1%" },
    { symbol: "GOOGL", name: "Alphabet Inc.", price: 165.93, change: "+1.5%" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <main className="flex-1 px-4 sm:px-6 lg:px-8 pt-20 md:pt-2 lg:pt-2 pb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-10 max-w-7xl mx-auto">
          <div className="flex-1 w-full md:max-w-xl flex flex-col justify-center">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-center md:text-left leading-tight"
              style={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                color: "rgb(13, 13, 13)",
                letterSpacing: '-0.02em'
              }}>
              Smart Stock Recommendations
            </h1>

            <div className="h-20 sm:h-24 md:h-28 mb-2 flex items-center">
              <p
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 text-center md:text-left leading-snug"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 300,
                  color: "rgb(71, 84, 103)",
                }}>
                <Typewriter
                  words={[
                    "Personalized stock picks based on your portfolio and market trends.",
                    "Smart insights to help you invest with confidence.",
                    "AI-powered recommendations tailored to your financial goals.",
                    "Stay ahead with data-driven stock suggestions.",
                    "Optimize your investments with intelligent market analysis.",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={60}
                  deleteSpeed={40}
                  delaySpeed={2000}
                />
              </p>
            </div>

            <p
              className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 text-center md:text-left"
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: 400,
                color: "rgb(71, 84, 103)",
                lineHeight: '1.6',
              }}>
              Track your investments and get personalized stock recommendations
              based on your portfolio and market trends.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-2">
              <Button
                text="Get Started"
                variant="outline"
                onClick={handleGetStartedClick}
              />
              <Button
                text="View Features"
                variant="outline"
                onClick={handleViewFeaturesClick}
              />
              <Button text="View Demo >" onClick={handleDemoClick} />
            </div>
          </div>

          <div className="w-full md:flex-1 md:max-w-xl mt-8 md:mt-0">
            <Card title="Market Overview">
              <div className="space-y-3 sm:space-y-4">
                {marketData.map((stock) => (
                  <div
                    key={stock.symbol}
                    className="flex justify-between items-center p-2 sm:p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div>
                      <p className="text-sm sm:text-base font-medium"
                        style={{
                          fontFamily: '"DM Sans", sans-serif',
                          fontWeight: 500,
                          color: "rgb(13, 13, 13)",
                        }}>
                        {stock.symbol}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500"
                        style={{
                          fontFamily: '"DM Sans", sans-serif',
                          fontWeight: 400,
                        }}>
                        {stock.name}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm sm:text-base font-medium"
                        style={{
                          fontFamily: '"DM Sans", sans-serif',
                          fontWeight: 500,
                        }}>
                        ${stock.price}
                      </p>
                      <p className={`text-xs sm:text-sm ${stock.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                        {stock.change}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>

      <section className="w-full bg-gray-50">
        <MarqueeSection marketData={marketData} />
      </section>

      <section
        ref={keyFeaturesRef}
        id="features"
        className="w-full bg-gray-50 py-10 sm:py-14 md:py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <KeyFeatures />
        </div>
      </section>

      <section className="w-full bg-white py-10 md:py-14 lg:py-16 overflow-x-hidden">
        <div className="w-full px-0 mx-auto">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center"
            style={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              color: "#18181b",
              letterSpacing: '-0.01em',
            }}
          >
            Explore Latest News
          </h2>
          <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] px-6">
            <Custom3DCarousel />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;