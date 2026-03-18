import React from 'react';
import { motion } from 'motion/react';
import { Star, Clock, User, CheckCircle2, ArrowLeft, ShoppingCart } from 'lucide-react';
import { Course } from '../types';

interface CourseDetailProps {
  course: Course;
  onBack: () => void;
  onAddToCart: (course: Course) => void;
}

export default function CourseDetail({ course, onBack, onAddToCart }: CourseDetailProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen"
    >
      {/* Dark Hero Header Section */}
      <div className="bg-slate-900 pt-32 pb-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Quay lại danh sách</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                {course.title}
              </h1>

              <p className="text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed">
              {course.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-white">{course.rating}</span>
                  <span className="text-slate-400">({course.reviews} tham gia)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <User className="w-5 h-5" />
                  <span>Giảng viên: <span className="font-bold text-white">Tan Van</span></span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>Cập nhật mới nhất 03/2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 lg:-mt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Content */}
          <div className="lg:col-span-2 pt-12 lg:pt-40">
            <div className="space-y-12">
              {/* What you'll learn */}
              <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Bạn sẽ học được gì?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {course.learningPoints.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                      <span className="text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Curriculum */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Công cụ cung cấp</h2>
                <div className="space-y-3">
                    {course.curriculum.map((chapter, idx) => (
                    <div key={idx} className="group p-5 bg-slate-50 hover:bg-white hover:shadow-md rounded-2xl border border-slate-100 transition-all flex justify-between items-center cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-sm font-bold text-indigo-600 shadow-sm">
                          {idx + 1}
                        </div>
                        <span className="font-semibold text-slate-700">{chapter.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
                          </div>
          </div>

          {/* Right Column: Floating Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white rounded-3xl border border-slate-100 shadow-2xl overflow-hidden">
              {/* Preview Image */}
              <div className="relative aspect-video">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${course.id}/800/600`;
                  }}
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-indigo-600 border-b-[10px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-3xl font-bold text-indigo-600">{course.price}</span>
                </div>

                <div className="space-y-4 mb-8">
                  <button 
                    onClick={() => onAddToCart(course)}
                    className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-3 cursor-pointer"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Thêm vào giỏ hàng
                  </button>
                  <button className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl transition-all cursor-pointer">
                    Mua ngay
                  </button>
                </div>

                <div className="space-y-4">
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
