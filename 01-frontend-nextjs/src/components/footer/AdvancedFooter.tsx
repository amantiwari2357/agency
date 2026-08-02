"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Github, Twitter, Linkedin, Mail, MapPin, Phone, ArrowUp, Clock, Shield, Globe, Users, Award, Star, Home, ShoppingBag, Cloud, BarChart3, Search, GraduationCap, Building, Book, FileText, HelpCircle, Globe2, Zap, Quote, ChevronLeft, ChevronRight } from "lucide-react";

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

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const footerTestimonials = {
    us: [
      { name: "Sarah Johnson", role: "CEO, TechStart Inc", content: "AEX Agency transformed our digital presence completely. Their real estate technology solution increased our property inquiries by 300% in just 3 months." },
      { name: "Michael Chen", role: "CTO, CloudScale Technologies", content: "The cloud infrastructure solutions provided by AEX Agency helped us scale our operations across the US with 99.9% uptime." },
      { name: "Emily Rodriguez", role: "Marketing Director, RetailMax Group", content: "Their SEO and digital marketing services drove a 450% increase in organic traffic. The ROI on our marketing spend has been phenomenal." }
    ],
    uk: [
      { name: "James Wilson", role: "Managing Director, London Properties Ltd", content: "The real estate technology solutions provided by AEX Agency have revolutionized how we manage property listings in the UK market." },
      { name: "Sarah Mitchell", role: "Head of Digital, British Retail Group", content: "Their e-commerce solutions helped us increase online sales by 200% in 6 months across the UK market." },
      { name: "Robert Clarke", role: "CEO, Tech Innovators UK", content: "AEX Agency's cloud migration services were seamless. They handled our complex legacy systems with expertise." }
    ],
    ae: [
      { name: "Ahmed Al-Farsi", role: "Director, Dubai Properties", content: "AEX Agency delivered exceptional real estate technology solutions for our Dubai operations. Their understanding of the Middle East market is outstanding." },
      { name: "Fatima Hassan", role: "CEO, Gulf E-Commerce", content: "Their e-commerce platform helped us expand across the GCC region with multilingual support and local payment integrations." },
      { name: "Omar Khalil", role: "CTO, MENA Cloud Solutions", content: "The cloud infrastructure provided by AEX Agency scaled our operations seamlessly across the UAE with 99.9% uptime." }
    ],
    in: [
      { name: "Priya Sharma", role: "Founder, E-Commerce India", content: "AEX Agency's SEO and marketing services drove a 450% increase in organic traffic. The team's understanding of the Indian market is exceptional." },
      { name: "Rajesh Kumar", role: "CEO, Tech India Solutions", content: "Their cloud infrastructure solutions helped us scale across India with 99.9% uptime and excellent local support." },
      { name: "Anita Patel", role: "HR Director, Campus Placements India", content: "Their HR placement platform transformed our campus recruitment process with a 200% increase in successful placements." }
    ]
  };

  const testimonials = footerTestimonials[countryCode as keyof typeof footerTestimonials] || footerTestimonials.us;

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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
    { name: "Real Estate", href: `/${countryCode}/services/real-estate`, icon: Building },
    { name: "E-Commerce", href: `/${countryCode}/services/ecommerce`, icon: ShoppingBag },
    { name: "Cloud Solutions", href: `/${countryCode}/services/cloud`, icon: Cloud },
    { name: "Digital Marketing", href: `/${countryCode}/services/marketing`, icon: BarChart3 },
    { name: "SEO Services", href: `/${countryCode}/services/seo`, icon: Search },
    { name: "HR Placements", href: `/${countryCode}/services/placements`, icon: GraduationCap },
  ];

  const company = [
    { name: "About Us", href: `/${countryCode}/about` },
    { name: "Our Services", href: `/${countryCode}/services` },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: `/${countryCode}/contact` },
    { name: "Privacy Policy", href: `/${countryCode}/privacy` },
    { name: "Terms of Service", href: `/${countryCode}/terms` },
  ];

  const resources = [
    { name: "Resources", href: `/${countryCode}/resources`, icon: Book },
    { name: "Blog", href: `/${countryCode}/blog`, icon: Book },
    { name: "Case Studies", href: `/${countryCode}/case-studies`, icon: FileText },
    { name: "Documentation", href: `/${countryCode}/documentation`, icon: FileText },
    { name: "Help Center", href: `/${countryCode}/help-center`, icon: HelpCircle },
    { name: "API Reference", href: `/${countryCode}/api-reference`, icon: Globe2 },
    { name: "Status Page", href: `/${countryCode}/status`, icon: Zap },
  ];

  const industries = [
    { name: "Real Estate", href: `/${countryCode}/services/real-estate`, icon: Building },
    { name: "Fashion Retail", href: `/${countryCode}/services/ecommerce`, icon: ShoppingBag },
    { name: "Technology", href: `/${countryCode}/services/cloud`, icon: Cloud },
    { name: "Healthcare", href: `/${countryCode}/services/real-estate`, icon: Shield },
    { name: "Finance", href: `/${countryCode}/services/marketing`, icon: Award },
    { name: "Education", href: `/${countryCode}/services/placements`, icon: Book },
  ];

  const trustSignals = [
    { name: "ISO 27001 Certified", icon: Shield },
    { name: "SOC 2 Compliant", icon: Award },
    { name: "GDPR Compliant", icon: Globe },
    { name: "24/7 Support", icon: Clock },
  ];

  const socialLinks = [
    { name: "Twitter", href: "https://twitter.com/aexagency", icon: Twitter },
    { name: "LinkedIn", href: "https://linkedin.com/company/aexagency", icon: Linkedin },
    { name: "GitHub", href: "https://github.com/aexagency", icon: Github },
  ];

  return (
    <footer className="w-full bg-[#eef0f4] border-t border-[#4d7cf5]/30">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
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
              {trustSignals.map((signal, index) => (
                <div key={index} className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-[#4d7cf5]/30">
                  <signal.icon className="w-4 h-4 text-[#4d7cf5]" />
                  <span className="text-xs text-[#1c1f26] font-medium">{signal.name}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="w-10 h-10 rounded-lg bg-white border border-[#4d7cf5]/30 flex items-center justify-center text-[#4a5060] hover:text-[#4d7cf5] hover:bg-[#4d7cf5]/10 hover:border-[#4d7cf5] transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-3 pt-4 border-t border-[#4d7cf5]/30">
              <div className="flex items-center gap-3 text-sm text-[#4a5060]">
                <MapPin className="w-4 h-4 text-[#4d7cf5]" />
                <span>{countryData.address}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#4a5060]">
                <Phone className="w-4 h-4 text-[#4d7cf5]" />
                <span>{countryData.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#4a5060]">
                <Mail className="w-4 h-4 text-[#4d7cf5]" />
                <span>{countryData.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#4a5060]">
                <Clock className="w-4 h-4 text-[#4d7cf5]" />
                <span>{countryData.hours}</span>
              </div>
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

          {/* Testimonials Section */}
          <div className="lg:col-span-1">
            <h3 className="text-[#1c1f26] font-semibold mb-4 text-sm uppercase tracking-wider">Client Testimonials</h3>
            <div className="bg-white rounded-xl p-6 border border-[#4d7cf5]/30 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-[#4d7cf5]/20" />
              <div className="relative z-10">
                <p className="text-sm text-[#4a5060] mb-4 italic leading-relaxed">
                  "{testimonials[currentTestimonialIndex].content}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-[#1c1f26] text-sm">{testimonials[currentTestimonialIndex].name}</p>
                    <p className="text-xs text-[#8a90a2]">{testimonials[currentTestimonialIndex].role}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={prevTestimonial}
                      className="w-8 h-8 rounded-full bg-[#eef0f4] flex items-center justify-center text-[#4d7cf5] hover:bg-[#4d7cf5] hover:text-white transition-all"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="w-8 h-8 rounded-full bg-[#4d7cf5] flex items-center justify-center text-white hover:bg-[#3660e0] transition-all"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="flex gap-1 mt-4">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonialIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentTestimonialIndex ? 'bg-[#4d7cf5]' : 'bg-[#eef0f4]'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-1">
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
                <Link href={`/${countryCode}`} className="text-sm text-[#4a5060] hover:text-[#4d7cf5] transition-colors">
                  Home
                </Link>
                <span className="text-[#4a5060]">•</span>
                <Link href={`/${countryCode}/services`} className="text-sm text-[#4a5060] hover:text-[#4d7cf5] transition-colors">
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
