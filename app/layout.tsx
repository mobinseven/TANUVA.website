import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tanuva.beauty"),
  title: "TANUVA — Quiet Science",
  description:
    "TANUVA is an Advanced Skincare Technology House where scientific discipline, sensorial intelligence and quiet hospitality are composed into advanced skincare.",
  openGraph: {
    title: "TANUVA — Quiet Science",
    description: "Quiet science. Made visible.",
    url: "https://tanuva.beauty",
    siteName: "TANUVA",
    images: [{ url: "/og.jpg", width: 1731, height: 909, alt: "TANUVA — Quiet science. Made visible." }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TANUVA — Quiet Science",
    description: "Quiet science. Made visible.",
    images: ["/og.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
