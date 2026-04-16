import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: `url('/src/assets/images/hero.jpg')` }}
        />
        
        <div className="container mx-auto px-4 md:px-8 relative z-20">
          <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white/90 text-sm font-medium mb-2">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              Builder Licence 380365C | HIA Member
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight">
              Homes that <span className="text-accent">rise above.</span>
            </h1>
            
            <p className="text-xl text-white/90 font-light max-w-2xl leading-relaxed">
              Crafted with precision, honesty and care — the Nebesa way. 
              Build every home as if we are building our own.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold text-lg px-8 h-14" asChild>
                <Link href="/projects">View Our Projects</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg px-8 h-14 backdrop-blur" asChild>
                <Link href="/contact">Enquire Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services/What We Build Overview */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase">What We Build</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-primary">Custom Homes & Developments</h3>
          <p className="text-muted-foreground text-lg">
            From luxury custom builds to smart investments like granny flats and duplexes, we deliver excellence across every project type.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "New Custom Homes",
              desc: "Tailored to your lifestyle with high-end inclusions and precise craftsmanship.",
              img: "/src/assets/images/service-new.jpg"
            },
            {
              title: "Duplexes & Developments",
              desc: "Attached or detached duplexes and land developments to maximize your investment.",
              img: "/src/assets/images/service-duplex.jpg"
            },
            {
              title: "Granny Flats & Studios",
              desc: "Smart secondary dwellings perfect for family members or rental income.",
              img: "/src/assets/images/service-granny.jpg"
            }
          ].map((service, i) => (
            <Link key={i} href="/services" className="group block relative overflow-hidden rounded-2xl shadow-lg border border-border bg-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-heading font-bold text-primary mb-2 group-hover:text-accent transition-colors">{service.title}</h4>
                <p className="text-muted-foreground mb-4">{service.desc}</p>
                <div className="flex items-center text-accent font-semibold text-sm uppercase tracking-wider">
                  Learn more <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-primary text-white py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-sm font-bold text-accent tracking-widest uppercase">The Nebesa Philosophy</h2>
                <h3 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
                  We build your home <br/>as if it were our own.
                </h3>
              </div>
              
              <div className="space-y-6">
                {[
                  "Honesty and transparency in every step of the process",
                  "Customer-driven design and construction tailored to you",
                  "High client satisfaction — every completed home has a happy customer",
                  "Precision craftsmanship with premium inclusions"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                    <p className="text-lg text-white/90">{item}</p>
                  </div>
                ))}
              </div>
              
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold h-14 px-8" asChild>
                <Link href="/about">Read Our Story</Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10 border-4 border-white/10">
                <img 
                  src="/src/assets/images/about.jpg" 
                  alt="Nebesa Homes Team" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-0"></div>
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Highlight */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-sm font-bold text-accent tracking-widest uppercase">Our Portfolio</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-primary">Recent Excellence</h3>
          </div>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" asChild>
            <Link href="/projects">View All Projects <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/projects" className="group block relative overflow-hidden rounded-2xl shadow-lg aspect-[16/10]">
            <img 
              src="/src/assets/images/project-1.jpg" 
              alt="Melonba 33 sq Double Storey" 
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
              <span className="text-accent font-semibold text-sm mb-2 uppercase tracking-wider">Completed</span>
              <h4 className="text-2xl font-heading font-bold text-white mb-1">Melonba Double Storey</h4>
              <p className="text-white/80">33 sq • 5 Bed • 1 Media • 3 Bath • 2 Garage</p>
            </div>
          </Link>
          
          <div className="grid grid-rows-2 gap-8">
            <Link href="/projects" className="group block relative overflow-hidden rounded-2xl shadow-lg h-full">
              <img 
                src="/src/assets/images/project-2.jpg" 
                alt="Nirimba Fields Attached Duplex" 
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <span className="text-accent font-semibold text-sm mb-1 uppercase tracking-wider">Completed</span>
                <h4 className="text-xl font-heading font-bold text-white">Nirimba Fields Duplex</h4>
                <p className="text-white/80 text-sm">Attached Duplex</p>
              </div>
            </Link>
            
            <Link href="/projects" className="group block relative overflow-hidden rounded-2xl shadow-lg h-full">
              <img 
                src="/src/assets/images/project-3.jpg" 
                alt="Tallawong House & Land" 
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <span className="text-accent font-semibold text-sm mb-1 uppercase tracking-wider">Upcoming</span>
                <h4 className="text-xl font-heading font-bold text-white">Tallawong Packages</h4>
                <p className="text-white/80 text-sm">House & Land • 4 Projects</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
