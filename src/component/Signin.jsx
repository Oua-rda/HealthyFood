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
  const greenColor = "#9cc43c";
  const handleSubmit = e => {
    e.preventDefault();
    // Handle the sign-in logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-b from-green-50 via-white to-green-100">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-white shadow-lg rounded-2xl"
      style={{ '--tw-border-opacity': 1, border: "2px solid transparent" }}
  onMouseEnter={e => {
    e.currentTarget.style.borderColor = greenColor;
    e.currentTarget.style.boxShadow = `0 0 15px ${greenColor}80`;
  }}
  onMouseLeave={e => {
    e.currentTarget.style.borderColor = 'transparent';
    e.currentTarget.style.boxShadow = '';
  }}>
        <div className="flex items-center justify-center gap-3 mb-6">
  <div
    className="flex items-center justify-center w-10 h-10 transition-colors duration-300 bg-green-100 rounded-full cursor-pointer hover:bg-green-200"
    // onClick logic if needed here
  >
    <span className="text-xl">🥗</span>
  </div>
  <h2 className="text-3xl font-bold text-[#789f52]">Let's Eat</h2>
</div>

        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#9cc43c]"
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
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#9cc43c]"
            placeholder="Password"
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <label className="flex items-center text-gray-700">
            <input type="checkbox" name="remember" checked={form.remember} onChange={handleChange} className="mr-2" />
            Remember me
          </label>
          <Link to="/forgot-password" className="text-sm text-[#789f52] hover:underline">Forgot password?</Link>
        </div>
        <button
          type="submit"
          className="w-full py-2 font-semibold text-white bg-[#9cc43c] rounded-lg hover:bg-[#789f52] transition-colors"
        >
          Sign In
        </button>
        <div className="mt-6 text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium text-[#789f52] hover:underline">Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default Signin;
