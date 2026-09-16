import React from 'react';
import { Crown, MessageCircle, Phone, Sparkles, MapPin, Truck, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#12011D] text-white pt-16 pb-24 sm:pb-16 border-t border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFF3B0] via-[#D4AF37] to-[#8C5C0C] p-0.5 shadow-lg">
                <div className="w-full h-full rounded-full bg-[#1A0329] flex items-center justify-center">
                  <Crown className="w-5 h-5 text-[#FFE885]" />
                </div>
              </div>
              <div>
                <span className="font-cinzel text-xl font-bold tracking-wider text-[#FFF3B0]">
                  DUBAI
                </span>{' '}
                <span className="font-cormorant text-xl font-semibold italic text-[#E9D5FF]">
                  Zafrani Cream
                </span>
                <p className="font-urdu text-xs text-[#D4AF37] leading-none mt-0.5">
                  قدرتی خوبصورتی کا راز
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-300 max-w-md leading-relaxed">
              Experience the royal legacy of saffron-infused skincare. Formulated to provide gentle daily hydration, comfort, and radiant vitality for all skin types across Pakistan.
            </p>

            <p className="font-urdu text-sm text-[#E9D5FF] leading-loose text-right md:text-left max-w-md">
              خالص زعفران اور قدرتی نباتاتی ایکسٹریکٹس سے تیار کردہ پریمیم اسکن کیئر فارمولا، کیش آن ڈیلیوری پورے پاکستان میں دستیاب ہے۔
            </p>
          </div>

          {/* Direct Ordering & Contact */}
          <div className="md:col-span-6 space-y-4 flex flex-col justify-between">
            <div>
              <h3 className="font-cinzel text-lg font-bold text-[#FFF3B0] mb-3">
                Order Directly on WhatsApp
              </h3>
              <p className="font-urdu text-base font-bold text-[#FFE885] mb-2">
                براہ راست واٹس ایپ پر آرڈر کریں
              </p>
              <p className="text-sm text-gray-300 mb-4">
                Click below to start an instant conversation with our customer care representative:
              </p>

              {/* Direct WhatsApp Call to Action Button */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  id="footer-whatsapp-button"
                  href="https://wa.me/923066508319?text=Assalam%20o%20Alaikum%2C%20I%20want%20to%20order%20Dubai%20Zafrani%20Cream."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-lg shadow-[#25D366]/20 transition-all hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>WhatsApp: +92 306 6508319</span>
                </a>

                <a
                  id="footer-order-link"
                  href="#order-section"
                  className="inline-flex items-center justify-center gap-2 gold-gradient-bg text-[#1A0329] px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-lg shadow-[#D4AF37]/20 hover:brightness-110 active:scale-95 transition-all"
                >
                  <span className="font-urdu text-base font-bold">ابھی آرڈر فارم پر جائیں</span>
                </a>
              </div>
            </div>

            {/* Helpline Pill */}
            <div className="pt-3 flex flex-wrap items-center gap-4 text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Call Helpline: +92 306 6508319</span>
              </span>
              <span className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Nationwide Courier Delivery</span>
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Cash on Delivery</span>
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Dubai Zafrani Cream. All rights reserved.</p>
          <p className="font-urdu text-gray-400">
            خالص زعفرانی حسن — پاکستان بھر میں قابل اعتماد ترسیل
          </p>
        </div>

      </div>
    </footer>
  );
};
