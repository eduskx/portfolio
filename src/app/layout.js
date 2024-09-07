import { Space_Grotesk, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { links } from "@/lib/data";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-roboto",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${roboto.variable}`}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio // Eduard Lisovskij</title>
      </head>
      <body>
        <Header links={links} />
        {children}
      </body>
    </html>
  );
}
