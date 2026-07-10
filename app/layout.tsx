import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://greenquest-pi.vercel.app/";
const siteName = "GreenQuest Resource Management";
const title = "GreenQuest Resource Management Pvt. Ltd. | Waste to Value, Clean Energy";
const description =
  "GreenQuest builds sustainable technologies that transform waste into value, accelerate clean energy adoption, and enable a circular economy. Waste management, biomass, renewable energy, and green tech R&D.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Greenquest",
  },
  description,
  keywords: [
    "Greenquest",
    "waste management",
    "biomass resource management",
    "renewable energy solutions",
    "circular economy",
    "green hydrogen",
    "solar energy",
    "wind energy",
    "sustainability consulting",
    "green technology India",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  applicationName: siteName,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.jpeg",
    shortcut: "/greenquest_logo.png",
    apple: "/logo.jpeg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName,
    title,
    description,
    images: [
      {
        url: "/logo.jpeg",
        width: 1179,
        height: 1172,
        alt: "Greenquest Resource Management logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/greenquest_logo.jpeg"],
  },
  category: "sustainability",
};

export const viewport: Viewport = {
  themeColor: "#14532D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    legalName: "Greenquest Resource Management Pvt. Ltd.",
    url: siteUrl,
    logo: `${siteUrl}/greenquest_logo.png`,
    description,
    email: "info@greenquest.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "X-123 Rahul Market, Raghubarpur No.1",
      addressLocality: "Gandhinagar, Delhi",
      postalCode: "110032",
      addressCountry: "IN",
    },
    sameAs: ["https://www.facebook.com/share/1QCNujqr6B/?mibextid=wwXIfr"],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
