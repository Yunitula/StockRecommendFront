import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/images.jpg';
import { FaSearch, FaUserCircle, FaBell } from 'react-icons/fa';

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
    <div className="tt-navbar w-nav" style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      padding: '1rem'
    }}>
      <header className="tt-navbar-strip" style={{
        width: '100%',
        maxWidth: '80rem',
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        borderRadius: '1.5rem'
      }}>
        <div
          className="text-2xl font-bold flex items-center gap-3 cursor-pointer"
          onClick={handleLogoClick}
          style={{ flex: isSearchActive ? '0 0 auto' : '1' }}
        >
          <img src={logo} alt="NepseDai Logo" className="w-10 h-10 rounded-full object-cover" />
          {!isSearchActive && <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}>NepseDai</span>}
        </div>
        <div className={`flex items-center transition-all duration-300 ease-in-out ${isSearchActive ? 'flex-1 mx-6' : ''}`}>
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
        <div className="flex gap-4 items-center relative ml-4">
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
      </header>
    </div>
  );
};

export default DashboardNavbar;
