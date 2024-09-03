import type { Metadata } from "next";
import { Inter, Roboto, Lobster } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

// Import the fonts
const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });
const lobster = Lobster({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Instant | The Smart Choice for Homes",
  description: "The Smart Choice for Homes",
  icons: {
    icon: "/Instant3-01.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          roboto.className,
          "antialiased bg-white"
        )}
      >
        {children}
      </body>
    </html>
  );
}
