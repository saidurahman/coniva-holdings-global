import { useState } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import projectResidential1 from "@/assets/project-residential-1.jpg";
import projectResidential2 from "@/assets/project-residential-2.jpg";
import projectResidential3 from "@/assets/project-residential-3.jpg";
import projectAgro1 from "@/assets/project-agro-1.jpg";
import projectResort1 from "@/assets/project-resort-1.jpg";
import propertyResort from "@/assets/property-resort.jpg";

type Status = "Ongoing" | "Upcoming" | "Completed";

type Project = {
  image: string;
  title: string;
  location: string;
  description: string;
  features: string[];
  status: Status;
};

const projects: Project[] = [
  {
    image: projectResidential1,
    title: "Bashundhara Riverview",
    location: "Bashundhara, Dhaka",
    description: "Premium riverside plots and residences with breathtaking views and serene living.",
    features: ["Riverfront plots", "Gated community", "Modern infrastructure"],
    status: "Ongoing",
  },
  {
    image: projectAgro1,
    title: "Coniva Birulia",
    location: "Birulia, Savar",
    description: "Strategically located land project blending nature, accessibility and long-term value.",
    features: ["Wide internal roads", "Eco-friendly planning", "High ROI location"],
    status: "Ongoing",
  },
  {
    image: projectResidential2,
    title: "Coniva Basila",
    location: "Basila, Dhaka",
    description: "Smartly planned plots near the heart of Dhaka, designed for urban families and investors.",
    features: ["City connectivity", "Legal clarity", "Ready to register"],
    status: "Ongoing",
  },
  {
    image: projectResidential3,
    title: "Purbachal American City",
    location: "Purbachal, Dhaka",
    description: "World-class township concept with American-style residential planning and amenities.",
    features: ["Township layout", "Parks & amenities", "Premium addresses"],
    status: "Ongoing",
  },
  {
    image: projectResort1,
    title: "Coniva Hollywood Hill Resort",
    location: "Cox's Bazar",
    description: "Hill-side luxury resort experience with sustainable architecture and curated hospitality.",
    features: ["Hill views", "Wellness facilities", "Boutique hospitality"],
    status: "Upcoming",
  },
  {
    image: propertyResort,
    title: "Coniva Eco Retreat",
    location: "Sylhet",
    description: "An upcoming nature retreat designed for slow living, wellness and family escapes.",
    features: ["Eco architecture", "Forest-side villas", "Wellness programs"],
    status: "Upcoming",
  },
];

const ProjectCard = ({ p }: { p: Project }) => (
  <article className="group rounded-xl overflow-hidden border border-border bg-card hover:shadow-elegant transition-all">
    <div className="relative h-56 overflow-hidden">
      <img src={p.image} alt={`${p.title} — ${p.location}`} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">{p.status}</span>
    </div>
    <div className="p-6">
      <h3 className="font-heading text-2xl font-semibold text-foreground">{p.title}</h3>
      <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1 mb-3">
        <MapPin className="w-4 h-4 text-primary" />
        <span>{p.location}</span>
      </div>
      <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">{p.description}</p>
      <ul className="mb-5 space-y-1">
        {p.features.map((f) => (
          <li key={f} className="text-sm text-foreground/80 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {f}
          </li>
        ))}
      </ul>
      <div className="flex gap-3">
        <Button size="sm" className="flex-1">View Details <ArrowRight className="w-4 h-4" /></Button>
        <Button asChild size="sm" variant="outline" className="flex-1">
          <a href="#contact">Contact Us</a>
        </Button>
      </div>
    </div>
  </article>
);

const categories: Status[] = ["Ongoing", "Upcoming", "Completed"];

const ProjectsSection = () => {
  const [filter, setFilter] = useState<string>("All");
  const types = ["All", "Residential", "Resort", "Land"];

  return (
    <section id="projects" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-primary font-body font-semibold text-sm tracking-[0.2em] uppercase mb-3">Our Projects</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">Landmark Real Estate Projects</h2>
          <p className="text-muted-foreground text-lg font-body">
            Trusted land and residential projects across Bashundhara, Purbachal, Birulia and Basila.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`text-sm px-4 py-2 rounded-full border transition-colors ${
                filter === t ? "bg-primary text-primary-foreground border-primary" : "border-border text-foreground/70 hover:border-primary/40"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <Tabs defaultValue="Ongoing" className="w-full">
          <TabsList className="mx-auto mb-10 grid w-full max-w-md grid-cols-3">
            {categories.map((c) => (<TabsTrigger key={c} value={c}>{c}</TabsTrigger>))}
          </TabsList>
          {categories.map((c) => {
            const items = projects.filter((p) => p.status === c);
            return (
              <TabsContent key={c} value={c}>
                {items.length === 0 ? (
                  <div className="rounded-xl border border-dashed border-border bg-card p-12 text-center">
                    <p className="font-heading text-2xl font-semibold text-foreground mb-2">Coming Soon</p>
                    <p className="text-muted-foreground font-body">Exciting {c.toLowerCase()} projects will be announced shortly.</p>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((p) => (<ProjectCard key={p.title} p={p} />))}
                  </div>
                )}
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;
