import { Space_Grotesk, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Eduards Portfolio",
  description: "Portfolio Website from Eduard Lisovskij",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${roboto.variable}`}>
      <body>
        <Header links={["Projects", "About Me", "Test"]} />
        <main>{children}</main>
      </body>
    </html>
  );
}
