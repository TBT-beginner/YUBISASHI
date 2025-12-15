import React from 'react';
import { LessonData } from '../types';

interface DashboardProps {
  lessons: LessonData[];
  onSelectLesson: (lesson: LessonData) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ lessons, onSelectLesson }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Grammar Lessons</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Select a lesson part to begin analyzing the sentence structures.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <button
            key={lesson.id}
            onClick={() => onSelectLesson(lesson)}
            className="group flex flex-col bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all duration-300 text-left h-full"
          >
            <div className="h-3 bg-blue-500 w-full group-hover:bg-blue-600 transition-colors"></div>
            
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2 py-1 rounded">
                   {lesson.sentences.length} Sentences
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">
                {lesson.title}
              </h3>
              
              {lesson.subtitle && (
                <h4 className="text-sm font-semibold text-gray-500 mb-4">
                  {lesson.subtitle}
                </h4>
              )}
              
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
                {lesson.description}
              </p>

              <div className="flex items-center text-blue-600 font-semibold text-sm mt-auto group-hover:translate-x-1 transition-transform">
                Start Learning
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
