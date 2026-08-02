"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, TrendingUp, Search, Filter, Download, Upload, Eye, Star, Clock } from 'lucide-react';

interface Advertisement {
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
  active: boolean;
  startDate: string;
  endDate: string;
}

export default function AdvertisementsAdminPage() {
  const [advertisements, setAdvertisements] = useState<Advertisement[]>([
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
      link: "/us/services/real-estate",
      price: "$999",
      discount: "50% OFF",
      active: true,
      startDate: "2026-01-01",
      endDate: "2026-12-31",
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
      link: "/us/services/ecommerce",
      discount: "FREE AUDIT",
      active: true,
      startDate: "2026-01-01",
      endDate: "2026-06-30",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAd, setEditingAd] = useState<Advertisement | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAds = advertisements.filter(ad =>
    ad.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ad.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (ad: Advertisement) => {
    setEditingAd(ad);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this advertisement?')) {
      setAdvertisements(advertisements.filter(a => a.id !== id));
    }
  };

  const handleToggleActive = (id: string) => {
    setAdvertisements(advertisements.map(a => 
      a.id === id ? { ...a, active: !a.active } : a
    ));
  };

  const handleToggleTrending = (id: string) => {
    setAdvertisements(advertisements.map(a => 
      a.id === id ? { ...a, trending: !a.trending } : a
    ));
  };

  return (
    <div className="min-h-screen bg-[#111318] p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-white mb-2">Advertisements Management</h1>
          <p className="text-[#8a90a2]">Manage promotional content and trending offers</p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {[
            { label: "Total Ads", value: advertisements.length, icon: TrendingUp },
            { label: "Active", value: advertisements.filter(a => a.active).length, icon: Eye },
            { label: "Trending", value: advertisements.filter(a => a.trending).length, icon: Star },
            { label: "Total Clicks", value: advertisements.reduce((sum, a) => sum + a.clicks, 0).toLocaleString(), icon: Clock },
          ].map((stat, index) => (
            <div key={stat.label} className="bg-[#1c1f26] p-6 rounded-xl border border-[#eef0f4]">
              <stat.icon className="w-6 h-6 text-[#4d7cf5] mb-2" />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-[#8a90a2]">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Controls */}
        <motion.div
          className="flex flex-wrap items-center justify-between gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-5 h-5 text-[#8a90a2] absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search advertisements..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-[#1c1f26] border border-[#eef0f4] rounded-lg text-white placeholder-[#8a90a2] focus:outline-none focus:ring-2 focus:ring-[#4d7cf5]"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#1c1f26] border border-[#eef0f4] rounded-lg text-[#8a90a2] hover:text-white transition-colors">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-[#1c1f26] border border-[#eef0f4] rounded-lg text-[#8a90a2] hover:text-white transition-colors">
              <Download className="w-4 h-4" />
              Export
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#1c1f26] border border-[#eef0f4] rounded-lg text-[#8a90a2] hover:text-white transition-colors">
              <Upload className="w-4 h-4" />
              Import
            </button>
            <button
              onClick={() => { setEditingAd(null); setIsModalOpen(true); }}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#4d7cf5] to-[#3660e0] rounded-lg text-white font-semibold hover:from-[#3660e0] hover:to-[#4d7cf5] transition-all"
            >
              <Plus className="w-4 h-4" />
              Add Advertisement
            </button>
          </div>
        </motion.div>

        {/* Advertisements Grid */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {filteredAds.map((ad, index) => (
            <div key={ad.id} className="bg-[#1c1f26] rounded-xl border border-[#eef0f4] overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#4d7cf5] to-[#3660e0] flex items-center justify-center text-3xl">
                    {ad.image}
                  </div>
                  <div className="flex items-center gap-2">
                    {ad.trending && (
                      <span className="px-2 py-1 bg-gradient-to-r from-[#4d7cf5] to-[#3660e0] rounded-full text-xs font-semibold text-white">
                        Trending
                      </span>
                    )}
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      ad.active ? 'bg-[#e8f5e9] text-[#2e9e5b]' : 'bg-red-100 text-red-600'
                    }`}>
                      {ad.active ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{ad.title}</h3>
                <p className="text-sm text-[#8a90a2] mb-4">{ad.description}</p>

                <div className="flex items-center justify-between mb-4 p-3 bg-[#252830] rounded-lg">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-semibold text-white">{ad.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-[#8a90a2]">
                    <Clock className="w-3 h-3" />
                    <span>{ad.clicks} clicks</span>
                  </div>
                </div>

                {ad.price && (
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-white">{ad.price}</span>
                    {ad.discount && (
                      <span className="ml-2 text-sm font-semibold text-[#2e9e5b]">{ad.discount}</span>
                    )}
                  </div>
                )}

                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-[#8a90a2]">{ad.startDate} - {ad.endDate}</span>
                  <span className="text-xs font-medium text-[#4d7cf5] bg-[#eef0f4] px-2 py-1 rounded-full">
                    {ad.category}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleToggleActive(ad.id)}
                    className="flex-1 py-2 bg-[#252830] border border-[#eef0f4] rounded-lg text-[#8a90a2] hover:text-white transition-colors text-sm"
                  >
                    {ad.active ? 'Deactivate' : 'Activate'}
                  </button>
                  <button
                    onClick={() => handleToggleTrending(ad.id)}
                    className="flex-1 py-2 bg-[#252830] border border-[#eef0f4] rounded-lg text-[#8a90a2] hover:text-white transition-colors text-sm"
                  >
                    {ad.trending ? 'Unmark Trending' : 'Mark Trending'}
                  </button>
                  <button
                    onClick={() => handleEdit(ad)}
                    className="p-2 bg-[#252830] border border-[#eef0f4] rounded-lg hover:bg-[#eef0f4] transition-colors"
                  >
                    <Edit className="w-4 h-4 text-[#4d7cf5]" />
                  </button>
                  <button
                    onClick={() => handleDelete(ad.id)}
                    className="p-2 bg-[#252830] border border-[#eef0f4] rounded-lg hover:bg-red-100 transition-colors"
                  >
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[#1c1f26] rounded-xl p-8 max-w-2xl w-full mx-4 border border-[#eef0f4]">
            <h2 className="text-2xl font-bold text-white mb-6">
              {editingAd ? 'Edit Advertisement' : 'Add New Advertisement'}
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#8a90a2] mb-2">Title</label>
                <input
                  type="text"
                  defaultValue={editingAd?.title}
                  className="w-full px-4 py-2 bg-[#252830] border border-[#eef0f4] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#4d7cf5]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#8a90a2] mb-2">Description</label>
                <textarea
                  defaultValue={editingAd?.description}
                  className="w-full px-4 py-2 bg-[#252830] border border-[#eef0f4] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#4d7cf5]"
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#8a90a2] mb-2">Category</label>
                  <select className="w-full px-4 py-2 bg-[#252830] border border-[#eef0f4] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#4d7cf5]">
                    <option value="Real Estate">Real Estate</option>
                    <option value="E-Commerce">E-Commerce</option>
                    <option value="Cloud">Cloud</option>
                    <option value="Marketing">Marketing</option>
                    <option value="SEO">SEO</option>
                    <option value="HR Placements">HR Placements</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#8a90a2] mb-2">Badge</label>
                  <input
                    type="text"
                    defaultValue={editingAd?.badge}
                    className="w-full px-4 py-2 bg-[#252830] border border-[#eef0f4] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#4d7cf5]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#8a90a2] mb-2">Price</label>
                  <input
                    type="text"
                    defaultValue={editingAd?.price}
                    className="w-full px-4 py-2 bg-[#252830] border border-[#eef0f4] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#4d7cf5]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#8a90a2] mb-2">Discount</label>
                  <input
                    type="text"
                    defaultValue={editingAd?.discount}
                    className="w-full px-4 py-2 bg-[#252830] border border-[#eef0f4] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#4d7cf5]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#8a90a2] mb-2">Start Date</label>
                  <input
                    type="date"
                    defaultValue={editingAd?.startDate}
                    className="w-full px-4 py-2 bg-[#252830] border border-[#eef0f4] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#4d7cf5]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#8a90a2] mb-2">End Date</label>
                  <input
                    type="date"
                    defaultValue={editingAd?.endDate}
                    className="w-full px-4 py-2 bg-[#252830] border border-[#eef0f4] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#4d7cf5]"
                  />
                </div>
              </div>
              <div className="flex items-center justify-end gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2 bg-[#252830] border border-[#eef0f4] rounded-lg text-[#8a90a2] hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-gradient-to-r from-[#4d7cf5] to-[#3660e0] rounded-lg text-white font-semibold hover:from-[#3660e0] hover:to-[#4d7cf5] transition-all"
                >
                  {editingAd ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
