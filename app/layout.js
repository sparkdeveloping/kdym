import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./retreat.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

export const metadata = {
  metadataBase: new URL("https://kdym.org"),
  title: {
    default: "KDYM | Heartland Hyphen Retreat 2026",
    template: "%s | KDYM",
  },
  description: "Kansas District Youth Ministries. Join us for Heartland Hyphen Retreat, November 12–14, 2026 at Cross Church Kansas City in Olathe, Kansas. Register today.",
  applicationName: "KDYM",
  keywords: ["KDYM", "Kansas District Youth Ministries", "Heartland Hyphen Retreat", "Hyphen Retreat 2026", "Kansas UPCI", "young adults", "Olathe"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Kansas District Youth Ministries",
    title: "Heartland Hyphen Retreat 2026 | KDYM",
    description: "November 12–14 in Olathe, Kansas. Find your people. Grow in faith. Move forward with purpose.",
    url: "https://kdym.org",
    locale: "en_US",
  },
  twitter: { card: "summary", title: "Heartland Hyphen Retreat 2026 | KDYM" },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080a12",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geistSans.variable + " " + geistMono.variable + " h-full antialiased"}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
