import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AnalyticsState } from "./useAnalyticsTracker";

interface Props {
  stats: AnalyticsState;
}

export function AnalyticsTablet({ stats }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.badge}>TABLET NATIVE VIEW (2x2 GRID)</Text>
      <Text style={styles.header}>SEO & Ads Live Performance</Text>

      <View style={styles.grid}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Total Impressions</Text>
          <Text style={styles.cardValue}>{stats.impressions.toLocaleString()}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Total Clicks</Text>
          <Text style={styles.cardValue}>{stats.clicks.toLocaleString()}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Click-Through Rate</Text>
          <Text style={styles.cardValue}>{stats.ctr}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Closed Conversions</Text>
          <Text style={styles.cardValue}>{stats.conversions}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, backgroundColor: "#0f172a", borderRadius: 16, marginBottom: 16 },
  badge: { color: "#38bdf8", fontSize: 10, fontWeight: "bold", letterSpacing: 1, marginBottom: 4 },
  header: { color: "#ffffff", fontSize: 22, fontWeight: "bold", marginBottom: 16 },
  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  card: { width: "48%", backgroundColor: "#1e293b", padding: 16, borderRadius: 12, marginBottom: 12 },
  cardTitle: { color: "#94a3b8", fontSize: 12 },
  cardValue: { color: "#ffffff", fontSize: 24, fontWeight: "bold", marginTop: 4 },
});
