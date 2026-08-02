import React from "react";
import Header from "@/components/layout/NavigationHeader";
import AdvancedFooter from "@/components/footer/AdvancedFooter";
import { Briefcase, Users, MapPin, DollarSign, Clock, ArrowRight, CheckCircle } from "lucide-react";

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior React Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$80,000 - $120,000",
      description: "We're looking for an experienced React developer to join our team and build cutting-edge web applications."
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      salary: "$70,000 - $100,000",
      description: "Join our design team to create beautiful and intuitive user experiences for our clients."
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      salary: "$60,000 - $90,000",
      description: "Help us drive growth through innovative digital marketing strategies and campaigns."
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
      salary: "$75,000 - $110,000",
      description: "Lead cross-functional teams to deliver exceptional projects on time and within budget."
    },
  ];

  const benefits = [
    "Competitive salary and equity",
    "Flexible remote work",
    "Health insurance",
    "Professional development budget",
    "Unlimited PTO",
    "401(k) matching",
    "Latest equipment",
    "Team retreats"
  ];

  return (
    <>
      <Header currentCountry="us" />

      <main className="flex-1 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#1c1f26] mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-[#4a5060] max-w-2xl mx-auto">
            Build the future with AEX Agency. We're looking for talented individuals who are passionate about creating exceptional digital experiences.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#1c1f26] mb-8 text-center">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-[#4d7cf5]/30">
                <CheckCircle className="w-5 h-5 text-[#4d7cf5] flex-shrink-0" />
                <span className="text-[#1c1f26] font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div>
          <h2 className="text-3xl font-bold text-[#1c1f26] mb-8 text-center">Open Positions</h2>
          <div className="grid grid-cols-1 gap-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white rounded-xl border border-[#4d7cf5]/30 p-6 hover:shadow-lg hover:shadow-[#4d7cf5]/10 transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#1c1f26] mb-2">{position.title}</h3>
                    <p className="text-[#4a5060]">{position.description}</p>
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-[#4d7cf5] to-[#3660e0] rounded-lg text-white font-semibold hover:from-[#3660e0] hover:to-[#4d7cf5] transition-all flex items-center gap-2 self-start md:self-center">
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-[#4a5060]">
                    <Briefcase className="w-4 h-4 text-[#4d7cf5]" />
                    {position.department}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#4a5060]">
                    <MapPin className="w-4 h-4 text-[#4d7cf5]" />
                    {position.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#4a5060]">
                    <Clock className="w-4 h-4 text-[#4d7cf5]" />
                    {position.type}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#4a5060]">
                    <DollarSign className="w-4 h-4 text-[#4d7cf5]" />
                    {position.salary}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center p-12 bg-gradient-to-r from-[#4d7cf5]/10 to-[#3660e0]/10 rounded-xl border border-[#4d7cf5]/30">
          <h2 className="text-3xl font-bold text-[#1c1f26] mb-4">Don't See the Right Fit?</h2>
          <p className="text-[#4a5060] mb-6 max-w-2xl mx-auto">
            We're always looking for talented people to join our team. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-[#4d7cf5] to-[#3660e0] rounded-lg text-white font-semibold hover:from-[#3660e0] hover:to-[#4d7cf5] transition-all">
            Send General Application
          </button>
        </div>
        </div>
      </main>

      <AdvancedFooter 
        countryCode="us"
        countryName="United States"
        currency="USD"
        currencySymbol="$"
      />
    </>
  );
}
