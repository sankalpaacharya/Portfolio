import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import { BodyWrapper } from "@/components/body-wrapper";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sankalpa Acharya",
  description:
    "I'm Sankalpa Acharya, 3rd-year Computer Science student driven to build software that lasts. Skilled in React, Golang, and Linux systems. I believe in creating solutions that are fast, reliable, and built to make a difference. Whenever I feel like to share my knowledge I write @blogs.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <BodyWrapper className={`${jetbrains.className} antialiased bg-cover`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </BodyWrapper>
    </html>
  );
}
