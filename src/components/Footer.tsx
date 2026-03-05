import React from 'react';
import { Facebook, Youtube, Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img 
                src="/Image/logo.png" 
                alt="Logo" 
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/logo/200/200';
                }}
              />
            </div>
            <p className="text-slate-400 leading-relaxed">
              Nâng tầm kỹ năng media của bạn với các khóa học chuyên nghiệp và hệ thống BOT AI thông minh từ Tấn Văn Media.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <div className="pt-4 flex items-center gap-3 text-slate-400">
              <Phone className="w-5 h-5 text-indigo-500" />
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-slate-500">Hotline hỗ trợ</p>
                <p className="text-lg font-bold text-white">1900 xxxx</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Khám phá</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="/" className="hover:text-white transition-colors">Khóa học</a></li>
              <li><a href="/bots" className="hover:text-white transition-colors">Hệ thống BOT AI</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tài nguyên miễn phí</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cộng đồng</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-6">Hỗ trợ</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Liên hệ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Câu hỏi thường gặp</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chính sách hoàn tiền</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Điều khoản sử dụng</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2025 Tấn Văn Media. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Điều khoản</a>
            <a href="#" className="hover:text-white transition-colors">Bảo mật</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
