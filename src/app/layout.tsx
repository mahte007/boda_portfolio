import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Boda Viktor Pénzügyek",
  description:
    "Front-end developer based in Pécs, Hungary. I build fast, accessible, and visually appealing websites using React, Next.js, and TypeScript for businesses and agencies.",
  keywords: [
    "Pénzügy",
    "Pénzügyek",
    "Hitel",
    "Hitelügyintézés",
    "Befektetés",
    "Pénzügyi szakértő",
    "Pénzügyi tanácsadás",
    "Nyugdíj",
    "Biztosítás",
    "Boda",
    "Viktor",
    "Boda Viktor",
  ],
  authors: [{ name: "Boda Viktor", url: "https://bvpenzugyek.hu/" }],
  metadataBase: new URL("https://bvpenzugyek.hu/"),
  alternates: {
    canonical: "https://bvpenzugyek.hu/",
  },
  openGraph: {
    title: "Boda Viktor Pénzügyek",
    description:
      "Modern, accessible websites built with React, Next.js, and TypeScript. Available for freelance and contract work.",
    url: "https://bvpenzugyek.hu/",
    siteName: "Boda Viktor Pénzügyek",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Boda Viktor pénzügyi szakértő weboldalának előnézete",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boda Viktor Pénzügyek",
    description:
      "Building fast, accessible websites using React, Next.js, and TypeScript.",
    images: ["/preview.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
