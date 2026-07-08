import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GymCall",
  description: "Sistema inteligente de chamada de professores para academias.",

  manifest: "/manifest.json",

  themeColor: "#dc2626",

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "GymCall",
  },

  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
        style={{
          background: "#0f172a",
        }}
      >
        {children}
      </body>
    </html>
  );
}