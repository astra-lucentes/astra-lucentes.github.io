import localFont from "next/font/local"
import {Noto_Sans_Math} from "next/font/google"
import "./globals.css"
import "./common.css"
import "./katex.css"

const displayFont = localFont({
  src: "./fonts/Inter.var.woff2",
  variable: "--font-display",
  display: "swap",
})

// const mathFont = localFont({
//   src: "./fonts/NotoSans.var.ttf",
//   variable: "--font-math",
//   display: "swap",
// })

const mathFont = Noto_Sans_Math({
  subsets: ["math"],
  variable: "--font-math",
  weight: '400',
  display: "swap",
})

export const metadata = {
  title: "Astra",
  description: "...",
}

export default function RootLayout({children}) {
  return (
    <html lang="ru">
      <body className={`${displayFont.variable} ${mathFont.variable}`}>
        {children}
      </body>
    </html>
  )
}
