import '../styles/globals.css'
import { ClerkProvider } from '@clerk/nextjs'

export const metadata = {
  title: 'Tier Events',
  description: 'Events based on your subscription tier',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}
