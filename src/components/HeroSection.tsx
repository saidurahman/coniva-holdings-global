import heroImg from "@/assets/hero-building.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Trusted real estate developments by Coniva Ltd in Bangladesh"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

      <div className="relative z-10 container mx-auto text-center px-4">
        <p className="text-primary-foreground/80 font-body font-semibold text-sm md:text-base tracking-[0.3em] uppercase mb-4 animate-fade-in">
          <span className="inline-block bg-primary px-4 py-1 rounded-full">Coniva Ltd · Real Estate Bangladesh</span>
        </p>
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white animate-fade-up">
          Building Trusted Communities <br className="hidden md:block" />
          <span className="text-gradient">for a Better Tomorrow</span>
        </h1>
        <p className="max-w-2xl mx-auto text-white/80 text-lg md:text-xl mb-10 font-body font-light animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Coniva Ltd creates secure, sustainable, and value-driven real estate opportunities for families,
          investors, and future-focused communities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a href="#projects" className="bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold text-base hover:opacity-90 transition-opacity">
            Explore Projects
          </a>
          <a href="#contact" className="border border-white/40 text-white px-8 py-4 rounded-md font-semibold text-base hover:bg-white/10 transition-colors">
            Get in Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 py-6 px-4">
          {[
            { value: "10+", label: "Years Experience" },
            { value: "4+", label: "Active Projects" },
            { value: "1000+", label: "Trusted Families" },
            { value: "100%", label: "Legal Safety" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground">{stat.value}</p>
              <p className="text-xs md:text-sm font-body text-white/70 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
