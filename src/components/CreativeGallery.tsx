import React, { useState } from 'react';
import { Crown, MessageCircle, ShoppingBag, Eye, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const CreativeGallery: React.FC = () => {
  const [creativeImgSrc, setCreativeImgSrc] = useState('/assets/dubai-zafrani-creative.png');

  const handleImageError = () => {
    if (creativeImgSrc === '/assets/dubai-zafrani-creative.png') {
      setCreativeImgSrc('/assets/dubai-zafrani-creative.svg');
    } else {
      setCreativeImgSrc('/assets/dubai-zafrani-hero.png');
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-[#1F0432] via-[#2A0845] to-[#1A0329] text-white relative overflow-hidden border-y border-[#D4AF37]/30">
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#FFBE3B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#FFE885] border border-[#D4AF37]/40 text-xs font-bold uppercase tracking-wider">
            <Eye className="w-3.5 h-3.5 text-[#FFE885]" />
            <span>Product Creative Showcase</span>
            <span className="text-[#D4AF37]">•</span>
            <span className="font-urdu">پروڈکٹ تصویری نمائش</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Authentic Dubai Zafrani Visual
          </h2>
          
          <p className="font-urdu text-xl sm:text-2xl font-bold text-[#FFE885] leading-relaxed">
            خالص کشمیری و ایرانی زعفران سے تیار کردہ منفرد بیوٹی فارمولا
          </p>

          <p className="text-sm sm:text-base text-[#E5D4F5] max-w-2xl mx-auto">
            The exact promotional presentation of Dubai Zafrani Cream. Built with luxurious ingredients to give your skincare collection the royal saffron treatment it deserves.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: The Exact Second Promotional Image / Creative */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="relative w-full max-w-md lg:max-w-lg rounded-2xl p-2.5 sm:p-3 bg-gradient-to-tr from-[#8C5C0C] via-[#D4AF37] to-[#FFF3B0] shadow-2xl">
              <div className="overflow-hidden rounded-xl bg-[#140220] border border-white/20 relative group">
                <img
                  id="creative-gallery-image"
                  src={creativeImgSrc}
                  alt="Dubai Zafrani Cream Promotional Creative"
                  referrerPolicy="no-referrer"
                  onError={handleImageError}
                  className="w-full h-auto aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Badge Overlay */}
                <div className="absolute top-3 right-3 bg-[#1A0329]/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-[#FFE885] border border-[#D4AF37]/50 flex items-center gap-1.5">
                  <Crown className="w-3.5 h-3.5 text-[#FFE885]" />
                  <span>Dubai Quality Formulation</span>
                </div>

                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#140220] via-[#140220]/80 to-transparent flex items-center justify-between">
                  <span className="font-urdu text-sm font-bold text-[#FFE885]">
                    خالص زعفران اور قدرتی اجزاء
                  </span>
                  <a
                    href="https://wa.me/923066508319?text=Assalam%20o%20Alaikum%2C%20I%20want%20to%20order%20Dubai%20Zafrani%20Cream."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#25D366] text-white px-3 py-1.5 rounded-lg shadow-sm hover:brightness-110"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Order</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Formulation Highlights & Direct Conversion CTA */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-3">
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#FFF3B0]">
                Every Batch Prepared with Care
              </h3>
              <p className="font-urdu text-lg sm:text-xl font-bold text-[#F3E8FF] leading-relaxed text-right lg:text-left">
                ہماری اولین ترجیح معیار، حفاظت اور کسٹمر کا اطمینان ہے۔
              </p>
              <p className="text-sm sm:text-base text-[#E5D4F5] leading-relaxed">
                Dubai Zafrani Cream is packaged under clean, quality-controlled conditions. The rich golden hue comes from natural saffron and botanical nutrients created to revitalize your skincare routine.
              </p>
            </div>

            {/* Benefit Checkpoints */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-3.5">
                <CheckCircle2 className="w-5 h-5 text-[#FFE885] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-white">Non-Sticky, Velvet Finish</h4>
                  <p className="text-xs sm:text-sm text-[#E5D4F5] font-urdu">
                    چہرے پر کسی قسم کا چپچپا پن پیدا نہیں کرتا اور جلد میں فوری جذب ہو جاتا ہے۔
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-3.5">
                <CheckCircle2 className="w-5 h-5 text-[#FFE885] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-white">Ideal for Pakistan’s Climate</h4>
                  <p className="text-xs sm:text-sm text-[#E5D4F5] font-urdu">
                    پاکستان کے گرم اور خشک دونوں موسموں میں روزمرہ استعمال کے لیے یکساں موزوں ہے۔
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-3.5">
                <CheckCircle2 className="w-5 h-5 text-[#FFE885] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-white">Direct WhatsApp Assistance</h4>
                  <p className="text-xs sm:text-sm text-[#E5D4F5] font-urdu">
                    آرڈر یا کسی بھی سوال کے لیے ہمارا واٹس ایپ نمائندہ ہر وقت حاضر ہے۔
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Box */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                id="gallery-order-button"
                href="#order-section"
                className="flex-1 inline-flex items-center justify-center gap-2 gold-gradient-bg text-[#1A0329] px-6 py-3.5 rounded-xl font-bold shadow-lg shadow-[#D4AF37]/20 hover:brightness-110 active:scale-95 transition-all text-sm sm:text-base"
              >
                <ShoppingBag className="w-4 h-4" />
                <span className="font-urdu font-bold text-base">ابھی آرڈر کریں</span>
                <span>(Order Form)</span>
              </a>

              <a
                id="gallery-whatsapp-button"
                href="https://wa.me/923066508319"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded-xl font-bold shadow-lg shadow-[#25D366]/20 hover:bg-[#20ba59] active:scale-95 transition-all text-sm sm:text-base"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
