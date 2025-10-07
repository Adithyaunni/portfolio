import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import SiteNavbar from "@/components/site-navbar"
import { Suspense } from "react"
import LightRays from "./lightrays"
import CanvasCursor from "./canvascursor"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Nithya portfolio website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <CanvasCursor />
        <div style={{ width: '100%', height: '600px', position: 'fixed', zIndex: '-1' }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#cccccc"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.3}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
        <Suspense fallback={<div>Loading...</div>}>
          <SiteNavbar />
          {children}
        </Suspense>
      </body>
    </html>
  )
}
