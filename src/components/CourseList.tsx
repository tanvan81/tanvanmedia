import React from 'react';
import CourseCard from './CourseCard';
import { COURSES } from '../constants';
import { Course } from '../types';

interface CourseListProps {
  onSelectCourse: (course: Course) => void;
  onAddToCart: (course: Course) => void;
}

export default function CourseList({ onSelectCourse, onAddToCart }: CourseListProps) {
  return (
    <section id="courses" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Khám Phá Các Khóa Học
            </h2>
            <p className="text-slate-500 max-w-xl">
              Nâng tầm kỹ năng media của bạn với các khóa học chuyên nghiệp từ chuyên gia hàng đầu.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <CourseCard 
              key={course.id} 
              course={course} 
              onSelect={onSelectCourse}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
