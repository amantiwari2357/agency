"use client";

import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, DollarSign, Users, Zap, Target, Lightbulb, ArrowRight, LineChart, PieChart, Award, Clock, Globe, Building, ShoppingBag, Search, GraduationCap, Shield, FileText, Book, HelpCircle, ChevronRight, Star, Activity, Eye, MousePointer, ShoppingCart, CreditCard, TrendingDown, AlertCircle, CheckCircle2 } from 'lucide-react';
import Link from "next/link";
import AdvancedFooter from "@/components/footer/AdvancedFooter";
import InsightsToggle from "@/components/insights/InsightsToggle";

export default function InsightsPage() {
  const overviewStats = [
    { label: "Total Projects", value: "1,247", icon: Building, change: "+12%", trend: "up" },
    { label: "Active Clients", value: "892", icon: Users, change: "+8%", trend: "up" },
    { label: "Revenue Growth", value: "$2.4M", icon: DollarSign, change: "+23%", trend: "up" },
    { label: "Countries Served", value: "4", icon: Globe, change: "+25%", trend: "up" },
  ];

  const serviceInsights = [
    {
      name: "Real Estate",
      icon: Building,
      color: "from-blue-500 to-blue-600",
      stats: [
        { label: "Active Listings", value: "45,231", change: "+15%" },
        { label: "Virtual Tours", value: "12,450", change: "+32%" },
        { label: "Lead Generation", value: "8,234", change: "+28%" },
        { label: "Client Satisfaction", value: "94%", change: "+5%" },
      ],
      description: "Comprehensive real estate technology solutions including MLS integration, virtual 3D tours, automated mortgage calculators, and WhatsApp agent booking.",
      countries: ["US", "UK", "AE", "IN"],
    },
    {
      name: "E-Commerce",
      icon: ShoppingBag,
      color: "from-purple-500 to-purple-600",
      stats: [
        { label: "Active Stores", value: "2,341", change: "+18%" },
        { label: "Conversion Rate", value: "3.8%", change: "+0.5%" },
        { label: "AI Recommendations", value: "1.2M", change: "+45%" },
        { label: "Revenue per Store", value: "$45K", change: "+12%" },
      ],
      description: "Fashion retail platforms with AI-powered size recommendations, virtual try-on integrations, multi-channel inventory synchronization, and real-time analytics.",
      countries: ["US", "UK", "AE", "IN"],
    },
    {
      name: "Cloud Solutions",
      icon: Zap,
      color: "from-cyan-500 to-cyan-600",
      stats: [
        { label: "Servers Deployed", value: "8,456", change: "+22%" },
        { label: "Cost Savings", value: "40%", change: "+8%" },
        { label: "Uptime", value: "99.9%", change: "+0.1%" },
        { label: "Automation Tasks", value: "2.3M", change: "+67%" },
      ],
      description: "Scalable cloud infrastructure, CI/CD pipelines, multi-region deployment strategies, and automated DevOps workflows for enterprises.",
      countries: ["US", "UK", "AE", "IN"],
    },
    {
      name: "Digital Marketing",
      icon: Target,
      color: "from-pink-500 to-pink-600",
      stats: [
        { label: "Campaigns Run", value: "15,678", change: "+35%" },
        { label: "Average ROI", value: "5.2x", change: "+0.8x" },
        { label: "WhatsApp Messages", value: "8.9M", change: "+52%" },
        { label: "Lead Quality Score", value: "8.7/10", change: "+0.5" },
      ],
      description: "Automated campaign management, WhatsApp Business API integration, real-time analytics dashboards, and AI-powered audience targeting.",
      countries: ["US", "UK", "AE", "IN"],
    },
    {
      name: "SEO Services",
      icon: Search,
      color: "from-green-500 to-green-600",
      stats: [
        { label: "Pages Optimized", value: "156,789", change: "+28%" },
        { label: "Organic Traffic", value: "+67%", change: "+15%" },
        { label: "Schema Generated", value: "234K", change: "+42%" },
        { label: "Keyword Rankings", value: "#1-3", change: "+12%" },
      ],
      description: "Automated schema markup generation, technical SEO audits, real-time search performance monitoring, and AI-powered content optimization.",
      countries: ["US", "UK", "AE", "IN"],
    },
    {
      name: "HR Placements",
      icon: GraduationCap,
      color: "from-orange-500 to-orange-600",
      stats: [
        { label: "Campus Events", value: "1,234", change: "+18%" },
        { label: "Candidates Screened", value: "45,678", change: "+25%" },
        { label: "Placement Rate", value: "92%", change: "+4%" },
        { label: "Time to Hire", value: "14 days", change: "-3 days" },
      ],
      description: "Automated campus hiring workflows, AI-powered candidate matching, integrated placement tracking systems, and recruitment analytics.",
      countries: ["US", "UK", "AE", "IN"],
    },
  ];

  const performanceMetrics = [
    { category: "User Engagement", metrics: [
      { name: "Page Views", value: "2.4M", change: "+18%" },
      { name: "Session Duration", value: "4m 32s", change: "+12%" },
      { name: "Bounce Rate", value: "32%", change: "-5%" },
      { name: "Return Users", value: "45%", change: "+8%" },
    ]},
    { category: "Technical Performance", metrics: [
      { name: "Page Load Time", value: "1.2s", change: "-15%" },
      { name: "Server Response", value: "89ms", change: "-22%" },
      { name: "Error Rate", value: "0.02%", change: "-45%" },
      { name: "API Success", value: "99.8%", change: "+0.2%" },
    ]},
    { category: "Business Impact", metrics: [
      { name: "Revenue Generated", value: "$2.4M", change: "+23%" },
      { name: "Cost Savings", value: "$890K", change: "+35%" },
      { name: "Productivity Gain", value: "67%", change: "+12%" },
      { name: "Client Retention", value: "94%", change: "+3%" },
    ]},
  ];

  const recentAchievements = [
    { title: "Global Expansion", description: "Successfully launched operations in 4 countries with localized solutions", date: "Aug 2026", icon: Globe },
    { title: "AI Integration", description: "Implemented AI-powered recommendations across all services", date: "Jul 2026", icon: Lightbulb },
    { title: "Security Certification", description: "Achieved ISO 27001 and SOC 2 compliance", date: "Jun 2026", icon: Shield },
    { title: "Performance Milestone", description: "Reached 99.9% uptime across all platforms", date: "May 2026", icon: Award },
  ];

  const learningResources = [
    { title: "Getting Started with Real Estate Tech", description: "Complete guide to MLS integration and virtual tours", icon: Book, category: "Tutorial" },
    { title: "E-Commerce Best Practices", description: "Optimize your online store for maximum conversions", icon: ShoppingBag, category: "Guide" },
    { title: "Cloud Infrastructure Basics", description: "Understanding scalable architecture and deployment", icon: Zap, category: "Course" },
    { title: "Marketing Automation 101", description: "Set up automated campaigns and WhatsApp integration", icon: Target, category: "Tutorial" },
    { title: "SEO Optimization Strategies", description: "Technical SEO and schema markup implementation", icon: Search, category: "Guide" },
    { title: "HR Tech Implementation", description: "Campus hiring systems and candidate matching", icon: GraduationCap, category: "Course" },
  ];

  return (
    <div className="min-h-screen bg-[#eef0f4]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#4d7cf5] to-[#3660e0] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <BarChart3 className="w-8 h-8 text-white" />
              <span className="inline-block px-4 py-1 bg-white/20 text-white text-sm font-semibold rounded-full backdrop-blur-sm">
                Performance Analytics
              </span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">
              Insights Dashboard
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive analytics and performance metrics across all our services and regions. 
              Understand how our solutions drive real business impact.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        {/* Overview Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#1c1f26] mb-8">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {overviewStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white p-6 rounded-2xl border border-[#eef0f4] shadow-sm hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4d7cf5] to-[#3660e0] flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${
                    stat.trend === 'up' ? 'bg-[#e8f5e9] text-[#2e9e5b]' : 'bg-red-100 text-red-600'
                  }`}>
                    {stat.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    <span className="text-xs font-semibold">{stat.change}</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-[#1c1f26] mb-1">{stat.value}</div>
                <div className="text-sm text-[#8a90a2]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Service Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#1c1f26] mb-8">Service Performance</h2>
          <div className="space-y-8">
            {serviceInsights.map((service, index) => (
              <motion.div
                key={service.name}
                className="bg-white rounded-2xl border border-[#eef0f4] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#1c1f26]">{service.name}</h3>
                        <p className="text-sm text-[#8a90a2] mt-1">{service.description}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {service.countries.map((country) => (
                        <span key={country} className="px-3 py-1 bg-[#eef0f4] rounded-full text-xs font-semibold text-[#4a5060]">
                          {country}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {service.stats.map((stat) => (
                      <div key={stat.label} className="p-4 bg-[#eef0f4] rounded-xl">
                        <div className="text-sm text-[#8a90a2] mb-1">{stat.label}</div>
                        <div className="text-2xl font-bold text-[#1c1f26]">{stat.value}</div>
                        <div className="text-xs text-[#2e9e5b] font-semibold mt-1">{stat.change}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#1c1f26] mb-8">Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {performanceMetrics.map((category, index) => (
              <motion.div
                key={category.category}
                className="bg-white rounded-2xl border border-[#eef0f4] shadow-sm p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <h3 className="text-lg font-bold text-[#1c1f26] mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-[#4d7cf5]" />
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.metrics.map((metric) => (
                    <div key={metric.name} className="flex items-center justify-between">
                      <div className="text-sm text-[#4a5060]">{metric.name}</div>
                      <div className="flex items-center gap-2">
                        <div className="text-lg font-bold text-[#1c1f26]">{metric.value}</div>
                        <div className={`text-xs font-semibold ${
                          metric.change.startsWith('+') ? 'text-[#2e9e5b]' : 'text-red-600'
                        }`}>
                          {metric.change}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#1c1f26] mb-8">Recent Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="bg-white rounded-2xl border border-[#eef0f4] shadow-sm p-6 hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4d7cf5] to-[#3660e0] flex items-center justify-center flex-shrink-0">
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#1c1f26] mb-2">{achievement.title}</h3>
                    <p className="text-sm text-[#4a5060] mb-3">{achievement.description}</p>
                    <div className="flex items-center gap-2 text-xs text-[#8a90a2]">
                      <Clock className="w-4 h-4" />
                      {achievement.date}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#1c1f26] mb-8">Learning Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                className="bg-white rounded-2xl border border-[#eef0f4] shadow-sm p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4d7cf5] to-[#3660e0] flex items-center justify-center flex-shrink-0">
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <span className="inline-block px-2 py-1 bg-[#eef0f4] rounded-full text-xs font-semibold text-[#4a5060] mb-2">
                      {resource.category}
                    </span>
                    <h3 className="text-lg font-bold text-[#1c1f26] mb-2 group-hover:text-[#4d7cf5] transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-[#4a5060] mb-3">{resource.description}</p>
                    <div className="flex items-center gap-2 text-sm text-[#4d7cf5] font-semibold group-hover:translate-x-2 transition-transform">
                      Start Learning
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-[#4d7cf5] to-[#3660e0] rounded-2xl p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Explore our services and see how we can help transform your business with cutting-edge technology solutions.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/countries">
              <button className="px-8 py-4 bg-white hover:bg-gray-100 rounded-full text-[#4d7cf5] font-semibold transition-all duration-300 shadow-xl flex items-center gap-2">
                View Countries
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/countries/us/services">
              <button className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/20 rounded-full text-white font-semibold transition-all duration-300">
                Explore Services
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      <AdvancedFooter 
        countryCode="us"
        countryName="Global"
        currency="USD"
        currencySymbol="$"
      />

      <InsightsToggle />
    </div>
  );
}
