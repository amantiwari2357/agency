"use client";

import { useState, useEffect } from "react";

export interface ServiceItem {
  id: string;
  title: string;
  category: "SEO" | "Web Dev" | "Marketing" | "Mobile App";
  description: string;
  iconName: string;
  deliverables: string[];
  gradient: string;
}

export function useServicesData() {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulating API fetch
    const timer = setTimeout(() => {
      setServices([
        {
          id: "srv-1",
          title: "Enterprise Technical SEO",
          category: "SEO",
          description: "Full audit, schema injection, speed optimization & keyword indexing.",
          iconName: "Search",
          deliverables: ["Core Web Vitals 95+", "Schema markup", "Weekly keyword tracker"],
          gradient: "from-blue-600 to-cyan-500",
        },
        {
          id: "srv-2",
          title: "Modern Next.js 15 Web Apps",
          category: "Web Dev",
          description: "Feature-driven serverless websites with high performance.",
          iconName: "Code",
          deliverables: ["App Router architecture", "Glassmorphism UI", "Dynamic SSR & ISR"],
          gradient: "from-indigo-600 to-violet-600",
        },
        {
          id: "srv-3",
          title: "Cross-Platform Expo Apps",
          category: "Mobile App",
          description: "Native iOS & Android mobile applications with shared components.",
          iconName: "Smartphone",
          deliverables: ["Offline cache", "Push notifications", "App Store submission"],
          gradient: "from-purple-600 to-pink-600",
        },
        {
          id: "srv-4",
          title: "Omnichannel Lead Acquisition",
          category: "Marketing",
          description: "Targeted PPC, social media ads and conversion rate optimization.",
          iconName: "TrendingUp",
          deliverables: ["Ad funnel strategy", "Custom landing page", "Real-time ROI dashboard"],
          gradient: "from-emerald-500 to-teal-700",
        },
      ]);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return { services, loading };
}
