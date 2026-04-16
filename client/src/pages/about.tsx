import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center bg-primary">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: `url('/src/assets/images/about.jpg')` }}
        />
        
        <div className="container mx-auto px-4 md:px-8 relative z-20">
          <div className="max-w-3xl space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">
              About Nebesa Homes
            </h1>
            <p className="text-xl text-white/90 font-light max-w-2xl">
              Started 3 years ago by two passionate friends with a simple philosophy: 
              Build every home as if we are building our own.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-sm font-bold text-accent tracking-widest uppercase">Our Story</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary">
              Built on Passion & Precision
            </h3>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Nebesa Homes was founded on a shared vision between two friends who believed that building a custom home shouldn't be a stressful process, but an exciting journey.
              </p>
              <p>
                Over the past 3 years, we have grown from our first project into a trusted name in custom home building, delivering high-end inclusions and precise craftsmanship across all our builds.
              </p>
              <p>
                Our philosophy is simple but powerful: <strong>We build every home as if we are building our own.</strong> This means no corners cut, complete transparency, and a relentless focus on quality.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/src/assets/images/project-1.jpg" alt="Interior" className="rounded-2xl w-full h-64 object-cover shadow-lg mt-8" />
            <img src="/src/assets/images/project-2.jpg" alt="Kitchen" className="rounded-2xl w-full h-64 object-cover shadow-lg" />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-sm font-bold text-accent tracking-widest uppercase">What Drives Us</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-primary">Our Core Values</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Honesty & Transparency",
                desc: "Clear communication at every step. No hidden fees, no surprises, just honest building.",
                icon: "shield"
              },
              {
                title: "Customer-Driven",
                desc: "Your lifestyle dictates our design. We tailor every aspect of construction to your specific needs.",
                icon: "users"
              },
              {
                title: "High Satisfaction",
                desc: "Every completed home has a happy customer. We measure our success by your satisfaction.",
                icon: "star"
              }
            ].map((val, i) => (
              <div key={i} className="bg-card p-8 rounded-2xl shadow-sm border border-border">
                <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-xl font-heading font-bold text-primary mb-3">{val.title}</h4>
                <p className="text-muted-foreground">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 md:px-8 text-center">
        <div className="bg-primary rounded-3xl p-12 md:p-20 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-accent/10 opacity-50" />
          <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
              Ready to start your journey?
            </h2>
            <p className="text-white/80 text-lg">
              Let's discuss how we can bring your dream home to life with the Nebesa standard of quality.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold h-14 px-8" asChild>
              <Link href="/contact">Get in Touch Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
