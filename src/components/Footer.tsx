import { Leaf, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--surface-dark))] text-[hsl(var(--surface-dark-foreground))] pt-16 pb-8 px-4">
      <div className="container mx-auto">
        <div className="grid gap-10 md:grid-cols-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary"><Leaf className="w-5 h-5 text-primary-foreground" /></span>
              <span className="font-heading text-2xl font-bold">Coniva <span className="text-primary/80">Ltd</span></span>
            </div>
            <p className="text-white/60 text-sm font-body leading-relaxed">
              A trusted real estate company in Bangladesh — building sustainable communities and long-term value.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/60">
              {["Home","About","Projects","Why Us","Blog","Contact"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase().replace(/\s+/g,"")}`} className="hover:text-primary/80 transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Sister Concerns</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>Coniva Holdings Ltd</li>
              <li>Coniva Agro Ltd</li>
              <li>Coniva Resort Ltd</li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex gap-2"><MapPin className="w-4 h-4 text-primary/80 shrink-0 mt-0.5" /> House 93, Road 13, Block D, Banani, Dhaka</li>
              <li className="flex gap-2"><Phone className="w-4 h-4 text-primary/80 shrink-0 mt-0.5" /> +880 1634-699636</li>
              <li className="flex gap-2"><Mail className="w-4 h-4 text-primary/80 shrink-0 mt-0.5" /> info@conivaltd.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-center text-white/40 text-xs">
          © {new Date().getFullYear()} Coniva Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
