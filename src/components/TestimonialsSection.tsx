import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    title: "Homeowner's Reflections",
    body: "Coniva made our home-buying journey smooth and transparent. The attention to detail and after-sales care is exceptional — we genuinely feel cared for.",
    name: "Dr. Abu Naser Muhammad",
    role: "Apartment Owner",
  },
  {
    title: "A Journey to Finding Home",
    body: "From the first site visit to handover, every commitment was honoured. Coniva's team treats your investment with the seriousness it deserves.",
    name: "Farzana Khalid",
    role: "Apartment Owner",
  },
  {
    title: "Landowner's Review",
    body: "A partnership built on trust and timely delivery. Coniva combines integrity with craftsmanship — exactly what every landowner hopes to find.",
    name: "Mustafizur Rahman",
    role: "Land Owner",
  },
];

const TestimonialsSection = () => {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const prev = () => setI((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setI((p) => (p + 1) % testimonials.length);

  return (
    <section className="surface-dark section-padding relative overflow-hidden">
      <div className="container mx-auto grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-4">
          <p className="text-primary text-xs tracking-[0.3em] uppercase font-semibold mb-3">Testimonial</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase leading-tight text-white">
            What customers <span className="text-primary">say about us</span>
          </h2>
          <div className="mt-8 flex gap-3">
            <button onClick={prev} aria-label="Previous" className="h-12 w-12 rounded-full border border-white/30 text-white hover:bg-primary hover:border-primary flex items-center justify-center transition-colors">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={next} aria-label="Next" className="h-12 w-12 rounded-full border border-white/30 text-white hover:bg-primary hover:border-primary flex items-center justify-center transition-colors">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="lg:col-span-8">
          <div key={i} className="relative animate-fade-up">
            <Quote className="absolute -top-4 -left-2 h-16 w-16 text-primary/30" />
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-white mb-5 relative">{t.title}</h3>
            <p className="text-white/75 text-lg md:text-xl font-body leading-relaxed mb-8">{t.body}</p>
            <div className="border-t border-white/15 pt-5">
              <p className="font-heading text-xl font-semibold text-white">{t.name}</p>
              <p className="text-primary text-sm uppercase tracking-[0.2em] mt-1">{t.role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
