import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const circe = localFont({
  src: [
    {
      path: '../public/fonts/Circe-Bold.woff',
      weight: '700',
    },
    {
      path: '../public/fonts/Circe-Regular.woff',
      weight: '400',
    },
    {
      path: '../public/fonts/Circe-Light.woff',
      weight: '300',
    },
    {
      path: '../public/fonts/Circe-ExtraLight.woff',
      weight: '100',
    },
  ],
  variable: '--font-circe',
})

export const metadata: Metadata = {
  title: {
    template: '%s | ASTY',
    default: 'ASTY',
  },
  description: 'Архітектурно-дизайнерське бюро',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${circe.variable} font-sans antialiased`}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
