import { useState } from "react";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(6, "Phone is required").max(30),
  email: z.string().trim().email("Invalid email").max(255),
  project: z.string().min(1, "Please select a project"),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const projectOptions = [
  "Bashundhara Riverview",
  "Coniva Birulia",
  "Coniva Basila",
  "Purbachal American City",
  "Coniva Hollywood Hill Resort",
  "Other / General Inquiry",
];

const ContactSection = () => {
  const [project, setProject] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      project,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast({ title: "Please review the form", description: parsed.error.issues[0].message, variant: "destructive" });
      return;
    }
    setSubmitting(true);
    const body = `Name: ${data.name}%0APhone: ${data.phone}%0AEmail: ${data.email}%0APreferred Project: ${data.project}%0A%0A${encodeURIComponent(data.message)}`;
    window.location.href = `mailto:info@conivaltd.com?subject=${encodeURIComponent("New Inquiry from " + data.name)}&body=${body}`;
    setTimeout(() => {
      toast({ title: "Message ready to send", description: "Your email client has been opened with your inquiry." });
      setSubmitting(false);
      form.reset();
      setProject("");
    }, 300);
  };

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-body font-semibold text-sm tracking-[0.2em] uppercase mb-3">Get in Touch</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Let’s Build Your Future Address
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Share a few details and our team will get back to you with project information, pricing and a personal consultation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto rounded-xl border border-border bg-card p-6 md:p-10 shadow-elegant">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your full name" required className="h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+880 1XXX-XXXXXX" required className="h-11" />
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="you@example.com" required className="h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="project">Preferred Project</Label>
                <Select value={project} onValueChange={setProject}>
                  <SelectTrigger id="project" className="h-11">
                    <SelectValue placeholder="Select a project" />
                  </SelectTrigger>
                  <SelectContent>
                    {projectOptions.map((p) => (<SelectItem key={p} value={p}>{p}</SelectItem>))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" placeholder="Tell us about your requirements" required className="min-h-[140px]" />
            </div>
            <Button type="submit" size="lg" disabled={submitting} className="w-full md:w-auto">
              {submitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
