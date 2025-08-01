import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { routing } from "../../i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
// app/layout.tsx or app/page.tsx
export const metadata = {
  title: {
    default: 'ShopLaunchpad Studio - Launch Your Online Store',
    template: '%s | ShopLaunchpad Studio',
  },
  description: 'Launch your online store quickly with our no-code eCommerce platform. Mobile-ready, multilingual, and SEO-optimized.',
  keywords: ['ecommerce', 'launch store', 'advertising', 'no-code store', 'online shop'],

  openGraph: {
    title: 'ShopLaunchpad Studio',
    description: 'Launch your online store easily with ShopLaunchpad Studio.',
    url: 'https://www.shoplaunchpad.com',
    siteName: 'ShopLaunchpad Studio',
    images: [
      {
        url: 'https://www.shoplaunchpad.com/og-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'ShopLaunchpad Studio Cover Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'ShopLaunchpad Studio',
    description: 'Launch your store with our no-code platform.',
    images: ['https://www.shoplaunchpad.com/og-cover.jpg'],
  },

  alternates: {
    canonical: 'https://www.shoplaunchpad.com',
    languages: {
      en: 'https://www.shoplaunchpad.com/en',
      ar: 'https://www.shoplaunchpad.com/ar',
    },
  },

  metadataBase: new URL('https://www.shoplaunchpad.com'),
};


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    // notFound();
  }
  const dir = locale === "en" ? "ltr" : "rtl";
  const messages = await getMessages();
  return (
    <html lang={`${locale}`} dir={dir}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
