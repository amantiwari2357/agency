import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "AEX Agency | Global Digital Solutions Agency",
  description: "Leading digital agency providing web development, mobile apps, SEO, cloud services, and digital marketing solutions across 24+ countries.",
  alternates: {
    canonical: "https://aexagency.com",
  },
  openGraph: {
    title: "AEX Agency | Global Digital Solutions Agency",
    description: "Leading digital agency providing web development, mobile apps, SEO, cloud services, and digital marketing solutions across 24+ countries.",
    url: "https://aexagency.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased bg-[#eef0f4]">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
