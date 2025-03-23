import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardPage from './pages/DashboardPage';
import CoursesPage from './pages/CoursesPage';
import BookmarksPage from './pages/BookmarksPage';
import SettingsPage from './pages/SettingsPage';
import HelpPage from './pages/HelpPage';
import DiscountCoupon from './components/DiscountCoupon';
import CourseDetail from './components/CourseDetail';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    // Get saved theme from localStorage or default to 'light'
    return localStorage.getItem('theme') || 'light';
  });

  // Apply theme to document when it changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <Router>
      <div className="min-h-screen bg-base-200">
        <Header 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen} 
          theme={theme} 
          setTheme={setTheme} 
        />
        <div className="flex">
          <Sidebar sidebarOpen={sidebarOpen} />
          <main className="flex-1 p-4">
            {/* Discount Coupon visible on all pages */}
            <div className="container mx-auto mb-6">
              <DiscountCoupon 
                code="LEARN25"
                discount="25%"
                expiry="2023-12-31"
              />
            </div>
            
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/bookmarks" element={<BookmarksPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/help" element={<HelpPage />} />
              <Route path="/course/:courseId" element={<CourseDetail />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
