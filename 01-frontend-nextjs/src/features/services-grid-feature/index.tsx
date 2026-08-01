"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import ServicesDesktop from "./servicesDesktop";
import ServicesMobile from "./servicesMobile";
import { useServicesData } from "./useServicesData";

export default function ServicesFeature() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { services, loading } = useServicesData();

  if (loading) {
    return (
      <div className="py-12 text-center text-slate-400">
        <div className="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-2" />
        <p className="text-sm font-medium">Loading Services Feature...</p>
      </div>
    );
  }

  return isMobile ? (
    <ServicesMobile services={services} />
  ) : (
    <ServicesDesktop services={services} />
  );
}
