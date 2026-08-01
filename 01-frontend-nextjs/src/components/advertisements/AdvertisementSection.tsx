"use client";

import { motion } from 'framer-motion';
import { X, Star, TrendingUp, Flame, Zap, Clock, ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface Ad {
  id: string;
  title: string;
  description: string;
  image: string;
  badge: string;
  rating: number;
  clicks: number;
  trending: boolean;
  category: string;
  link: string;
  price?: string;
  discount?: string;
}

export default function AdvertisementSection() {
  const [dismissedAds, setDismissedAds] = useState<Set<string>>(new Set());

  const advertisements: Ad[] = [
    {
      id: "1",
      title: "50% Off Real Estate Package",
      description: "Complete property management solution with IDX integration",
      image: "🏠",
      badge: "LIMITED OFFER",
      rating: 4.9,
      clicks: 1234,
      trending: true,
      category: "Real Estate",
      link: "/countries/us/services/real-estate",
      price: "$999",
      discount: "50% OFF",
    },
    {
      id: "2",
      title: "Free E-Commerce Audit",
      description: "Get your online store analyzed by our experts",
      image: "🛒",
      badge: "FREE",
      rating: 4.8,
      clicks: 892,
      trending: true,
      category: "E-Commerce",
      link: "/countries/us/services/ecommerce",
      discount: "FREE AUDIT",
    },
    {
      id: "3",
      title: "Cloud Migration Special",
      description: "Move to cloud with zero downtime guarantee",
      image: "☁️",
      badge: "HOT DEAL",
      rating: 4.7,
      clicks: 756,
      trending: false,
      category: "Cloud",
      link: "/countries/us/services/cloud",
      price: "$1,499",
      discount: "30% OFF",
    },
    {
      id: "4",
      title: "Marketing Growth Pack",
      description: "3 months of digital marketing services",
      image: "📈",
      badge: "POPULAR",
      rating: 4.9,
      clicks: 1567,
      trending: true,
      category: "Marketing",
      link: "/countries/us/services/marketing",
      price: "$2,999",
      discount: "40% OFF",
    },
  ];

  const featuredAds = advertisements.filter(ad => !dismissedAds.has(ad.id));

  const dismissAd = (adId: string) => {
    setDismissedAds(prev => new Set([...prev, adId]));
  };

  if (featuredAds.length === 0) return null;

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flame className="w-6 h-6 text-[#4d7cf5]" />
            <span className="inline-block px-4 py-1 bg-[#e8f5e9] text-[#2e9e5b] text-sm font-semibold rounded-full">
              Trending Offers
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-[#1c1f26]">
            Special Promotions
          </h2>
          <p className="text-[#8a90a2] max-w-2xl mx-auto text-lg">
            Exclusive deals and trending offers for our valued customers
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuredAds.map((ad, index) => (
            <motion.div
              key={ad.id}
              className="relative bg-white rounded-2xl p-6 border border-[#eef0f4] shadow-sm hover:shadow-xl hover:border-[#4d7cf5] transition-all duration-300 group"
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
            >
              {/* Dismiss Button */}
              <button
                onClick={() => dismissAd(ad.id)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#eef0f4] flex items-center justify-center text-[#8a90a2] hover:bg-red-100 hover:text-red-600 transition-colors z-10"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Badge */}
              {ad.trending && (
                <div className="absolute top-4 left-4 flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-[#4d7cf5] to-[#3660e0] rounded-full">
                  <TrendingUp className="w-3 h-3 text-white" />
                  <span className="text-xs font-semibold text-white">TRENDING</span>
                </div>
              )}

              {/* Content */}
              <div className="pt-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4d7cf5] to-[#3660e0] flex items-center justify-center mb-4 text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  {ad.image}
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold text-[#4d7cf5] bg-[#eef0f4] px-2 py-1 rounded-full">
                    {ad.badge}
                  </span>
                  {ad.discount && (
                    <span className="text-xs font-semibold text-[#2e9e5b] bg-[#e8f5e9] px-2 py-1 rounded-full">
                      {ad.discount}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold mb-2 text-[#1c1f26] group-hover:text-[#4d7cf5] transition-colors">
                  {ad.title}
                </h3>
                <p className="text-sm text-[#8a90a2] mb-4 leading-relaxed">
                  {ad.description}
                </p>

                {/* Rating & Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-semibold text-[#1c1f26]">{ad.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-[#8a90a2]">
                    <Clock className="w-3 h-3" />
                    <span>{ad.clicks} clicks</span>
                  </div>
                </div>

                {/* Price */}
                {ad.price && (
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-[#1c1f26]">{ad.price}</span>
                  </div>
                )}

                {/* CTA Button */}
                <a
                  href={ad.link}
                  className="block w-full py-3 bg-gradient-to-r from-[#4d7cf5] to-[#3660e0] hover:from-[#3660e0] hover:to-[#4d7cf5] text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg"
                >
                  View Offer
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex items-center gap-4 p-4 bg-[#eef0f4] rounded-xl">
            <Zap className="w-8 h-8 text-[#4d7cf5]" />
            <div>
              <h4 className="font-semibold text-[#1c1f26]">Limited Time</h4>
              <p className="text-sm text-[#8a90a2]">Offers expire soon</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-[#eef0f4] rounded-xl">
            <TrendingUp className="w-8 h-8 text-[#4d7cf5]" />
            <div>
              <h4 className="font-semibold text-[#1c1f26]">Trending Now</h4>
              <p className="text-sm text-[#8a90a2]">Most popular deals</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-[#eef0f4] rounded-xl">
            <Star className="w-8 h-8 text-[#4d7cf5]" />
            <div>
              <h4 className="font-semibold text-[#1c1f26]">Top Rated</h4>
              <p className="text-sm text-[#8a90a2]">Customer favorites</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
