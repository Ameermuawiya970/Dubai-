import React, { useState } from 'react';
import { ShoppingBag, MessageCircle, Truck, ShieldCheck, Check, Sparkles, MapPin, User, Phone, Home, FileText } from 'lucide-react';
import { ProductPackage } from '../types';

const PACKAGES: ProductPackage[] = [
  {
    id: 'pack-1',
    quantity: 1,
    title: 'Single Jar (1 Month Supply)',
    urduTitle: '1 جار — ٹرائل پیک',
    price: 1850,
    originalPrice: 2200,
    deliveryText: 'Rs. 200 Delivery',
    savingsText: 'Save Rs. 350'
  },
  {
    id: 'pack-2',
    quantity: 2,
    title: 'Double Pack (Best Value)',
    urduTitle: '2 جار — سب سے مقبول پیشکش',
    price: 3400,
    originalPrice: 4400,
    deliveryText: 'FREE Delivery | مفت ڈیلیوری',
    isPopular: true,
    savingsText: 'Save Rs. 1,000 + Free Delivery'
  },
  {
    id: 'pack-3',
    quantity: 3,
    title: 'Family / Glow Bundle',
    urduTitle: '3 جار — مکمل فیملی بنڈل',
    price: 4950,
    originalPrice: 6600,
    deliveryText: 'FREE Delivery | مفت ڈیلیوری',
    savingsText: 'Save Rs. 1,650 + Free Delivery'
  }
];

const POPULAR_CITIES = [
  'Lahore', 'Karachi', 'Islamabad', 'Rawalpindi', 'Faisalabad', 
  'Multan', 'Peshawar', 'Gujranwala', 'Sialkot', 'Quetta', 'Hyderabad'
];

