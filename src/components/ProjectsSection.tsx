import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import { MapPin } from "lucide-react";

const projects = [
  {
    image: property1,
    title: "Coniva Green Residences",
    location: "Banani, Dhaka",
    type: "Residential",
    status: "Upcoming",
  },
  {
    image: property2,
    title: "Coniva Township",
    location: "Purbachal, Dhaka",
    type: "Community",
    status: "Planning Phase",
  },
  {
    image: property3,
    title: "Coniva Business Hub",
    location: "Gulshan, Dhaka",
    type: "Commercial",
    status: "Upcoming",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-body font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Our Projects
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Landmark Developments
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Each project is a testament to our commitment to quality, community, and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group rounded-lg overflow-hidden border border-border bg-card shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {p.status}
                </span>
              </div>
              <div className="p-6">
                <span className="text-xs font-body font-semibold text-primary uppercase tracking-wider">{p.type}</span>
                <h3 className="font-heading text-xl font-semibold text-foreground mt-2 mb-2">{p.title}</h3>
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{p.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
