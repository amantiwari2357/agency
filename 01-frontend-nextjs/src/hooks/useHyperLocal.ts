"use client";

import { useState } from "react";

export interface LocalHierarchy {
  country: string;
  states: {
    name: string;
    cities: {
      name: string;
      sectors: string[];
    }[];
  }[];
}

export const hyperLocalData: Record<string, LocalHierarchy> = {
  us: {
    country: "United States",
    states: [
      {
        name: "California",
        cities: [
          { name: "San Francisco", sectors: ["Silicon Valley", "Financial District", "SOMA"] },
          { name: "Los Angeles", sectors: ["Beverly Hills", "Hollywood", "Santa Monica"] },
        ],
      },
      {
        name: "New York",
        cities: [
          { name: "New York City", sectors: ["Manhattan", "Brooklyn", "Wall Street"] },
        ],
      },
    ],
  },
  uk: {
    country: "United Kingdom",
    states: [
      {
        name: "Greater London",
        cities: [
          { name: "London", sectors: ["City of London", "Canary Wharf", "Mayfair"] },
          { name: "Manchester", sectors: ["MediaCityUK", "Spinningfields", "Deansgate"] },
        ],
      },
    ],
  },
  ae: {
    country: "United Arab Emirates",
    states: [
      {
        name: "Emirate of Dubai",
        cities: [
          { name: "Dubai", sectors: ["Downtown Dubai", "Dubai Marina", "Business Bay", "Palm Jumeirah"] },
          { name: "Abu Dhabi", sectors: ["Corniche", "Al Reem Island", "Yas Island"] },
        ],
      },
    ],
  },
  in: {
    country: "India",
    states: [
      {
        name: "Maharashtra",
        cities: [
          { name: "Mumbai", sectors: ["Bandra Kurla Complex (BKC)", "Andheri West", "Lower Parel"] },
          { name: "Pune", sectors: ["Hinjewadi IT Park", "Koregaon Park", "Viman Nagar"] },
        ],
      },
      {
        name: "Karnataka",
        cities: [
          { name: "Bengaluru", sectors: ["Indiranagar", "Koramangala", "Whitefield IT Tech Park"] },
        ],
      },
      {
        name: "Delhi NCR",
        cities: [
          { name: "Delhi", sectors: ["Connaught Place (CP)", "Gurugram Cyber City", "Noida Sector 62"] },
        ],
      },
    ],
  },
};

export function useHyperLocal(countryCode: string = "us") {
  const data = hyperLocalData[countryCode.toLowerCase()] || hyperLocalData.us;

  const [selectedState, setSelectedState] = useState(data.states[0]?.name || "");
  const [selectedCity, setSelectedCity] = useState(data.states[0]?.cities[0]?.name || "");
  const [selectedSector, setSelectedSector] = useState(data.states[0]?.cities[0]?.sectors[0] || "");

  const activeStateObj = data.states.find((s) => s.name === selectedState) || data.states[0];
  const activeCityObj = activeStateObj.cities.find((c) => c.name === selectedCity) || activeStateObj.cities[0];

  return {
    countryName: data.country,
    states: data.states,
    selectedState,
    setSelectedState,
    cities: activeStateObj.cities,
    selectedCity,
    setSelectedCity,
    sectors: activeCityObj.sectors,
    selectedSector,
    setSelectedSector,
  };
}
