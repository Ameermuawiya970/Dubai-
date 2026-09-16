import React from 'react';
import { MessageCircle, Phone, ShoppingBag } from 'lucide-react';

export const StickyWhatsAppCTA: React.FC = () => {
  const whatsappUrl = "https://wa.me/923066508319?text=Assalam%20o%20Alaikum%2C%20I%20want%20to%20order%20Dubai%20Zafrani%20Cream.";

  return (
    <>
      {/* Desktop Floating WhatsApp Button (Bottom Right) */}
      <aside aria-label="Quick WhatsApp Contact" className="hidden sm:block fixed bottom-6 right-6 z-50">
        <a
          id="desktop-floating-whatsapp"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white pl-4 pr-5 py-3.5 rounded-full shadow-2xl shadow-[#25D366]/40 transition-all hover:scale-105 active:scale-95 border-2 border-white/40"
        >
          <div className="relative">
            <MessageCircle className="w-7 h-7 fill-current" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#D4AF37] rounded-full border-2 border-white animate-ping" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#D4AF37] rounded-full border-2 border-white" />
          </div>
          <div className="text-left leading-tight">
            <span className="block text-xs uppercase font-bold tracking-wider text-white/90">
              Order on WhatsApp
            </span>
            <span className="block font-urdu text-sm font-bold text-white">
              0306-6508319
            </span>
          </div>
        </a>
      </aside>

      {/* Mobile Bottom Sticky Bar */}
      <aside aria-label="Mobile Bottom Ordering Bar" className="sm:hidden fixed bottom-0 inset-x-0 z-50 bg-[#1A0329]/95 backdrop-blur-lg border-t border-[#D4AF37]/30 p-2.5 px-3 flex items-center justify-between gap-2 shadow-2xl">
        {/* Quick Call */}
        <a
          id="mobile-sticky-call-btn"
          href="tel:+923066508319"
          className="p-3 bg-white/10 hover:bg-white/20 text-[#FFE885] rounded-xl border border-white/15 flex items-center justify-center shrink-0"
          aria-label="Call Helpline"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Jump to Form */}
        <a
          id="mobile-sticky-order-form-btn"
          href="#order-section"
          className="px-3 py-2.5 gold-gradient-bg text-[#1A0329] rounded-xl font-bold text-xs flex flex-col items-center justify-center shrink-0 shadow-sm"
        >
          <ShoppingBag className="w-4 h-4" />
          <span className="font-urdu leading-none text-[11px] mt-0.5">آرڈر فارم</span>
        </a>

        {/* Primary Mobile WhatsApp Order Button */}
        <a
          id="mobile-sticky-whatsapp-btn"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 bg-[#25D366] active:bg-[#1fae52] text-white rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/30"
        >
          <MessageCircle className="w-5 h-5 fill-current shrink-0" />
          <div className="flex flex-col items-start leading-tight">
            <span className="font-urdu text-xs font-bold leading-tight">واٹس ایپ آرڈر</span>
            <span className="text-[10px] text-white/90">0306 6508319</span>
          </div>
        </a>
      </aside>
    </>
  );
};
