import './globals.css'

export const metadata = {
  title: 'Mobile App',
  description: '6B1 Project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
