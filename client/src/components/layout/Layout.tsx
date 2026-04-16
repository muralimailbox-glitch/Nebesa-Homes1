import { ReactNode } from "react";
import { Nav } from "./Nav";
import { Link } from "wouter";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Nav />
      <main className="flex-1">{children}</main>
      
      <footer className="bg-primary text-primary-foreground py-12 mt-auto">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4 md:col-span-2">
              <Link href="/" className="flex flex-col items-start gap-1 group inline-block">
                <span className="text-2xl font-heading font-bold text-white tracking-tight">
                  NEBESA <span className="font-light text-accent">HOMES</span>
                </span>
                <span className="text-xs text-white/70 uppercase tracking-widest font-medium">
                  Homes that rise above
                </span>
              </Link>
              <p className="text-primary-foreground/80 max-w-sm">
                Build every home as if we are building our own. Honesty and transparency in every step of customer-driven design and construction.
              </p>
              <div className="flex gap-4 pt-2">
                <span className="text-sm text-accent font-semibold border border-accent/30 px-3 py-1 rounded-full bg-accent/10">
                  Builder Licence 380365C
                </span>
                <span className="text-sm text-white/80 font-semibold border border-white/20 px-3 py-1 rounded-full bg-white/5">
                  HIA Member
                </span>
              </div>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold mb-4 text-lg">Quick Links</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                <li><Link href="/services" className="hover:text-accent transition-colors">What We Build</Link></li>
                <li><Link href="/projects" className="hover:text-accent transition-colors">Projects</Link></li>
                <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold mb-4 text-lg">Contact</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="mailto:info@nebesahomes.au" className="hover:text-accent transition-colors">info@nebesahomes.au</a></li>
                <li className="pt-4">
                  <a 
                    href="https://www.facebook.com/share/1BvrdVVMLa/?mibextid=wwXIfr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-accent hover:text-primary transition-colors"
                  >
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-primary-foreground/60 text-sm flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Nebesa Homes. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex gap-4">
              <Link href="/tender" className="hover:text-accent transition-colors">Tender Upload Portal</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
