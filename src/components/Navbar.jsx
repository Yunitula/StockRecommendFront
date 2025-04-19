import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/images.jpg';

const Navbar = () => {
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
        <nav className="fixed top-0 left-0 w-full bg-white z-50 flex items-center justify-between py-3 px-4 border-b shadow">
            <div
                className="text-2xl font-bold flex items-center gap-3 cursor-pointer"
                onClick={handleLogoClick}
            >
                <img src={logo} alt="StockSense Logo" className="w-10 h-10 rounded-full object-cover" />
                StockSense
            </div>
            <div className="flex gap-4 items-center">
                <button className="px-4 py-2 border rounded"  onClick={() => navigate('/Login')}>Log in</button>
                <button
                    className="px-4 py-2 bg-black text-white rounded"
                    onClick={() => navigate('/signup')}
                >
                    Sign up
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
