"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Github, Twitter, Linkedin, Mail, MapPin, Phone, ArrowUp, Clock, Shield, Globe, Users, Award, Star, Home, ShoppingBag, Cloud, BarChart3, Search, GraduationCap, Building, Book, FileText, HelpCircle, Globe2, Zap } from "lucide-react";

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
    { name: "Real Estate", href: `/countries/${countryCode}/services/real-estate`, icon: Building },
    { name: "E-Commerce", href: `/countries/${countryCode}/services/ecommerce`, icon: ShoppingBag },
    { name: "Cloud Solutions", href: `/countries/${countryCode}/services/cloud`, icon: Cloud },
    { name: "Digital Marketing", href: `/countries/${countryCode}/services/marketing`, icon: BarChart3 },
    { name: "SEO Services", href: `/countries/${countryCode}/services/seo`, icon: Search },
    { name: "HR Placements", href: `/countries/${countryCode}/services/placements`, icon: GraduationCap },
  ];

  const company = [
    { name: "About Us", href: `/countries/${countryCode}/about` },
    { name: "Our Services", href: `/countries/${countryCode}/services` },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: `/countries/${countryCode}/contact` },
    { name: "Privacy Policy", href: `/countries/${countryCode}/privacy` },
    { name: "Terms of Service", href: `/countries/${countryCode}/terms` },
  ];

  const resources = [
    { name: "Resources", href: `/countries/${countryCode}/resources`, icon: Book },
    { name: "Blog", href: `/countries/${countryCode}/blog`, icon: Book },
    { name: "Case Studies", href: `/countries/${countryCode}/case-studies`, icon: FileText },
    { name: "Documentation", href: `/countries/${countryCode}/documentation`, icon: FileText },
    { name: "Help Center", href: `/countries/${countryCode}/help-center`, icon: HelpCircle },
    { name: "API Reference", href: `/countries/${countryCode}/api-reference`, icon: Globe2 },
    { name: "Status Page", href: `/countries/${countryCode}/status`, icon: Zap },
  ];

  const industries = [
    { name: "Real Estate", href: `/countries/${countryCode}/services/real-estate`, icon: Building },
    { name: "Fashion Retail", href: `/countries/${countryCode}/services/ecommerce`, icon: ShoppingBag },
    { name: "Technology", href: `/countries/${countryCode}/services/cloud`, icon: Cloud },
    { name: "Healthcare", href: "/industries/healthcare", icon: Shield },
    { name: "Finance", href: "/industries/finance", icon: Award },
    { name: "Education", href: "/industries/education", icon: Book },
  ];

  return (
    <footer className="w-full bg-[#eef0f4] border-t border-[#4d7cf5]/30">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#4d7cf5] to-[#3660e0] flex items-center justify-center shadow-lg shadow-[#4d7cf5]/20">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold tracking-wider text-[#1c1f26]">AEX AGENCY</span>
                <span className="block text-[10px] text-[#4d7cf5] font-mono tracking-widest uppercase">
                  Multi-Industry Modular Engine
                </span>
              </div>
            </div>
            <p className="text-sm text-[#4a5060] leading-relaxed">
              Empowering businesses in {countryName} with cutting-edge digital solutions. 
              From real estate to e-commerce, we transform industries with innovation.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-[#4d7cf5]/30">
                <Shield className="w-4 h-4 text-[#4d7cf5]" />
                <span className="text-xs text-[#1c1f26] font-medium">SSL Secured</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-[#4d7cf5]/30">
                <Award className="w-4 h-4 text-[#4d7cf5]" />
                <span className="text-xs text-[#1c1f26] font-medium">ISO Certified</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-[#4d7cf5]/30">
                <Star className="w-4 h-4 text-[#4d7cf5]" />
                <span className="text-xs text-[#1c1f26] font-medium">4.9★ Rating</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-white border border-[#4d7cf5]/30 flex items-center justify-center text-[#4a5060] hover:text-[#4d7cf5] hover:bg-[#4d7cf5]/10 hover:border-[#4d7cf5] transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white border border-[#4d7cf5]/30 flex items-center justify-center text-[#4a5060] hover:text-[#4d7cf5] hover:bg-[#4d7cf5]/10 hover:border-[#4d7cf5] transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white border border-[#4d7cf5]/30 flex items-center justify-center text-[#4a5060] hover:text-[#4d7cf5] hover:bg-[#4d7cf5]/10 hover:border-[#4d7cf5] transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white border border-[#4d7cf5]/30 flex items-center justify-center text-[#4a5060] hover:text-[#4d7cf5] hover:bg-[#4d7cf5]/10 hover:border-[#4d7cf5] transition-all duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-[#1c1f26] font-semibold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-sm text-[#4a5060] hover:text-[#4d7cf5] transition-colors flex items-center gap-2">
                    <service.icon className="w-4 h-4" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-[#1c1f26] font-semibold mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-[#4a5060] hover:text-[#4d7cf5] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-[#1c1f26] font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h3>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-[#4a5060] hover:text-[#4d7cf5] transition-colors flex items-center gap-2">
                    <item.icon className="w-4 h-4" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Section */}
          <div>
            <h3 className="text-[#1c1f26] font-semibold mb-4 text-sm uppercase tracking-wider">Industries</h3>
            <ul className="space-y-3">
              {industries.map((industry) => (
                <li key={industry.name}>
                  <Link href={industry.href} className="text-sm text-[#4a5060] hover:text-[#4d7cf5] transition-colors flex items-center gap-2">
                    <industry.icon className="w-4 h-4" />
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-[#1c1f26] font-semibold mb-4 text-sm uppercase tracking-wider">Contact {countryName}</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#4d7cf5] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[#4a5060]">{countryData.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#4d7cf5] flex-shrink-0" />
                <span className="text-sm text-[#4a5060]">{countryData.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#4d7cf5] flex-shrink-0" />
                <span className="text-sm text-[#4a5060]">{countryData.email}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-[#4d7cf5] flex-shrink-0" />
                <span className="text-sm text-[#4a5060]">{countryData.hours}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-[#4d7cf5] flex-shrink-0" />
                <span className="text-sm text-[#4a5060]">{countryData.stats}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Careers CTA Section */}
        <div className="mt-12 pt-8 border-t border-[#4d7cf5]/30">
          <div className="bg-gradient-to-r from-[#4d7cf5]/10 to-[#3660e0]/10 rounded-xl p-8 border border-[#4d7cf5]/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-[#1c1f26] font-bold text-xl mb-2">Join Our Team</h3>
                <p className="text-sm text-[#4a5060]">
                  We're always looking for talented people to join our growing team.
                </p>
              </div>
              <Link
                href="/careers"
                className="px-8 py-3 bg-gradient-to-r from-[#4d7cf5] to-[#3660e0] rounded-lg text-white font-semibold hover:from-[#3660e0] hover:to-[#4d7cf5] transition-all flex items-center gap-2 whitespace-nowrap"
              >
                <GraduationCap className="w-5 h-5" />
                View Open Positions
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-[#4d7cf5]/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-[#1c1f26] font-semibold mb-4 text-sm uppercase tracking-wider">Stay Updated</h3>
              <p className="text-sm text-[#4a5060] mb-4">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white border border-[#4d7cf5]/30 rounded-lg text-[#1c1f26] placeholder-[#4a5060] focus:outline-none focus:ring-2 focus:ring-[#4d7cf5]"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-[#4d7cf5] to-[#3660e0] rounded-lg text-white font-semibold hover:from-[#3660e0] hover:to-[#4d7cf5] transition-all">
                  Subscribe
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-[#1c1f26] font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
              <div className="flex flex-wrap gap-2">
                <Link href={`/countries/${countryCode}`} className="text-sm text-[#4a5060] hover:text-[#4d7cf5] transition-colors">
                  Home
                </Link>
                <span className="text-[#4a5060]">•</span>
                <Link href={`/countries/${countryCode}/services`} className="text-sm text-[#4a5060] hover:text-[#4d7cf5] transition-colors">
                  Services
                </Link>
                <span className="text-[#4a5060]">•</span>
                <Link href="/admin/insights" className="text-sm text-[#4a5060] hover:text-[#4d7cf5] transition-colors">
                  Insights
                </Link>
                <span className="text-[#4a5060]">•</span>
                <Link href="/admin/advertisements" className="text-sm text-[#4a5060] hover:text-[#4d7cf5] transition-colors">
                  Advertisements
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Industries Section */}
        <div className="mt-12 pt-8 border-t border-[#4d7cf5]/30">
          <h3 className="text-[#1c1f26] font-semibold mb-4 text-sm uppercase tracking-wider">Industries We Serve</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry) => (
              <Link
                key={industry.name}
                href={industry.href}
                className="text-sm text-[#4a5060] hover:text-[#4d7cf5] transition-colors text-center py-3 bg-white rounded-lg border border-[#4d7cf5]/30 flex flex-col items-center gap-2"
              >
                <industry.icon className="w-5 h-5" />
                {industry.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#4d7cf5]/30">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <p className="text-sm text-[#4a5060]">
                © 2026 AEX Agency — Production Feature Architecture
              </p>
              <p className="text-xs text-[#4a5060] mt-1">
                Pricing in {currencySymbol} | Serving {countryName}
              </p>
            </div>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white border border-[#4d7cf5]/30 flex items-center justify-center text-[#4a5060] hover:text-white hover:bg-[#4d7cf5] hover:border-[#4d7cf5] transition-all duration-300"
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
