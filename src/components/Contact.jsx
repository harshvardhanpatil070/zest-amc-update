import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-background min-h-screen flex items-center py-16 mt-15">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-primary mb-4">
            Get in Touch with Zest AMC
          </h2>
          <p className="text-lg text-text">
            We’d love to hear from you! Reach out to us with any questions or inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <form
              action="https://formsubmit.co/zestcapitaldotcom@gmail.com" // Replace with your email
              method="POST"
              className="space-y-6"
            >
              {/* Disable CAPTCHA */}
              <input type="hidden" name="_captcha" value="false" />

              {/* Redirect to Thank You Page */}
              <input
                type="hidden"
                name="_next"
                value="https://zestamc.com"
              />

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Type your message here"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 text-white bg-primary rounded-md shadow hover:bg-primary-dark transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center bg-primary text-white rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="mb-4">
              Feel free to reach out to us via the following contact details.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold">Email</h4>
                <p>contact@zestamc.com</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Phone</h4>
                <p>+1 (800) 123-4567</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Address</h4>
                <p>Dubai, UAE</p>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold">Follow Us</h4>
              <div className="flex space-x-6 mt-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <FaFacebook size={28} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <FaTwitter size={28} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <FaInstagram size={28} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <FaLinkedin size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;