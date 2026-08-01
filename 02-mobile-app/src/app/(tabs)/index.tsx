import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AnalyticsDashboardFeature from "../../features/analytics-dashboard";
import LeadManagerFeature from "../../features/lead-manager";
import PackagePurchaserFeature from "../../features/package-purchaser";
import { CountrySelection, useCountrySelection, CountryProvider } from "../../features/country-selection";

function MobileHomeScreenContent() {
  const [activeTab, setActiveTab] = useState<"overview" | "real-estate" | "ecommerce" | "cloud" | "placements" | "marketing">("overview");
  const [showCountrySelector, setShowCountrySelector] = useState(false);
  const { selectedCountry, initializeCountry, setSelectedCountry } = useCountrySelection();

  useEffect(() => {
    initializeCountry();
  }, []);

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>AEX Mobile Command</Text>
            <Text style={styles.subtitle}>Feature-Driven Dedicated Service Modules</Text>
          </View>
          <TouchableOpacity
            style={styles.countrySelectorButton}
            onPress={() => setShowCountrySelector(true)}
          >
            <Text style={styles.countryFlag}>
              {selectedCountry?.flag || '🌍'}
            </Text>
            <Text style={styles.countryCode}>
              {selectedCountry?.code.toUpperCase() || 'SELECT'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Tab Navigation Bar */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabScroll}>
          <TouchableOpacity
            onPress={() => setActiveTab("overview")}
            style={[styles.tabBtn, activeTab === "overview" && styles.tabActive]}
          >
            <Text style={[styles.tabText, activeTab === "overview" && styles.tabTextActive]}>Overview</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActiveTab("real-estate")}
            style={[styles.tabBtn, activeTab === "real-estate" && styles.tabActive]}
          >
            <Text style={[styles.tabText, activeTab === "real-estate" && styles.tabTextActive]}>Real Estate</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActiveTab("ecommerce")}
            style={[styles.tabBtn, activeTab === "ecommerce" && styles.tabActive]}
          >
            <Text style={[styles.tabText, activeTab === "ecommerce" && styles.tabTextActive]}>E-Commerce</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActiveTab("cloud")}
            style={[styles.tabBtn, activeTab === "cloud" && styles.tabActive]}
          >
            <Text style={[styles.tabText, activeTab === "cloud" && styles.tabTextActive]}>Cloud</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActiveTab("placements")}
            style={[styles.tabBtn, activeTab === "placements" && styles.tabActive]}
          >
            <Text style={[styles.tabText, activeTab === "placements" && styles.tabTextActive]}>Placements</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActiveTab("marketing")}
            style={[styles.tabBtn, activeTab === "marketing" && styles.tabActive]}
          >
            <Text style={[styles.tabText, activeTab === "marketing" && styles.tabTextActive]}>Marketing</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {activeTab === "overview" && (
        <>
          <AnalyticsDashboardFeature />
          <LeadManagerFeature />
          <PackagePurchaserFeature />
        </>
      )}

      {activeTab === "real-estate" && (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Real Estate Engine (MLS / WhatsApp)</Text>
          <Text style={styles.cardDesc}>Browse glass villas & sky penthouses with direct agent contact.</Text>
        </View>
      )}

      {activeTab === "ecommerce" && (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>E-Commerce Storefront</Text>
          <Text style={styles.cardDesc}>Select size variants & trigger bottom sheet checkout.</Text>
        </View>
      )}

      {activeTab === "cloud" && (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Managed Cloud Console</Text>
          <Text style={styles.cardDesc}>99.99% SLA Uptime, 12ms latency, edge clusters.</Text>
        </View>
      )}

      {activeTab === "placements" && (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>College Placement Cell</Text>
          <Text style={styles.cardDesc}>14,800+ Students placed across 650+ tech partners.</Text>
        </View>
      )}

      {activeTab === "marketing" && (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>WhatsApp API & Email Broadcast</Text>
          <Text style={styles.cardDesc}>Trigger multi-channel campaigns & SEO bookmarking indexer.</Text>
        </View>
      )}

      <CountrySelection
        visible={showCountrySelector}
        onClose={() => setShowCountrySelector(false)}
        onSelectCountry={(country) => {
          setSelectedCountry(country);
        }}
        selectedCountry={selectedCountry || undefined}
      />
    </ScrollView>
  );
}

export default function MobileHomeScreen() {
  return (
    <CountryProvider>
      <MobileHomeScreenContent />
    </CountryProvider>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#090d16" },
  content: { padding: 16, paddingBottom: 40 },
  header: { marginBottom: 16 },
  headerTop: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
  titleContainer: { flex: 1 },
  title: { color: "#ffffff", fontSize: 24, fontWeight: "bold" },
  subtitle: { color: "#38bdf8", fontSize: 12, marginTop: 2 },
  countrySelectorButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e293b",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#38bdf8",
  },
  countryFlag: { fontSize: 20, marginRight: 6 },
  countryCode: { color: "#38bdf8", fontSize: 12, fontWeight: "bold" },
  tabScroll: { marginTop: 12, flexGrow: 0 },
  tabBtn: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20, backgroundColor: "#1e293b", marginRight: 8 },
  tabActive: { backgroundColor: "#2563eb" },
  tabText: { color: "#94a3b8", fontSize: 12, fontWeight: "bold" },
  tabTextActive: { color: "#ffffff" },
  card: { backgroundColor: "#1e293b", padding: 20, borderRadius: 16, marginTop: 10 },
  cardTitle: { color: "#ffffff", fontSize: 18, fontWeight: "bold" },
  cardDesc: { color: "#94a3b8", fontSize: 13, marginTop: 6 },
});
