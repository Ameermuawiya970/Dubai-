import React from 'react';
import { Crown, MessageCircle, Phone, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#1A0329]/95 backdrop-blur-md border-b border-[#D4AF37]/30 text-white shadow-xl transition-all">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-[#2A0845] via-[#4A1575] to-[#2A0845] text-[#FFE885] border-b border-[#D4AF37]/20 py-1.5 px-4 text-xs sm:text-sm font-medium text-center flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#FFE885] animate-pulse shrink-0" />
        <span>
          <span className="font-semibold text-white">Cash on Delivery Across Pakistan</span> — پورے پاکستان میں کیش آن ڈیلیوری کی سہولت
        </span>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group" id="nav-brand-link">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFF3B0] via-[#D4AF37] to-[#8C5C0C] p-0.5 shadow-lg shadow-[#D4AF37]/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full rounded-full bg-[#1A0329] flex items-center justify-center">
              <Crown className="w-5 h-5 text-[#FFE885]" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-[#FFF3B0]">
                DUBAI
              </span>
              <span className="font-cormorant text-lg sm:text-xl font-semibold italic text-[#E9D5FF]">
                Zafrani Cream
              </span>
            </div>
            <p className="text-[11px] text-[#D4AF37] font-medium tracking-wide font-urdu leading-none -mt-0.5">
              قدرتی خوبصورتی کا راز
            </p>
          </div>
        </a>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-4">
          <a
            id="nav-call-button"
            href="tel:+923066508319"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#E9D5FF] hover:text-[#FFE885] px-3 py-2 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-semibold tracking-wider">0306-6508319</span>
          </a>

          <a
            id="nav-whatsapp-link"
            href="https://wa.me/923066508319"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-md shadow-[#25D366]/20 transition-all hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span className="hidden md:inline">WhatsApp:</span>
            <span>0306 6508319</span>
          </a>

          <a
            id="nav-order-cta"
            href="#order-section"
            className="inline-flex items-center gap-1.5 gold-gradient-bg hover:brightness-110 text-[#1A0329] px-4 py-2 rounded-full text-xs sm:text-sm font-bold shadow-md shadow-[#D4AF37]/30 transition-all hover:scale-105 active:scale-95"
          >
            <span className="font-urdu text-sm font-bold">ابھی آرڈر کریں</span>
            <span className="hidden sm:inline">| Order</span>
          </a>
        </div>
      </nav>
    </header>
  );
};
