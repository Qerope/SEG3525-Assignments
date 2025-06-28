import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ComfortCraft - Premium Furniture E-commerce",
  description:
    "Discover handcrafted furniture pieces that bring comfort and style to every room. Shop premium furniture with exceptional quality and design.",
  keywords: "furniture, home decor, premium furniture, modern furniture, traditional furniture, scandinavian furniture"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
