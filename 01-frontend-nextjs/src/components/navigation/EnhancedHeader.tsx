'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { COUNTRIES } from '../../config/countries';

interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

const navigationItems: NavigationItem[] = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'Mobile Apps', href: '/services/mobile-apps' },
      { label: 'Cloud Services', href: '/services/cloud' },
      { label: 'SEO Optimization', href: '/services/seo' },
      { label: 'Digital Marketing', href: '/services/marketing' },
    ]
  },
  {
    label: 'Countries',
    href: '/countries-list',
    children: COUNTRIES.slice(0, 10).map(country => ({
      label: `${country.flag} ${country.name}`,
      href: `/${country.code}`
    }))
  },
  {
    label: 'Company',
    href: '/about',
    children: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Team', href: '/team' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ]
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Blog', href: '/blog' },
      { label: 'Documentation', href: '/docs' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'FAQ', href: '/faq' },
    ]
  }
];

export default function EnhancedHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dropdownRefs = useRef<Record<string, HTMLDivElement>>({});
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const router = useRouter();

  const handleDropdownEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const handleDropdownClick = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleCountrySelect = (countryCode: string) => {
    setCountryDropdownOpen(false);
    router.push(`/${countryCode}`);
  };

  const handleLogin = () => {
    setAccountDropdownOpen(false);
    router.push('/login');
  };

  const handleRegister = () => {
    setAccountDropdownOpen(false);
    router.push('/register');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAccountDropdownOpen(false);
    localStorage.removeItem('authToken');
    router.push('/');
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && dropdownRefs.current[activeDropdown]) {
        if (!dropdownRefs.current[activeDropdown].contains(event.target as Node)) {
          setActiveDropdown(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              A
            </div>
            <span className="text-xl font-bold text-gray-900 hidden sm:block">Aexagenvcy</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleDropdownEnter(item.label)}
                onMouseLeave={handleDropdownLeave}
                ref={(el) => { if (el) dropdownRefs.current[item.label] = el; }}
              >
                <button
                  onClick={() => handleDropdownClick(item.label)}
                  className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center"
                >
                  {item.label}
                  {item.children && (
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 opacity-0 animate-in">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Country Selector */}
            <div className="relative">
              <button
                onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                <span className="text-xl mr-1">🌍</span>
                <span className="hidden sm:inline">Select Country</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {countryDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <input
                      type="text"
                      placeholder="Search countries..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {COUNTRIES.map((country) => (
                      <button
                        key={country.code}
                        onClick={() => handleCountrySelect(country.code)}
                        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors flex items-center"
                      >
                        <span className="text-xl mr-2">{country.flag}</span>
                        <span>{country.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Account Dropdown */}
            <div className="relative">
              <button
                onClick={() => setAccountDropdownOpen(!accountDropdownOpen)}
                className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7 7h-14z" />
                </svg>
              </button>

              {accountDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-50">
                  {isAuthenticated ? (
                    <>
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900">Welcome, User</p>
                        <p className="text-xs text-gray-500">user@example.com</p>
                      </div>
                      <Link
                        href="/dashboard"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                        onClick={() => setAccountDropdownOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <Link
                        href="/profile"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                        onClick={() => setAccountDropdownOpen(false)}
                      >
                        Profile
                      </Link>
                      <Link
                        href="/settings"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                        onClick={() => setAccountDropdownOpen(false)}
                      >
                        Settings
                      </Link>
                      <div className="border-t border-gray-100 mt-2 pt-2">
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition-colors"
                        >
                          Logout
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={handleLogin}
                        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                      >
                        Login
                      </button>
                      <button
                        onClick={handleRegister}
                        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                      >
                        Register
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-indigo-800 transition-all shadow-md hover:shadow-lg"
            >
              Get Started
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => item.children && setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors flex items-center justify-between"
                  >
                    {item.label}
                    {item.children && (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>
                  {item.children && activeDropdown === item.label && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                          onClick={() => { setActiveDropdown(null); setMobileMenuOpen(false); }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Link
                href="/contact"
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes animate-in {
          from {
            opacity: 0,
            transform: translateY(-10px);
          }
          to {
            opacity: 1,
            transform: translateY(0);
          }
        }
        .animate-in {
          animation: animate-in 0.2s ease-out;
        }
      `}</style>
    </header>
  );
}
