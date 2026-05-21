import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactInfoSection = () => {
  return (
    <section id="contact-info" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-primary font-body font-semibold text-sm tracking-[0.2em] uppercase mb-3">Contact Info</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">Visit Our Office</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-stretch">
          <div className="grid sm:grid-cols-2 gap-4 content-start">
            {[
              { icon: MapPin, title: "Office Address", lines: ["House 93, Road 13", "Block D, Banani, Dhaka 1213"] },
              { icon: Phone, title: "Phone", lines: ["+880 1634-699636"] },
              { icon: Mail, title: "Email", lines: ["info@conivaltd.com"] },
              { icon: Clock, title: "Business Hours", lines: ["Sat – Thu: 9:00 AM – 6:00 PM", "Friday: Closed"] },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors">
                <div className="w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                {item.lines.map((l) => (
                  <p key={l} className="text-muted-foreground font-body text-sm">{l}</p>
                ))}
              </div>
            ))}
          </div>
          <div className="rounded-xl overflow-hidden border border-border min-h-[360px] shadow-elegant">
            <iframe
              title="Coniva Group Office Location"
              src="https://www.google.com/maps?q=Banani,+Dhaka,+Bangladesh&output=embed"
              className="w-full h-full min-h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
