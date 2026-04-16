import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const SERVICES = [
  {
    title: "New Builds",
    desc: "Custom designed homes tailored to your lifestyle with high-end inclusions and precise craftsmanship.",
    features: ["Custom floorplans", "Premium materials", "Energy efficient design"],
    img: "/src/assets/images/service-new.jpg"
  },
  {
    title: "Knockdown & Rebuild",
    desc: "Love your location but not your home? We can demolish and rebuild a brand new custom home on your existing block.",
    features: ["Council approvals handled", "Site assessment", "Seamless transition"],
    img: "/src/assets/images/project-1.jpg"
  },
  {
    title: "Duplexes (Attached & Detached)",
    desc: "Maximize your land value with our intelligently designed duplex solutions, perfect for living or investment.",
    features: ["High rental yield potential", "Custom facades", "Soundproof party walls"],
    img: "/src/assets/images/service-duplex.jpg"
  },
  {
    title: "Granny Flats",
    desc: "Smart secondary dwellings perfect for family members, guests, or generating rental income.",
    features: ["Optimized small footprints", "Independent access", "Modern finishes"],
    img: "/src/assets/images/service-granny.jpg"
  },
  {
    title: "House & Land Packages",
    desc: "Complete, turn-key solutions in growing areas. Move straight in with nothing more to do.",
    features: ["Fixed price contracts", "Prime locations", "Turn-key inclusions"],
    img: "/src/assets/images/project-3.jpg"
  },
  {
    title: "Custom Homes with Suspended Slabs",
    desc: "Specialized construction techniques for sloping blocks or specific structural requirements.",
    features: ["Advanced engineering", "Sloping block experts", "Durable construction"],
    img: "/src/assets/images/hero.jpg"
  },
  {
    title: "Battle Axe Homes",
    desc: "Expert design and construction for difficult access blocks, maximizing privacy and space.",
    features: ["Clever access solutions", "Privacy focused", "Optimized natural light"],
    img: "/src/assets/images/project-2.jpg"
  },
  {
    title: "Land Developments",
    desc: "End-to-end management for multi-dwelling developments and subdivisions.",
    features: ["Feasibility studies", "Project management", "Maximizing ROI"],
    img: "/src/assets/images/about.jpg"
  }
];

export default function Services() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center bg-primary">
        <div className="absolute inset-0 bg-primary/95 z-10" />
        <div className="container mx-auto px-4 md:px-8 relative z-20 text-center">
          <div className="max-w-3xl mx-auto space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">
              What We Build
            </h1>
            <p className="text-xl text-white/80 font-light">
              From luxury custom homes to smart investment developments, we deliver excellence across every project.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {SERVICES.map((service, i) => (
            <div key={i} className="group flex flex-col md:flex-row gap-6 bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-border">
              <div className="w-full md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col">
                <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  {service.desc}
                </p>
                <div className="space-y-2 mb-6">
                  <strong className="text-sm uppercase tracking-wider text-primary">Key Features:</strong>
                  <ul className="space-y-1">
                    {service.features.map((feat, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button variant="outline" className="w-fit hover:bg-primary hover:text-white" asChild>
                  <Link href="/projects">View Related Projects <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
