"use client";

import Link from "next/link";
import { Globe, ChevronDown } from "lucide-react";
import { useState } from "react";

interface HeaderDesktopProps {
  currentCountry?: string;
}

export default function HeaderDesktop({ currentCountry = "us" }: HeaderDesktopProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: `/${currentCountry}` },
    { name: "Services", href: `/${currentCountry}/services`, hasDropdown: true },
    { name: "About", href: `/${currentCountry}/about` },
    { name: "Contact", href: `/${currentCountry}/contact` },
  ];

  const services = [
    { name: "Real Estate", href: `/${currentCountry}/services/real-estate` },
    { name: "E-Commerce", href: `/${currentCountry}/services/ecommerce` },
    { name: "Cloud Solutions", href: `/${currentCountry}/services/cloud` },
    { name: "Marketing", href: `/${currentCountry}/services/marketing` },
    { name: "SEO", href: `/${currentCountry}/services/seo` },
    { name: "Placements", href: `/${currentCountry}/services/placements` },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href={`/${currentCountry}`} className="flex items-center space-x-3 group">
            <div>
              <span className="text-lg font-bold tracking-wider text-gray-900">AEX AGENCY</span>
              <span className="block text-[10px] text-blue-600 font-mono tracking-widest uppercase">
                Multi-Industry Modular Engine
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-200"
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl border border-gray-200 shadow-xl py-2">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Region Switcher */}
            <div className="hidden sm:flex items-center space-x-1 bg-gray-100 border border-gray-200 rounded-xl px-2 py-1">
              <Globe className="w-3.5 h-3.5 text-gray-500 mr-1" />
              <Link
                href="/us"
                className={`px-2 py-0.5 rounded text-xs font-semibold ${
                  currentCountry === "us" ? "bg-blue-600 text-white" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                US ($)
              </Link>
              <Link
                href="/uk"
                className={`px-2 py-0.5 rounded text-xs font-semibold ${
                  currentCountry === "uk" ? "bg-blue-600 text-white" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                UK (£)
              </Link>
              <Link
                href="/ae"
                className={`px-2 py-0.5 rounded text-xs font-semibold ${
                  currentCountry === "ae" ? "bg-blue-600 text-white" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                AE (AED)
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
