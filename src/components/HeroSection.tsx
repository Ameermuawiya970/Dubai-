import React, { useState } from 'react';
import { Crown, MessageCircle, ShoppingBag, Phone, Sparkles, CheckCircle2, ShieldCheck, Truck } from 'lucide-react';
import { motion } from 'motion/react';

export const HeroSection: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const baseUrl = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  const [imgSrc, setImgSrc] = useState(`${baseUrl}assets/dubai-zafrani-hero.png`);

  const handleImageError = () => {
    // Fallback chain to ensure image always renders under all hosting environments and repo subpaths
    if (imgSrc.includes('dubai-zafrani-hero.png')) {
      setImgSrc(`${baseUrl}assets/dubai-zafrani-hero.svg`);
    } else if (imgSrc.includes('dubai-zafrani-hero.svg')) {
      setImgSrc(`${baseUrl}file_000000004cec81f4b1a52647af198d10.png`);
    } else {
      setImgSrc('./assets/dubai-zafrani-hero.png');
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1A0329] via-[#2A0845] to-[#170224] text-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#D4AF37]/25">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFBE3B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#8E24AA]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headings, Urdu Copy & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
          >
            {/* Crown + Premium Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3B0764]/70 border border-[#D4AF37]/40 shadow-inner">
              <Crown className="w-4 h-4 text-[#FFE885]" />
              <span className="text-xs sm:text-sm font-semibold text-[#FFE885] tracking-wide uppercase">
                Original Dubai Quality
              </span>
              <span className="text-[#D4AF37]">•</span>
              <span className="text-xs sm:text-sm font-medium text-[#E9D5FF] font-urdu">
                خالص زعفرانی فارمولیشن
              </span>
            </div>

            {/* Main Product Title */}
            <div>
              <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                <span className="gold-gradient-text">DUBAI</span>{' '}
                <span className="text-white">Zafrani</span>{' '}
                <span className="text-[#E9D5FF] font-cormorant italic font-normal">Cream</span>
              </h1>
              
              {/* Urdu Headline Banner */}
              <div className="mt-3 py-2 px-4 rounded-xl bg-gradient-to-r from-[#3B0764]/80 via-[#581C87]/80 to-[#3B0764]/80 border border-[#D4AF37]/30 inline-block text-right">
                <p className="font-urdu text-xl sm:text-2xl lg:text-3xl font-bold text-[#FFE885] leading-relaxed">
                  قدرتی خوبصورتی کا راز — چمکدار، نکھری اور بے داغ جلد کے لیے
                </p>
              </div>
            </div>

            {/* Description Text (English & Clean Urdu) */}
            <div className="space-y-2 text-sm sm:text-base text-[#E5D4F5] max-w-xl">
              <p className="font-medium text-white/95">
                "Luxury skincare inspired by the timeless beauty of saffron."
              </p>
              <p className="font-urdu text-base sm:text-lg text-[#F3E8FF] leading-loose text-right lg:text-left">
                زعفران کے خالص ایکسٹریکٹ اور قدرتی اجزاء سے تیار کردہ نفاست بخش کریم، جو آپ کی جلد کو دے قدرتی چمک اور نمی کا احساس۔
              </p>
            </div>

            {/* Feature Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full max-w-lg text-left">
              <div className="flex items-center gap-2 text-xs sm:text-sm bg-white/5 border border-white/10 rounded-lg p-2.5">
                <Sparkles className="w-4 h-4 text-[#FFE885] shrink-0" />
                <span className="text-white">جلد کو نکھارے اور قدرتی چمک دے</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm bg-white/5 border border-white/10 rounded-lg p-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FFE885] shrink-0" />
                <span className="text-white">گہری نمی اور خشکی سے نجات</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm bg-white/5 border border-white/10 rounded-lg p-2.5">
                <ShieldCheck className="w-4 h-4 text-[#FFE885] shrink-0" />
                <span className="text-white">تمام اقسام کی جلد کے لیے محفوظ</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm bg-white/5 border border-white/10 rounded-lg p-2.5">
                <Truck className="w-4 h-4 text-[#FFE885] shrink-0" />
                <span className="text-white">کیش آن ڈیلیوری پورے پاکستان میں</span>
              </div>
            </div>

            {/* Primary Calls to Action (Order Now & WhatsApp) */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto pt-2">
              {/* Luxury Order Now CTA */}
              <a
                id="hero-order-now-cta"
                href="#order-section"
                className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-3 gold-gradient-bg hover:brightness-110 text-[#1A0329] px-7 py-4 rounded-xl text-base font-extrabold shadow-xl shadow-[#D4AF37]/30 transition-all hover:scale-105 active:scale-95 group"
              >
                <ShoppingBag className="w-5 h-5 text-[#1A0329] group-hover:scale-110 transition-transform" />
                <span className="flex flex-col items-center sm:items-start text-left leading-tight">
                  <span className="font-urdu text-lg font-bold leading-tight">ابھی آرڈر کریں</span>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#3B1F05]">Order Now</span>
                </span>
              </a>

              {/* WhatsApp Order CTA */}
              <a
                id="hero-whatsapp-order-cta"
                href="https://wa.me/923066508319"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white px-7 py-4 rounded-xl text-base font-extrabold shadow-xl shadow-[#25D366]/25 transition-all hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span className="flex flex-col items-center sm:items-start text-left leading-tight">
                  <span className="text-base sm:text-lg font-bold">Order on WhatsApp</span>
                  <span className="text-xs text-white/90 font-medium font-urdu leading-tight">واٹس ایپ پر رابطہ کریں</span>
                </span>
              </a>
            </div>

            {/* Direct Phone Number Helpline */}
            <div className="flex items-center gap-2 pt-1 text-xs text-[#E9D5FF]">
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>براہ راست رابطہ اور واٹس ایپ آرڈر نمبر:</span>
              <a href="tel:+923066508319" className="font-bold text-[#FFE885] underline underline-offset-2 hover:text-white">
                +92 306 6508319
              </a>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual (The Exact Promotional Creative) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-6 relative flex justify-center"
          >
            {/* Luxury Gold Border Container */}
            <div className="relative w-full max-w-md lg:max-w-lg rounded-2xl p-2 sm:p-3 bg-gradient-to-b from-[#D4AF37] via-[#AA771C] to-[#593905] shadow-2xl shadow-[#1A0329]/80 group">
              <div className="relative w-full overflow-hidden rounded-xl bg-[#1A0329] border border-white/20">
                
                {/* Visual Label Badge */}
                <div className="absolute top-3 left-3 z-20 bg-[#1A0329]/90 backdrop-blur-md border border-[#D4AF37]/50 text-[#FFE885] px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-md">
                  <Crown className="w-3.5 h-3.5 text-[#FFE885]" />
                  <span>Official Creative Visual</span>
                </div>

                {/* The Promotional Image */}
                <img
                  id="hero-promotional-image"
                  src={imgSrc}
                  alt="Dubai Zafrani Cream Official Promotional Visual"
                  referrerPolicy="no-referrer"
                  onLoad={() => setImageLoaded(true)}
                  onError={handleImageError}
                  className={`w-full h-auto aspect-square object-cover transition-all duration-700 ${
                    imageLoaded ? 'opacity-100 scale-100' : 'opacity-90 scale-95 blur-sm'
                  }`}
                />

                {/* Interactive Click to Order Prompt Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-3.5 bg-gradient-to-t from-[#1A0329] via-[#1A0329]/80 to-transparent flex items-center justify-between">
                  <div className="text-left">
                    <p className="text-xs font-semibold text-[#FFE885]">Dubai Zafrani Cream</p>
                    <p className="text-[11px] text-[#E9D5FF] font-urdu">0306-6508319 پر واٹس ایپ آرڈر کریں</p>
                  </div>
                  <a
                    href="#order-section"
                    className="text-xs font-bold gold-gradient-bg text-[#1A0329] px-3 py-1.5 rounded-lg shadow-sm hover:brightness-110 transition-all"
                  >
                    Order Now
                  </a>
                </div>
              </div>

              {/* Floating 100% Quality Badge */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-gradient-to-br from-[#FFF3B0] via-[#D4AF37] to-[#8C5C0C] text-[#1A0329] p-3 rounded-2xl shadow-xl border-2 border-white flex items-center gap-2.5">
                <Crown className="w-5 h-5 text-[#1A0329]" />
                <div className="text-left leading-tight">
                  <span className="block text-[10px] font-extrabold uppercase tracking-wider">Dubai Quality</span>
                  <span className="block text-xs font-urdu font-bold leading-none">100% کوالٹی ضمانت</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
