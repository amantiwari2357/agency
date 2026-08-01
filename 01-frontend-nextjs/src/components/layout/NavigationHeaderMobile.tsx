"use client";

import Link from "next/link";
import { Globe, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

interface HeaderMobileProps {
  currentCountry?: string;
}

export default function HeaderMobile({ currentCountry = "us" }: HeaderMobileProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#eef0f4] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href={`/${currentCountry}`} className="flex items-center space-x-3 group">
            <div>
              <span className="text-lg font-bold tracking-wider text-[#1c1f26]">AEX AGENCY</span>
              <span className="block text-[10px] text-[#4d7cf5] font-mono tracking-widest uppercase">
                Multi-Industry Modular Engine
              </span>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-[#eef0f4] transition-colors"
          >
            {isMenuOpen ? <X className="w-5 h-5 text-[#1c1f26]" /> : <Menu className="w-5 h-5 text-[#1c1f26]" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#eef0f4]">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-[#1c1f26] hover:text-[#4d7cf5] rounded-lg hover:bg-[#eef0f4] transition-all"
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isServicesOpen && (
                        <div className="pl-4 mt-1 space-y-1">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block px-4 py-2 text-sm text-[#8a90a2] hover:text-[#4d7cf5] rounded-lg hover:bg-[#eef0f4] transition-colors"
                              onClick={() => {
                                setIsServicesOpen(false);
                                setIsMenuOpen(false);
                              }}
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
                      className="block px-4 py-3 text-sm font-medium text-[#1c1f26] hover:text-[#4d7cf5] rounded-lg hover:bg-[#eef0f4] transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Region */}
            <div className="mt-4 pt-4 border-t border-[#eef0f4]">
              <div className="flex items-center space-x-1 bg-[#eef0f4] border border-[#eef0f4] rounded-xl px-2 py-1">
                <Globe className="w-3.5 h-3.5 text-[#8a90a2] mr-1" />
                <Link
                  href="/us"
                  className={`px-2 py-0.5 rounded text-xs font-semibold ${
                    currentCountry === "us" ? "bg-[#4d7cf5] text-white" : "text-[#8a90a2] hover:text-[#1c1f26]"
                  }`}
                >
                  US ($)
                </Link>
                <Link
                  href="/uk"
                  className={`px-2 py-0.5 rounded text-xs font-semibold ${
                    currentCountry === "uk" ? "bg-[#4d7cf5] text-white" : "text-[#8a90a2] hover:text-[#1c1f26]"
                  }`}
                >
                  UK (£)
                </Link>
                <Link
                  href="/ae"
                  className={`px-2 py-0.5 rounded text-xs font-semibold ${
                    currentCountry === "ae" ? "bg-[#4d7cf5] text-white" : "text-[#8a90a2] hover:text-[#1c1f26]"
                  }`}
                >
                  AE (AED)
                </Link>
                <Link
                  href="/in"
                  className={`px-2 py-0.5 rounded text-xs font-semibold ${
                    currentCountry === "in" ? "bg-[#4d7cf5] text-white" : "text-[#8a90a2] hover:text-[#1c1f26]"
                  }`}
                >
                  IN (₹)
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
