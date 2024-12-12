import React, { useState } from "react";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Zest Global Indices Fund (Zest GIF)?",
      answer:
        "Zest GIF offers active trading on major global indices such as Nasdaq, Dow, Nikkei, and Hang Seng, delivering market-beating returns with futures trading options.",
    },
    {
      question: "Why should I choose Zest AMC over others?",
      answer:
        "Zest AMC provides leverage of up to 1:200, a more favorable option compared to India's complex taxation system (STT, brokerages, and additional fees). We offer margin opportunities unlike Indian markets.",
    },
    {
      question: "What is the return rate for Zest AMC?",
      answer:
        "For 2024, Zest AMC has delivered 10.29% in monthly returns. We offer crypto-friendly services, accepting USDT as the preferred currency.",
    },
    {
      question: "Are there any lock-in periods for investments?",
      answer:
        "No, there is no lock-in period. You can withdraw your funds anytime, giving you the flexibility to manage your investments on your terms.",
    },
    {
      question: "How does Zest AMC ensure my security?",
      answer:
        "Zest AMC ensures safety by using trusted CRM platforms like zestamc.com and client.zestamc.com. Always verify your transactions through these platforms to avoid scams.",
    },
    {
      question: "Who are the professional traders at Zest AMC?",
      answer:
        "Zest AMC is managed by professional traders who have successfully managed over $15M. These experts offer valuable guidance to maximize your returns.",
    },
    {
      question: "How does leverage work at Zest AMC?",
      answer:
        "Zest AMC offers leverage of up to 1:200. This means for every $1 you invest, you can control up to $200 in assets, maximizing your trading potential.",
    },
  ];

  return (
    <section className="bg-primary py-12">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20">
        <h2 className="text-2xl font-bold text-white mb-6">Zest AMC FAQs</h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-sm"
            >
              <button
                className="w-full text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 text-text font-medium focus:outline-none flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-gray-700 bg-gray-50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;