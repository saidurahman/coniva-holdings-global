import { Calendar, ArrowRight } from "lucide-react";
import propertyAgro from "@/assets/property-agro.jpg";
import propertyResort from "@/assets/property-resort.jpg";
import propertyOne from "@/assets/property-1.jpg";

const posts = [
  {
    image: propertyOne,
    date: "May 12, 2026",
    title: "Why Purbachal Is Bangladesh’s Smartest Land Investment in 2026",
    excerpt: "Inside the infrastructure, accessibility and growth signals that make Purbachal the destination for forward-looking investors.",
  },
  {
    image: propertyAgro,
    date: "Apr 28, 2026",
    title: "Land Investment in Bangladesh: A Beginner’s Guide",
    excerpt: "Everything first-time buyers should know — from legal verification to selecting the right project and location.",
  },
  {
    image: propertyResort,
    date: "Apr 10, 2026",
    title: "Building Sustainable Communities for the Next Generation",
    excerpt: "How eco-friendly planning, green spaces and community-first design protect long-term real estate value.",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-primary font-body font-semibold text-sm tracking-[0.2em] uppercase mb-3">Insights</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">From the Coniva Blog</h2>
          <p className="text-muted-foreground text-lg font-body">
            Guides, insights and market updates on real estate investment in Dhaka and Bangladesh.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.title} className="group rounded-xl overflow-hidden border border-border bg-card hover:shadow-elegant transition-all">
              <div className="h-48 overflow-hidden">
                <img src={post.image} alt={post.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  {post.date}
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <a href="#" className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:gap-2 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
