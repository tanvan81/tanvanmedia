import React from 'react';
import { Bot } from '../types';
import { BOTS } from '../constants';
import { Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';

interface BotListProps {
  onSelectBot: (bot: Bot) => void;
}

export default function BotList({ onSelectBot }: BotListProps) {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-indigo-600 font-bold tracking-wider uppercase text-sm mb-3">
              <Cpu className="w-5 h-5" />
              <span>Công nghệ AI</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Hệ thống BOT Thông Minh
            </h2>
          </div>
          <button 
            onClick={() => {/* Navigate to all bots */}}
            className="group flex items-center gap-2 text-indigo-600 font-bold hover:gap-3 transition-all cursor-pointer"
          >
            Xem tất cả BOT <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BOTS.slice(0, 3).map((bot) => (
            <div 
              key={bot.id}
              onClick={() => onSelectBot(bot)}
              className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-500">
                <Cpu className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                {bot.name}
              </h3>
              
              <p className="text-slate-600 mb-6 line-clamp-2">
                {bot.description}
              </p>

              <div className="space-y-3 mb-8">
                {bot.features.slice(0, 2).map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                <span className="font-bold text-indigo-600">{bot.price}</span>
                <span className="text-sm font-bold text-slate-400 group-hover:text-indigo-600 flex items-center gap-1 transition-colors">
                  Chi tiết <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
