import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const advisors = [
  {
    name: "Advisor Name 1",
    role: "Chief Advisor",
    initials: "A1",
    message:
      "Coniva represents a new era of community-driven real estate — built on integrity, vision and lasting value.",
  },
  {
    name: "Advisor Name 2",
    role: "Strategic Advisor",
    initials: "A2",
    message:
      "Our mission is to set a benchmark in quality and trust across every sector we serve.",
  },
  {
    name: "Advisor Name 3",
    role: "Financial Advisor",
    initials: "A3",
    message:
      "Sustainable growth and disciplined execution guide every decision we make at Coniva.",
  },
];

const AdvisorsSection = () => {
  return (
    <section id="advisors" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-body font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Leadership
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Advisor Panel
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Guided by experienced leaders who shape our vision and strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {advisors.map((a) => (
            <div
              key={a.name}
              className="bg-card rounded-lg p-8 border border-border/50 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <Avatar className="w-24 h-24 mx-auto mb-5 border-2 border-primary/30">
                <AvatarFallback className="bg-primary/10 text-primary font-heading text-2xl font-semibold">
                  {a.initials}
                </AvatarFallback>
              </Avatar>
              <h3 className="font-heading text-xl font-semibold text-foreground">{a.name}</h3>
              <p className="text-primary text-sm font-body font-semibold uppercase tracking-wider mb-4">
                {a.role}
              </p>
              <Quote className="w-6 h-6 text-primary/40 mx-auto mb-2" />
              <p className="text-muted-foreground font-body text-sm leading-relaxed italic">
                "{a.message}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvisorsSection;
