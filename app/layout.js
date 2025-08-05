import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/common-component/header";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ReactLenis } from "lenis/react";
import Section6 from "@/common-component/home/Section6";
import { GoogleAnalytics } from "@next/third-parties/google";

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
  icons: {
    icon: ["/assets/only-logo.svg"],
    apple: ["/assets/only-logo.svg"],
    shortcut: ["/assets/only-logo.svg"],
  },
  other: {
    rel: "mask-icon",
    url: "/assets/only-logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ReactLenis root />
          <Header type={"layout"} />
          {children}
          <Section6 />
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-XYZ" />
    </html>
  );
}
