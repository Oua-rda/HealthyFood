import React from 'react'
import foodyImg from '../assets/food.jpg'



function Hero() {
  return (
    <section className="w-full mt-20 bg-gradient-to-br ">
      <div className="relative max-w-[1640px] mx-7 flex justify-center items-center h-[600px] px-4 rounded-3xl overflow-hidden shadow-xl">
        {/* Background Image with responsive aspect ratio */}
        <img 
          src={foodyImg} 
          alt="Healthy food delivery" 
          className="absolute inset-0 z-0 object-center h-full transition-all duration-700 ease-in-out "
          style={{ aspectRatio: '16/7', maxHeight: '600px' }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center bg-gradient-to-br rounded-3xl from-black/60 via-black/40 to-black/20 animate-fade-in">
          <h1 className="mb-3 text-5xl font-extrabold leading-tight tracking-tight text-white md:text-7xl lg:text-8xl drop-shadow-2xl">
            Eat <span className="text-yellow-400">Healthy</span>,<br className="hidden lg:block"/>Live <span className="text-yellow-400">Better</span>
          </h1>
          <p className="mt-5 text-xl md:text-2xl lg:text-3xl text-gray-100 max-w-[600px] font-medium drop-shadow-lg animate-fade-in-up">
            Nutritious meals, fresh ingredients, and quick delivery to your door.
          </p>
          <button className="px-12 py-4 mt-8 text-xl font-semibold text-black transition-all duration-300 ease-in-out transform bg-yellow-400 rounded-full shadow-lg hover:bg-yellow-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up">
            Order Now
          </button>
        </div>
      </div>
    
    </section>
  )
}

export default Hero
