import React, { useState } from 'react';
import CourseCard from './CourseCard';
import DiscountCoupon from './DiscountCoupon';
import { Course } from '../types';
import { Search, Filter } from 'lucide-react';

interface CourseGridProps {
  courses: Course[];
}

const CourseGrid: React.FC<CourseGridProps> = ({ courses }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'purchased' | 'locked'>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  
  // Get unique categories
  const categories = ['all', ...new Set(courses.map(course => course.category))];
  
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || course.status === statusFilter;
    
    const matchesCategory = categoryFilter === 'all' || course.category === categoryFilter;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });
  
  // Separate courses into purchased and locked
  const purchasedCourses = filteredCourses.filter(course => course.status === 'purchased');
  const lockedCourses = filteredCourses.filter(course => course.status === 'locked');
  
  return (
    <div className="p-4 lg:p-6 w-full">
      {/* Discount Coupon Section */}
      <DiscountCoupon code="SUMMER25" discount="25%" expiry="2023-08-31" />
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold">Courses</h1>
        
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search courses..."
              className="input input-bordered w-full pr-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-base-content/50" />
          </div>
          
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
              <Filter size={18} />
              Filters
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li className="menu-title">
                <span>Status</span>
              </li>
              <li>
                <a 
                  className={statusFilter === 'all' ? 'active' : ''} 
                  onClick={() => setStatusFilter('all')}
                >
                  All
                </a>
              </li>
              <li>
                <a 
                  className={statusFilter === 'purchased' ? 'active' : ''} 
                  onClick={() => setStatusFilter('purchased')}
                >
                  Purchased
                </a>
              </li>
              <li>
                <a 
                  className={statusFilter === 'locked' ? 'active' : ''} 
                  onClick={() => setStatusFilter('locked')}
                >
                  Locked
                </a>
              </li>
              
              <li className="menu-title mt-2">
                <span>Category</span>
              </li>
              {categories.map(category => (
                <li key={category}>
                  <a 
                    className={categoryFilter === category ? 'active' : ''} 
                    onClick={() => setCategoryFilter(category)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* My Courses Section */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <span className="badge badge-primary mr-2">{purchasedCourses.length}</span>
          My Courses
        </h2>
        
        {purchasedCourses.length === 0 ? (
          <div className="alert">
            <span>No purchased courses found matching your criteria.</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {purchasedCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>
      
      {/* Other Courses Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <span className="badge badge-secondary mr-2">{lockedCourses.length}</span>
          Other Courses
        </h2>
        
        {lockedCourses.length === 0 ? (
          <div className="alert">
            <span>No other courses found matching your criteria.</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {lockedCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseGrid;
