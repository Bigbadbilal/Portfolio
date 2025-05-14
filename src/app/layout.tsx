import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Bilal Khan | Portfolio",
  description: "Student @ Schulich School of Business | Technology Enthusiast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.variable} ${sourceCodePro.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={sourceCodePro.className}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
