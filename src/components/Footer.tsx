import logo from "@/assets/coniva-logo-light.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={logo} alt="Coniva Holdings Ltd" className="h-10" />
          <p className="text-background/50 text-sm font-body text-center">
            © {new Date().getFullYear()} Coniva Holdings Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Home", "About", "Services", "Projects", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-background/50 hover:text-primary text-xs font-body transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
