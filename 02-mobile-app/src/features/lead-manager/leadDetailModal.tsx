import React from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { Lead } from "./useLeadsStream";

interface Props {
  lead: Lead | null;
  onClose: () => void;
}

export function LeadDetailModal({ lead, onClose }: Props) {
  if (!lead) return null;

  return (
    <Modal visible={!!lead} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.backdrop}>
        <View style={styles.content}>
          <Text style={styles.title}>Lead Details</Text>
          <Text style={styles.name}>{lead.name}</Text>
          <Text style={styles.info}>Category: {lead.type}</Text>
          <Text style={styles.info}>Phone: {lead.phone}</Text>
          <Text style={styles.info}>Status: {lead.status}</Text>
          <Text style={styles.info}>Received: {lead.date}</Text>

          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.btnText}>Close Modal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: { flex: 1, backgroundColor: "rgba(0,0,0,0.7)", justifyContent: "center", alignItems: "center", padding: 20 },
  content: { backgroundColor: "#1e293b", padding: 20, borderRadius: 16, width: "100%" },
  title: { color: "#38bdf8", fontSize: 12, fontWeight: "bold", marginBottom: 4 },
  name: { color: "#ffffff", fontSize: 20, fontWeight: "bold", marginBottom: 12 },
  info: { color: "#cbd5e1", fontSize: 14, marginBottom: 6 },
  button: { marginTop: 16, backgroundColor: "#2563eb", padding: 12, borderRadius: 10, alignItems: "center" },
  btnText: { color: "#ffffff", fontWeight: "bold", fontSize: 14 },
});
