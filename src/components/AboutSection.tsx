import { Building2, Landmark, Leaf, Palmtree, Plane, Users, Briefcase } from "lucide-react";
import aboutImg from "@/assets/property-1.jpg";

const sisterConcerns = [
  { name: "Coniva Ltd", icon: Building2, desc: "Flagship real estate developments, premium land and residential projects." },
  { name: "Coniva Holdings Ltd", icon: Landmark, desc: "Strategic investments, asset management and holding company operations." },
  { name: "Coniva Agro Industries Ltd", icon: Leaf, desc: "Sustainable farming, agro-estates and eco-friendly food production." },
  { name: "Coniva Hotel & Resort Ltd", icon: Palmtree, desc: "Premium hospitality, wellness resorts and leisure destinations." },
  { name: "Coniva Tours & Travels", icon: Plane, desc: "Curated travel experiences, tour packages and corporate travel services." },
  { name: "Coniva Business Club Ltd", icon: Users, desc: "Exclusive networking, lifestyle and member-driven business community." },
  { name: "Coniva Business & Marketing Solution Ltd", icon: Briefcase, desc: "Integrated business consulting, branding and marketing solutions." },
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-background">
      {/* Redefining intro */}
      <div className="section-padding">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <img src={aboutImg} alt="Coniva Ltd — premium real estate development" className="w-full h-[460px] object-cover rounded-sm shadow-elegant" loading="lazy" />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-primary text-primary-foreground p-6 max-w-[220px]">
              <p className="font-heading text-4xl font-bold leading-none">10+</p>
              <p className="text-xs uppercase tracking-[0.2em] mt-2">Years of trusted real estate experience</p>
            </div>
          </div>
          <div>
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-4 font-body font-semibold">About Us</p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] uppercase mb-6">
              Redefining your <span className="text-primary">standard of living</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg font-body leading-relaxed mb-5">
              Coniva Group is a values-driven conglomerate headquartered in Banani, Dhaka. Across real estate, agriculture, hospitality, travel and business solutions — we deliver secure investments, premium addresses and sustainable communities built on transparency, legal safety and long-term value.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              Conjoining expertise across design, construction, hospitality and enterprise services, we craft ventures that nurture lifestyle, belonging and lasting investment value. From first-time buyers to seasoned investors — we develop with purpose and deliver with integrity.
            </p>
            <a href="#projects" className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-3.5 text-sm font-semibold tracking-wider uppercase hover:bg-primary transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Sister concerns */}
      <div id="sisters" className="bg-secondary section-padding">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-primary text-xs tracking-[0.3em] uppercase font-semibold mb-3">Our Group</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase">Sister Concerns</h2>
            <p className="text-muted-foreground font-body mt-4">A family of companies working across real estate, agriculture, hospitality, travel and business services.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sisterConcerns.map((c) => (
              <div key={c.name} className="bg-card border border-border p-8 hover:border-primary transition-all group">
                <div className="w-14 h-14 bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-6 transition-colors">
                  <c.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading text-2xl font-semibold mb-3 uppercase">{c.name}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
