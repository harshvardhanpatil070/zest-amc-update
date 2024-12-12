import React from "react";

// Placeholder image paths
import forex from "../assets/images/forex.jpg";
import indices from "../assets/images/indices.jpg";
import Commodities from "../assets/images/Commodities.jpg";
import crypto from "../assets/images/crypto.jpg";

const OurServices = () => {
  return (
    <section className="bg-background py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-semibold text-black mb-8">
          Our Services
        </h2>
        <p className="text-lg sm:text-xl text-black mb-16">
          Trillions are traded daily, and we’ve selected the best CFD instruments to give you a competitive advantage.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          {/* Service 1: Buy and Sell Crypto */}
          <div className="service-card bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <img
                src={forex}
                alt="Buy and Sell Crypto"
                className="mx-auto w-16 h-16 sm:w-20 sm:h-20 object-cover"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-2">
            Active Trading on Major Global Indices
            </h3>
            <p className="text-sm sm:text-base text-text">
            Gain exposure to top indices like Nasdaq, Dow, Nikkei, and Hang Seng, ensuring a diversified and high-growth potential portfolio.
            </p>
          </div>

          {/* Service 2: Wide Variety of Cryptos */}
          <div className="service-card bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <img
                src={indices}
                alt="Wide Variety of Cryptos"
                className="mx-auto w-16 h-16 sm:w-20 sm:h-20 object-cover"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-2">
            Proven Performance with Market-Beating Returns
            </h3>
            <p className="text-sm sm:text-base text-text">
            Zest GIF consistently delivers returns that outperform the market, helping you achieve your financial goals faster.
            </p>
          </div>

          {/* Service 3: Crypto Investments */}
          <div className="service-card bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <img
                src={Commodities}
                alt="Crypto Investments"
                className="mx-auto w-16 h-16 sm:w-20 sm:h-20 object-cover"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-2">
            Leverage the Power of Futures Trading
            </h3>
            <p className="text-sm sm:text-base text-text">
            Leverage the Power of Futures Trading
            </p>
          </div>
          <div className="service-card bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <img
                src={Commodities}
                alt="Crypto Investments"
                className="mx-auto w-16 h-16 sm:w-20 sm:h-20 object-cover"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-2">
            Trade Without Borders
            </h3>
            <p className="text-sm sm:text-base text-text">
            Tap into global financial markets with expert strategies, professional management, and unmatched opportunities for growth.
            </p>
          </div>

          {/* Service 4: Personalized Support */}
          <div className="service-card bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <img
                src={crypto}
                alt="Personalized Support"
                className="mx-auto w-16 h-16 sm:w-20 sm:h-20 object-cover"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-2">
              Personalized Support
            </h3>
            <p className="text-sm sm:text-base text-text">
              Benefit from our dedicated customer support team, ready to assist you
              with all your cryptocurrency needs and queries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;