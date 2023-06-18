import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
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
        <Footer/>
        </body>
    </html>
  )
}