import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import './globals.css'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="The HisariaHouse-logos_transparent.png" type="image/x-icon" />
        <title>The HisariaHouse</title>
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}