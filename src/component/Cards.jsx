import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineShoppingCart, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import cardImg from "../assets/dish.jpeg";

const dishes = [
  { id: 1, name: "Quinoa & Grilled Veggie Bowl", calories: 1234, price: 12.99, img: cardImg },
  { id: 2, name: "Avocado & Salmon Poke Bowl", calories: 980, price: 15.99, img: cardImg },
  { id: 3, name: "Mediterranean Falafel Plate", calories: 1100, price: 10.99, img: cardImg },
];

function Cards() {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  return (
    <div className="max-w-[1640px] mx-auto px-6 py-12">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-gray-800">🍴 Our Dishes</h2>
        <p className="mt-2 text-gray-500">Healthy, delicious meals made for you</p>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {dishes.map((dish) => (
          <div
            key={dish.id}
            className="overflow-hidden transition duration-300 transform bg-white shadow-md rounded-xl hover:scale-105 hover:shadow-xl"
          >
            <img src={dish.img} alt={dish.name} className="object-cover w-full h-56" />
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-800">{dish.name}</h3>
                <button
                  aria-label={favorites.includes(dish.id) ? "Remove from favorites" : "Add to favorites"}
                  onClick={() => toggleFavorite(dish.id)}
                  className="text-2xl text-[#9cc43c] hover:text-[#789f52] transition"
                >
                  {favorites.includes(dish.id) ? <AiFillHeart /> : <AiOutlineHeart />}
                </button>
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

      <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate("/menu")}
          className="bg-gray-900 text-white font-medium px-6 py-3 rounded-lg hover:bg-[#9cc43c] transition duration-300"
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default Cards;
