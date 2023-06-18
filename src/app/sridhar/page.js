import Link from 'next/link'
import Head from 'next/head'
const links = [{
    id: 1,
    href: '/sridhar/balance',
    description: 'View Sridhar\'s Cashbook',
  
  },]

export default function Sridhar() {
  return (
    <div className="bg-black py-24 sm:py-32">
      <Head>
        <title>Sridhar</title>
      </Head>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl"> Links</h2>
          
        </div>
        <div className="pl-3 mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-800 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {links.map((link) => (
            <section key={link.id} className="flex max-w-xl flex-col items-start justify-between bg-gray-700 p-10 rounded-lg ">
              <div className="flex items-center gap-x-4 text-xs">
              </div>
              <div className="group relative">
                  <Link href={link.href}>
    
               
                <p className="mt-5 line-clamp-3 text-md leading-6 text-gray-100 group-hover:text-gray-400">{link.description}</p>
                </Link>
              </div>
            
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
