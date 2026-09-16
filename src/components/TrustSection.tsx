import React from 'react';
import { Package, MessageCircle, Truck, Headphones, ShieldCheck, HeartHandshake } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const trustPoints = [
    {
      icon: <Package className="w-7 h-7 text-[#D4AF37]" />,
      title: "Premium Presentation",
      urduTitle: "اعلیٰ اور پریمیم پیشکش",
      desc: "Each Dubai Zafrani Cream is carefully packed with protective sealing to preserve freshness and texture from our hands to yours.",
      urduDesc: "ہر جار کو انتہائی نفاست اور مکمل صفائی کے ساتھ محفوظ پیکنگ میں روانہ کیا جاتا ہے تاکہ کریم کا خالص پن برقرار رہے۔"
    },
    {
      icon: <MessageCircle className="w-7 h-7 text-[#D4AF37]" />,
      title: "Easy WhatsApp Ordering",
      urduTitle: "واٹس ایپ پر آسان اور فوری آرڈر",
      desc: "No complicated checkouts, account creations, or credit card requirements. Order directly through a simple WhatsApp message.",
      urduDesc: "کسی پیچیدہ عمل کے بغیر، بس اپنا نام اور پتہ درج کریں اور واٹس ایپ پر ایک کلک سے فوری آرڈر کنفرم کروائیں۔"
    },
    {
      icon: <Truck className="w-7 h-7 text-[#D4AF37]" />,
      title: "Convenient Delivery Information",
      urduTitle: "کیش آن ڈیلیوری پورے پاکستان میں",
      desc: "Cash on Delivery available nationwide. Receive your package at your doorstep and inspect it upon arrival before paying the courier.",
      urduDesc: "پورے پاکستان میں کیش آن ڈیلیوری کی سہولت۔ پارسل اپنے گھر یا دفتر پر وصول کریں اور تسلی کے ساتھ ادائیگی کریں۔"
    },
    {
      icon: <Headphones className="w-7 h-7 text-[#D4AF37]" />,
      title: "Customer Support on WhatsApp",
      urduTitle: "واٹس ایپ پر مسلسل کسٹمر رہنمائی",
      desc: "Have a question about your order, tracking, or application routine? Our team is available on WhatsApp at +92 306 6508319.",
      urduDesc: "آرڈر ٹریکنگ یا استعمال کے متعلق کسی بھی رہنمائی کے لیے ہماری ٹیم واٹس ایپ پر ہمہ وقت معاونت کے لیے تیار ہے۔"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-[#FAF7F2] text-[#1F1728] border-b border-[#D4AF37]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2A0845]/10 text-[#2A0845] text-xs font-bold uppercase tracking-wider border border-[#2A0845]/20">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2A0845]" />
            <span>Our Service Commitment</span>
            <span className="text-[#AA771C]">•</span>
            <span className="font-urdu">ہمارا عزم و اعتماد</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#1A0329]">
            Built on Trust & Simplicity
          </h2>

          <p className="font-urdu text-xl sm:text-2xl font-bold text-[#4A1575]">
            شفافیت، سہولت اور معیاری کسٹمر سروس ہماری اولین ترجیح ہے
          </p>

          <p className="text-sm sm:text-base text-gray-600">
            We focus on honest customer satisfaction, seamless parcel delivery across all cities and towns of Pakistan, and instant WhatsApp support.
          </p>
        </div>

        {/* 4 Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-[#D4AF37]/30 shadow-sm hover:shadow-lg hover:border-[#D4AF37] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#2A0845] flex items-center justify-center mb-4 shadow-md">
                  {item.icon}
                </div>

                <h3 className="font-bold text-base sm:text-lg text-[#1A0329] mb-1">
                  {item.title}
                </h3>
                
                <p className="font-urdu text-base font-bold text-[#6B21A8] mb-3 leading-snug">
                  {item.urduTitle}
                </p>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 text-right">
                <p className="font-urdu text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {item.urduDesc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Skincare Note Banner */}
        <div className="mt-12 bg-[#2A0845]/5 border border-[#D4AF37]/30 rounded-2xl p-4 sm:p-6 text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            <span className="font-bold text-[#2A0845]">Honest Skincare Note:</span> Individual skin types and routines vary. We celebrate healthy, hydrated, and radiant skin without exaggerated medical or permanent bleaching claims.
          </p>
          <p className="font-urdu text-xs sm:text-sm text-[#4A1575] mt-1 font-semibold">
            ہر انسان کی جلد منفرد ہوتی ہے۔ ہماری کریم قدرتی نمی اور نکھار کے لیے تیار کی گئی ہے، بغیر کسی غیر حقیقی طبی دعوے کے۔
          </p>
        </div>

      </div>
    </section>
  );
};
