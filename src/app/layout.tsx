import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LuckyAssist Pro | Philippine BPO & Virtual Assistant Services",
  description:
    "Scale your business with elite Filipino talent. Customer service, medical VA, real estate VA, web development, social media, and AI automation. Save up to 70% on operational costs.",
  keywords:
    "BPO Philippines, virtual assistant Philippines, medical VA, real estate VA, customer service outsourcing, AI automation BPO",
  openGraph: {
    title: "LuckyAssist Pro | Philippine BPO & Virtual Assistant Services",
    description:
      "Scale your business with elite Filipino talent. Save up to 70% on operational costs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-navy antialiased">
        {children}
      </body>
    </html>
  );
}
