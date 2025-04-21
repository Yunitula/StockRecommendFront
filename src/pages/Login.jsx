import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-28">
      <Navbar />

      <div className="flex justify-center items-center h-screen bg-white">
        <div className="max-w-md w-full p-8 border rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">Login</h2>
          <p className="text-gray-600 mb-6">Enter your email and password to access your account!</p>

          <input type="email" placeholder="Email" className="w-full p-3 mb-4 border rounded" />
          <input type="password" placeholder="Password" className="w-full p-3 mb-4 border rounded" />

          <div className="flex justify-between mb-6">
            <p className="text-black font-medium text-sm"> </p>
            {/* Replace <a href="#"> with a <button> for actions */}
            <button
              onClick={() => console.log('Redirecting to forgot password')}
              className="text-gray-500 font-medium text-sm"
            >
              Forgot password?
            </button>
          </div>

          <div className="flex justify-center">
            <button 
              className="w-full px-4 py-3 bg-black text-white rounded"
              onClick={() => navigate('/')} // You can adjust this to the proper login route
            >
              Login
            </button>
          </div>

          <p className="text-center text-gray-600 mt-6">
            Don't have an account? 
            {/* Use <button> for navigation instead of <a href="#"> */}
            <button
              onClick={() => navigate('/signup')} // Navigate to the signup page
              className="text-black font-medium"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
