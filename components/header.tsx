"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Sun } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
              <Sun className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-serif font-bold text-lg text-foreground">
              SunShield Vitality
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About D3 K2
            </Link>
            <Link 
              href="/privacy-policy" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link 
              href="/disclaimer" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Disclaimer
            </Link>
            <Link 
              href="/contact" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-3">
              <Link 
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Home
              </Link>
              <Link 
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                About D3 K2
              </Link>
              <Link 
                href="/privacy-policy"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/disclaimer"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Disclaimer
              </Link>
              <Link 
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Contact Us
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
