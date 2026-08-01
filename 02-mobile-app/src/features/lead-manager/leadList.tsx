import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Lead } from "./useLeadsStream";

interface Props {
  leads: Lead[];
  onSelectLead: (lead: Lead) => void;
}

export function LeadList({ leads, onSelectLead }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Client Lead Receiver</Text>
      <FlatList
        data={leads}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => onSelectLead(item)}>
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.sub}>{item.type} • {item.phone}</Text>
            </View>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{item.status}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 12 },
  sectionTitle: { color: "#ffffff", fontSize: 16, fontWeight: "bold", marginBottom: 10 },
  item: { backgroundColor: "#1e293b", padding: 14, borderRadius: 12, marginBottom: 8, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  name: { color: "#ffffff", fontSize: 15, fontWeight: "bold" },
  sub: { color: "#94a3b8", fontSize: 12, marginTop: 2 },
  badge: { backgroundColor: "#065f46", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  badgeText: { color: "#34d399", fontSize: 11, fontWeight: "bold" },
});
