import Link from 'next/link'
const quicklinks = [
  {
    id: 1,
    user: 'Sridhar',
    href: '/sridhar',
    description: 'View Balance of Sridhar',
  
  },
  {
    id: 2,
    user: 'Poonam',
    href: '/poonam',
    description: 'View Balance of Sridhar',
  
  },
  {
    id: 3,
    user: 'Amit',
    href: '/amit',
    description: 'View Balance of Sridhar',
  
  },
  
]

export default function Home() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Quick Links</h2>
          
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {quicklinks.map((quicklink) => (
            <section key={quicklink.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
              </div>
              <div className="group relative">
                  <Link href={quicklink.href}>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <span className="absolute inset-0" />
                    {quicklink.user}
                  
                </h3>
               
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{quicklink.description}</p>
                </Link>
              </div>
            
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
