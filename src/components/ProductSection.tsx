import React from 'react';
import { Sparkles, Droplets, Sun, Feather, CheckCircle, Flame, HeartHandshake, Shield } from 'lucide-react';
import { motion } from 'motion/react';

export const ProductSection: React.FC = () => {
  const benefits = [
    {
      icon: <Sparkles className="w-6 h-6 text-[#D4AF37]" />,
      title: "Natural Radiant Glow",
      urduTitle: "قدرتی چمک اور نکھار",
      desc: "Imparts a luminous, lit-from-within glow by enhancing skin's natural moisture and texture.",
      urduDesc: "جلد کو قدرتی تازگی اور چمک بخشتا ہے، جس سے چہرہ شاداب اور پرکشش دکھائی دیتا ہے۔"
    },
    {
      icon: <Droplets className="w-6 h-6 text-[#D4AF37]" />,
      title: "Deep Nourishing Hydration",
      urduTitle: "گہری نمی اور خشکی سے نجات",
      desc: "Penetrates dry outer layers to supply prolonged hydration and lock in essential moisture.",
      urduDesc: "جلد کی گہرائی تک نمی پہنچا کر خشکی اور کھردرا پن دور کرتا ہے اور ملائم بناتا ہے۔"
    },
    {
      icon: <Sun className="w-6 h-6 text-[#D4AF37]" />,
      title: "Refreshes Dull Skin",
      urduTitle: "ماند رنگت میں تازگی",
      desc: "Assists in revitalizing tired, weather-affected skin with the gentle essence of pure saffron.",
      urduDesc: "موسمی اثرات یا تھکاوٹ سے ماند پڑ جانے والی جلد کو ایک نئی تازگی اور رونق فراہم کرتا ہے۔"
    },
    {
      icon: <Feather className="w-6 h-6 text-[#D4AF37]" />,
      title: "Non-Greasy & Gentle",
      urduTitle: "ہلکا اور غیر چپچپا فارمولا",
      desc: "Fast-absorbing silky texture that feels light on skin without clogging pores or feeling heavy.",
      urduDesc: "تیزی سے جذب ہونے والا ریشمی فارمولا جو بغیر کسی چکناہٹ کے جلد میں سما جاتا ہے۔"
    }
  ];

  return (
    <section id="product-section" className="py-16 lg:py-24 bg-[#FAF7F2] text-[#1F1728] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2A0845]/10 text-[#2A0845] border border-[#2A0845]/20 text-xs font-bold uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>Pure Saffron Heritage</span>
            <span className="text-[#AA771C]">•</span>
            <span className="font-urdu font-semibold text-[#2A0845]">خالص زعفرانی حسن</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A0329]">
            Dubai Zafrani Cream
          </h2>

          <div className="space-y-2">
            <p className="text-lg sm:text-xl font-medium text-[#4A1575] font-serif italic">
              "Luxury skincare inspired by the timeless beauty of saffron."
            </p>
            <p className="font-urdu text-xl sm:text-2xl font-bold text-[#1A0329] leading-relaxed">
              "زعفران سے متاثرہ خوبصورت اور پریمیم اسکن کیئر۔"
            </p>
          </div>

          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Formulated for individuals who appreciate the prestigious skincare traditions of pure saffron.
            Carefully crafted to hydrate, comfort, and refresh your skin’s natural appearance.
          </p>
        </div>

        {/* 4 Core Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-[#D4AF37]/30 shadow-md hover:shadow-xl hover:border-[#D4AF37] transition-all group relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-xl bg-[#2A0845] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-md">
                {benefit.icon}
              </div>
              
              <h3 className="font-bold text-lg text-[#1A0329] mb-1">
                {benefit.title}
              </h3>
              <p className="font-urdu text-base font-bold text-[#6B21A8] mb-3 leading-snug">
                {benefit.urduTitle}
              </p>

              <p className="text-xs sm:text-sm text-gray-600 mb-2 leading-relaxed">
                {benefit.desc}
              </p>
              <p className="font-urdu text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-gray-100 pt-2 text-right">
                {benefit.urduDesc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Saffron Story & How to Use Bento */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Saffron Authenticity Card */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#2A0845] to-[#1A0329] text-white rounded-3xl p-7 sm:p-9 border border-[#D4AF37]/40 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#FFE885] text-xs font-semibold">
                  Why Saffron? | زعفران کیوں؟
                </span>
                <span className="text-xs text-[#D4AF37] font-semibold">
                  0306-6508319
                </span>
              </div>

              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#FFF3B0]">
                The Royal Skincare Ingredient
              </h3>

              <p className="font-urdu text-lg sm:text-xl text-[#F3E8FF] leading-relaxed text-right">
                زعفران کو تاریخ بھر میں شاہی خوبصورتی کی علامت سمجھا گیا ہے۔ یہ جلد کی خشکی کو دور کرنے اور قدرتی چمک کو بیدار کرنے میں معاون ثابت ہوتا ہے۔
              </p>

              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                Saffron (زعفران) contains natural botanical antioxidants that help condition and brighten the skin's surface. In Dubai Zafrani Cream, saffron is harmonized with rich emollient agents for a lavish daily skincare ritual.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 mt-4 border-t border-white/10">
              <div className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                <span className="block font-bold text-sm text-[#FFE885]">خالص زعفران</span>
                <span className="text-[11px] text-gray-300">Pure Extracts</span>
              </div>
              <div className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                <span className="block font-bold text-sm text-[#FFE885]">کیمیائی اجزاء سے پاک</span>
                <span className="text-[11px] text-gray-300">Gentle Recipe</span>
              </div>
              <div className="bg-white/5 rounded-xl p-3 text-center border border-white/10 col-span-2 sm:col-span-1">
                <span className="block font-bold text-sm text-[#FFE885]">تمام جلد کے لیے</span>
                <span className="text-[11px] text-gray-300">All Skin Types</span>
              </div>
            </div>
          </div>

          {/* How to Use Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-7 sm:p-9 border border-[#D4AF37]/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EE] text-[#AA771C] text-xs font-bold mb-3 border border-[#D4AF37]/30">
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>طریقہ استعمال | How to Apply</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#1A0329] mb-4">
                Simple Daily Routine
              </h3>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#2A0845] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <p className="font-semibold text-sm text-[#1A0329]">Cleanse Skin | چہرہ صاف کریں</p>
                    <p className="text-xs text-gray-600 font-urdu leading-normal">
                      پہلے اپنے چہرے کو کسی اچھے صابن یا فیس واش سے دھو کر خشک کریں۔
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#2A0845] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <p className="font-semibold text-sm text-[#1A0329]">Apply Pea-Sized Cream | کریم لگائیں</p>
                    <p className="text-xs text-gray-600 font-urdu leading-normal">
                      انگلیوں کی مدد سے تھوڑی سی کریم گالوں، ماتھے اور گردن پر ہلکے ہاتھ سے لگائیں۔
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#2A0845] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <p className="font-semibold text-sm text-[#1A0329]">Gentle Massage | ہلکا مساج</p>
                    <p className="text-xs text-gray-600 font-urdu leading-normal">
                      دائرے کی شکل میں اوپر کی جانب مساج کریں تاکہ کریم جلد میں اچھی طرح جذب ہو جائے۔
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-gray-500">بہترین نتائج کے لیے رات کے وقت استعمال کریں۔</span>
              <a
                href="#order-section"
                className="text-xs font-bold text-[#2A0845] hover:text-[#AA771C] underline underline-offset-4"
              >
                Order Now →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
