import type { Metadata } from "next"
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

// Distinctive serif for headlines - elegant, high-contrast
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
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
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  )
}
