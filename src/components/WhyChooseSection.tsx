import { ShieldCheck, Scale, MapPin, TrendingUp, Users, HeartHandshake, Leaf } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "Transparent Process", desc: "Clear pricing, paperwork and milestones — no surprises, ever." },
  { icon: Scale, title: "Legal Safety", desc: "Every project is verified, documented and legally secured for your peace of mind." },
  { icon: MapPin, title: "Strategic Locations", desc: "Plots in Bashundhara, Purbachal, Birulia and Basila — chosen for long-term growth." },
  { icon: TrendingUp, title: "Long-Term Asset Value", desc: "Disciplined planning ensures your investment appreciates with time." },
  { icon: Users, title: "Expert Advisor Panel", desc: "Guidance from seasoned real estate, legal and financial advisors." },
  { icon: HeartHandshake, title: "Customer-First Approach", desc: "Personalized service from first visit to final handover and beyond." },
  { icon: Leaf, title: "Sustainable Communities", desc: "Eco-friendly planning, green spaces, and responsible development." },
];

const WhyChooseSection = () => {
  return (
    <section id="why" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-primary font-body font-semibold text-sm tracking-[0.2em] uppercase mb-3">Why Choose Us</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Coniva Ltd
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            A trusted real estate partner committed to integrity, transparency and lasting value.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="group rounded-xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-elegant transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <r.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{r.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
