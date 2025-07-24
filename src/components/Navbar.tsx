'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Corsi', href: '/corsi' },
    { name: 'Metodo Replay', href: '/metodo-replay' },
    { name: 'Per le Aziende', href: '/aziende' },
    { name: 'Per le Scuole', href: '/scuole' },
    { name: 'Contatti', href: '/contatti' },
  ]

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Excel Spoiler"
                width={150}
                height={60}
                className="h-16 w-auto"
              />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-excel-green px-4 py-2 text-lg font-light transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-excel-green hover:text-excel-green-light px-4 py-2 text-lg font-light"
            >
              Accedi
            </Link>
            <Link
              href="/register"
              className="bg-excel-green hover:bg-excel-green-light text-white px-6 py-2 rounded-lg text-lg font-light transition-colors duration-200"
            >
              Registrati
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-excel-green p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-excel-green block px-3 py-2 text-lg font-light"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t pt-4 pb-3">
              <Link
                href="/login"
                className="text-excel-green hover:text-excel-green-light block px-3 py-2 text-lg font-light"
                onClick={() => setIsOpen(false)}
              >
                Accedi
              </Link>
              <Link
                href="/register"
                className="bg-excel-green hover:bg-excel-green-light text-white block mx-3 mt-2 px-4 py-2 rounded-lg text-lg font-light text-center"
                onClick={() => setIsOpen(false)}
              >
                Registrati
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar