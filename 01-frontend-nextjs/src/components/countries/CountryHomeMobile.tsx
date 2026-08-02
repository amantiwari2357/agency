"use client";

import { motion } from 'framer-motion';
import { ArrowRight, DollarSign, Building2, Zap, Users, TrendingUp } from 'lucide-react';
import Link from "next/link";
import AdvertisementSection from "@/components/advertisements/AdvertisementSection";

interface CountryHomeMobileProps {
  countryCode: string;
  countryName: string;
  currency: string;
  currencySymbol: string;
}

export default function CountryHomeMobile({ countryCode, countryName, currency, currencySymbol }: CountryHomeMobileProps) {
  const stats = [
    { value: "50+", label: "Projects Delivered", icon: Building2 },
    { value: "99%", label: "Client Satisfaction", icon: TrendingUp },
    { value: "24/7", label: "Support Available", icon: Zap },
    { value: "500+", label: "Team Members", icon: Users },
  ];

  const services = [
    { name: "Real Estate", href: `/${countryCode}/services/real-estate`, icon: "🏠", description: "Property management solutions" },
    { name: "E-Commerce", href: `/${countryCode}/services/ecommerce`, icon: "🛒", description: "Online retail platforms" },
    { name: "Cloud Solutions", href: `/${countryCode}/services/cloud`, icon: "☁️", description: "Scalable infrastructure" },
    { name: "Digital Marketing", href: `/${countryCode}/services/marketing`, icon: "📈", description: "Growth marketing strategies" },
    { name: "SEO Services", href: `/${countryCode}/services/seo`, icon: "🔍", description: "Search engine optimization" },
    { name: "HR Placements", href: `/${countryCode}/services/placements`, icon: "👥", description: "Talent acquisition" },
  ];

  return (
    <div className="space-y-0">
      {/* Hero Banner */}
      <section className="relative overflow-hidden h-64">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4d7cf5] to-[#3660e0]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4d7cf5] via-[#3660e0] to-[#4d7cf5] opacity-90" />
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center px-4"
          >
            <h1 className="text-4xl font-extrabold text-white pb-2 leading-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                AEX Agency {countryName.toUpperCase()}
              </span>
            </h1>
            <p className="text-base max-w-2xl mx-auto text-blue-100">
              Empowering businesses in {countryName} with cutting-edge digital solutions
            </p>
            <div className="mt-6 flex flex-col items-center gap-3">
              <Link href={`/${countryCode}/services`}>
                <button className="w-full px-8 py-4 bg-white hover:bg-gray-100 rounded-full text-[#4d7cf5] font-semibold transition-all duration-300 shadow-xl shadow-white/20 transform hover:scale-105 flex items-center justify-center gap-2">
                  Explore Services
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/countries-list">
                <button className="w-full px-8 py-4 bg-transparent border-2 border-white hover:bg-white/20 rounded-full text-white font-semibold transition-all duration-300">
                  View All Countries
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="px-4 py-8 bg-white border-y border-[#eef0f4]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-4 bg-[#eef0f4] rounded-xl border border-[#eef0f4] hover:bg-[#4d7cf5] hover:border-[#3660e0] transition-all cursor-pointer"
                whileHover={{ y: -4 }}
                transition={{ delay: 0.1 * index }}
              >
                <stat.icon className="w-5 h-5 text-[#4d7cf5] mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#1c1f26]">
                  {stat.value}
                </div>
                <div className="text-xs text-[#8a90a2] mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 bg-[#e8f5e9] text-[#2e9e5b] text-sm font-semibold rounded-full mb-4">
              Our Services in {countryName}
            </span>
            <h2 className="text-3xl font-bold mb-4 text-[#1c1f26]">
              What We Offer
            </h2>
            <p className="text-[#8a90a2] max-w-2xl mx-auto text-lg">
              Comprehensive solutions tailored for the {countryName} market
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service, index) => (
              <motion.a
                key={service.name}
                href={service.href}
                className="group bg-white rounded-2xl p-8 border border-[#eef0f4] shadow-sm hover:shadow-xl hover:border-[#4d7cf5] transition-all duration-300 block"
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4d7cf5] to-[#3660e0] flex items-center justify-center mb-6 text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1c1f26] group-hover:text-[#4d7cf5] transition-colors">{service.name}</h3>
                <p className="text-sm text-[#8a90a2] mb-6 leading-relaxed">{service.description}</p>
                <div className="flex items-center text-[#4d7cf5] font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-4 py-8 bg-gradient-to-r from-[#4d7cf5] to-[#3660e0] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-2xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            className="flex flex-col items-center gap-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Start Your Project in {countryName}
                </h3>
                <p className="text-blue-100 text-sm">
                  Pricing in {currencySymbol} | Local Support Available
                </p>
              </div>
            </div>
            <Link href={`/${countryCode}/services/real-estate`}>
              <button className="group px-6 py-3 bg-white hover:bg-gray-100 rounded-full text-[#4d7cf5] font-semibold transition-all duration-300 shadow-xl shadow-white/20 transform hover:scale-105 flex items-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Advertisement Section */}
      <AdvertisementSection />
    </div>
  );
}
