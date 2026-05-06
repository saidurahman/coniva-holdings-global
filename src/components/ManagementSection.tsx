import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const team = [
  {
    name: "Managing Director",
    role: "MD & CEO",
    initials: "MD",
    message: "We are committed to delivering developments that uplift communities and stand the test of time.",
  },
  {
    name: "Director of Operations",
    role: "Director — Operations",
    initials: "DO",
    message: "Operational excellence and on-time delivery are at the core of every Coniva project.",
  },
  {
    name: "Head of Projects",
    role: "Head — Projects",
    initials: "HP",
    message: "From design to handover, we obsess over the details that make a great property.",
  },
  {
    name: "Head of Sales & Marketing",
    role: "Head — Sales & Marketing",
    initials: "SM",
    message: "Our customers are partners — we build relationships, not just properties.",
  },
  {
    name: "Head of Finance",
    role: "Head — Finance",
    initials: "HF",
    message: "Transparent finances and disciplined investment safeguard every stakeholder.",
  },
  {
    name: "Head of Engineering",
    role: "Head — Engineering",
    initials: "HE",
    message: "World-class engineering standards ensure quality you can rely on for generations.",
  },
];

const ManagementSection = () => {
  return (
    <section id="management" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-body font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Our People
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Management Team
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Meet the team driving Coniva's vision into reality every day.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((m) => (
            <div
              key={m.name}
              className="bg-card rounded-lg p-8 border border-border/50 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <Avatar className="w-20 h-20 mx-auto mb-4 border-2 border-primary/30">
                <AvatarFallback className="bg-primary/10 text-primary font-heading text-xl font-semibold">
                  {m.initials}
                </AvatarFallback>
              </Avatar>
              <h3 className="font-heading text-lg font-semibold text-foreground">{m.name}</h3>
              <p className="text-primary text-xs font-body font-semibold uppercase tracking-wider mb-4">
                {m.role}
              </p>
              <Quote className="w-5 h-5 text-primary/40 mx-auto mb-2" />
              <p className="text-muted-foreground font-body text-sm leading-relaxed italic">
                "{m.message}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagementSection;
