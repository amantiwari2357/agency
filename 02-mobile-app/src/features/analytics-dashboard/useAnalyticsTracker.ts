import { useState, useEffect } from "react";
import { fetchAnalyticsData } from "../../services/apiClient";

export interface AnalyticsState {
  impressions: number;
  clicks: number;
  ctr: string;
  conversions: number;
  loading: boolean;
}

export function useAnalyticsTracker(): AnalyticsState {
  const [stats, setStats] = useState<AnalyticsState>({
    impressions: 0,
    clicks: 0,
    ctr: "0%",
    conversions: 0,
    loading: true,
  });

  useEffect(() => {
    fetchAnalyticsData().then((data) => {
      setStats({
        ...data,
        loading: false,
      });
    });
  }, []);

  return stats;
}
