import React, { useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { useLeadsStream, Lead } from "./useLeadsStream";
import { LeadList } from "./leadList";
import { LeadDetailModal } from "./leadDetailModal";

export default function LeadManagerFeature() {
  const { leads, loading } = useLeadsStream();
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  if (loading) {
    return <ActivityIndicator size="small" color="#38bdf8" />;
  }

  return (
    <View>
      <LeadList leads={leads} onSelectLead={setSelectedLead} />
      <LeadDetailModal lead={selectedLead} onClose={() => setSelectedLead(null)} />
    </View>
  );
}
