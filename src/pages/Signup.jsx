import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-28">
      <Navbar />

      <div className="flex justify-center items-center h-screen bg-white">
        <div className="max-w-md w-full p-8 border rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">Sign Up</h2>
          <p className="text-gray-600 mb-6">Create an account to get started with NepseDai</p>

          <input type="text" placeholder="Full Name" className="w-full p-3 mb-4 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-3 mb-4 border rounded" />
          <input type="password" placeholder="Password" className="w-full p-3 mb-4 border rounded" />
          <input type="password" placeholder="Confirm Password" className="w-full p-3 mb-6 border rounded" />

          <div className="flex justify-center">
            <button 
              className="w-full px-4 py-3 bg-black text-white rounded"
              onClick={() => navigate('/')} // Redirect to homepage (or dashboard)
            >
              Create Account
            </button>
          </div>

          <p className="text-center text-gray-600 mt-6">
            Already have an account? 
            <button
              onClick={() => navigate('/login')} // Navigate to login page
              className="text-black font-medium"
            >
              Login
            </button>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Signup;
