import { useState, useEffect } from "react";
import { Leaf } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Why Us", href: "#why" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className={`flex h-9 w-9 items-center justify-center rounded-full ${scrolled ? "bg-primary text-primary-foreground" : "bg-background/90 text-primary"}`}>
            <Leaf className="h-5 w-5" />
          </span>
          <span className={`font-heading text-2xl font-bold ${scrolled ? "text-foreground" : "text-white drop-shadow"}`}>
            Coniva <span className="text-primary">Ltd</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-body font-medium tracking-wide transition-colors hover:text-primary ${
                  scrolled ? "text-foreground/80" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Get in Touch
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden ${scrolled ? "text-foreground" : "text-white"}`}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileOpen ? (<><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>) : (<><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>)}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border mt-2">
          <ul className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMobileOpen(false)} className="text-sm font-body font-medium text-foreground/80 hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)} className="bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold">
              Get in Touch
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
