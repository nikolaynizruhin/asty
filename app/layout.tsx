import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import app from '@/config/app';
import { addSuffix } from '@/lib/utils';

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
    template: addSuffix('%s'),
    default: app.name,
  },
  description: "ASTY – архітектурно-дизайнерське бюро, яке працює в сфері дизайну інтер’єру та архітектури по всьому світі ➣ Коли кожний квадратний метр має значення",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <body className={`${circe.variable} font-sans antialiased`}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
