import { useEffect, useState } from "react";
import { Phone, ChevronRight } from "lucide-react";
import slide1 from "@/assets/project-resort-1.jpg";
import slide2 from "@/assets/project-residential-1.jpg";
import slide3 from "@/assets/project-residential-3.jpg";

const slides = [
  { img: slide1, title: "Redefining Happiness", sub: "Premium addresses crafted for life's finest moments." },
  { img: slide2, title: "Boulevard that makes your heart sing", sub: "Curated communities across Dhaka's most coveted locations." },
  { img: slide3, title: "An oasis of comfort", sub: "Sustainable design, timeless architecture, lasting value." },
];

const quickLinks = [
  { label: "Ongoing", href: "#projects" },
  { label: "Upcoming", href: "#projects" },
  { label: "Completed", href: "#projects" },
  { label: "Ready", href: "#projects" },
];

const HeroSection = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black">
      {slides.map((s, idx) => (
        <img
          key={idx}
          src={s.img}
          alt={s.title}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ${i === idx ? "opacity-100" : "opacity-0"}`}
          loading={idx === 0 ? "eager" : "lazy"}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

      {/* Slide dots */}
      <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-2.5 w-2.5 rounded-full border border-white/70 transition-all ${i === idx ? "bg-white scale-125" : "bg-transparent"}`}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-10 container mx-auto flex min-h-screen flex-col justify-center px-6 md:px-10">
        <div key={i} className="max-w-3xl animate-fade-up">
          <p className="text-primary text-xs md:text-sm tracking-[0.4em] uppercase mb-5 font-body">Coniva Group · Bangladesh</p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] uppercase tracking-tight">
            {slides[i].title}
          </h1>
          <p className="mt-6 text-white/80 text-lg md:text-xl max-w-xl font-body">{slides[i].sub}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold tracking-wider uppercase hover:bg-primary/90 transition-colors">
              Explore Projects <ChevronRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 border border-white/40 text-white px-7 py-3.5 text-sm font-semibold tracking-wider uppercase hover:bg-white/10 transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Bottom dark project bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-black/80 backdrop-blur border-t border-white/10">
        <div className="container mx-auto flex flex-wrap items-center gap-x-2 gap-y-1 px-4 py-4 text-white">
          <a href="#projects" className="flex items-center gap-2 pr-5 mr-2 border-r border-white/20 text-sm font-semibold uppercase tracking-wider">
            <span className="flex h-7 w-7 items-center justify-center bg-primary text-primary-foreground rounded-sm">★</span>
            Explore Projects
          </a>
          {quickLinks.map((q) => (
            <a key={q.label} href={q.href} className="px-4 py-1.5 text-xs md:text-sm uppercase tracking-[0.18em] text-white/70 hover:text-primary transition-colors">
              {q.label}
            </a>
          ))}
          <a href="tel:+8801634699636" className="ml-auto hidden md:inline-flex items-center gap-2 bg-primary/90 hover:bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold">
            <Phone className="h-4 w-4" /> +880 1634-699636
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
