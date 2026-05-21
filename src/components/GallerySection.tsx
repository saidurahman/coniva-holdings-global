import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ZoomIn } from "lucide-react";

import galleryOffice1 from "@/assets/gallery-office-1.jpg";
import galleryOffice2 from "@/assets/gallery-office-2.jpg";
import galleryTeam1 from "@/assets/gallery-team-1.jpg";
import galleryTeam2 from "@/assets/gallery-team-2.jpg";
import galleryProject1 from "@/assets/gallery-project-1.jpg";
import galleryProject2 from "@/assets/gallery-project-2.jpg";

const categories = ["All", "Office", "Team", "Projects"];

const galleryItems = [
  {
    src: galleryOffice1,
    alt: "Coniva Group Corporate Office — Open Plan Workspace",
    category: "Office",
  },
  {
    src: galleryTeam1,
    alt: "Coniva Group Leadership Team",
    category: "Team",
  },
  {
    src: galleryProject1,
    alt: "Coniva Residential Development — Aerial View",
    category: "Projects",
  },
  {
    src: galleryOffice2,
    alt: "Coniva Group Premium Reception Area",
    category: "Office",
  },
  {
    src: galleryTeam2,
    alt: "Coniva Group Project Planning Meeting",
    category: "Team",
  },
  {
    src: galleryProject2,
    alt: "Coniva Resort & Hospitality Development",
    category: "Projects",
  },
];

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedAlt, setSelectedAlt] = useState("");

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const openLightbox = (src: string, alt: string) => {
    setSelectedImage(src);
    setSelectedAlt(alt);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setSelectedAlt("");
  };

  return (
    <section id="gallery" className="section-padding bg-secondary">
      <div className="container mx-auto">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-primary font-body font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Our Gallery
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Explore Coniva Group
          </h2>
          <p className="text-muted-foreground text-lg font-body leading-relaxed">
            A glimpse into our workspaces, people, and the landmarks we are
            building across Bangladesh.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 rounded-full font-body text-sm uppercase tracking-[0.14em] transition-all duration-300 border ${
                activeFilter === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-elegant"
                  : "bg-background text-muted-foreground border-border hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <figure
              key={`${item.category}-${idx}`}
              className="group relative overflow-hidden rounded-xl cursor-pointer shadow-elegant"
              onClick={() => openLightbox(item.src, item.alt)}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                width={1024}
                height={768}
                className="w-full h-64 md:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-primary font-body text-xs uppercase tracking-[0.16em] mb-1">
                  {item.category}
                </span>
                <h3 className="font-heading text-white text-xl font-semibold leading-tight">
                  {item.alt}
                </h3>
              </div>
              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <ZoomIn className="w-5 h-5 text-primary" />
              </div>
            </figure>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-5xl p-0 bg-black/95 border-none overflow-hidden">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          {selectedImage && (
            <img
              src={selectedImage}
              alt={selectedAlt}
              className="w-full max-h-[85vh] object-contain"
            />
          )}
          {selectedAlt && (
            <p className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm text-white font-body text-sm py-3 px-6 text-center">
              {selectedAlt}
            </p>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
