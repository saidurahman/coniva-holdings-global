import { Briefcase, Leaf, Palmtree, Landmark, Users, Shield, Building2, Globe } from "lucide-react";

const sisterConcerns = [
  { name: "Coniva Holdings Ltd", icon: Landmark, desc: "Community-based real estate development, premium land projects and long-term investment portfolios." },
  { name: "Coniva Agro Ltd", icon: Leaf, desc: "Sustainable farming, agro-estates and eco-friendly food production rooted in nature." },
  { name: "Coniva Resort Ltd", icon: Palmtree, desc: "Premium hospitality, wellness resorts and leisure destinations across Bangladesh." },
];

const values = [
  { icon: Shield, title: "Trust & Transparency", desc: "Clear documentation and honest dealings at every step of your real estate journey." },
  { icon: Users, title: "Community First", desc: "We design developments that nurture belonging, lifestyle, and long-term wellbeing." },
  { icon: Building2, title: "Quality Construction", desc: "Engineered to world-class standards using premium materials and sustainable methods." },
  { icon: Globe, title: "Long-Term Value", desc: "Strategic locations and disciplined planning safeguard your investment for generations." },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-body font-semibold text-sm tracking-[0.2em] uppercase mb-3">About Coniva Ltd</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            A Trusted Name in Bangladesh Real Estate
          </h2>
          <p className="text-muted-foreground text-lg font-body leading-relaxed">
            Coniva Ltd is a values-driven real estate company headquartered in Banani, Dhaka. We deliver
            secure land investments, premium residential addresses, and sustainable communities — built on
            transparency, legal safety, and long-term value. From first-time buyers to seasoned investors,
            our promise is simple: develop with purpose, deliver with integrity, and grow with you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-card rounded-lg p-8 border border-border hover:border-primary/40 hover:shadow-elegant transition-all">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-5">
                <v.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{v.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Sister Concerns */}
        <div id="sisters" className="mt-24">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-primary font-body font-semibold text-sm tracking-[0.2em] uppercase mb-3">Our Group</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">Sister Concerns</h2>
            <p className="text-muted-foreground font-body">
              A family of companies working together across real estate, agriculture and hospitality.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {sisterConcerns.map((c) => (
              <div key={c.name} className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 text-center hover:shadow-elegant transition-all">
                <div className="absolute inset-x-0 -top-16 h-32 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity blur-2xl" />
                <div className="relative">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-5 shadow-elegant">
                    <c.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">{c.name}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
