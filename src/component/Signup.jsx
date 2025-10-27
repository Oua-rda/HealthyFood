import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
  


const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    weight: '',
    height: '',
    goal: '',
    foodPreferences: [],
  });

  const goals = ['Lose Weight', 'Gain Weight', 'Fix Weight'];
  const foodOptions = ['Protein foods', 'Keto','Halal', 'Egg-Free', 'Vegetarian', 'Gluten-Free'];

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name === 'foodPreferences') {
      const newPrefs = checked
        ? [...form.foodPreferences, value]
        : form.foodPreferences.filter(pref => pref !== value);
      setForm(prev => ({ ...prev, foodPreferences: newPrefs }));
    } else {
      setForm(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }
  };
  const greenColor = "#9cc43c";

  const handleSubmit = e => {
    e.preventDefault();
    // Add validation and registration logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 pb-20 pt-28 bg-gradient-to-b from-green-50 via-white to-green-100">
      <form onSubmit={handleSubmit} className="w-full max-w-4xl p-8 bg-white shadow-lg rounded-xl"
       style={{ '--tw-border-opacity': 1, border: "2px solid transparent" }}
  onMouseEnter={e => {
    e.currentTarget.style.borderColor = greenColor;
    e.currentTarget.style.boxShadow = `0 0 15px ${greenColor}80`;
  }}
  onMouseLeave={e => {
    e.currentTarget.style.borderColor = 'transparent';
    e.currentTarget.style.boxShadow = '';
  }}>
        <div className="flex items-center justify-center gap-3 mb-6 cursor-pointer" onClick={() => navigate('/')}>
          <div className="flex items-center justify-center w-10 h-10 text-xl transition-colors duration-300 bg-green-100 rounded-full hover:bg-green-200">
            🥗
          </div>
          <h2 className="text-3xl font-bold text-[#9cc43c]">Let's Eat</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Left column */}
          <div className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#9cc43c]"
                placeholder="Username"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#9cc43c]"
                placeholder="email@example.com"
              />
            </div>

            <div>
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

            <div>
              <label className="block mb-1 text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#9cc43c]"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-700">Weight (kg)</label>
              <input
                type="number"
                name="weight"
                value={form.weight}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#9cc43c]"
                placeholder="70"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700">Height (cm)</label>
              <input
                type="number"
                name="height"
                value={form.height}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#9cc43c]"
                placeholder="175"
              />
            </div>

            <fieldset>
              <legend className="mb-2 font-semibold text-gray-700">Your Goal</legend>
              <div className="flex flex-wrap gap-4">
                {goals.map(goal => (
                  <label key={goal} className="inline-flex items-center gap-2">
                    <input
                      type="radio"
                      name="goal"
                      value={goal}
                      checked={form.goal === goal}
                      onChange={handleChange}
                      className="text-[#9cc43c] focus:ring-[#9cc43c]"
                      required
                    />
                    <span>{goal}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-2 font-semibold text-gray-700">Food Preferences </legend>
              <div className="flex flex-wrap gap-4">
                {foodOptions.map(option => (
                  <label key={option} className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="foodPreferences"
                      value={option}
                      checked={form.foodPreferences.includes(option)}
                      onChange={handleChange}
                      className="text-[#9cc43c] focus:ring-[#9cc43c]"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 mt-6 font-semibold text-white bg-[#9cc43c] rounded-lg hover:bg-[#789f52] transition-colors"
        >
          Sign Up
        </button>

        <div className="mt-6 text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/signin" className="font-medium text-[#789f52]  hover:underline">
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
