import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Home as HomeIcon, MapPin } from "lucide-react";
import heroImg from "@assets/image_1776340795109.jpg";
import project1Img from "@assets/image_(1)_1776340795106.jpg";
import project2Img from "@assets/image_(2)_1776340795106.jpg";
import project3Img from "@assets/image_(3)_1776340795110.jpg";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/70 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent z-10" />
          <img 
            src={heroImg} 
            alt="Modern custom home exterior" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="container relative z-20 px-4 md:px-6 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent font-semibold tracking-wider text-sm mb-6 border border-accent/30 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            NEBESA HOMES
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 tracking-tight max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            Nebesa Homes — Homes that rise above
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Crafted with precision, honesty and care — the Nebesa way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base h-14 px-8 rounded-none">
              <Link href="/projects">View Our Projects</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 text-base h-14 px-8 rounded-none backdrop-blur-sm">
              <Link href="/contact">Enquire Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
                A simple philosophy:<br />
                <span className="text-accent">Build every home as if it's our own.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nebesa Homes is a custom home building company started by two passionate friends. We believe in honesty, transparency, and a customer-first approach to design and construction.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Honesty and transparency in every step",
                  "Customer-driven design and construction",
                  "High client satisfaction on every project"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6">
                <Button asChild variant="link" className="p-0 h-auto text-primary hover:text-accent text-base font-semibold">
                  <Link href="/about" className="flex items-center gap-2">
                    Read Our Story <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/10 transform rotate-3 rounded-2xl -z-10" />
              <img 
                src={project2Img} 
                alt="Modern kitchen interior" 
                className="w-full h-auto rounded shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">What We Build</h2>
            <p className="text-muted-foreground text-lg">
              From custom luxury homes to smart investment properties, we deliver excellence across a diverse range of builds.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "New Builds", desc: "Start fresh with a home designed perfectly for your lifestyle and land." },
              { title: "Knockdown & Rebuild", desc: "Love your location but not your house? We can help you start over." },
              { title: "Duplexes", desc: "Maximize the value of your land with attached or detached duplexes." },
              { title: "Granny Flats", desc: "Add space for family or create a new income stream in your backyard." },
              { title: "Custom Homes", desc: "Architectural builds featuring suspended slabs and premium finishes." },
              { title: "House & Land", desc: "Turn-key packages in growing communities with excellent inclusions." }
            ].map((service, i) => (
              <div key={i} className="group p-8 border border-border hover:border-accent/50 bg-card hover:shadow-lg transition-all duration-300">
                <HomeIcon className="h-10 w-10 text-accent mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-heading font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.desc}</p>
                <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Highlights */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Recent Projects</h2>
              <p className="text-primary-foreground/80 text-lg">
                Explore our portfolio of completed and ongoing developments across Sydney.
              </p>
            </div>
            <Button asChild variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 rounded-none shrink-0">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden bg-background">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project1Img} 
                  alt="Melonba Project" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex flex-col justify-end p-8">
                <div className="flex items-center gap-2 text-accent font-semibold text-sm mb-2">
                  <MapPin className="h-4 w-4" />
                  Melonba
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-2">33 sq Double Storey</h3>
                <p className="text-white/80">5 Bedroom • 1 Media • 3 Bath • 2 Garage</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden bg-background">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project3Img} 
                  alt="Rouse Hill Project" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex flex-col justify-end p-8">
                <div className="flex items-center gap-2 text-accent font-semibold text-sm mb-2">
                  <MapPin className="h-4 w-4" />
                  Rouse Hill
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-2">23 sq Double Storey</h3>
                <p className="text-white/80">5 Bedroom • 1 Media • 3 Bath • 2 Garage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-secondary">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        
        <div className="container relative z-10 px-4 md:px-6 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6">Ready to build your dream home?</h2>
          <p className="text-lg text-muted-foreground mb-10">
            Contact us today to discuss your vision, location, and requirements. We're ready to bring your ideas to life.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg h-14 px-10 rounded-none">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
