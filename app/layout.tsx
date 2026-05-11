import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AutoVentas - Plataforma de Venta de Automóviles',
  description: 'La plataforma más moderna para vender y administrar tu inventario de autos. Conecta con compradores y cierra ventas más rápido.',
  keywords: 'venta de autos, plataforma automotriz, venta de vehículos, concesionario online',
  authors: [{ name: 'AutoVentas Team' }],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://autoventas.mx',
    title: 'AutoVentas - Plataforma de Venta de Automóviles',
    description: 'La plataforma más moderna para vender y administrar tu inventario de autos',
    images: [{
      url: 'https://autoventas.mx/og-image.png',
      width: 1200,
      height: 630,
    }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
