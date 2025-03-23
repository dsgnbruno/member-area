import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CourseGrid from './components/CourseGrid';
import { courses } from './data/courses';

function App() {
  // Initialize sidebar as closed by default on mobile, open on desktop
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 1024);
  const [theme, setTheme] = useState('light');
  
  // Apply theme to HTML element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      // Auto-open sidebar on desktop
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true);
      } else {
        // Close sidebar on mobile when resizing from desktop
        setSidebarOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className="min-h-screen bg-base-200 flex flex-col">
      <Header 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
        theme={theme} 
        setTheme={setTheme} 
      />
      
      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        
        <main className="flex-1 transition-all duration-300 ease-in-out p-4">
          <CourseGrid courses={courses} />
        </main>
      </div>
    </div>
  );
}

export default App;
