import "~/styles/globals.css";

import { type Metadata } from "next";
import { Crimson_Pro, Crimson_Text, Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "College 117 Final",
  description: "Justice in Biotechnologies Final Project - Mark Music",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const crimson = Crimson_Pro({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-crimson",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${crimson.variable}`}>
      <body>{children}</body>
    </html>
  );
}
