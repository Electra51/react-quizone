import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Frontend Developer Assessment Platform | FrontendIQ",
    template: "%s | FrontendIQ",
  },
  description:
    "FrontendIQ is a frontend developer assessment platform for evaluating React, Next.js, TypeScript, and Tailwind CSS skills with structured challenges.",
  keywords: [
    "frontend developer assessment",
    "frontend assessment platform",
    "React assessment",
    "Next.js assessment",
    "TypeScript quiz",
    "Tailwind CSS assessment",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Frontend Developer Assessment Platform | FrontendIQ",
    description:
      "Evaluate frontend developer skills with modern assessments for React, Next.js, TypeScript, and Tailwind CSS.",
    url: "/",
    siteName: "FrontendIQ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend Developer Assessment Platform | FrontendIQ",
    description:
      "A modern platform for frontend assessments, coding practice, and skill benchmarking.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          id="quize-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "FrontendIQ",
              applicationCategory: "EducationalApplication",
              operatingSystem: "Web",
              description:
                "A frontend developer assessment platform for evaluating React, Next.js, TypeScript, and Tailwind CSS skills.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
