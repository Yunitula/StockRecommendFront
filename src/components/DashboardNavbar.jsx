import React from 'react'; 
import { useNavigate, useLocation } from 'react-router-dom'; 
import logo from '../assets/images.jpg'; 
import { FaSearch, FaUserCircle, FaBell } from 'react-icons/fa'; 

const DashboardNavbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogoClick = () => {
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/');
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-white z-50 flex items-center justify-between py-2 px-4 border-b shadow">
            {/* Logo Section */}
            <div
                className="text-2xl font-bold flex items-center gap-3 cursor-pointer"
                onClick={handleLogoClick}
            >
                <img src={logo} alt="NepseDai Logo" className="w-10 h-10 rounded-full object-cover" />
                <span>NepseDai</span>
            </div>

            {/* Search Bar */}
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

            {/* Profile and Notifications Icons */}
            <div className="flex gap-4 items-center">
                <FaBell className="text-black text-2xl cursor-pointer" />
                <FaUserCircle className="text-black text-2xl cursor-pointer" />
            </div>
        </nav>
    );
};

export default DashboardNavbar;
