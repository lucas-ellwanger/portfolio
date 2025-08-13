import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { title, description, siteUrl, siteImage } from "@/lib/metadata";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    images: [
      {
        url: siteImage,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geist.className} mx-4 mt-12 flex max-w-2xl flex-col antialiased md:flex-row lg:mx-auto`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <main className="mt-6 flex min-w-0 flex-auto flex-col gap-y-[4.25rem] px-2 lg:px-0">
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
