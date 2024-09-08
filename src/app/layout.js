import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import { links } from "@/lib/data";

const spaceGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/SpaceGrotesk-VariableFont_wght.ttf",
    },
  ],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const roboto = localFont({
  src: [
    {
      path: "../../public/fonts/Roboto-Light.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/Roboto-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Roboto-Medium.ttf",
      weight: "500",
    },
  ],
  subsets: ["latin"],
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
