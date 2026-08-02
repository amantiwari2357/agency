"use client";

import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Award, Users, Clock, Star, ArrowRight, Play, Zap, Building, ShoppingBag, Cloud, BarChart3, Search, GraduationCap, Book } from 'lucide-react';
import Link from 'next/link';

interface SuccessStoryBannerProps {
  countryCode: string;
  countryName: string;
  type?: 'service' | 'company' | 'resource';
  serviceType?: string;
}

export default function SuccessStoryBanner({ countryCode, countryName, type = 'service', serviceType = 'all' }: SuccessStoryBannerProps) {
  const successStories = {
    'real-estate': {
      icon: Building,
      title: "Real Estate Success Story",
      client: "Dubai Properties Group",
      result: "300% Increase in Property Inquiries",
      duration: "3 Months",
      testimonial: "AEX Agency transformed our property management system completely. The IDX integration and virtual tour features have revolutionized how we showcase properties.",
      metrics: [
        { label: "Property Inquiries", value: "+300%", icon: TrendingUp },
        { label: "User Engagement", value: "+250%", icon: Users },
        { label: "Lead Conversion", value: "+180%", icon: CheckCircle },
      ]
    },
    'ecommerce': {
      icon: ShoppingBag,
      title: "E-Commerce Success Story",
      client: "RetailMax India",
      result: "450% Increase in Organic Traffic",
      duration: "6 Months",
      testimonial: "Their SEO and e-commerce platform solutions helped us scale from a local retailer to a national brand. The ROI has been phenomenal.",
      metrics: [
        { label: "Organic Traffic", value: "+450%", icon: TrendingUp },
        { label: "Conversion Rate", value: "+200%", icon: CheckCircle },
        { label: "Revenue Growth", value: "+350%", icon: Award },
      ]
    },
    'cloud': {
      icon: Cloud,
      title: "Cloud Infrastructure Success",
      client: "TechScale Solutions",
      result: "99.9% Uptime Achieved",
      duration: "4 Months",
      testimonial: "The cloud migration was seamless. We now have a scalable infrastructure that handles millions of requests without any downtime.",
      metrics: [
        { label: "System Uptime", value: "99.9%", icon: CheckCircle },
        { label: "Cost Savings", value: "-40%", icon: Award },
        { label: "Performance", value: "+300%", icon: Zap },
      ]
    },
    'marketing': {
      icon: BarChart3,
      title: "Digital Marketing Success",
      client: "Growth Partners UK",
      result: "500% Increase in Qualified Leads",
      duration: "5 Months",
      testimonial: "Their marketing automation and lead generation strategies transformed our sales pipeline. Quality of leads has improved dramatically.",
      metrics: [
        { label: "Qualified Leads", value: "+500%", icon: TrendingUp },
        { label: "Cost per Lead", value: "-60%", icon: Award },
        { label: "ROI", value: "+400%", icon: CheckCircle },
      ]
    },
    'seo': {
      icon: Search,
      title: "SEO Services Success",
      client: "SearchFirst Digital",
      result: "Top 3 Rankings for 50+ Keywords",
      duration: "8 Months",
      testimonial: "AEX Agency's SEO expertise helped us dominate search results. Our organic traffic has grown exponentially while competitor rankings declined.",
      metrics: [
        { label: "Keyword Rankings", value: "Top 3", icon: Star },
        { label: "Organic Traffic", value: "+600%", icon: TrendingUp },
        { label: "Domain Authority", value: "+35", icon: Award },
      ]
    },
    'placements': {
      icon: GraduationCap,
      title: "HR Placements Success",
      client: "Campus Recruit Pro",
      result: "200% Increase in Successful Placements",
      duration: "4 Months",
      testimonial: "Their AI-powered matching system revolutionized our campus recruitment process. We're now able to place the right candidates 3x faster.",
      metrics: [
        { label: "Placement Rate", value: "+200%", icon: CheckCircle },
        { label: "Time to Hire", value: "-65%", icon: Clock },
        { label: "Candidate Quality", value: "+180%", icon: Users },
      ]
    },
    'company': {
      icon: Award,
      title: "Company Success Story",
      client: "Multi-Industry Portfolio",
      result: "500+ Successful Projects Delivered",
      duration: "5+ Years",
      testimonial: "AEX Agency has been our trusted technology partner across multiple business verticals. Their consistent delivery and innovative solutions have been instrumental in our growth.",
      metrics: [
        { label: "Projects Delivered", value: "500+", icon: CheckCircle },
        { label: "Client Satisfaction", value: "98%", icon: Star },
        { label: "Repeat Business", value: "85%", icon: Users },
      ]
    },
    'resource': {
      icon: Book,
      title: "Resource & Knowledge Success",
      client: "Learning Hub Community",
      result: "50,000+ Monthly Readers",
      duration: "2 Years",
      testimonial: "Our documentation and blog resources, powered by AEX Agency's content strategy, have become go-to references in the industry.",
      metrics: [
        { label: "Monthly Readers", value: "50K+", icon: Users },
        { label: "Content Engagement", value: "+400%", icon: TrendingUp },
        { label: "Backlinks", value: "1000+", icon: Award },
      ]
    }
  };

  const story = successStories[serviceType as keyof typeof successStories] || successStories.company;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#4d7cf5] via-[#3660e0] to-[#4d7cf5] py-8 px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <story.icon className="w-4 h-4 text-white" />
              </div>
              <span className="text-white/90 font-semibold text-sm">Success Story</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {story.title}
            </h2>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4 border border-white/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{story.client}</p>
                  <p className="text-white/70 text-xs">{countryName}</p>
                </div>
              </div>
              <p className="text-white/90 leading-relaxed italic text-sm">
                "{story.testimonial}"
              </p>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1 text-white/90 text-xs">
                <Clock className="w-3 h-3" />
                <span>{story.duration}</span>
              </div>
              <div className="flex items-center gap-1 text-white/90 text-xs">
                <CheckCircle className="w-3 h-3" />
                <span>{story.result}</span>
              </div>
            </div>

            <Link href={`/${countryCode}/contact`}>
              <button className="group px-6 py-2 bg-white hover:bg-gray-100 rounded-full text-[#4d7cf5] font-semibold transition-all shadow-lg flex items-center gap-2 text-sm">
                Achieve Similar Results
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>

          {/* Right Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            {story.metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <metric.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white/70 text-xs">{metric.label}</p>
                      <p className="text-2xl font-bold text-white">{metric.value}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}