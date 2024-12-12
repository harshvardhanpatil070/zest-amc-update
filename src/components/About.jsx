import React from "react";
import about from "../assets/images/ab.jpg"; 

const About = () => {
  return (
    <section className="bg-background py-16 mt-20"> 
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary">About Zest AMC</h1>
          <p className="mt-4 text-lg text-text">
            Your Trusted Partner in Digital Asset Investments.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <img
              src={about}
              alt="About Zest AMC"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full text-sm shadow-md">
              Since 2024
            </div>
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-3xl font-semibold text-primary mb-6">
              Who We Are
            </h2>
            <p className="text-text mb-6">
              Zest AMC is revolutionizing the digital assets space, offering seamless trading opportunities on global indices and cryptocurrencies. Founded on principles of trust and innovation, we provide secure, transparent, and reliable investment options.
            </p>
            <p className="text-text mb-6">
              Our platform is designed to meet the growing demand for leverage and flexibility in digital asset trading, with offerings like the Zest Global Indices Fund (Zest GIF) that help clients access global markets with market-beating returns.
            </p>

            <div className="mt-4">
              <button className="bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-accent transition">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-primary text-center mb-8">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1: Innovation */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Innovation
              </h3>
              <p className="text-sm text-text">
                Constantly evolving to provide cutting-edge solutions in global asset trading.
              </p>
            </div>

            {/* Value 2: Security */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Security
              </h3>
              <p className="text-sm text-text">
                Your safety is our priority. We implement industry-leading practices to secure your investments.
              </p>
            </div>

            {/* Value 3: Accessibility */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Accessibility
              </h3>
              <p className="text-sm text-text">
                Our platform is user-friendly, designed to empower traders of all experience levels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;