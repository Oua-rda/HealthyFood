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
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold">🥗 Our Full Menu</h2>
        <p className="mt-2 text-gray-600">Explore all of our healthy & delicious meals</p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {dishes.map((dish) => (
          <div
            key={dish.id}
            className="overflow-hidden transition duration-300 transform bg-white shadow-md rounded-xl hover:scale-105 hover:shadow-xl"
          >
            {/* Image */}
            <img
              src={dish.img}
              alt={dish.name}
              className="object-cover w-full h-56"
            />

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-semibold">{dish.name}</h3>
              <p className="mt-1 text-sm text-gray-500">Calories: {dish.calories}</p>

              {/* Button */}
              <button className="px-4 py-2 mt-4 font-medium text-white transition duration-300 bg-yellow-500 rounded-lg hover:bg-yellow-600">
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
