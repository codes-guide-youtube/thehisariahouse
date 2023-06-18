import Navbar from "@/components/Navbar"
import './globals.css'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>The HisariaHub</title>
      </head>
      <body>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}