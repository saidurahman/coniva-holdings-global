import { useState, useEffect } from "react";
import { Phone, Leaf, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md py-3 border-b border-white/10" : "bg-gradient-to-b from-black/60 to-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#home" className="flex items-center gap-2 text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary">
            <Leaf className="h-5 w-5 text-primary-foreground" />
          </span>
          <span className="font-heading text-2xl font-bold tracking-wide uppercase">
            Coniva <span className="text-primary">Ltd</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="text-white/85 hover:text-primary text-sm font-body font-medium uppercase tracking-[0.18em] transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="tel:+8801634699636"
          className="hidden md:inline-flex items-center gap-2 border border-white/40 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white hover:text-foreground transition-colors"
        >
          <Phone className="h-4 w-4" /> +880 1634-699636
        </a>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-white" aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-black/95 border-t border-white/10">
          <ul className="flex flex-col items-center gap-5 py-6">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a onClick={() => setOpen(false)} href={l.href} className="text-white/85 text-sm uppercase tracking-[0.18em]">
                  {l.label}
                </a>
              </li>
            ))}
            <a href="tel:+8801634699636" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold">
              <Phone className="h-4 w-4" /> +880 1634-699636
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
