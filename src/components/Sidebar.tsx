import React, { useEffect, useRef } from 'react';
import { Home, BookOpen, Bookmark, Settings, HelpCircle, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside the sidebar (only on mobile)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && 
          window.innerWidth < 1024 &&
          sidebarRef.current && 
          !sidebarRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, setIsOpen]);

  // Handle navigation item click - close sidebar on mobile only
  const handleNavClick = () => {
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile overlay - visible when sidebar is open on mobile */}
      {isOpen && window.innerWidth < 1024 && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      
      {/* Sidebar container - always visible on desktop */}
      <aside 
        ref={sidebarRef}
        className={`
          fixed lg:static top-0 left-0 z-30
          w-64 h-full bg-base-200 overflow-y-auto
          transition-transform duration-300 ease-in-out
          ${isOpen || window.innerWidth >= 1024 ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}
      >
        {/* Sidebar content with proper padding */}
        <div className="p-4 pt-16 lg:pt-4">
          <div className="flex justify-between items-center mb-6 lg:hidden">
            <h2 className="text-xl font-bold">Learning Portal</h2>
            <button 
              className="btn btn-ghost btn-sm"
              onClick={() => setIsOpen(false)}
            >
              <X size={20} />
            </button>
          </div>
          
          <ul className="menu p-2 rounded-box">
            <li>
              <a className="flex items-center gap-3 mb-2" onClick={handleNavClick}>
                <Home size={18} />
                Dashboard
              </a>
            </li>
            <li>
              <a className="flex items-center gap-3 mb-2 active" onClick={handleNavClick}>
                <BookOpen size={18} />
                My Courses
              </a>
            </li>
            <li>
              <a className="flex items-center gap-3 mb-2" onClick={handleNavClick}>
                <Bookmark size={18} />
                Bookmarks
              </a>
            </li>
            <li className="menu-title">
              <span>Account</span>
            </li>
            <li>
              <a className="flex items-center gap-3 mb-2" onClick={handleNavClick}>
                <Settings size={18} />
                Settings
              </a>
            </li>
            <li>
              <a className="flex items-center gap-3 mb-2" onClick={handleNavClick}>
                <HelpCircle size={18} />
                Help Center
              </a>
            </li>
          </ul>
          
          <div className="mt-8">
            <div className="stats shadow w-full">
              <div className="stat">
                <div className="stat-title">Courses</div>
                <div className="stat-value text-primary">4</div>
                <div className="stat-desc">Enrolled</div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
