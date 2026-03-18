import React from 'react';
import { motion } from 'motion/react';
import { Bot } from '../types';
import { ArrowLeft, Cpu, CheckCircle2, Zap, Shield, MessageSquare } from 'lucide-react';

interface BotDetailProps {
  bot: Bot;
  onBack: () => void;
}

export default function BotDetail({ bot, onBack }: BotDetailProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen pt-32 pb-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors mb-12 group cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold">Quay lại</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm font-bold mb-6">
              <Cpu className="w-4 h-4" />
              <span>{bot.category} AI Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {bot.name}
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              {bot.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {bot.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5" />
                  <span className="font-medium text-slate-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl transition-all shadow-xl shadow-indigo-200 transform hover:scale-105 cursor-pointer">
                Đăng ký ngay - {bot.price}
              </button>
              <button className="px-8 py-4 bg-white border-2 border-slate-200 hover:border-indigo-600 hover:text-indigo-600 text-slate-600 font-bold rounded-2xl transition-all cursor-pointer">
                Dùng thử miễn phí
              </button>
            </div>
          </div>

          {/* Right: Visual/Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 to-violet-500/20 blur-3xl rounded-full"></div>
            <div className="relative bg-white rounded-[40px] border border-slate-100 shadow-2xl overflow-hidden aspect-square flex items-center justify-center p-12">
              <div className="w-full h-full bg-slate-50 rounded-[32px] flex items-center justify-center relative overflow-hidden">
                <Cpu className="w-32 h-32 text-indigo-600 animate-pulse" />
                
                {/* Floating Elements */}
                <div className="absolute top-10 left-10 p-4 bg-white rounded-2xl shadow-lg border border-slate-50 animate-bounce" style={{ animationDuration: '3s' }}>
                  <Zap className="w-6 h-6 text-amber-500" />
                </div>
                <div className="absolute bottom-10 right-10 p-4 bg-white rounded-2xl shadow-lg border border-slate-50 animate-bounce" style={{ animationDuration: '4s' }}>
                  <Shield className="w-6 h-6 text-emerald-500" />
                </div>
                <div className="absolute top-1/2 right-10 p-4 bg-white rounded-2xl shadow-lg border border-slate-50 animate-bounce" style={{ animationDuration: '5s' }}>
                  <MessageSquare className="w-6 h-6 text-indigo-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-20">
          {/* Detailed Description & Use Cases */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Mô tả chi tiết</h2>
              <p className="text-slate-600 leading-relaxed">
                {bot.detailedDescription}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Trường hợp sử dụng</h2>
              <div className="grid grid-cols-1 gap-4">
                {bot.useCases.map((useCase, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-1" />
                    <span className="text-slate-600">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="bg-slate-50 rounded-[32px] p-8 border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Thông số kỹ thuật</h2>
            <div className="space-y-6">
              {bot.specifications.map((spec, idx) => (
                <div key={idx} className="flex justify-between items-center py-4 border-b border-slate-200 last:border-0">
                  <span className="text-slate-500 font-medium">{spec.label}</span>
                  <span className="text-slate-900 font-bold">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* More Info */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Tốc độ vượt trội</h3>
            <p className="text-slate-600">Xử lý hàng ngàn yêu cầu chỉ trong tích tắc nhờ hạ tầng đám mây mạnh mẽ.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Bảo mật tuyệt đối</h3>
            <p className="text-slate-600">Dữ liệu của bạn được mã hóa và bảo vệ theo tiêu chuẩn quốc tế cao nhất.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Hỗ trợ 24/7</h3>
            <p className="text-slate-600">Đội ngũ kỹ thuật luôn sẵn sàng hỗ trợ bạn bất cứ lúc nào qua nhiều kênh.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
