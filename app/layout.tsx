import "@/app/globals.css"
import { Inter } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

// Mettre à jour le titre et la description du site
export const metadata = {
  title: "Eva Aesthetic - Soins Naturels du Maroc",
  description: "Institut de beauté spécialisé dans les soins naturels inspirés des traditions marocaines.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
