import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Forge Digitale | Formations Premium IA & Revenus en Boucle',
  description: 'Maîtrisez l\'IA et construisez un business digital rentable avec des formations professionnelles de niveau expert.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="bg-dark text-white antialiased">{children}</body>
    </html>
  )
}