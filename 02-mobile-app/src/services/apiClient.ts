const API_BASE_URL = "http://localhost:5000/api/v1";

export async function fetchAnalyticsData() {
  try {
    const res = await fetch(`${API_BASE_URL}/analytics`);
    return await res.json();
  } catch (error) {
    return {
      impressions: 142500,
      clicks: 12400,
      ctr: "8.7%",
      conversions: 342,
    };
  }
}

export async function fetchLeadsData() {
  try {
    const res = await fetch(`${API_BASE_URL}/leads`);
    return await res.json();
  } catch (error) {
    return [
      { id: "lead-1", name: "Metro Retail Shop", type: "Shop", phone: "+1 555-0192", status: "New Inquiry", date: "2 mins ago" },
      { id: "lead-2", name: "City Public Library", type: "Library", phone: "+44 20 7946 0912", status: "Proposal Sent", date: "1 hour ago" },
      { id: "lead-3", name: "Apex Tech Firm", type: "Enterprise", phone: "+971 4 312 9000", status: "Closed Deal", date: "3 hours ago" },
    ];
  }
}
