import { Building2, CheckCircle2, Target, Users } from "lucide-react";
import aboutImg from "@/assets/images/about.jpg";
import heroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-20 md:py-24">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl">
            A passionate team dedicated to bringing your dream home to life with honesty, transparency, and superior craftsmanship.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/10 transform -rotate-3 rounded-2xl -z-10" />
              <img 
                src={aboutImg} 
                alt="Nebesa Homes founders on site" 
                className="w-full h-auto rounded shadow-xl"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Our Story</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Nebesa Homes is a custom home building company founded 3 years ago by two passionate friends who shared a common vision: to change the way homes are built.
                </p>
                <p>
                  Having experienced the construction industry from various angles, we saw an opportunity to create a building experience centered entirely around the customer—one built on trust, clear communication, and exceptional quality.
                </p>
                <p>
                  Our simple philosophy drives everything we do: <strong>"Build every home as if we are building our own."</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Our Values</h2>
            <p className="text-muted-foreground text-lg">
              These principles guide our work daily, ensuring we deliver not just a house, but a home you'll love for years to come.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            <div className="bg-card p-8 text-center rounded-lg shadow-sm border border-border">
              <div className="inline-flex items-center justify-center p-4 bg-accent/10 rounded-full mb-6 text-accent">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">Honesty & Transparency</h3>
              <p className="text-muted-foreground">
                No hidden costs, no surprises. We keep you informed at every single step of the building journey.
              </p>
            </div>
            
            <div className="bg-card p-8 text-center rounded-lg shadow-sm border border-border">
              <div className="inline-flex items-center justify-center p-4 bg-accent/10 rounded-full mb-6 text-accent">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">Customer-Driven Design</h3>
              <p className="text-muted-foreground">
                Your vision is our blueprint. We listen, advise, and adapt to create a space that perfectly suits your lifestyle.
              </p>
            </div>

            <div className="bg-card p-8 text-center rounded-lg shadow-sm border border-border">
              <div className="inline-flex items-center justify-center p-4 bg-accent/10 rounded-full mb-6 text-accent">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">High Client Satisfaction</h3>
              <p className="text-muted-foreground">
                Our ultimate goal is your happiness. Every completed home has a happy customer behind it—that's our promise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Nebesa Standard */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">The Nebesa Standard</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We don't compromise on quality. From the foundation to the final coat of paint, we work with trusted tradespeople and premium materials.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1 text-accent">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-primary">Fully Licensed & Insured</h4>
                    <p className="text-muted-foreground">Builder Licence 380365C. We operate with complete professional compliance.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1 text-accent">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-primary">HIA Member</h4>
                    <p className="text-muted-foreground">Proud members of the Housing Industry Association, adhering to the highest industry standards.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative order-1 md:order-2">
              <img 
                src={heroImg} 
                alt="High quality construction detail" 
                className="w-full h-auto rounded shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
