import React from 'react';
import { Menu, Sun, Moon, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  theme: string;
  setTheme: (theme: string) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  sidebarOpen, 
  setSidebarOpen, 
  theme, 
  setTheme,
  setIsAuthenticated
}) => {
  const navigate = useNavigate();
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem('userLoggedIn');
    sessionStorage.removeItem('userLoggedIn');
    
    // Update authentication state
    setIsAuthenticated(false);
    
    // Redirect to login page
    navigate('/login');
  };
  
  return (
    <header className="navbar bg-base-100 shadow-md px-4 z-30">
      <div className="flex-none">
        <button 
          className="btn btn-square btn-ghost lg:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle sidebar"
        >
          <Menu />
        </button>
      </div>
      
      <div className="flex-1 px-2 mx-2">
        <Link to="/" className="flex items-center">
          <Logo theme={theme} />
          <span className="text-xl font-bold">Learning Portal</span>
        </Link>
      </div>
      
      <div className="flex-none gap-2">
        <button 
          className="btn btn-ghost btn-circle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? <Moon /> : <Sun />}
        </button>
        
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="User avatar" src="https://i.pravatar.cc/150?img=68" />
            </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <Link to="/settings" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li><Link to="/settings">Settings</Link></li>
            <li>
              <button onClick={handleLogout} className="text-error">
                <LogOut size={16} />
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
