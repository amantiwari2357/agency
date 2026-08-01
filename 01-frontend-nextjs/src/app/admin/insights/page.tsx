"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, TrendingUp, Users, DollarSign, Target, Zap, Search, Filter, Download, Upload } from 'lucide-react';

interface Insight {
  id: string;
  title: string;
  description: string;
  type: 'growth' | 'performance' | 'engagement' | 'revenue';
  value: string;
  change: string;
  trend: 'up' | 'down';
  category: string;
  link: string;
  active: boolean;
  createdAt: string;
}

export default function InsightsAdminPage() {
  const [insights, setInsights] = useState<Insight[]>([
    {
      id: "1",
      title: "Real Estate Market Growth",
      description: "Property listings increased by 45% this quarter",
      type: 'growth',
      value: "+45%",
      change: "vs last quarter",
      trend: 'up',
      category: "Real Estate",
      link: "/countries/us/services/real-estate",
      active: true,
      createdAt: "2026-01-15",
    },
    {
      id: "2",
      title: "E-Commerce Conversion",
      description: "Online stores achieved 32% higher conversion rates",
      type: 'engagement',
      value: "32%",
      change: "conversion rate",
      trend: 'up',
      category: "E-Commerce",
      link: "/countries/us/services/ecommerce",
      active: true,
      createdAt: "2026-01-14",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingInsight, setEditingInsight] = useState<Insight | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const typeColors = {
    growth: 'from-[#4d7cf5] to-[#3660e0]',
    performance: 'from-[#2e9e5b] to-[#257a45]',
    engagement: 'from-[#8b5cf6] to-[#7c3aed]',
    revenue: 'from-[#f59e0b] to-[#d97706]',
  };

  const filteredInsights = insights.filter(insight =>
    insight.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    insight.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (insight: Insight) => {
    setEditingInsight(insight);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this insight?')) {
      setInsights(insights.filter(i => i.id !== id));
    }
  };

  const handleToggleActive = (id: string) => {
    setInsights(insights.map(i => 
      i.id === id ? { ...i, active: !i.active } : i
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
          <h1 className="text-4xl font-bold text-white mb-2">Insights Management</h1>
          <p className="text-[#8a90a2]">Manage feature analytics and performance insights</p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {[
            { label: "Total Insights", value: insights.length, icon: TrendingUp },
            { label: "Active", value: insights.filter(i => i.active).length, icon: Zap },
            { label: "Growth", value: insights.filter(i => i.type === 'growth').length, icon: Users },
            { label: "Revenue", value: insights.filter(i => i.type === 'revenue').length, icon: DollarSign },
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
                placeholder="Search insights..."
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
              onClick={() => { setEditingInsight(null); setIsModalOpen(true); }}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#4d7cf5] to-[#3660e0] rounded-lg text-white font-semibold hover:from-[#3660e0] hover:to-[#4d7cf5] transition-all"
            >
              <Plus className="w-4 h-4" />
              Add Insight
            </button>
          </div>
        </motion.div>

        {/* Insights Table */}
        <motion.div
          className="bg-[#1c1f26] rounded-xl border border-[#eef0f4] overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <table className="w-full">
            <thead className="bg-[#eef0f4]">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#1c1f26]">Title</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#1c1f26]">Type</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#1c1f26]">Value</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#1c1f26]">Category</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#1c1f26]">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#1c1f26]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredInsights.map((insight, index) => (
                <tr key={insight.id} className="border-t border-[#eef0f4] hover:bg-[#252830] transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-semibold text-white">{insight.title}</div>
                      <div className="text-sm text-[#8a90a2]">{insight.description}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${typeColors[insight.type]} text-white`}>
                      {insight.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-white font-semibold">{insight.value}</td>
                  <td className="px-6 py-4 text-[#8a90a2]">{insight.category}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleToggleActive(insight.id)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        insight.active ? 'bg-[#e8f5e9] text-[#2e9e5b]' : 'bg-red-100 text-red-600'
                      }`}
                    >
                      {insight.active ? 'Active' : 'Inactive'}
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEdit(insight)}
                        className="p-2 hover:bg-[#eef0f4] rounded-lg transition-colors"
                      >
                        <Edit className="w-4 h-4 text-[#4d7cf5]" />
                      </button>
                      <button
                        onClick={() => handleDelete(insight.id)}
                        className="p-2 hover:bg-red-100 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[#1c1f26] rounded-xl p-8 max-w-2xl w-full mx-4 border border-[#eef0f4]">
            <h2 className="text-2xl font-bold text-white mb-6">
              {editingInsight ? 'Edit Insight' : 'Add New Insight'}
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#8a90a2] mb-2">Title</label>
                <input
                  type="text"
                  defaultValue={editingInsight?.title}
                  className="w-full px-4 py-2 bg-[#252830] border border-[#eef0f4] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#4d7cf5]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#8a90a2] mb-2">Description</label>
                <textarea
                  defaultValue={editingInsight?.description}
                  className="w-full px-4 py-2 bg-[#252830] border border-[#eef0f4] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#4d7cf5]"
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#8a90a2] mb-2">Type</label>
                  <select className="w-full px-4 py-2 bg-[#252830] border border-[#eef0f4] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#4d7cf5]">
                    <option value="growth">Growth</option>
                    <option value="performance">Performance</option>
                    <option value="engagement">Engagement</option>
                    <option value="revenue">Revenue</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#8a90a2] mb-2">Value</label>
                  <input
                    type="text"
                    defaultValue={editingInsight?.value}
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
                  {editingInsight ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
