import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agency Authentication</Text>
      <Text style={styles.sub}>Enter your agency credentials to access feature modules.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#090d16", justifyContent: "center", alignItems: "center", padding: 20 },
  title: { color: "#ffffff", fontSize: 22, fontWeight: "bold" },
  sub: { color: "#94a3b8", fontSize: 13, textAlign: "center", marginTop: 8 },
});
