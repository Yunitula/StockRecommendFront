import React, { useState, forwardRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaSearch, FaUserCircle, FaUserPlus } from 'react-icons/fa';
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
    <div className="w-full sticky top-0 z-[1000] flex justify-center bg-transparent p-4">
      <header className="w-full max-w-[80rem] p-4 sm:p-6 flex items-center justify-between bg-white shadow rounded-3xl">
        <div
          className={`flex items-center gap-3 cursor-pointer transition-all duration-300 ${
            isSearchActive ? 'flex-none' : 'flex-1'
          } hover:drop-shadow-[0_0_6px_rgba(1,1,1,0.7)]`}
          onClick={handleLogoClick}
          aria-label="Go to home"
        >
          <img
            src={logo}
            alt="NepseDai Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span
            className={`font-bold text-lg sm:text-xl md:text-2xl transition-all duration-200 ${
              isSearchActive ? 'hidden sm:inline' : 'inline'
            }hover:text-gray-800`}
          >
            NepseDai
          </span>
        </div>

        <div
          className={`flex items-center transition-all duration-300 ${
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
                className="p-2 hover:bg-gray-100 rounded-full hover:drop-shadow-[0_0_6px_rgba(1,1,1,0.7)] transition"
                aria-label="Open search"
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
                    className="p-2 hover:bg-gray-200 rounded-full mr-1 hover:drop-shadow-[0_0_6px_rgba(1,1,1,0.7)] transition"
                    aria-label="Clear search"
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
                  className="px-4 py-2 hover:bg-gray-200 text-sm hover:drop-shadow-[0_0_6px_rgba(1,1,1,0.7)] transition"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4 ml-4">
          <button
            className="sm:hidden text-2xl p-2 hover:drop-shadow-[0_0_6px_rgba(1,1,1,0.7)] transition"
            onClick={() => navigate('/login')}
            aria-label="Log in"
          >
            <FaUserCircle />
          </button>
          <button
            className="hidden sm:block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg hover:drop-shadow-[0_0_6px_rgba(1,1,1,0.7)] transition"
            onClick={() => navigate('/login')}
          >
            Log in
          </button>
          <button
            className="sm:hidden text-2xl p-2 hover:drop-shadow-[0_0_6px_rgba(1,1,1,0.7)] transition"
            onClick={() => navigate('/signup')}
            aria-label="Sign up"
          >
            <FaUserPlus />
          </button>
          <button
            className="hidden sm:block px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 hover:drop-shadow-[0_0_10px_rgba(0,1,1,0.8)] transition"
            onClick={() => navigate('/signup')}
          >
            Sign up
          </button>
        </div>
      </header>
    </div>
  );
});

export default Navbar;
