import React, { useState } from "react";
import { View } from "react-native";
import { PackageCard } from "./packageCard";
import { CheckoutSheet } from "./checkoutSheet";

export default function PackagePurchaserFeature() {
  const [openSheet, setOpenSheet] = useState(false);

  return (
    <View>
      <PackageCard
        title="Enterprise SEO & App Accelerator"
        price="$1,299"
        description="Includes React Native components & Node.js microservices."
        onBuy={() => setOpenSheet(true)}
      />
      <CheckoutSheet visible={openSheet} onClose={() => setOpenSheet(false)} />
    </View>
  );
}
