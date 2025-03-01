'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useOnScroll } from '@/hooks'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import ThemeSwitch from '../theme-switch'
import { logo } from '../../../public/images'
const Header = () => {
  // State to track if the mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isScrolled = useOnScroll()

  return (
    <header
      className={cn(
        'sticky top-0 z-50 h-16 w-full bg-transparent',
        isScrolled
          ? 'shadow-sm backdrop-blur-[10px] duration-300 ease-in-out'
          : '',
      )}
    >
      <div className={cn('container h-full md:px-24 px-4')}>
        <div className={cn('flex h-full items-center justify-between')}>
          {/* Logo */}
          <Link href="/" className={cn('text-2xl font-bold flex justify-center items-center gap-2')}>
          <Image src={logo} width={40} height={40} alt='logo' className='flex justify-center items-center'/>
            <h1
              className="bg-gradient-to-r from-teal-800 via-sky-400 to-cyan-300 bg-clip-text text-2xl lg:text-3xl font-extrabold text-transparent">
                IntelliSlide-AI
            </h1>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden justify-center md:flex md:grow">
            <ul className="flex justify-center space-x-4">
              <li>
                <Link href="/" className="font-bold hover:text-secondary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="font-bold hover:text-secondary">
                  About
                </Link>
              </li>
                <li>
                  <Link
                    href="/generate"
                    className="font-bold hover:text-secondary"
                  >
                    Generate
                  </Link>
                </li>
            </ul>
          </nav>

          {/* Hamburger menu (for mobile) */}
          <div className="flex gap-4 space-x-3 md:hidden">
            <button
              id="hamburger"
              className="focus:outline-none dark:text-slate-900"
              onClick={toggleMenu} // Toggle the menu on click
            >
              <svg
                className="size-5 text-slate-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <div className="mr-4 flex">
            <ThemeSwitch />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <>
            <nav className="absolute left-0 top-16 w-full bg-slate-600  text-white md:hidden">
              <ul className="flex cursor-pointer flex-col items-center space-y-4 border-b p-4">
                <li>
                  <Link
                    href="/"
                    className="cursor-pointer font-bold hover:text-sky-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="cursor-pointer font-bold hover:text-sky-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                  <li>
                    <Link
                      href="/generate"
                      className="cursor-pointer font-bold hover:text-sky-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Generate
                    </Link>
                  </li>
              </ul>
            </nav>
          </>
        )}
      </div>
    </header>
  )
}

export default Header
