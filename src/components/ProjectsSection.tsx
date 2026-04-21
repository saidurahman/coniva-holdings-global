import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import propertyResort from "@/assets/property-resort.jpg";
import propertyAgro from "@/assets/property-agro.jpg";
import logoMark from "@/assets/coniva-logo.png";
import { MapPin } from "lucide-react";

const projects = [
  {
    image: propertyResort,
    title: "Coniva Hollywood Hill Resort",
    location: "Cox's Bazar",
    type: "Hospitality & Resort",
    status: "Upcoming",
  },
  {
    image: propertyAgro,
    title: "Coniva Green Agro",
    location: "Nababganj, Dhaka",
    type: "Agro",
    status: "Upcoming",
  },
  {
    image: property1,
    title: "Coniva American City",
    location: "Purbachal, Dhaka",
    type: "Township",
    status: "Upcoming",
  },
  {
    image: property2,
    title: "Coniva Green Heights, Ashulia",
    location: "Ashulia, Dhaka",
    type: "Residential",
    status: "Upcoming",
  },
  {
    image: property3,
    title: "Coniva Metro Heights, Uttara",
    location: "Uttara, Dhaka",
    type: "Residential",
    status: "Upcoming",
  },
  {
    image: property1,
    title: "Coniva Aftabnagar Residences",
    location: "Aftabnagar, Dhaka",
    type: "Residential",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {p.status}
                </span>
                <img
                  src={logoMark}
                  alt="Coniva Holdings Ltd watermark"
                  className="absolute bottom-3 left-3 h-12 w-auto opacity-90 drop-shadow-lg"
                  loading="lazy"
                />
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
