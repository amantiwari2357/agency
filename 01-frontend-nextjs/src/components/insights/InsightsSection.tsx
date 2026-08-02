"use client";

import { motion } from 'framer-motion';
import { Lightbulb, TrendingUp, Users, DollarSign, Target, Zap, ArrowRight, BarChart3, PieChart, LineChart } from 'lucide-react';
import Link from "next/link";

interface Insight {
  id: string;
  title: string;
  description: string;
  icon: any;
  type: 'growth' | 'performance' | 'engagement' | 'revenue';
  value: string;
  change: string;
  trend: 'up' | 'down';
  link: string;
  category: string;
}

export default function InsightsSection({ countryCode }: { countryCode: string }) {
  const insights: Insight[] = [
    {
      id: "1",
      title: "Real Estate Market Growth",
      description: "Property listings increased by 45% this quarter with virtual tour integration",
      icon: BarChart3,
      type: 'growth',
      value: "+45%",
      change: "vs last quarter",
      trend: 'up',
      link: `/countries/${countryCode}/services/real-estate`,
      category: "Real Estate",
    },
    {
      id: "2",
      title: "E-Commerce Conversion",
      description: "Online stores achieved 32% higher conversion rates with AI recommendations",
      icon: PieChart,
      type: 'engagement',
      value: "32%",
      change: "conversion rate",
      trend: 'up',
      link: `/countries/${countryCode}/services/ecommerce`,
      category: "E-Commerce",
    },
    {
      id: "3",
      title: "Cloud Infrastructure Savings",
      description: "Clients saved 40% on infrastructure costs with optimized cloud solutions",
      icon: DollarSign,
      type: 'revenue',
      value: "40%",
      change: "cost reduction",
      trend: 'up',
      link: `/countries/${countryCode}/services/cloud`,
      category: "Cloud",
    },
    {
      id: "4",
      title: "Marketing ROI",
      description: "Digital marketing campaigns delivered 5.2x return on investment",
      icon: TrendingUp,
      type: 'revenue',
      value: "5.2x",
      change: "average ROI",
      trend: 'up',
      link: `/countries/${countryCode}/services/marketing`,
      category: "Marketing",
    },
    {
      id: "5",
      title: "SEO Performance",
      description: "Organic traffic increased by 67% with technical SEO optimizations",
      icon: LineChart,
      type: 'performance',
      value: "+67%",
      change: "organic traffic",
      trend: 'up',
      link: `/countries/${countryCode}/services/seo`,
      category: "SEO",
    },
    {
      id: "6",
      title: "HR Placement Success",
      description: "92% placement success rate with AI-powered candidate matching",
      icon: Users,
      type: 'engagement',
      value: "92%",
      change: "success rate",
      trend: 'up',
      link: `/countries/${countryCode}/services/placements`,
      category: "HR Placements",
    },
  ];

  const typeColors = {
    growth: 'from-[#4d7cf5] to-[#3660e0]',
    performance: 'from-[#2e9e5b] to-[#257a45]',
    engagement: 'from-[#8b5cf6] to-[#7c3aed]',
    revenue: 'from-[#f59e0b] to-[#d97706]',
  };

  const typeIcons = {
    growth: TrendingUp,
    performance: Target,
    engagement: Users,
    revenue: DollarSign,
  };

  return (
    <section className="py-16 px-4 bg-[#eef0f4]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Lightbulb className="w-6 h-6 text-[#4d7cf5]" />
            <span className="inline-block px-4 py-1 bg-[#e8f5e9] text-[#2e9e5b] text-sm font-semibold rounded-full">
              Performance Insights
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-[#1c1f26]">
            Feature Analytics
          </h2>
          <p className="text-[#8a90a2] max-w-2xl mx-auto text-lg">
            Real-time insights and performance metrics from our service implementations
          </p>
        </motion.div>

        {/* Summary Cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {[
            { label: "Total Insights", value: "156", icon: BarChart3 },
            { label: "Active Features", value: "24", icon: Zap },
            { label: "Clients Tracked", value: "892", icon: Users },
            { label: "Avg. Growth", value: "+34%", icon: TrendingUp },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white p-6 rounded-xl border border-[#eef0f4] shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ y: -4 }}
              transition={{ delay: 0.05 * index }}
            >
              <stat.icon className="w-6 h-6 text-[#4d7cf5] mb-2" />
              <div className="text-2xl font-bold text-[#1c1f26]">{stat.value}</div>
              <div className="text-sm text-[#8a90a2]">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Insights Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.id}
              className="bg-white rounded-2xl p-6 border border-[#eef0f4] shadow-sm hover:shadow-xl hover:border-[#4d7cf5] transition-all duration-300 group"
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${typeColors[insight.type]} flex items-center justify-center shadow-lg`}>
                  <insight.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-1 px-2 py-1 bg-[#eef0f4] rounded-full">
                  {insight.type === 'growth' && <TrendingUp className="w-3 h-3 text-[#4d7cf5]" />}
                  {insight.type === 'performance' && <Target className="w-3 h-3 text-[#4d7cf5]" />}
                  {insight.type === 'engagement' && <Users className="w-3 h-3 text-[#4d7cf5]" />}
                  {insight.type === 'revenue' && <DollarSign className="w-3 h-3 text-[#4d7cf5]" />}
                  <span className="text-xs font-medium text-[#8a90a2] capitalize">{insight.type}</span>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold mb-2 text-[#1c1f26] group-hover:text-[#4d7cf5] transition-colors">
                {insight.title}
              </h3>
              <p className="text-sm text-[#8a90a2] mb-4 leading-relaxed">
                {insight.description}
              </p>

              {/* Metrics */}
              <div className="flex items-center justify-between mb-4 p-3 bg-[#eef0f4] rounded-lg">
                <div>
                  <div className="text-2xl font-bold text-[#1c1f26]">{insight.value}</div>
                  <div className="text-xs text-[#8a90a2]">{insight.change}</div>
                </div>
                <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${
                  insight.trend === 'up' ? 'bg-[#e8f5e9] text-[#2e9e5b]' : 'bg-red-100 text-red-600'
                }`}>
                  <TrendingUp className="w-3 h-3" />
                  <span className="text-xs font-semibold">Growing</span>
                </div>
              </div>

              {/* Category & Link */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-[#8a90a2] bg-[#eef0f4] px-2 py-1 rounded-full">
                  {insight.category}
                </span>
                <Link
                  href={insight.link}
                  className="flex items-center gap-1 text-sm font-semibold text-[#4d7cf5] hover:text-[#3660e0] transition-colors"
                >
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
