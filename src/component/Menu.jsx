import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineShoppingCart, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import cardImg from "../assets/dish.jpeg";

const greenColor = "#9cc43c";

const dishes = [
  { id: 1, name: "Quinoa & Grilled Veggie Bowl", calories: 1234, price: 12.99, img: cardImg },
  { id: 2, name: "Avocado & Salmon Poke Bowl", calories: 980, price: 15.99, img: cardImg },
  { id: 3, name: "Mediterranean Falafel Plate", calories: 1100, price: 10.99, img: cardImg },
  { id: 4, name: "Grilled Chicken & Brown Rice", calories: 890, price: 13.49, img: cardImg },
  { id: 5, name: "Vegan Buddha Bowl", calories: 760, price: 11.99, img: cardImg },
  { id: 6, name: "Shrimp & Quinoa Salad", calories: 950, price: 14.99, img: cardImg },
  { id: 7, name: "Tofu & Veggie Stir Fry", calories: 870, price: 10.99, img: cardImg },
  { id: 8, name: "Beef & Broccoli Bowl", calories: 1050, price: 13.99, img: cardImg },
];

function Menu() {
  const [favorites, setFavorites] = useState([]);
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  return (
    <div className="mt-20 max-w-[1640px] mx-auto px-6 py-12">
     <div className="flex flex-col items-center justify-center mb-10 text-center">
  <div className="flex items-center justify-center gap-3">
    <span className='flex items-center justify-center w-10 h-10 text-xl transition-colors duration-300 bg-green-100 rounded-full hover:bg-green-200'>
      🥗
    </span>
    <h2 className="text-4xl font-bold">Our Full Menu</h2>
  </div>
  <p className="mt-2 text-gray-600">Explore all of our healthy & delicious meals</p>
</div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {dishes.map((dish) => (
          <div
            key={dish.id}
            className="overflow-hidden transition duration-300 transform bg-white shadow-md rounded-xl hover:scale-105"
            style={{ border: "2px solid transparent", '--tw-border-opacity': 1 }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = greenColor;
              e.currentTarget.style.boxShadow = `0 0 15px ${greenColor}80`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'transparent';
              e.currentTarget.style.boxShadow = '';
            }}
          >
            <img src={dish.img} alt={dish.name} className="object-cover w-full h-56" />
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-800">{dish.name}</h3>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={favorites.includes(dish.id) ? "Remove from favorites" : "Add to favorites"}
                  onClick={() => toggleFavorite(dish.id)}
                  className={`flex items-center justify-center p-2 rounded-lg font-medium transition duration-300
                    ${
                      favorites.includes(dish.id)
                        ? "bg-[#9cc43c] text-white hover:bg-[#789f52]"
                        : "bg-transparent text-[#9cc43c] hover:bg-[#9cc43c] hover:text-white"
                    }
                  `}
                >
                  {favorites.includes(dish.id) ? (
                    <AiFillHeart size={24} />
                  ) : (
                    <AiOutlineHeart size={24} />
                  )}
                </motion.button>
              </div>
              <p className="mb-1 text-sm text-gray-500">Calories: {dish.calories}</p>
              <p className="mb-4 text-lg font-semibold">${dish.price.toFixed(2)}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Add ${dish.name} to cart`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-white transition duration-300 bg-[#9cc43c] hover:bg-[#789f52] shadow-md"
              >
                <AiOutlineShoppingCart size={20} />
                Order Now
              </motion.button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
