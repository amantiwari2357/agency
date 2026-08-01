import { useState, useEffect } from "react";
import { fetchLeadsData } from "../../services/apiClient";

export interface Lead {
  id: string;
  name: string;
  type: string;
  phone: string;
  status: string;
  date: string;
}

export function useLeadsStream() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchLeadsData().then((data) => {
      setLeads(data);
      setLoading(false);
    });
  }, []);

  return { leads, loading };
}
