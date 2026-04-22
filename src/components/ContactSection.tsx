import { Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] max-w-6xl mx-auto">
          <div className="rounded-lg border border-border bg-card p-6 md:p-8">
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-card-foreground mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="contact-name" className="text-card-foreground">Your Name</Label>
                  <Input
                    id="contact-name"
                    name="name"
                    placeholder="Enter your name"
                    autoComplete="name"
                    className="h-11 border-border bg-secondary text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-email" className="text-card-foreground">Your Email</Label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    autoComplete="email"
                    className="h-11 border-border bg-secondary text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-phone" className="text-card-foreground">Your Contact Number</Label>
                <Input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your contact number"
                  autoComplete="tel"
                  className="h-11 border-border bg-secondary text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-message" className="text-card-foreground">Your Message Here</Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  placeholder="Write your message"
                  className="min-h-[160px] border-border bg-secondary text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <Button type="submit" size="lg" className="min-w-40">
                Send Message
              </Button>
            </form>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <a
              href="tel:+8801634699636"
              className="flex items-start gap-4 rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-card-foreground mb-1">Call Us</h3>
                <p className="text-muted-foreground font-body text-sm">+880 1634-699636</p>
              </div>
            </a>

            <a
              href="mailto:info@conivaholdings.ltd"
              className="flex items-start gap-4 rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-card-foreground mb-1">Email Us</h3>
                <p className="text-muted-foreground font-body text-sm">info@conivaholdings.ltd</p>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-card-foreground mb-1">Visit Us</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  House 93, Road 13,<br />Block D, Banani, Dhaka
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
