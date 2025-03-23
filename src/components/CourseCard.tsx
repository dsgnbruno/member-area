import React from 'react';
import { Lock, Play } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { title, description, thumbnail, status, progress } = course;
  
  const isLocked = status === 'locked';
  
  return (
    <div className={`card w-full bg-base-100 shadow-xl overflow-hidden h-full ${isLocked ? 'grayscale opacity-80' : ''}`}>
      <figure className="relative h-48">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        {isLocked && (
          <div className="absolute top-2 right-2 bg-base-100 p-2 rounded-full shadow-md">
            <Lock size={20} className="text-error" />
          </div>
        )}
      </figure>
      
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-sm text-base-content/70">{description}</p>
        
        {!isLocked && progress !== undefined && (
          <div className="mt-2">
            <div className="flex justify-between text-xs mb-1">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <progress 
              className="progress progress-primary w-full" 
              value={progress} 
              max="100"
            ></progress>
          </div>
        )}
        
        <div className="card-actions justify-end mt-4">
          {isLocked ? (
            <button className="btn btn-outline btn-sm">
              Enable this Course
            </button>
          ) : (
            <button className="btn btn-primary btn-sm">
              {progress && progress > 0 ? 'Continue' : 'Start Learning'}
              <Play size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
