"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Github, Twitter, Linkedin, Mail, MapPin, Phone, ArrowUp, Clock, Shield, Globe, Users, Award, Star } from "lucide-react";

interface AdvancedFooterProps {
  countryCode: string;
  countryName: string;
  currency: string;
  currencySymbol: string;
}

export default function AdvancedFooter({ countryCode, countryName, currency, currencySymbol }: AdvancedFooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const countrySpecificData = {
    us: {
      address: "123 Innovation Drive, Tech Valley, CA 94025",
      phone: "+1 (650) 555-0123",
      email: "us@aexagency.com",
      hours: "Mon-Fri: 9AM-6PM PST",
      stats: "500+ US Clients",
    },
    uk: {
      address: "45 Innovation Square, London EC1A 1BB",
      phone: "+44 20 7123 4567",
      email: "uk@aexagency.com",
      hours: "Mon-Fri: 9AM-6PM GMT",
      stats: "300+ UK Clients",
    },
    ae: {
      address: "Dubai Silicon Oasis, DSO, Dubai, UAE",
      phone: "+971 4 123 4567",
      email: "ae@aexagency.com",
      hours: "Sun-Thu: 9AM-6PM GST",
      stats: "200+ UAE Clients",
    },
    in: {
      address: "MG Road, Bangalore, Karnataka 560001",
      phone: "+91 80 1234 5678",
      email: "in@aexagency.com",
      hours: "Mon-Fri: 9AM-7PM IST",
      stats: "400+ India Clients",
    },
  };

  const countryData = countrySpecificData[countryCode as keyof typeof countrySpecificData] || countrySpecificData.us;

  const services = [
    { name: "Real Estate", href: `/countries/${countryCode}/services/real-estate`, icon: "🏠" },
    { name: "E-Commerce", href: `/countries/${countryCode}/services/ecommerce`, icon: "🛒" },
    { name: "Cloud Solutions", href: `/countries/${countryCode}/services/cloud`, icon: "☁️" },
    { name: "Digital Marketing", href: `/countries/${countryCode}/services/marketing`, icon: "📈" },
    { name: "SEO Services", href: `/countries/${countryCode}/services/seo`, icon: "🔍" },
    { name: "HR Placements", href: `/countries/${countryCode}/services/placements`, icon: "👥" },
  ];

  const company = [
    { name: "About Us", href: `/countries/${countryCode}/about` },
    { name: "Our Services", href: `/countries/${countryCode}/services` },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: `/countries/${countryCode}/contact` },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  const resources = [
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Documentation", href: "/docs" },
    { name: "Help Center", href: "/help" },
    { name: "API Reference", href: "/api" },
    { name: "Status Page", href: "/status" },
  ];

  const industries = [
    { name: "Real Estate", href: `/countries/${countryCode}/services/real-estate` },
    { name: "Fashion Retail", href: `/countries/${countryCode}/services/ecommerce` },
    { name: "Technology", href: `/countries/${countryCode}/services/cloud` },
    { name: "Healthcare", href: "/industries/healthcare" },
    { name: "Finance", href: "/industries/finance" },
    { name: "Education", href: "/industries/education" },
  ];

  return (
    <footer className="w-full bg-[#1c1f26] border-t border-[#eef0f4]">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#4d7cf5] to-[#3660e0] flex items-center justify-center shadow-lg shadow-[#4d7cf5]/20">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold tracking-wider text-white">AEX AGENCY</span>
                <span className="block text-[10px] text-[#4d7cf5] font-mono tracking-widest uppercase">
                  Multi-Industry Modular Engine
                </span>
              </div>
            </div>
            <p className="text-sm text-[#8a90a2] leading-relaxed">
              Empowering businesses in {countryName} with cutting-edge digital solutions. 
              From real estate to e-commerce, we transform industries with innovation.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-[#eef0f4] rounded-lg">
                <Shield className="w-4 h-4 text-[#4d7cf5]" />
                <span className="text-xs text-[#1c1f26] font-medium">SSL Secured</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-[#eef0f4] rounded-lg">
                <Award className="w-4 h-4 text-[#4d7cf5]" />
                <span className="text-xs text-[#1c1f26] font-medium">ISO Certified</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-[#eef0f4] rounded-lg">
                <Star className="w-4 h-4 text-[#4d7cf5]" />
                <span className="text-xs text-[#1c1f26] font-medium">4.9★ Rating</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-white border border-[#eef0f4] flex items-center justify-center text-[#8a90a2] hover:text-[#4d7cf5] hover:bg-[#eef0f4] hover:border-[#4d7cf5] transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white border border-[#eef0f4] flex items-center justify-center text-[#8a90a2] hover:text-[#4d7cf5] hover:bg-[#eef0f4] hover:border-[#4d7cf5] transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white border border-[#eef0f4] flex items-center justify-center text-[#8a90a2] hover:text-[#4d7cf5] hover:bg-[#eef0f4] hover:border-[#4d7cf5] transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white border border-[#eef0f4] flex items-center justify-center text-[#8a90a2] hover:text-[#4d7cf5] hover:bg-[#eef0f4] hover:border-[#4d7cf5] transition-all duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-sm text-[#8a90a2] hover:text-[#4d7cf5] transition-colors flex items-center gap-2">
                    <span>{service.icon}</span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-[#8a90a2] hover:text-[#4d7cf5] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h3>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-[#8a90a2] hover:text-[#4d7cf5] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact {countryName}</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#4d7cf5] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[#8a90a2]">{countryData.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#4d7cf5] flex-shrink-0" />
                <span className="text-sm text-[#8a90a2]">{countryData.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#4d7cf5] flex-shrink-0" />
                <span className="text-sm text-[#8a90a2]">{countryData.email}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-[#4d7cf5] flex-shrink-0" />
                <span className="text-sm text-[#8a90a2]">{countryData.hours}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-[#4d7cf5] flex-shrink-0" />
                <span className="text-sm text-[#8a90a2]">{countryData.stats}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Industries Section */}
        <div className="mt-12 pt-8 border-t border-[#eef0f4]">
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Industries We Serve</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry) => (
              <Link
                key={industry.name}
                href={industry.href}
                className="text-sm text-[#8a90a2] hover:text-[#4d7cf5] transition-colors text-center py-2 bg-[#eef0f4] rounded-lg"
              >
                {industry.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#eef0f4]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <p className="text-sm text-[#8a90a2]">
                © 2026 AEX Agency — Production Feature Architecture
              </p>
              <p className="text-xs text-[#8a90a2] mt-1">
                Built with Next.js 15 App Router, React Native Expo & Express Domain Modules.
              </p>
              <p className="text-xs text-[#8a90a2] mt-1">
                Pricing in {currencySymbol} | Serving {countryName}
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-[#8a90a2]">
              <span className="px-3 py-1 bg-white rounded-full border border-[#eef0f4]">01-frontend-nextjs</span>
              <span className="px-3 py-1 bg-white rounded-full border border-[#eef0f4]">02-mobile-app</span>
              <span className="px-3 py-1 bg-white rounded-full border border-[#eef0f4]">03-backend-server</span>
            </div>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white border border-[#eef0f4] flex items-center justify-center text-[#8a90a2] hover:text-white hover:bg-[#4d7cf5] hover:border-[#4d7cf5] transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
