import React from "react";
import can from "../assets/images/candle.jpg";

function HeroSection() {
  return (
    <section className="hero-section bg-background text-black h-screen flex items-center justify-center mt-36 sm:mt-0"> {/* Increased mt-36 for mobile only */}
      <div className="hero-container max-w-screen-xl px-4 sm:px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center w-full h-full">
        {/* Hero Content */}
        <div className="hero-content text-center lg:text-left mb-12 lg:mb-0 lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Zest Global Indices Fund
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            Zest AMC provides active trading on global indices, market-beating
            returns, and advanced leverage options. Explore a seamless
            experience tailored for investors and traders alike.
          </p>
          <ul className="text-left list-disc list-inside mb-8">
            <li>Active trading on Nasdaq, Dow, Nikkei, Hang Seng</li>
            <li>Market-beating returns and futures trading</li>
            <li>Leverage up to 1:200 with expert tools</li>
          </ul>
          <div className="hero-buttons space-x-4">
            <button className="primary-btn bg-accent text-white px-6 py-3 rounded-md text-lg hover:bg-primary transition duration-300">
              Get Started
            </button>
            <button className="secondary-btn border-2 border-black text-black px-6 py-3 rounded-md text-lg hover:bg-black hover:text-white transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hero-image lg:w-1/2 flex justify-center mb-12 lg:mb-0">
          <img
            src={can}
            alt="Zest AMC Trading Platform"
            className="w-full max-w-lg h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;