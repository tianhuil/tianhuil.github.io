import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar'

export const metadata: Metadata = {
  title: 'Michael Li',
  description: 'Personal Homepage for Tianhui Michael Li',
  openGraph: {
    title: 'Michael Li',
    type: 'profile',
    url: 'https://tianhuil.github.io/',
    images: [
      {
        url: 'https://tianhuil.github.io/images/tianhuil.jpg',
      },
    ],
  },
  twitter: {
    card: 'summary',
    site: '@tianhuil',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body className="min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4">{children}</main>
      </body>
    </html>
  )
}

function Navbar() {
  return (
    <header className="border-b border-border py-1.5">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-4xl font-extralight text-primary hover:no-underline"
        >
          Michael Li
        </Link>
        <Menubar className="border-0 shadow-none bg-transparent">
          <MenubarMenu>
            <MenubarTrigger asChild>
              <Link href="/" className="text-lg font-extralight cursor-pointer text-foreground">Home</Link>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger asChild>
              <Link href="/professional" className="text-lg font-extralight cursor-pointer text-foreground">Professional</Link>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger asChild>
              <Link href="/writing" className="text-lg font-extralight cursor-pointer text-foreground">Writing</Link>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger asChild>
              <Link href="/standup" className="text-lg font-extralight cursor-pointer text-foreground">Standup</Link>
            </MenubarTrigger>
          </MenubarMenu>
        </Menubar>
      </div>
    </header>
  )
}
