import React from 'react';
import { Star, Clock, User } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onSelect: (course: Course) => void;
  onAddToCart: (course: Course) => void;
  key?: React.Key;
}

export default function CourseCard({ course, onSelect, onAddToCart }: CourseCardProps) {
  return (
    <div 
      onClick={() => onSelect(course)}
      className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${course.id}/800/600`;
          }}
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-lg text-xs font-bold shadow-sm ${
            course.level === 'Cơ bản' ? 'bg-emerald-100 text-emerald-700' : 
            course.level === 'Trung cấp' ? 'bg-amber-100 text-amber-700' : 
            'bg-rose-100 text-rose-700'
          }`}>
            {course.level}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-xs">
          <Clock className="w-3 h-3" />
          <span>{course.duration}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex gap-2 mb-3">
          {course.category.map((cat, idx) => (
            <span key={idx} className="text-[10px] uppercase tracking-wider font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded">
              {cat}
            </span>
          ))}
        </div>
        
        <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
          {course.title}
        </h3>

        <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
          <User className="w-4 h-4" />
          <span>{course.instructor}</span>
        </div>

        <div className="flex items-center gap-1 mb-6">
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          <span className="text-sm font-bold text-slate-900">{course.rating}</span>
          <span className="text-xs text-slate-400">({course.reviews} đánh giá)</span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
          <span className="text-xl font-bold text-indigo-600">{course.price}</span>
          <button 
            onClick={(e) => { e.stopPropagation(); onAddToCart(course); }}
            className="px-4 py-2 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Thêm vào giỏ
          </button>
        </div>
      </div>
    </div>
  );
}
