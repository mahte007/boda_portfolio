import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Boda Viktor - Pénzügyi szakértő | Tanácsadás, befektetés, biztosítás",
  description:
    "Boda Viktor pénzügyi szakértőként több éves tapasztalattal segíti magán- és vállalati ügyfeleit. Személyre szabott pénzügyi tervezés, befektetések, biztosítások és hosszú távú stratégia egy rendszerben.",
  keywords: [
    "Boda Viktor",
    "pénzügyi szakértő",
    "pénzügyi tanácsadás",
    "pénzügyi tervezés",
    "befektetés",
    "megtakarítás",
    "biztosítás",
    "nyugdíj tervezés",
    "hitel",
    "hitelügyintézés",
    "pénzügyi menedzsment",
    "pénzügyi stratégia",
    "vállalati pénzügy",
    "magán pénzügyek",
  ],
  authors: [{ name: "Boda Viktor", url: "https://bvpenzugyek.hu/" }],
  metadataBase: new URL("https://bvpenzugyek.hu/"),
  alternates: {
    canonical: "https://bvpenzugyek.hu/",
  },
  openGraph: {
    title: "Boda Viktor - Pénzügyi szakértő",
    description:
      "Több éves tapasztalattal segítek átlátható, személyre szabott pénzügyi rendszerek kialakításában - befektetés, biztosítás, finanszírozás egy kézben.",
    url: "https://bvpenzugyek.hu/",
    siteName: "Boda Viktor Pénzügyek",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Boda Viktor pénzügyi szakértő weboldala",
      },
    ],
    locale: "hu_HU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boda Viktor - Pénzügyi szakértő",
    description:
      "Személyre szabott pénzügyi tanácsadás és hosszú távú stratégia - befektetés, biztosítás és finanszírozás egy rendszerben.",
    images: ["/preview.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Boda Viktor Pénzügyek",
  url: "https://bvpenzugyek.hu/",
  image: "https://bvpenzugyek.hu/preview.png",
  description:
    "Boda Viktor pénzügyi szakértőként több éves tapasztalattal segíti magán- és vállalati ügyfeleit pénzügyeik tudatos megtervezésében, befektetési, biztosítási és finanszírozási döntéseik összehangolásában.",
  founder: {
    "@type": "Person",
    name: "Boda Viktor",
    jobTitle: "Pénzügyi szakértő",
  },
  areaServed: "HU",
  serviceType: [
    "Pénzügyi tanácsadás",
    "Befektetési tervezés",
    "Megtakarítási tanácsadás",
    "Biztosítási megoldások",
    "Finanszírozási tanácsadás",
    "Nyugdíjtervezés",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "HU",
  },
  sameAs: ["https://bvpenzugyek.hu/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
