import React, { useState, forwardRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import logo from '../assets/images.jpg';

const Navbar = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const location = useLocation();
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
        document.getElementById('nav-search-input')?.focus();
      }, 100);
    }
  };

  const handleSearchCancel = () => {
    setIsSearchActive(false);
    setSearchQuery('');
  };

  return (
    <div
      className="tt-navbar w-nav"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        padding: '1rem',
      }}
    >
      <div
        ref={ref}
        style={{
          width: '100%',
          maxWidth: '80rem',
          borderRadius: '1.5rem',
        }}
      >
        <header
          className="tt-navbar-strip transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(0,0,0,0.15)]"
          style={{
            width: '100%',
            padding: '1rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            borderRadius: '1.5rem',
          }}
        >
          <div
            className="text-2xl font-bold flex items-center gap-3 cursor-pointer"
            onClick={handleLogoClick}
            style={{ flex: isSearchActive ? '0 0 auto' : '1' }}
          >
            <img
              src={logo}
              alt="NepseDai Logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            {!isSearchActive && (
              <span
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: '600',
                  background: 'linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.5px',
                }}
              >
                NepseDai
              </span>
            )}
          </div>

          <div
            className={`flex items-center transition-all duration-300 ease-in-out ${
              isSearchActive ? 'flex-1 mx-6' : ''
            }`}
          >
            <div
              className={`relative flex items-center ${
                isSearchActive ? 'w-full' : 'w-auto'
              }`}
            >
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
                    id="nav-search-input"
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
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
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

          <div className="flex items-center gap-4 ml-4">
            <button
              className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => navigate('/login')}
            >
              Log in
            </button>
            <button
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors"
              onClick={() => navigate('/signup')}
            >
              Sign up
            </button>
          </div>
        </header>
      </div>
    </div>
  );
});

export default Navbar;
