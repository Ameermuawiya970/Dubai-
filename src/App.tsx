/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProductSection } from './components/ProductSection';
import { CreativeGallery } from './components/CreativeGallery';
import { TrustSection } from './components/TrustSection';
import { OrderForm } from './components/OrderForm';
import { Footer } from './components/Footer';
import { StickyWhatsAppCTA } from './components/StickyWhatsAppCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1F1728] selection:bg-[#D4AF37] selection:text-[#1A0329]">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Hero Section with Official Creative visual & primary CTAs */}
        <HeroSection />

        {/* Product Details & Saffron Benefits */}
        <ProductSection />

        {/* Gallery / Creative Showcase */}
        <CreativeGallery />

        {/* Trust & Service Commitments (no unproven claims) */}
        <TrustSection />

        {/* Comprehensive WhatsApp Order Form */}
        <OrderForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Sticky WhatsApp Actions for Mobile and Desktop */}
      <StickyWhatsAppCTA />
    </div>
  );
}
