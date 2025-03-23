export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  instructor: string;
  estimatedTime: string;
  category: string;
  status: 'active' | 'completed' | 'locked';
  progress: number;
  bookmarked: boolean;
  overview?: string;
  modules?: Module[];
  resources?: Resource[];
}

export interface Module {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'quiz' | 'reading';
  completed: boolean;
}

export interface Resource {
  id: string;
  title: string;
  type: 'pdf' | 'link' | 'code';
  url: string;
}
