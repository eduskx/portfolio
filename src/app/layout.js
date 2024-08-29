// import { Inter } from 'next/font/google'
import "./globals.css";
import Header from "@/components/Header";

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Eduards Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header links={["Projects", "About Me", "Test"]} />
        {children}
      </body>
    </html>
  );
}
