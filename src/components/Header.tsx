import React from 'react';
import { Menu, X, Sun, Moon, User, LogOut } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  theme: string;
  setTheme: (theme: string) => void;
}

const Header: React.FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen, theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-10">
      <div className="navbar-start flex-1">
        <button 
          className="btn btn-ghost btn-circle lg:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle sidebar"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        
        <div className="flex items-center ml-2">
          <Logo theme={theme} />
          <a className="btn btn-ghost text-xl">Learning Portal</a>
        </div>
      </div>
      
      <div className="navbar-end">
        <button 
          className="btn btn-ghost btn-circle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
        
        <div className="dropdown dropdown-end ml-2">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="User avatar" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
            </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <User size={16} />
              </a>
            </li>
            <li>
              <a>
                Logout
                <LogOut size={16} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