export const OrderForm: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<ProductPackage>(PACKAGES[1]);
  const [customQty, setCustomQty] = useState<number>(2);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSelectPackage = (pkg: ProductPackage) => {
    setSelectedPackage(pkg);
    setCustomQty(pkg.quantity);
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) {
      newErrors.fullName = 'براہ کرم اپنا پورا نام درج کریں (Please enter your full name)';
    }
    if (!phone.trim() || phone.trim().length < 10) {
      newErrors.phone = 'براہ کرم درست موبائل نمبر درج کریں (Please enter a valid mobile number)';
    }
    if (!city.trim()) {
      newErrors.city = 'براہ کرم اپنے شہر کا نام درج کریں (Please enter your city)';
    }
    if (!address.trim() || address.trim().length < 8) {
      newErrors.address = 'براہ کرم مکمل پتہ درج کریں (Please enter your complete delivery address)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buildWhatsAppMessage = (): string => {
    const qtyText = customQty > 0 ? `${customQty} Jar(s) (${selectedPackage.title})` : `${selectedPackage.quantity} Jar(s)`;
    const notesText = notes.trim() ? notes.trim() : 'None';

    return `Assalam o Alaikum,

I want to order Dubai Zafrani Cream.

Name: ${fullName.trim()}
Phone: ${phone.trim()}
City: ${city.trim()}
Quantity: ${qtyText}
Address: ${address.trim()}
Notes: ${notesText}

Please confirm my order.`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      // Scroll to the first error
      const firstErrorKey = Object.keys(errors)[0] || 'order-form-container';
      const element = document.getElementById(firstErrorKey);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);

    const message = buildWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/923066508319?text=${encodedMessage}`;

    // Create a temporary anchor to trigger navigation reliably in both top-level and iframe environments
    const link = document.createElement('a');
    link.href = whatsappUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="order-section" className="py-16 lg:py-24 bg-gradient-to-b from-[#FAF7F2] via-[#F4EFE6] to-[#FAF7F2] text-[#1F1728] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2A0845] text-[#FFE885] text-xs font-bold uppercase tracking-wider shadow-md">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Direct WhatsApp Order Form</span>
            <span className="text-[#D4AF37]">•</span>
            <span className="font-urdu">آرڈر فارم</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A0329]">
            Order Dubai Zafrani Cream
          </h2>

          <p className="font-urdu text-xl sm:text-2xl font-bold text-[#4A1575] leading-relaxed">
            اپنا آرڈر درج کریں اور واٹس ایپ پر باآسانی کنفرم کروائیں
          </p>

          <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
            Fill in your delivery details below. Clicking the button will open WhatsApp with your order pre-written so you only have to press Send.
          </p>
        </div>

        {/* Form Container Card */}
        <div id="order-form-container" className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#D4AF37]/50 shadow-2xl shadow-[#2A0845]/10 relative overflow-hidden">
          
          {/* Top Banner Reassurance */}
          <div className="mb-8 p-3.5 rounded-2xl bg-gradient-to-r from-[#2A0845] to-[#4A1575] text-[#FFE885] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm font-semibold">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#FFE885] shrink-0" />
              <span>Cash on Delivery (کیش آن ڈیلیوری) — پارسل ملنے پر رقم ادا کریں</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Phone className="w-3.5 h-3.5 text-[#FFE885]" />
              <span>Helpline: +92 306 6508319</span>
            </div>
          </div>

          {/* STEP 1: Select Package / Quantity */}
          <div className="mb-10">
            <label className="block text-sm sm:text-base font-bold text-[#1A0329] mb-3 flex items-center justify-between">
              <span>Step 1: Select Package & Quantity (پیکج منتخب کریں)</span>
              <span className="text-xs text-[#AA771C] font-semibold">Special Promotional Prices</span>
            </label>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {PACKAGES.map((pkg) => {
                const isSelected = selectedPackage.id === pkg.id;
                return (
                  <div
                    key={pkg.id}
                    id={`package-option-${pkg.id}`}
                    onClick={() => handleSelectPackage(pkg)}
                    className={`cursor-pointer rounded-2xl p-5 transition-all relative border-2 flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#D4AF37] bg-gradient-to-b from-[#FFFDF9] to-[#FAF5EE] shadow-lg ring-2 ring-[#D4AF37]/30 scale-[1.02]'
                        : 'border-gray-200 bg-gray-50/50 hover:border-gray-300 hover:bg-white'
                    }`}
                  >
                    {pkg.isPopular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#D4AF37] to-[#AA771C] text-[#1A0329] text-[11px] font-extrabold px-3 py-0.5 rounded-full shadow-md uppercase tracking-wider flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        <span>Most Popular / سب سے مقبول</span>
                      </div>
                    )}

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-sm sm:text-base text-[#1A0329]">
                          {pkg.title}
                        </h4>
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                          isSelected ? 'bg-[#2A0845] border-[#2A0845]' : 'border-gray-300'
                        }`}>
                          {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                        </div>
                      </div>

                      <p className="font-urdu text-sm font-bold text-[#6B21A8] mb-3 leading-snug text-right">
                        {pkg.urduTitle}
                      </p>

                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-2xl sm:text-3xl font-extrabold text-[#1A0329]">
                          Rs. {pkg.price.toLocaleString()}
                        </span>
                        <span className="text-xs text-gray-400 line-through">
                          Rs. {pkg.originalPrice.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-gray-200/60 mt-2 space-y-1">
                      <p className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                        <Truck className="w-3 h-3 shrink-0" />
                        <span>{pkg.deliveryText}</span>
                      </p>
                      {pkg.savingsText && (
                        <p className="text-[11px] font-bold text-[#AA771C]">
                          {pkg.savingsText}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Custom Quantity Incrementer */}
            <div className="mt-4 flex items-center justify-end gap-3 text-xs sm:text-sm">
              <span className="font-semibold text-gray-700">Custom Quantity (تعداد):</span>
              <div className="inline-flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm">
                <button
                  type="button"
                  id="decrease-qty-btn"
                  onClick={() => setCustomQty(Math.max(1, customQty - 1))}
                  className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-[#1A0329] font-bold text-base transition-colors"
                >
                  -
                </button>
                <span className="px-4 py-1.5 font-bold text-[#1A0329] min-w-10 text-center">
                  {customQty}
                </span>
                <button
                  type="button"
                  id="increase-qty-btn"
                  onClick={() => setCustomQty(customQty + 1)}
                  className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-[#1A0329] font-bold text-base transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* STEP 2: Delivery Details Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-sm sm:text-base font-bold text-[#1A0329] mb-4">
                Step 2: Enter Delivery Information (ڈیلیوری کی معلومات درج کریں)
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Full Name */}
                <div id="full-name-field" className="space-y-1.5">
                  <label htmlFor="full-name-input" className="block text-xs sm:text-sm font-semibold text-gray-800 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Full Name (پورا نام) *</span>
                    </span>
                    <span className="text-[11px] text-gray-400">Required</span>
                  </label>
                  <input
                    type="text"
                    id="full-name-input"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Fatima Khan / محمد علی"
                    className={`w-full px-4 py-3 rounded-xl border bg-[#FAF7F2]/40 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:bg-white transition-all ${
                      errors.fullName ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-600 font-medium">{errors.fullName}</p>
                  )}
                </div>

                {/* Mobile Number */}
                <div id="phone-number-field" className="space-y-1.5">
                  <label htmlFor="phone-input" className="block text-xs sm:text-sm font-semibold text-gray-800 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Mobile / WhatsApp Number (موبائل نمبر) *</span>
                    </span>
                    <span className="text-[11px] text-gray-400">For courier contact</span>
                  </label>
                  <input
                    type="tel"
                    id="phone-input"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0306-1234567"
                    className={`w-full px-4 py-3 rounded-xl border bg-[#FAF7F2]/40 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:bg-white transition-all ${
                      errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-600 font-medium">{errors.phone}</p>
                  )}
                </div>

                {/* City */}
                <div id="city-field" className="sm:col-span-2 space-y-1.5">
                  <label htmlFor="city-input" className="block text-xs sm:text-sm font-semibold text-gray-800 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>City (شہر کا نام) *</span>
                    </span>
                    <span className="text-[11px] text-gray-400">Select or type</span>
                  </label>
                  <input
                    type="text"
                    id="city-input"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Lahore / لاہور"
                    className={`w-full px-4 py-3 rounded-xl border bg-[#FAF7F2]/40 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:bg-white transition-all ${
                      errors.city ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.city && (
                    <p className="text-xs text-red-600 font-medium">{errors.city}</p>
                  )}

                  {/* Quick Select Popular Cities */}
                  <div className="pt-2 flex flex-wrap gap-1.5 items-center">
                    <span className="text-[11px] font-semibold text-gray-500 mr-1">Popular Cities:</span>
                    {POPULAR_CITIES.map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setCity(c)}
                        className={`text-xs px-2.5 py-1 rounded-full border transition-all ${
                          city.toLowerCase() === c.toLowerCase()
                            ? 'bg-[#2A0845] text-[#FFE885] border-[#2A0845] font-bold'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-[#D4AF37]'
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Complete Delivery Address */}
                <div id="address-field" className="sm:col-span-2 space-y-1.5">
                  <label htmlFor="address-input" className="block text-xs sm:text-sm font-semibold text-gray-800 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Home className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Complete Delivery Address (مکمل گھر یا دفتر کا پتہ) *</span>
                    </span>
                    <span className="text-[11px] text-gray-400">House / Street / Area</span>
                  </label>
                  <textarea
                    id="address-input"
                    rows={2}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="House / Flat No., Street No., Sector / Area, Landmark, City..."
                    className={`w-full px-4 py-3 rounded-xl border bg-[#FAF7F2]/40 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:bg-white transition-all ${
                      errors.address ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.address && (
                    <p className="text-xs text-red-600 font-medium">{errors.address}</p>
                  )}
                </div>

                {/* Optional Notes */}
                <div id="notes-field" className="sm:col-span-2 space-y-1.5">
                  <label htmlFor="notes-input" className="block text-xs sm:text-sm font-semibold text-gray-800 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Optional Notes (اضافی ہدایات / نوٹ)</span>
                    </span>
                    <span className="text-[11px] text-gray-400">Optional</span>
                  </label>
                  <input
                    type="text"
                    id="notes-input"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Call before delivery, deliver after 3 PM..."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-[#FAF7F2]/40 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:bg-white transition-all"
                  />
                </div>

              </div>
            </div>

            {/* Generated WhatsApp Message Preview Box */}
            <div className="bg-[#FAF5EE] rounded-2xl p-4 border border-[#D4AF37]/30">
              <p className="text-xs font-bold text-[#2A0845] mb-1 flex items-center gap-1.5">
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp Message That Will Be Sent:</span>
              </p>
              <pre className="text-[11px] sm:text-xs text-gray-800 whitespace-pre-wrap font-mono bg-white p-3 rounded-lg border border-gray-200">
                {buildWhatsAppMessage()}
              </pre>
            </div>

            {/* Form Submit Button (WhatsApp Order) */}
            <div className="pt-2">
              <button
                type="submit"
                id="send-whatsapp-order-button"
                disabled={isSubmitting}
                className="w-full py-4 sm:py-5 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.99] text-white font-extrabold text-base sm:text-lg shadow-xl shadow-[#25D366]/25 transition-all flex flex-col sm:flex-row items-center justify-center gap-2 group cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" />
                  <span className="font-urdu text-xl font-bold leading-none">WhatsApp پر آرڈر بھیجیں</span>
                </div>
                <span className="hidden sm:inline text-white/70">•</span>
                <span className="text-sm sm:text-base uppercase tracking-wider font-semibold">
                  Send Order on WhatsApp
                </span>
              </button>
            </div>

            <p className="text-center text-xs text-gray-500">
              کلک کرنے پر آپ کا واٹس ایپ کھل جائے گا اور مکمل آرڈر خودکار لکھا ہوگا، بس آپ کو Send کا بٹن دبانا ہوگا۔
            </p>
          </form>

        </div>

      </div>
    </section>
  );
};
