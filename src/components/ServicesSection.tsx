import { Home, Building, Landmark, Briefcase, TreePine, Handshake, Hotel, Sprout } from "lucide-react";

const services = [
  { icon: Hotel, title: "Hospitality & Resort", desc: "Premium resorts and hospitality experiences in Bangladesh's most scenic destinations." },
  { icon: Sprout, title: "Agro", desc: "Sustainable agro-developments combining farmland, rivers, and modern agriculture." },
  { icon: Home, title: "Residential Development", desc: "Premium apartments and homes designed for modern family living." },
  { icon: Building, title: "Commercial Spaces", desc: "State-of-the-art office and retail spaces in prime locations." },
  { icon: Landmark, title: "Land Development", desc: "Strategic land acquisition and development for maximum value." },
  { icon: TreePine, title: "Community Planning", desc: "Thoughtfully planned neighborhoods with parks, schools, and amenities." },
  { icon: Briefcase, title: "Investment Advisory", desc: "Expert guidance on real estate investment opportunities." },
  { icon: Handshake, title: "Joint Ventures", desc: "Partnership opportunities for landowners and investors alike." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding surface-dark">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-body font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            What We Offer
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            Comprehensive Real Estate Solutions
          </h2>
          <p className="text-surface-dark-foreground/60 text-lg font-body">
            From concept to completion, we provide end-to-end real estate services that deliver excellence at every stage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="border border-surface-dark-foreground/10 rounded-lg p-8 hover:border-primary/40 transition-colors group"
            >
              <s.icon className="w-8 h-8 text-primary mb-5" />
              <h3 className="font-heading text-lg font-semibold mb-3">{s.title}</h3>
              <p className="text-surface-dark-foreground/50 font-body text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
