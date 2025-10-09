import React from "react";
import cardImg from "../assets/dish.jpeg";

function Menu() {
  const dishes = [
    { id: 1, name: "Quinoa & Grilled Veggie Bowl", calories: 1234, img: cardImg },
    { id: 2, name: "Avocado & Salmon Poke Bowl", calories: 980, img: cardImg },
    { id: 3, name: "Mediterranean Falafel Plate", calories: 1100, img: cardImg },
    { id: 4, name: "Grilled Chicken & Brown Rice", calories: 890, img: cardImg },
    { id: 5, name: "Vegan Buddha Bowl", calories: 760, img: cardImg },
    { id: 6, name: "Shrimp & Quinoa Salad", calories: 950, img: cardImg },
    { id: 7, name: "Tofu & Veggie Stir Fry", calories: 870, img: cardImg },
    { id: 8, name: "Beef & Broccoli Bowl", calories: 1050, img: cardImg },
  ];

  return (
    <div className="mt-20 max-w-[1640px] mx-auto px-6 py-12">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">🥗 Our Full Menu</h2>
        <p className="text-gray-600 mt-2">Explore all of our healthy & delicious meals</p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dishes.map((dish) => (
          <div
            key={dish.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl transition duration-300"
          >
            {/* Image */}
            <img
              src={dish.img}
              alt={dish.name}
              className="w-full h-56 object-cover"
            />

            {/* Content */}
            <div className="p-5">
              <h3 className="font-semibold text-xl">{dish.name}</h3>
              <p className="text-gray-500 text-sm mt-1">Calories: {dish.calories}</p>

              {/* Button */}
              <button className="mt-4 bg-yellow-500 text-white font-medium px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
