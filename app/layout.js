import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/common-component/header";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ReactLenis } from "lenis/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nowory - Your Gateway to Instant Digital Wealth.",
  description:
    "Nowory offers seamless INR and crypto deposits, withdrawals, and transfers with zero fees and instant execution. Experience effortless crypto transactions, redefined.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ReactLenis root />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
