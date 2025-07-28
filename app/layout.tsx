import type React from "react"
import type { Metadata } from "next"
import { Space_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Kriya - Digital Solutions & Web Services | Transform Your Digital Presence",
  description:
    "Transform your digital presence with Kriya's comprehensive web services including graphic design, social media management, web development, app development, and marketing solutions. Get started today!",
  keywords: "web design, app development, digital marketing, graphic design, social media management, Kriya",
  authors: [{ name: "Kriya Digital Solutions" }],
  creator: "Kriya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kriya.com",
    title: "Kriya - Digital Solutions & Web Services",
    description: "Transform your digital presence with comprehensive web services and digital solutions.",
    siteName: "Kriya",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kriya - Digital Solutions & Web Services",
    description: "Transform your digital presence with comprehensive web services and digital solutions.",
    creator: "@kriya",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceMono.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
