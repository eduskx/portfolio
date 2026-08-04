import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jbmono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-eduliso.vercel.app"),
  title: "Eduard Lisovskij — Portfolio",
  description:
    "Frontend Developer aus Deutschland — benutzerfreundliche Web-Interfaces mit React, Next.js und TypeScript.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://portfolio-eduliso.vercel.app",
    siteName: "Eduard Lisovskij — Portfolio",
    title: "Eduard Lisovskij — Portfolio",
    description:
      "Frontend Developer aus Deutschland — benutzerfreundliche Web-Interfaces mit React, Next.js und TypeScript.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eduard Lisovskij — Portfolio",
    description:
      "Frontend Developer aus Deutschland — benutzerfreundliche Web-Interfaces mit React, Next.js und TypeScript.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${archivo.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
