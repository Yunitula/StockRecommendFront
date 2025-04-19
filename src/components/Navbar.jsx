import React from 'react'; 
import { useNavigate, Link } from 'react-router-dom'; 
import logo from '../assets/images.jpg';  

const Navbar = () => {   
  const navigate = useNavigate();    

  return (     
    <nav className="flex items-center justify-between p-6 border-b">       
      <div className="text-2xl font-bold flex items-center gap-3">         
        <Link to="/"> {/* Wrap logo with Link for navigation */} 
          <img src={logo} alt="StockSense Logo" className="w-10 h-10 rounded-full object-cover" />         
        </Link>
        <Link to="/"> {/* Wrap text with Link for navigation */}
          StocksMuji      
        </Link>
      </div>       
      <div className="flex gap-4 items-center">         
        <button className="px-4 py-2 border rounded">Log in</button>         
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

