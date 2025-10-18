import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Allama Iqbal Model High School Serai Saleh",
  description:
    "A premier educational institution offering quality education from Playgroup to Matric with modern facilities and experienced faculty.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/android-chrome-192x192.png",
  },
  keywords: [
    "Allama Iqbal Model School",
    "Allama Iqbal Model High School Serai Saleh",
    "Allama Iqbal Model High School website",
    "Allama Iqbal Model High School",
    "school in Abbottabad",
    "schools in Haripur",
    "schools in Serai Saleh",
    "Allama Iqbal School Serai Saleh",
    "matric education",
    "Pakistan school",
  ],
  metadataBase: new URL("https://aims-rose.vercel.app"),
  alternates: {
    canonical: "https://aims-rose.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Allama Iqbal Model High School Serai Saleh",
    description:
      "Providing quality education from Playgroup to Matric with experienced teachers and modern facilities.",
    url: "https://aims-rose.vercel.app",
    siteName: "Allama Iqbal Model High School Serai Saleh",
    locale: "en_PK",
    type: "website",
  },
  verification: {
    google: "fa1d24e92bcb1c49"
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased">
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          }
        >
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
