import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AnalyticsState } from "./useAnalyticsTracker";

interface Props {
  stats: AnalyticsState;
}

export function AnalyticsMobile({ stats }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.badge}>PHONE NATIVE VIEW</Text>
      <Text style={styles.header}>Analytics Overview</Text>

      <View style={styles.list}>
        <View style={styles.row}>
          <Text style={styles.label}>Impressions</Text>
          <Text style={styles.val}>{stats.impressions.toLocaleString()}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Clicks</Text>
          <Text style={styles.val}>{stats.clicks.toLocaleString()}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>CTR</Text>
          <Text style={styles.val}>{stats.ctr}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Conversions</Text>
          <Text style={styles.val}>{stats.conversions}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: "#0f172a", borderRadius: 12, marginBottom: 12 },
  badge: { color: "#f59e0b", fontSize: 9, fontWeight: "bold", marginBottom: 2 },
  header: { color: "#ffffff", fontSize: 18, fontWeight: "bold", marginBottom: 12 },
  list: { gap: 8 },
  row: { flexDirection: "row", justifyContent: "space-between", backgroundColor: "#1e293b", padding: 12, borderRadius: 8 },
  label: { color: "#94a3b8", fontSize: 13 },
  val: { color: "#38bdf8", fontSize: 14, fontWeight: "bold" },
});
