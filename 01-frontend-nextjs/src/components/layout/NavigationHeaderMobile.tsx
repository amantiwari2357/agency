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
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const navLinks = [
    { name: "Solutions", href: `/countries/${currentCountry}/pricing`, hasDropdown: true, dropdownId: "solutions" },
    { name: "Services", href: `/countries/${currentCountry}/services`, hasDropdown: true, dropdownId: "services" },
    { name: "Resources", href: `/countries/${currentCountry}/resources`, hasDropdown: true, dropdownId: "resources" },
    { name: "Company", href: `/countries/${currentCountry}/about`, hasDropdown: true, dropdownId: "company" },
  ];

  const services = [
    { name: "Real Estate", href: `/countries/${currentCountry}/services/real-estate` },
    { name: "E-Commerce", href: `/countries/${currentCountry}/services/ecommerce` },
    { name: "Cloud Solutions", href: `/countries/${currentCountry}/services/cloud` },
    { name: "Marketing", href: `/countries/${currentCountry}/services/marketing` },
    { name: "SEO", href: `/countries/${currentCountry}/services/seo` },
    { name: "Placements", href: `/countries/${currentCountry}/services/placements` },
  ];

  const solutions = [
    { name: "Pricing", href: `/countries/${currentCountry}/pricing` },
    { name: "Support", href: `/countries/${currentCountry}/help-center` },
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
  ];

  const resources = [
    { name: "Blog", href: `/countries/${currentCountry}/blog` },
    { name: "Case Studies", href: `/countries/${currentCountry}/case-studies` },
    { name: "Documentation", href: `/countries/${currentCountry}/documentation` },
    { name: "Help Center", href: `/countries/${currentCountry}/help-center` },
    { name: "API Reference", href: `/countries/${currentCountry}/api-reference` },
    { name: "Status Page", href: `/countries/${currentCountry}/status` },
  ];

  const company = [
    { name: "About Us", href: `/countries/${currentCountry}/about` },
    { name: "Careers", href: "/careers" },
    { name: "Privacy Policy", href: `/countries/${currentCountry}/privacy` },
    { name: "Terms of Service", href: `/countries/${currentCountry}/terms` },
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

  const closeAll = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsResourcesOpen(false);
    setIsCompanyOpen(false);
    setIsSolutionsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#eef0f4] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href={`/countries/${currentCountry}`} className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#4d7cf5] to-[#3660e0] flex items-center justify-center shadow-lg shadow-[#4d7cf5]/20">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div>
              <span className="text-lg font-bold tracking-wider text-[#1c1f26]">AEX AGENCY</span>
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
                        onClick={() => toggleDropdown(link.dropdownId!)}
                        className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-[#1c1f26] hover:text-[#4d7cf5] rounded-lg hover:bg-[#eef0f4] transition-all"
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${getDropdownState(link.dropdownId!) ? 'rotate-180' : ''}`} />
                      </button>
                      {getDropdownState(link.dropdownId!) && (
                        <div className="pl-4 mt-1 space-y-1">
                          {getDropdownItems(link.dropdownId!).map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block px-4 py-2 text-sm text-[#8a90a2] hover:text-[#4d7cf5] rounded-lg hover:bg-[#eef0f4] transition-colors"
                              onClick={closeAll}
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
                      className="block px-4 py-3 text-sm font-medium text-[#1c1f26] hover:text-[#4d7cf5] rounded-lg hover:bg-[#eef0f4] transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="mt-4 px-4">
              <Link
                href={`/countries/${currentCountry}/contact`}
                className="inline-flex items-center justify-center w-full px-4 py-3 bg-[#4d7cf5] text-white text-sm font-semibold rounded-lg hover:bg-[#3660e0] transition-colors"
                onClick={closeAll}
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Region */}
            <div className="mt-4 pt-4 border-t border-[#eef0f4]">
              <div className="flex items-center space-x-1 bg-[#eef0f4] border border-[#eef0f4] rounded-xl px-2 py-1">
                <Globe className="w-3.5 h-3.5 text-[#8a90a2] mr-1" />
                <Link
                  href="/countries/us"
                  className={`px-2 py-0.5 rounded text-xs font-semibold ${
                    currentCountry === "us" ? "bg-[#4d7cf5] text-white" : "text-[#8a90a2] hover:text-[#1c1f26]"
                  }`}
                  onClick={closeAll}
                >
                  US ($)
                </Link>
                <Link
                  href="/countries/uk"
                  className={`px-2 py-0.5 rounded text-xs font-semibold ${
                    currentCountry === "uk" ? "bg-[#4d7cf5] text-white" : "text-[#8a90a2] hover:text-[#1c1f26]"
                  }`}
                  onClick={closeAll}
                >
                  UK (£)
                </Link>
                <Link
                  href="/countries/ae"
                  className={`px-2 py-0.5 rounded text-xs font-semibold ${
                    currentCountry === "ae" ? "bg-[#4d7cf5] text-white" : "text-[#8a90a2] hover:text-[#1c1f26]"
                  }`}
                  onClick={closeAll}
                >
                  AE (AED)
                </Link>
                <Link
                  href="/countries/in"
                  className={`px-2 py-0.5 rounded text-xs font-semibold ${
                    currentCountry === "in" ? "bg-[#4d7cf5] text-white" : "text-[#8a90a2] hover:text-[#1c1f26]"
                  }`}
                  onClick={closeAll}
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
