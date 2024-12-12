import React from "react";

const Services = () => {
  const services = [
    {
      title: "Active Trading on Major Global Indices",
      description:
        "Gain exposure to top indices like Nasdaq, Dow, Nikkei, and Hang Seng, ensuring a diversified and high-growth potential portfolio.",
      icon: "https://via.placeholder.com/80?text=Crypto1", // Replace with an actual icon later
    },
    {
      title: "Market-Beating Returns",
      description:
        "Proven Performance with Market-Beating Returns.",
      icon: "https://via.placeholder.com/80?text=Crypto2", // Replace with an actual icon later
    },
    {
      title: "Advanced Futures Trading",
      description:
        "Benefit from high-leverage options and active futures trading strategies designed for maximized profits.",
      icon: "https://via.placeholder.com/80?text=Crypto3", // Replace with an actual icon later
    },
    {
      title: "Global Opportunities",
      description:
        "Tap into global financial markets with expert strategies, professional management, and unmatched opportunities for growth.",
      icon: "https://via.placeholder.com/80?text=Support", // Replace with an actual icon later
    },
  ];

  return (
    <div className="min-h-screen bg-background text-text mt-15"> {/* Added mt-20 for spacing */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-primary text-center mb-10">
          Our Services
        </h1>
        <p className="text-lg text-center text-gray-600 mb-16">
          Explore the range of services we offer to help you succeed.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-20 h-20 mb-6"
              />
              <h3 className="text-xl font-semibold text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;