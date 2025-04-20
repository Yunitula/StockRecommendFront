import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/images.jpg';
import { FaSearch, FaUserCircle, FaBell } from 'react-icons/fa';

const DashboardNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 flex items-center justify-between py-3 px-4 border-b shadow">
      {/* Logo */}
      <div
        className="text-2xl font-bold flex items-center gap-3 cursor-pointer"
        onClick={handleLogoClick}
      >
        <img src={logo} alt="NepseDai Logo" className="w-10 h-10 rounded-full object-cover" />
        NepseDai
      </div>

      {/* Search */}
      <div className="flex gap-4 flex-1 items-center justify-center">
        <div className="relative w-1/3">
          <input 
            type="text" 
            placeholder="Search stocks..." 
            className="w-full px-4 py-2 border rounded"
          />
          <FaSearch className="absolute top-3 right-3 text-gray-500" />
        </div>
      </div>

      {/* Icons */}
      <div className="flex gap-4 items-center relative">
        {/* Notifications */}
        <div className="relative">
          <FaBell 
            className="text-black text-2xl cursor-pointer" 
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowUserMenu(false);
            }}
          />
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow p-3 text-sm z-50">
              <p>User Notification</p>
            </div>
          )}
        </div>

        {/* User Menu */}
        <div className="relative">
          <FaUserCircle 
            className="text-black text-2xl cursor-pointer"
            onClick={() => {
              setShowUserMenu(!showUserMenu);
              setShowNotifications(false);
            }}
          />
          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow p-3 text-sm z-50">
              <button
                onClick={() => navigate('/signup')}
                className="w-full px-4 py-2 bg-black text-white text-sm rounded"
              >
                Sign Up for Access
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
