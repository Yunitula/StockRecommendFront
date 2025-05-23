import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaSearch, FaUserCircle, FaBell } from 'react-icons/fa';
import logo from '../assets/images.jpg';

const DashboardNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
    if (!isSearchActive) {
      setTimeout(() => {
        document.getElementById('search-input')?.focus();
      }, 100);
    }
  };

  const handleSearchCancel = () => {
    setIsSearchActive(false);
    setSearchQuery('');
  };

  return (
    <div className="w-full sticky top-0 z-[1000] flex justify-center bg-transparent p-4">
      <header className="w-full max-w-[80rem] p-4 sm:p-6 flex items-center justify-between bg-white shadow rounded-3xl">
        <div
          className={`flex items-center gap-3 cursor-pointer transition-all duration-300 ${isSearchActive ? 'flex-none' : 'flex-1'}`}
          onClick={handleLogoClick}
        >
          <img src={logo} alt="NepseDai Logo" className="w-10 h-10 rounded-full object-cover" />
          {!isSearchActive && (
            <span className="text-lg font-semibold">
              NepseDai
            </span>
          )}
        </div>

        <div className={`flex items-center transition-all duration-300 ${isSearchActive ? 'flex-1 mx-6' : ''}`}>
          <div className={`relative flex items-center ${isSearchActive ? 'w-full' : 'w-auto'}`}>
            {!isSearchActive ? (
              <button
                onClick={toggleSearch}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <FaSearch className="text-xl" />
              </button>
            ) : (
              <div className="w-full flex items-center bg-gray-100 rounded-full overflow-hidden">
                <FaSearch className="text-gray-500 ml-4" />
                <input
                  id="search-input"
                  type="text"
                  placeholder="Search stocks..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 bg-transparent border-none outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="p-2 hover:bg-gray-200 rounded-full mr-1"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                )}
                <button
                  onClick={handleSearchCancel}
                  className="px-4 py-2 hover:bg-gray-200 text-sm"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4 ml-4 relative">
          <div className="relative">
            <button className="text-2xl p-2" onClick={() => {
              setShowNotifications(!showNotifications);
              setShowUserMenu(false);
            }}>
              <FaBell />
            </button>
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow p-3 text-sm z-50">
                <p>User Notification</p>
              </div>
            )}
          </div>

          <div className="relative">
            <button className="text-2xl p-2" onClick={() => {
              setShowUserMenu(!showUserMenu);
              setShowNotifications(false);
            }}>
              <FaUserCircle />
            </button>
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow p-3 text-sm z-50">
                <p>Profile</p>
                <p className="mt-2 cursor-pointer hover:text-blue-500" onClick={() => navigate('/logout')}>
                  Logout
                </p>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default DashboardNavbar;
