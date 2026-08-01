import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface Props {
  title: string;
  price: string;
  description: string;
  onBuy: () => void;
}

export function PackageCard({ title, price, description, onBuy }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.badge}>IN-APP PURCHASER</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.desc}>{description}</Text>

      <TouchableOpacity style={styles.btn} onPress={onBuy}>
        <Text style={styles.btnText}>Purchase Package</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "#1e1b4b", padding: 18, borderRadius: 16, borderBottomWidth: 2, borderBottomColor: "#6366f1", marginTop: 12 },
  badge: { color: "#a5b4fc", fontSize: 9, fontWeight: "bold", letterSpacing: 1 },
  title: { color: "#ffffff", fontSize: 18, fontWeight: "bold", marginTop: 4 },
  price: { color: "#818cf8", fontSize: 24, fontWeight: "bold", marginTop: 4 },
  desc: { color: "#c7d2fe", fontSize: 12, marginTop: 4 },
  btn: { backgroundColor: "#4f46e5", padding: 12, borderRadius: 10, marginTop: 14, alignItems: "center" },
  btnText: { color: "#ffffff", fontWeight: "bold", fontSize: 13 },
});
