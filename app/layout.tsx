import type { Metadata } from "next";
import { Play } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";

const sen = Play({
  variable: "--font-sen",
  subsets: ["latin"],

  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Sankalpa Acharya",
  description:
    "I'm Sankalpa Acharya, 3rd-year Computer Science student driven to build software that lasts. Skilled in React, Golang, and Linux systems. I believe in creating solutions that are fast, reliable, and built to make a difference. Whenever I feel like to share my knowledge I write @blogs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sen.variable}  antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
