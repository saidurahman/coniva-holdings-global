import heroImg from "@/assets/hero-building.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Luxury modern building by Coniva Holdings"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

      <div className="relative z-10 container mx-auto text-center px-4">
        <p className="text-primary font-body font-semibold text-sm md:text-base tracking-[0.3em] uppercase mb-4 animate-fade-in">
          Community-Based Real Estate
        </p>
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-primary-foreground animate-fade-up">
          <span className="text-gradient">Developing with Purpose</span>
        </h1>
        <p className="max-w-2xl mx-auto text-surface-dark-foreground/70 text-lg md:text-xl mb-10 font-body font-light animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Coniva Holdings Ltd transforms visions into landmark developments — rooted in trust, driven by community, designed for the world.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#projects"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold text-base hover:opacity-90 transition-opacity"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="border border-surface-dark-foreground/30 text-surface-dark-foreground px-8 py-4 rounded-md font-semibold text-base hover:bg-surface-dark-foreground/10 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-surface-dark/80 backdrop-blur-sm border-t border-border/10">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 py-6 px-4">
          {[
            { value: "10+", label: "Years Vision" },
            { value: "50+", label: "Projects Planned" },
            { value: "1000+", label: "Happy Families" },
            { value: "Global", label: "Ambition" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-heading font-bold text-primary">{stat.value}</p>
              <p className="text-xs md:text-sm font-body text-surface-dark-foreground/60 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
