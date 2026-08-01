import React from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";

interface Props {
  visible: boolean;
  onClose: () => void;
}

export function CheckoutSheet({ visible, onClose }: Props) {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.sheetContainer}>
        <View style={styles.sheet}>
          <Text style={styles.sheetTitle}>Native Bottom Sheet Checkout</Text>
          <Text style={styles.sheetSubtitle}>Enterprise SEO & Mobile App Scaling Package</Text>
          
          <TouchableOpacity style={styles.confirmBtn} onPress={onClose}>
            <Text style={styles.confirmText}>Confirm In-App Purchase</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  sheetContainer: { flex: 1, justifyContent: "flex-end", backgroundColor: "rgba(0,0,0,0.6)" },
  sheet: { backgroundColor: "#0f172a", padding: 24, borderTopLeftRadius: 24, borderTopRightRadius: 24, borderWidth: 1, borderColor: "#334155" },
  sheetTitle: { color: "#ffffff", fontSize: 18, fontWeight: "bold" },
  sheetSubtitle: { color: "#94a3b8", fontSize: 13, marginTop: 4, marginBottom: 20 },
  confirmBtn: { backgroundColor: "#10b981", padding: 14, borderRadius: 12, alignItems: "center" },
  confirmText: { color: "#064e3b", fontWeight: "bold", fontSize: 14 },
});
