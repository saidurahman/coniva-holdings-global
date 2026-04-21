import { Phone, MapPin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding surface-dark">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-body font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            Let's Build Together
          </h2>
          <p className="text-surface-dark-foreground/60 text-lg font-body">
            Whether you're looking for your dream home, an investment opportunity, or a partnership — we'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <a
            href="tel:+8801634699636"
            className="flex flex-col items-center text-center p-8 rounded-lg border border-surface-dark-foreground/10 hover:border-primary/40 transition-colors"
          >
            <Phone className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-heading text-lg font-semibold mb-2">Call Us</h3>
            <p className="text-surface-dark-foreground/60 font-body text-sm">+880 1634-699636</p>
          </a>

          <a
            href="mailto:info@conivaholdings.ltd"
            className="flex flex-col items-center text-center p-8 rounded-lg border border-surface-dark-foreground/10 hover:border-primary/40 transition-colors"
          >
            <Mail className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-heading text-lg font-semibold mb-2">Email Us</h3>
            <p className="text-surface-dark-foreground/60 font-body text-sm">info@conivaholdings.ltd</p>
          </a>

          <div className="flex flex-col items-center text-center p-8 rounded-lg border border-surface-dark-foreground/10">
            <MapPin className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-heading text-lg font-semibold mb-2">Visit Us</h3>
            <p className="text-surface-dark-foreground/60 font-body text-sm">
              House 93, Road 13,<br />Block D, Banani, Dhaka
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
