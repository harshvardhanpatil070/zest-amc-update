import React from "react";

const WhyUs = () => {
  return (
    <section className="bg-primary text-secondary py-16">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
          Why Choose Zest AMC?
        </h1>
        <p className="text-lg sm:text-xl mb-8">
          Zest AMC provides innovative, secure, and user-friendly trading
          solutions. Here’s why Zest AMC is your ideal partner for digital
          asset trading.
        </p>

        <ul className="space-y-6 text-lg sm:text-xl">
          <li>
            <strong>Expertise:</strong> Our team consists of seasoned blockchain
            professionals with years of industry experience, ensuring you
            receive top-notch service.
          </li>

          <li>
            <strong>Reliability:</strong> We prioritize security and reliability,
            protecting your investments with state-of-the-art tools and a secure
            platform.
          </li>

          <li>
            <strong>Innovation:</strong> We stay ahead of the curve by adopting the
            latest advancements in blockchain technology, providing you with
            cutting-edge solutions.
          </li>

          <li>
            <strong>Client-Centric Approach:</strong> Your satisfaction is our
            priority. We tailor our services to meet your specific requirements,
            ensuring a personalized experience.
          </li>

          <li>
            <strong>Leverage:</strong> Instead of India's taxation issues, we offer
            a 1:200 leverage to help maximize your potential returns.
          </li>

          <li>
            <strong>Market Beating Returns:</strong> Our active trading on global
            indices like Nasdaq, Dow, Nikkei, and Hang Seng ensures consistent
            returns for our clients.
          </li>
        </ul>

        <a
          href="/about"
          className="mt-8 inline-block bg-accent text-primary font-semibold text-lg sm:text-xl lg:text-2xl px-6 py-3 rounded-md transition-transform transform hover:scale-105 focus-visible:scale-105"
          title="Learn More About Zest AMC"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default WhyUs;