import React from 'react'
import foodyImg from '../assets/food.jpg'
import '../component/Hero.css';


function Hero() {
  return (
    <section className="mt-20 w-full bg-gradient-to-br ">
      <div className="relative max-w-[1640px] mx-7 flex justify-center items-center h-[600px] px-4 rounded-3xl overflow-hidden shadow-xl">
        {/* Background Image with responsive aspect ratio */}
        <img 
          src={foodyImg} 
          alt="Healthy food delivery" 
          className="  absolute inset-0  h-full  object-center z-0 transition-all duration-700 ease-in-out"
          style={{ aspectRatio: '16/7', maxHeight: '600px' }}
        />
        {/* Overlay */}
        <div className=" absolute inset-0 bg-gradient-to-br rounded-3xl from-black/60 via-black/40 to-black/20 z-10 flex flex-col justify-center items-center text-center px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white drop-shadow-2xl leading-tight tracking-tight mb-3">
            Eat <span className="text-yellow-400">Healthy</span>,<br className="hidden lg:block"/>Live <span className="text-yellow-400">Better</span>
          </h1>
          <p className="mt-5 text-xl md:text-2xl lg:text-3xl text-gray-100 max-w-[600px] font-medium drop-shadow-lg animate-fade-in-up">
            Nutritious meals, fresh ingredients, and quick delivery to your door.
          </p>
          <button className="mt-8 px-12 py-4 bg-yellow-400 text-black text-xl font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:bg-yellow-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up">
            Order Now
          </button>
        </div>
      </div>
    
    </section>
  )
}

export default Hero
