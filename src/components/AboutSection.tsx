import { Building2, Users, Globe, Shield } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Community First",
    desc: "We believe real estate should uplift communities — every project is designed with people at its heart.",
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    desc: "Honest dealings, clear documentation, and unwavering commitment to our stakeholders' interests.",
  },
  {
    icon: Building2,
    title: "Quality Construction",
    desc: "World-class materials and engineering standards ensure every structure stands the test of time.",
  },
  {
    icon: Globe,
    title: "Global Vision",
    desc: "From Dhaka to the world — we're building a legacy that transcends borders and inspires generations.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-body font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Who We Are
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            A New Standard in Real Estate
          </h2>
          <p className="text-muted-foreground text-lg font-body leading-relaxed">
            Coniva Holdings Ltd is a community-based real estate company headquartered in Banani, Dhaka.
            We are committed to delivering developments that foster belonging, elevate living standards,
            and mark our steps on the global stage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-card rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-border/50 group"
            >
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <v.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{v.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
