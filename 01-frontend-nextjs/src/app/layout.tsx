import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import EnhancedHeader from "@/components/navigation/EnhancedHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "Aexagenvcy | Global Digital Solutions Agency",
  description: "Leading digital agency providing web development, mobile apps, SEO, cloud services, and digital marketing solutions across 24+ countries.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased bg-[#111318]">
        <ThemeProvider>
          <EnhancedHeader />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
