import { Link, useLocation } from "wouter";
import { Mail, Facebook, Instagram } from "lucide-react";
import logoImg from "@assets/Screenshot_2026-04-16_173059_1776341116920.png";
import snapLogo from "@assets/snapsitebuild-logo.png";

export function Footer() {
  const [, navigate] = useLocation();

  /** Navigate to a page and scroll to a #section after it renders, offset for sticky navbar */
  const goToSection = (path: string, hash: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(path);
    setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) {
        const navbarHeight = 130; // top bar + main nav
        const y = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 200);
  };

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

          {/* Brand */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="inline-block">
              <img src={logoImg} alt="Nebesa Homes Logo" className="h-20 w-20 object-cover rounded shadow-sm border border-primary-foreground/20" />
            </Link>
            <p className="text-primary-foreground/80 text-sm mt-4 max-w-xs">
              Homes that rise above. Build every home as if we are building our own.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.facebook.com/share/1BvrdVVMLa/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/nebesahomesptyltd/" target="_blank" rel="noreferrer" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">What We Build</Link></li>
              <li><Link href="/projects" className="hover:text-accent transition-colors">Projects</Link></li>
              <li><Link href="/inclusions" className="hover:text-accent transition-colors">Inclusions</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Enquire Now</Link></li>
            </ul>
          </div>

          {/* Services — use goToSection for hash-based scrolling */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">What We Build</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="/services#new-builds" onClick={goToSection("/services", "new-builds")} className="hover:text-accent transition-colors cursor-pointer">New Builds</a></li>
              <li><a href="/services#knockdown-rebuild" onClick={goToSection("/services", "knockdown-rebuild")} className="hover:text-accent transition-colors cursor-pointer">Knockdown & Rebuild</a></li>
              <li><a href="/services#granny-flats" onClick={goToSection("/services", "granny-flats")} className="hover:text-accent transition-colors cursor-pointer">Granny Flats</a></li>
              <li><a href="/services#duplexes" onClick={goToSection("/services", "duplexes")} className="hover:text-accent transition-colors cursor-pointer">Duplexes</a></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">View All Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href="mailto:info@nebesahomes.au" className="hover:text-accent transition-colors">info@nebesahomes.au</a>
              </li>
              <li className="flex items-start gap-3">
                <div className="pt-1">
                  <p className="font-semibold text-white mb-1">Builder Licence:</p>
                  <p>380365C</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="pt-1">
                  <p className="font-semibold text-white mb-1">Memberships:</p>
                  <p>HIA Member</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Nebesa Homes. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>

        {/* Built by SnapSiteBuild */}
        <div className="mt-6 flex justify-center">
          <a
            href="https://www.snapsitebuild.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="text-sm font-medium text-gray-500">Built by</span>
            <img src={snapLogo} alt="SnapSiteBuild" className="h-7 object-contain" />
          </a>
        </div>
      </div>
    </footer>
  );
}
