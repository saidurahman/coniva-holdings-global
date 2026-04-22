const testimonials = [
  {
    name: "Mahmud Rahman",
    role: "Home Buyer",
    quote:
      "Coniva made the entire journey feel secure and transparent. Their team stayed attentive from first discussion to final handover.",
  },
  {
    name: "Nusrat Jahan",
    role: "Investor",
    quote:
      "What stood out most was their professionalism and modern project vision. Every update was clear, timely, and well managed.",
  },
  {
    name: "Farhan Ahmed",
    role: "Business Client",
    quote:
      "They understand how to combine design, value, and trust. Working with Coniva felt smooth, premium, and dependable.",
  },
];

const ClientsSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-body font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Our Clients
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            What are our clients saying about us
          </h2>
          <p className="text-muted-foreground text-lg font-body leading-relaxed">
            We build lasting relationships by delivering confidence, clarity, and quality in every project.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex h-full flex-col justify-between rounded-lg border border-border bg-card p-8 shadow-sm"
            >
              <p className="font-heading text-5xl leading-none text-primary mb-6">“</p>
              <p className="text-muted-foreground font-body leading-relaxed mb-8">{testimonial.quote}</p>
              <div>
                <h3 className="font-heading text-2xl font-semibold text-foreground">{testimonial.name}</h3>
                <p className="text-primary font-body text-sm uppercase tracking-[0.16em] mt-1">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;