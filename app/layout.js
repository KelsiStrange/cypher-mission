import './globals.css';

export const metadata = {
  title: 'CypherMission — Coming Soon',
  description: 'CypherMission is launching soon. Join the mission and be the first to know when we go live. Enter the future of cyber innovation.',
  keywords: 'CypherMission, coming soon, cyber, technology, innovation, launch',
  authors: [{ name: 'CypherMission' }],
  openGraph: {
    title: 'CypherMission — Coming Soon',
    description: 'CypherMission is launching soon. Join the mission and be the first to know when we go live.',
    type: 'website',
    locale: 'en_US',
    siteName: 'CypherMission',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CypherMission — Coming Soon',
    description: 'CypherMission is launching soon. Join the mission and be the first to know when we go live.',
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: '#050508',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
