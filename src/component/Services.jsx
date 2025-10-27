import React from "react";
import { motion } from "framer-motion";
import { Scale, Leaf, Dumbbell } from "lucide-react";

const greenColor = "#9cc43c";

const services = [
  {
    icon: <Leaf size={40} color={greenColor} />,
    title: "Lose Weight",
    description:
      "Personalized meal plans designed to help you lose weight in a healthy, sustainable way.",
  },
  {
    icon: <Dumbbell size={40} color={greenColor} />,
    title: "Gain Weight",
    description:
      "Nutritious and calorie-rich dishes to help you build muscle and gain weight effectively.",
  },
  {
    icon: <Scale size={40} color={greenColor} />,
    title: "Fix Your Weight",
    description:
      "Balanced meal options that help you maintain your ideal weight and stay healthy.",
  },
];

function Services() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b">
      {/* Decorative glowing background */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-200/30 to-transparent blur-3xl opacity-40"></div>

      <div className="relative z-10 max-w-6xl px-6 mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-4xl font-bold text-gray-800"
        >
          🍽️ Our Services
        </motion.h2>

        <p className="mb-12 text-gray-600">
          Choose your goal and let us prepare the perfect meal plan for you.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-8 transition-all duration-300 bg-white border-2 border-transparent shadow-lg rounded-2xl"
              style={{ '--tw-border-opacity': 1 }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = greenColor;
                e.currentTarget.style.boxShadow = `0 0 15px ${greenColor}80`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <div className="flex flex-col items-center">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="mb-4"
                >
                  {service.icon}
                </motion.div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-500">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
