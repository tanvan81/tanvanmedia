import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import CourseList from './components/CourseList';
import CourseDetail from './components/CourseDetail';
import BotList from './components/BotList';
import BotDetail from './components/BotDetail';
import Footer from './components/Footer';
import { Course, Bot } from './types';
import { COURSES, BOTS } from './constants';
import CartPage from './components/CartPage';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [cart, setCart] = useState<Course[]>([]);
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = (course: Course) => {
    setCart(prev => [...prev, course]);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleRemoveFromCart = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const handleHomeClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCourse = (course: Course) => {
    navigate(`/course/${course.id}`);
  };

  const handleSelectBot = (bot: Bot) => {
    navigate(`/bot/${bot.id}`);
  };

  const handleBotMenuClick = () => {
    navigate('/bots');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCartClick = () => {
    navigate('/cart');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCheckout = () => {
    alert('Cảm ơn bạn đã mua hàng! Hệ thống đang xử lý thanh toán...');
    setCart([]);
    navigate('/');
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Header 
        cartCount={cart.length} 
        onHomeClick={handleHomeClick} 
        onCartClick={handleCartClick}
        onBotClick={handleBotMenuClick}
        isSolid={location.pathname === '/cart'}
      />
      
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <HeroSlider />
              <CourseList 
                onSelectCourse={handleSelectCourse} 
                onAddToCart={handleAddToCart} 
              />
              <BotList onSelectBot={handleSelectBot} />
            </>
          } />
          <Route path="/course/:id" element={<CourseDetailWrapper onAddToCart={handleAddToCart} onBack={handleHomeClick} />} />
          <Route path="/bots" element={<BotPage onSelectBot={handleSelectBot} />} />
          <Route path="/bot/:id" element={<BotDetailWrapper onBack={() => navigate(-1)} />} />
          <Route path="/cart" element={
            <CartPage 
              items={cart} 
              onRemove={handleRemoveFromCart} 
              onBack={handleHomeClick}
              onCheckout={handleCheckout}
            />
          } />
        </Routes>
      </main>

      <Footer />

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-8 right-8 bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl z-[100] flex items-center gap-3 animate-bounce">
          <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="font-bold">Đã thêm vào giỏ hàng!</p>
        </div>
      )}
    </div>
  );
}

import { useParams } from 'react-router-dom';
function CourseDetailWrapper({ onAddToCart, onBack }: { onAddToCart: (c: Course) => void, onBack: () => void }) {
  const { id } = useParams();
  const course = COURSES.find(c => c.id === Number(id));
  
  if (!course) return <div className="pt-32 text-center">Không tìm thấy khóa học</div>;
  
  return <CourseDetail course={course} onBack={onBack} onAddToCart={onAddToCart} />;
}

function BotDetailWrapper({ onBack }: { onBack: () => void }) {
  const { id } = useParams();
  const bot = BOTS.find(b => b.id === Number(id));
  
  if (!bot) return <div className="pt-32 text-center">Không tìm thấy BOT</div>;
  
  return <BotDetail bot={bot} onBack={onBack} />;
}

function BotPage({ onSelectBot }: { onSelectBot: (bot: Bot) => void }) {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-12">Danh sách BOT AI</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BOTS.map((bot) => (
            <div 
              key={bot.id}
              onClick={() => onSelectBot(bot)}
              className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-500">
                <Cpu className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{bot.name}</h3>
              <p className="text-slate-600 mb-6">{bot.description}</p>
              <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                <span className="font-bold text-indigo-600">{bot.price}</span>
                <span className="text-sm font-bold text-indigo-600">Chi tiết →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { Cpu } from 'lucide-react';
