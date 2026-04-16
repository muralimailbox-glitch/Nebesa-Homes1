import { Link, useLocation } from "wouter";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "What We Build" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact Us" },
];

export function Nav() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex flex-col items-start gap-1 group">
              <span className="text-2xl font-heading font-bold text-primary tracking-tight transition-colors group-hover:text-accent">
                NEBESA <span className="font-light">HOMES</span>
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
                Homes that rise above
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location === link.href
                      ? "text-primary border-b-2 border-accent pb-1"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-4 border-l pl-6">
              <a href="tel:+61400000000" className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors">
                <Phone className="h-4 w-4" />
                <span>Call Us</span>
              </a>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/contact">Enquire Now</Link>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t bg-background px-4 py-6 shadow-lg animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium px-2 py-2 rounded-md transition-colors ${
                  location === link.href
                    ? "bg-primary/5 text-primary"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t flex flex-col gap-4">
              <Button asChild className="w-full justify-start" variant="outline">
                <a href="tel:+61400000000">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us
                </a>
              </Button>
              <Button asChild className="w-full bg-primary">
                <Link href="/contact" onClick={() => setIsOpen(false)}>Enquire Now</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
