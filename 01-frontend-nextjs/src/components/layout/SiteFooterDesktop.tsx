"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Github, Twitter, Linkedin, Mail, MapPin, Phone, ArrowUp } from "lucide-react";

export default function FooterDesktop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-blue-400 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold tracking-wider text-gray-900">AEX AGENCY</span>
                <span className="block text-[10px] text-blue-600 font-mono tracking-widest uppercase">
                  Multi-Industry Modular Engine
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Empowering businesses with cutting-edge digital solutions, tailored for every market across the globe.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-white border border-gray-300 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-gray-50 hover:border-blue-500 transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white border border-gray-300 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-gray-50 hover:border-blue-500 transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white border border-gray-300 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-gray-50 hover:border-blue-500 transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white border border-gray-300 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-gray-50 hover:border-blue-500 transition-all duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/us/services/real-estate" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Real Estate
                </Link>
              </li>
              <li>
                <Link href="/us/services/ecommerce" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  E-Commerce
                </Link>
              </li>
              <li>
                <Link href="/us/services/cloud" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="/us/services/marketing" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/us/services/seo" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  SEO Services
                </Link>
              </li>
              <li>
                <Link href="/us/services/placements" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  HR Placements
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/us/about" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/us/services" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/us/contact" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">
                  123 Innovation Drive<br />
                  Tech Valley, CA 94025
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-sm text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-sm text-gray-600">hello@aexagency.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="hidden md:flex flex-row items-center justify-between gap-4">
            <div className="text-left">
              <p className="text-sm text-gray-600">
                © 2026 AEX Agency — Production Feature Architecture
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Built with Next.js 15 App Router, React Native Expo & Express Domain Modules.
              </p>
            </div>
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span className="px-3 py-1 bg-white rounded-full border border-gray-300">01-frontend-nextjs</span>
              <span className="px-3 py-1 bg-white rounded-full border border-gray-300">02-mobile-app</span>
              <span className="px-3 py-1 bg-white rounded-full border border-gray-300">03-backend-server</span>
            </div>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300"
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
