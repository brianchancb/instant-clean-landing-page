import type { Metadata } from "next";
// import { Inter, Roboto, Lobster } from "next/font/google";
import { Poppins } from "next/font/google"; // Importing Poppins from next/font/google
import "./globals.css";
import { twMerge } from "tailwind-merge";

// // Import the fonts
// const inter = Inter({ subsets: ["latin"] });
// const roboto = Roboto({ subsets: ["latin"], weight: "400" });
// const lobster = Lobster({ subsets: ["latin"], weight: "400" });
// Import the font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

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
      <body className={twMerge(poppins.className, "antialiased bg-[#f7f7f7]")}>
        <div className="">
          {" "}
          {/* Add a container */}
          {children}
        </div>
      </body>
    </html>
  );
}
