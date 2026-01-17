import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";

// Load the Poppins font with specific weights
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // You can add or remove weights as needed
  variable: "--font-poppins",   // Add a CSS variable for Tailwind to use
});

export const metadata: Metadata = {
  title: "Dania's Portfolio",
  description: "Frontend Developer & AI Enthusiast",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="--font-poppins">
        
        {children}
        <Sidebar/>
        </body>
    </html>
  );
}
