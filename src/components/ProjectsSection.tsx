import projectResort1 from "@/assets/project-resort-1.jpg";
import projectResort3 from "@/assets/project-resort-3.jpg";
import projectResort4 from "@/assets/project-resort-4.jpg";
import projectAgro1 from "@/assets/project-agro-1.jpg";
import projectAgro2 from "@/assets/project-agro-2.jpg";
import projectAgro3 from "@/assets/project-agro-3.jpg";
import projectResidential1 from "@/assets/project-residential-1.jpg";
import projectResidential2 from "@/assets/project-residential-2.jpg";
import projectResidential3 from "@/assets/project-residential-3.jpg";
import logoMark from "@/assets/coniva-logo-light.png";
import { MapPin } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

type Project = {
  images: string[];
  title: string;
  location: string;
  type: string;
  status: "Completed" | "Ongoing" | "Upcoming";
};

const allProjects: Project[] = [
  {
    images: [projectResort1, projectResort4, projectResort3],
    title: "Coniva Hollywood Hill Resort",
    location: "Cox's Bazar",
    type: "Hospitality & Resort",
    status: "Upcoming",
  },
  {
    images: [projectAgro1, projectAgro2, projectAgro3],
    title: "Coniva Agro",
    location: "Nababganj, Dhaka",
    type: "Agro",
    status: "Upcoming",
  },
  {
    images: [projectResidential1, projectResidential2, projectResidential3],
    title: "Coniva Residential",
    location: "Purbachal, Dhaka",
    type: "Residential",
    status: "Upcoming",
  },
];

const categories: Array<Project["status"]> = ["Completed", "Ongoing", "Upcoming"];

const ProjectGrid = ({ items }: { items: Project[] }) => {
  if (items.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-border bg-card p-12 text-center">
        <p className="font-heading text-xl font-semibold text-foreground mb-2">Coming Soon</p>
        <p className="text-muted-foreground font-body text-sm">
          Exciting projects in this category will be announced shortly.
        </p>
      </div>
    );
  }
  return (
    <div className="mx-auto grid max-w-6xl gap-10">
      {items.map((p) => (
        <div
          key={p.title}
          className="group rounded-lg overflow-hidden border border-border bg-card shadow-sm hover:shadow-lg transition-shadow"
        >
          <div className="relative overflow-hidden">
            <Carousel opts={{ loop: true }} className="w-full">
              <CarouselContent className="ml-0">
                {p.images.map((image, index) => (
                  <CarouselItem key={`${p.title}-${index}`} className="pl-0">
                    <div className="relative h-72 w-full md:h-80">
                      <img
                        src={image}
                        alt={`${p.title} view ${index + 1}`}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        width={1600}
                        height={900}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <span className="absolute right-4 top-4 z-10 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                {p.status}
              </span>
              <img
                src={logoMark}
                alt="Coniva Holdings Ltd watermark"
                className="absolute bottom-4 left-4 z-10 h-16 w-auto rounded-md bg-background/70 p-1.5 backdrop-blur-sm drop-shadow-xl"
                loading="lazy"
              />
              <CarouselPrevious className="left-4 z-10" />
              <CarouselNext className="right-4 z-10" />
            </Carousel>
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
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
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

        <Tabs defaultValue="Upcoming" className="w-full">
          <TabsList className="mx-auto mb-10 grid w-full max-w-md grid-cols-3">
            {categories.map((c) => (
              <TabsTrigger key={c} value={c}>{c}</TabsTrigger>
            ))}
          </TabsList>
          {categories.map((c) => (
            <TabsContent key={c} value={c}>
              <ProjectGrid items={allProjects.filter((p) => p.status === c)} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;
