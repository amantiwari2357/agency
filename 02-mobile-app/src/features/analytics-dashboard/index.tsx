import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useNativeDevice } from "../../hooks/useNativeDevice";
import { useAnalyticsTracker } from "./useAnalyticsTracker";
import { AnalyticsTablet } from "./analyticsTablet";
import { AnalyticsMobile } from "./analyticsMobile";

export default function AnalyticsDashboardFeature() {
  const { isTablet } = useNativeDevice();
  const stats = useAnalyticsTracker();

  if (stats.loading) {
    return (
      <View style={{ padding: 20, alignItems: "center" }}>
        <ActivityIndicator size="small" color="#38bdf8" />
        <Text style={{ color: "#94a3b8", marginTop: 8, fontSize: 12 }}>Loading Analytics...</Text>
      </View>
    );
  }

  return isTablet ? <AnalyticsTablet stats={stats} /> : <AnalyticsMobile stats={stats} />;
}
