// src/pages/SignIn.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
  const [form, setForm] = useState({ email: '', password: '', remember: false });

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle the sign-in logic here
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen px-4 py-20 bg-gradient-to-b from-yellow-50 via-white to-yellow-100">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-white shadow-lg rounded-xl">
        <h2 className="mb-6 text-3xl font-bold text-green-700">Sign In to Let's Eat</h2>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-green-500"
            placeholder="you@email.com"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-green-500"
            placeholder="Password"
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <label className="flex items-center text-gray-700">
            <input type="checkbox" name="remember" checked={form.remember} onChange={handleChange} className="mr-2" />
            Remember me
          </label>
          <Link to="/forgot-password" className="text-sm text-green-600 hover:underline">Forgot password?</Link>
        </div>
        <button type="submit" className="w-full py-2 font-semibold text-white transition-colors bg-green-600 rounded-lg hover:bg-green-700">
          Sign In
        </button>
        <div className="mt-6 text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium text-green-700 hover:underline">Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default Signin;
