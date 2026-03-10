import Link from "next/link"
import { Sun } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      {/* Affiliate Disclosure */}
      <div className="bg-muted/50 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            <strong>Affiliate Disclosure:</strong> As an Amazon Associate I earn from qualifying purchases. 
            This website contains affiliate links, which means we may receive a commission if you click on a link 
            and make a purchase. This comes at no additional cost to you.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Sun className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-serif font-bold text-lg text-foreground">
                Realgood Essentials
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Your trusted resource for Vitamin D3 K2 supplementation information. 
              We provide honest, research-based content to help you make informed decisions about your health.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About D3 K2
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-medium text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {currentYear} Realgood Essentials. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              As an Amazon Associate I earn from qualifying purchases.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
