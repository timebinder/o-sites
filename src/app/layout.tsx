import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Immortal Ventures | Venture Builder & Growth Accelerator",
  description: "Putting Humans First: Building and accelerating software startups through our private Venture Studio and public Growth Accelerator.",
  keywords: ["venture builder", "startup accelerator", "growth", "VC", "software startups"],
  openGraph: {
    title: "Immortal Ventures | Venture Builder & Growth Accelerator",
    description: "Putting Humans First: Building and accelerating software startups through our private Venture Studio and public Growth Accelerator.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  )
}
