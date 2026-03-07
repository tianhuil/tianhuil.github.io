'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY <= 0) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl ${
        isVisible ? 'translate-y-0 bg-background/80' : '-translate-y-full bg-background/95'
      } border-b border-border`}
    >
      <div className='container px-4 py-4 mx-auto flex items-center justify-between'>
        <Link href='/' className='text-2xl font-bold gradient-text hover:opacity-80 transition-opacity'>
          Michael Li
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="gap-2">
            <NavigationMenuItem>
              <NavigationMenuLink
                href='/'
                className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-secondary/50`}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href='/professional'
                className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-secondary/50`}
              >
                Professional
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href='/writing'
                className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-secondary/50`}
              >
                Writing
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
