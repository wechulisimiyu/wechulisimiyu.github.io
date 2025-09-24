import type { Metadata } from "next";
import Script from 'next/script'
import { Inter } from 'next/font/google'
import "./globals.css"; // Side-effect import for global styles

const inter = Inter({
  subsets: ['latin'],
  weight: ['400','500','600','700'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Wechuli Simiyu - Medical Doctor & Software Developer",
  description: "Wechuli Simiyu, a Rotarian, a medical doctor and a self taught software developer. Currently using these skills to improve access to basic education, and healthcare.",
  authors: [{ name: "Wechuli" }],
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Wechuli Simiyu - Medical Doctor & Software Developer",
    description: "Wechuli Simiyu, a Rotarian, a medical doctor and a self taught software developer. Currently using these skills to improve access to basic education, and healthcare.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="referrer" content="unsafe-url" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="me" href="#" />
        <link rel="canonical" href="/" />
        {/* Font Awesome (single global include) */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      {/* Analytics scripts loaded after interactive to satisfy Next.js best practices */}
      <Script
        id="clarity"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "j1myikdr0j");`,
        }}
      />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-ESTQ6S1VB1"
        strategy="afterInteractive"
      />
      <Script id="ga-config" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-ESTQ6S1VB1');`}
      </Script>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
