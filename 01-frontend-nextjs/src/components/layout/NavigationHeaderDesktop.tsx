"use client";

import Link from "next/link";
import { Globe, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderDesktopProps {
  currentCountry?: string;
}

export default function HeaderDesktop({ currentCountry = "us" }: HeaderDesktopProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const navLinks = [
    { name: "Solutions", href: `/${currentCountry}/pricing`, hasDropdown: true, dropdownId: "solutions" },
    { name: "Services", href: `/${currentCountry}/services`, hasDropdown: true, dropdownId: "services" },
    { name: "Resources", href: `/${currentCountry}/resources`, hasDropdown: true, dropdownId: "resources" },
    { name: "Company", href: `/${currentCountry}/about`, hasDropdown: true, dropdownId: "company" },
  ];

  const services = [
    { name: "Real Estate", href: `/${currentCountry}/services/real-estate` },
    { name: "E-Commerce", href: `/${currentCountry}/services/ecommerce` },
    { name: "Cloud Solutions", href: `/${currentCountry}/services/cloud` },
    { name: "Marketing", href: `/${currentCountry}/services/marketing` },
    { name: "SEO", href: `/${currentCountry}/services/seo` },
    { name: "Placements", href: `/${currentCountry}/services/placements` },
  ];

  const solutions = [
    { name: "Pricing", href: `/${currentCountry}/pricing` },
    { name: "Support", href: `/${currentCountry}/help-center` },
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
  ];

  const resources = [
    { name: "Blog", href: `/${currentCountry}/blog` },
    { name: "Case Studies", href: `/${currentCountry}/case-studies` },
    { name: "Documentation", href: `/${currentCountry}/documentation` },
    { name: "Help Center", href: `/${currentCountry}/help-center` },
    { name: "API Reference", href: `/${currentCountry}/api-reference` },
    { name: "Status Page", href: `/${currentCountry}/status` },
  ];

  const company = [
    { name: "About Us", href: `/${currentCountry}/about` },
    { name: "Careers", href: "/careers" },
    { name: "Privacy Policy", href: `/${currentCountry}/privacy` },
    { name: "Terms of Service", href: `/${currentCountry}/terms` },
  ];

  const getDropdownState = (dropdownId: string) => {
    switch (dropdownId) {
      case "services": return isServicesOpen;
      case "resources": return isResourcesOpen;
      case "company": return isCompanyOpen;
      case "solutions": return isSolutionsOpen;
      default: return false;
    }
  };

  const toggleDropdown = (dropdownId: string) => {
    switch (dropdownId) {
      case "services": setIsServicesOpen(!isServicesOpen); break;
      case "resources": setIsResourcesOpen(!isResourcesOpen); break;
      case "company": setIsCompanyOpen(!isCompanyOpen); break;
      case "solutions": setIsSolutionsOpen(!isSolutionsOpen); break;
    }
  };

  const getDropdownItems = (dropdownId: string) => {
    switch (dropdownId) {
      case "services": return services;
      case "resources": return resources;
      case "company": return company;
      case "solutions": return solutions;
      default: return [];
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#eef0f4] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href={`/${currentCountry}`} className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#4d7cf5] to-[#3660e0] flex items-center justify-center shadow-lg shadow-[#4d7cf5]/20">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div>
              <span className="text-lg font-bold tracking-wider text-[#1c1f26]">AEX AGENCY</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasDropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => toggleDropdown(link.dropdownId!)}
                    onMouseLeave={() => toggleDropdown(link.dropdownId!)}
                  >
                    <button
                      className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-[#1c1f26] hover:text-[#4d7cf5] rounded-lg hover:bg-[#eef0f4] transition-all duration-200"
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${getDropdownState(link.dropdownId!) ? 'rotate-180' : ''}`} />
                    </button>
                    {getDropdownState(link.dropdownId!) && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl border border-[#eef0f4] shadow-xl py-2 z-50">
                        {getDropdownItems(link.dropdownId!).map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-[#1c1f26] hover:text-[#4d7cf5] hover:bg-[#eef0f4] transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-[#1c1f26] hover:text-[#4d7cf5] rounded-lg hover:bg-[#eef0f4] transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* CTA Button */}
            <Link
              href={`/${currentCountry}/contact`}
              className="hidden sm:inline-flex items-center px-4 py-2 bg-[#4d7cf5] text-white text-sm font-semibold rounded-lg hover:bg-[#3660e0] transition-colors"
            >
              Get Started
            </Link>

            {/* Region Switcher */}
            <div className="hidden sm:flex items-center space-x-1 bg-[#eef0f4] border border-[#eef0f4] rounded-xl px-2 py-1">
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
      </div>
    </header>
  );
}
