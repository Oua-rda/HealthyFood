import React from "react";
import { motion } from "framer-motion";
import { Send, MessageSquare } from "lucide-react";

function Contact() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-yellow-50 via-white to-yellow-100" id="contact">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/30 to-transparent blur-3xl opacity-40"></div>

      <div className="relative z-10 max-w-4xl px-6 mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-4xl font-bold text-gray-800"
        >
          💬 Contact Us
        </motion.h2>

        <p className="mb-12 text-gray-600">
          Have a suggestion, review, or idea for our menu? We’d love to hear from you!
        </p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="p-8 space-y-6 bg-white border border-yellow-100 shadow-lg rounded-2xl"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you for your feedback 💛");
          }}
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="text-left">
              <label className="block mb-2 font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                required
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="text-left">
              <label className="block mb-2 font-medium text-gray-700">Your Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                required
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>

          <div className="text-left">
            <label className="block mb-2 font-medium text-gray-700">Message / Suggestion</label>
            <textarea
              rows="5"
              placeholder="Tell us what you think..."
              required
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="flex items-center justify-center w-full gap-2 px-6 py-3 font-semibold text-white transition bg-yellow-500 shadow-md md:w-auto rounded-xl hover:bg-yellow-600"
          >
            <Send className="w-5 h-5" />
            Send Message
          </motion.button>
        </motion.form>

        <div className="flex items-center justify-center gap-2 mt-12 text-gray-600">
          <MessageSquare className="w-5 h-5 text-yellow-500" />
          <span>We value your opinion and update our menu based on your ideas!</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
