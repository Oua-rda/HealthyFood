import React from "react";
import { useNavigate } from "react-router-dom";
import cardImg from "../assets/dish.jpeg";

function Cards() {
  const navigate = useNavigate();

  const dishes = [
    { id: 1, name: "Quinoa & Grilled Veggie Bowl", calories: 1234, img: cardImg },
    { id: 2, name: "Avocado & Salmon Poke Bowl", calories: 980, img: cardImg },
    { id: 3, name: "Mediterranean Falafel Plate", calories: 1100, img: cardImg },
  ];

  return (
    <div className="max-w-[1640px] mx-auto px-6 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">🍴 Our Dishes</h2>
        <p className="text-gray-500 mt-2">Healthy, delicious meals made for you</p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dishes.map((dish) => (
          <div
            key={dish.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl transition duration-300"
          >
            <img src={dish.img} alt={dish.name} className="w-full h-56 object-cover" />

            <div className="p-5">
              <h3 className="font-semibold text-xl">{dish.name}</h3>
              <p className="text-gray-500 text-sm mt-1">Calories: {dish.calories}</p>

              <button className="mt-4 bg-yellow-500 text-white font-medium px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Redirect to Food.jsx */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate("/Menu")}
          className="bg-gray-900 text-white font-medium px-6 py-3 rounded-lg hover:bg-yellow-600 transition duration-300"
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default Cards;
