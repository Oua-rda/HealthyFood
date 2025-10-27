// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AiFillTag, AiOutlineClose, AiOutlineMenu,
  AiOutlineSearch, AiFillBell, AiFillHeart
} from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaUserFriends, FaWallet } from 'react-icons/fa';
import { MdFavorite, MdHelp } from 'react-icons/md';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [notifications, setNotifications] = useState(2); // Example notification count
  const navigate = useNavigate();

  return (
    <div className='fixed top-0 left-0 w-full z-50 bg-white shadow-md max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      {/* Left side */}
      <div className='flex items-center'>
        <div onClick={() => setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
       <Link to="/" className='px-2 text-2xl sm:text-3xl lg:text-4xl cursor-pointer'>
          Let's <span className='font-bold'>Eat</span>
        </Link>
      </div>

      {/* Search */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[600px]'>
        <AiOutlineSearch size={20} />
        <input
          className='p-2 bg-transparent focus:outline-none'
          type="text"
          placeholder='Search foods'
        />
      </div>

      {/* Right side */}
      <div className='flex items-center space-x-4'>
        {/* Notification */}
        <button className='relative items-center hidden p-2 text-white bg-black rounded-full md:flex'>
          <AiFillBell size={22} />
          {notifications > 0 && (
            <span className="absolute inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full -top-1 -right-1">
              {notifications}
            </span>
          )}
        </button>
        {/* Favorites */}
        <Link to="/favorites" className='items-center hidden p-2 text-white bg-black rounded-full md:flex'>
          <AiFillHeart size={22} />
        </Link>
        {/* Cart */}
        <button className='relative items-center hidden p-2 text-white bg-black rounded-full md:flex'>
          <BsFillCartFill size={22}  />
          
        </button>
        {/* Sign In */}
        <button
          onClick={() => navigate('/signin')}
          className='items-center hidden px-4 py-2 text-white bg-black rounded-full md:flex'
        >
          Sign In
        </button>
      </div>

      {/* Mobile menu overlay */}
      {nav && <div className='fixed top-0 left-0 z-10 w-full h-screen bg-black/80' onClick={() => setNav(false)} />}
      {/* Mobile side drawer */}
      <div className={nav
        ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-20 duration-300'
        : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-20 duration-300'}>
        <AiOutlineClose onClick={() => setNav(!nav)} size={30} className='absolute cursor-pointer right-4 top-4' />
        <h2 className='p-4 text-2xl'>
          Let's <span className='font-bold'>Eat</span>
        </h2>
        <nav>
          <ul className='flex flex-col p-4 text-gray-800'>
            <li className='flex py-4 text-xl'><TbTruckDelivery size={25} className='mr-4' />Orders</li>
            <li className='flex py-4 text-xl'><MdFavorite size={25} className='mr-4' />Favorites</li>
            <li className='flex py-4 text-xl'><AiFillHeart size={25} className='mr-4' />Favorite Dishes</li>
            <li className='flex py-4 text-xl'><FaWallet size={25} className='mr-4' />Wallet</li>
            <li className='flex py-4 text-xl'><MdHelp size={25} className='mr-4' />Help</li>
            <li className='flex py-4 text-xl'><AiFillTag size={25} className='mr-4' />Promotions</li>
            <li className='flex py-4 text-xl'><BsFillSaveFill size={25} className='mr-4' />Best Ones</li>
            <li className='flex py-4 text-xl'><FaUserFriends size={25} className='mr-4' />Invite Friends</li>
            <li className='flex py-4 text-xl' onClick={() => navigate('/signin')}>
              <FaUserFriends size={25} className='mr-4' />Sign In
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
