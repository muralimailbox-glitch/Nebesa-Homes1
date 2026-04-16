import { MapPin, ArrowRight, Bed, Bath, Car, MonitorPlay } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

import project1Img from "@assets/69_Arncliffe_Ave_Marsden_Park_NEW-02_1776340928340.jpg";
import project2Img from "@assets/image_(2)_1776340795106.jpg";
import project3Img from "@assets/image_(3)_1776340795110.jpg";

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-20 md:py-24">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Projects</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl">
            Explore our portfolio of completed homes, ongoing builds, and upcoming developments.
          </p>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Completed Projects</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Completed
                </div>
                <img 
                  src={project1Img} 
                  alt="Melonba Project" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <MapPin className="h-4 w-4" />
                  Melonba
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-2">33 sq Double Storey</h3>
                
                <div className="grid grid-cols-2 gap-4 my-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2"><Bed className="h-4 w-4" /> 5 Bedroom</div>
                  <div className="flex items-center gap-2"><Bath className="h-4 w-4" /> 3 Bath</div>
                  <div className="flex items-center gap-2"><MonitorPlay className="h-4 w-4" /> 1 Media</div>
                  <div className="flex items-center gap-2"><Car className="h-4 w-4" /> 2 Garage</div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Completed
                </div>
                <img 
                  src={project2Img} 
                  alt="Nirimba Fields Project" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <MapPin className="h-4 w-4" />
                  Nirimba Fields
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-2">Attached Duplex</h3>
                <p className="text-muted-foreground my-4 text-sm">
                  Premium attached duplex maximizing land value.
                </p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Completed
                </div>
                <img 
                  src={project3Img} 
                  alt="Rouse Hill Project" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <MapPin className="h-4 w-4" />
                  Rouse Hill
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-2">23 sq Double Storey</h3>
                
                <div className="grid grid-cols-2 gap-4 my-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2"><Bed className="h-4 w-4" /> 5 Bedroom</div>
                  <div className="flex items-center gap-2"><Bath className="h-4 w-4" /> 3 Bath</div>
                  <div className="flex items-center gap-2"><MonitorPlay className="h-4 w-4" /> 1 Media</div>
                  <div className="flex items-center gap-2"><Car className="h-4 w-4" /> 2 Garage</div>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Completed
                </div>
                <img 
                  src={project1Img} 
                  alt="Seven Hills Project" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <MapPin className="h-4 w-4" />
                  Seven Hills
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-2">Detached Duplex</h3>
                <p className="text-muted-foreground my-4 text-sm">
                  Premium detached duplex build.
                </p>
              </div>
            </div>

            {/* Project 5 */}
            <div className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Completed
                </div>
                <img 
                  src={project2Img} 
                  alt="Melonba Project 2" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <MapPin className="h-4 w-4" />
                  Melonba
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-2">33 sq Double Storey</h3>
                <div className="grid grid-cols-2 gap-4 my-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2"><Bed className="h-4 w-4" /> 5 Bedroom</div>
                  <div className="flex items-center gap-2"><Bath className="h-4 w-4" /> 3 Bath</div>
                  <div className="flex items-center gap-2"><MonitorPlay className="h-4 w-4" /> 1 Media</div>
                  <div className="flex items-center gap-2"><Car className="h-4 w-4" /> 2 Garage</div>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Completed
                </div>
                <img 
                  src={project3Img} 
                  alt="Melonba Project 3" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <MapPin className="h-4 w-4" />
                  Melonba
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-2">Double Storey Modern Home</h3>
                <p className="text-muted-foreground my-4 text-sm">
                  High-End Inclusions throughout the property.
                </p>
              </div>
            </div>

            {/* Project 7 */}
            <div className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Completed
                </div>
                <img 
                  src={project1Img} 
                  alt="Riverstone Project" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <MapPin className="h-4 w-4" />
                  Riverstone
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-2">Single Storey</h3>
                <p className="text-muted-foreground my-4 text-sm">
                  Features 3m ceilings and decent inclusions.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="py-20 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Ongoing Projects</h2>
            <div className="h-px flex-1 bg-border/50" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 border border-border rounded-xl shadow-sm">
              <div className="inline-block bg-accent/20 text-accent font-semibold px-3 py-1 rounded-full text-xs mb-4">Under Construction</div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">Double Storey Modern Home</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Swimming Pool
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Concrete Dincel Floor
                </li>
              </ul>
            </div>

            <div className="bg-card p-8 border border-border rounded-xl shadow-sm">
              <div className="inline-block bg-accent/20 text-accent font-semibold px-3 py-1 rounded-full text-xs mb-4">Under Construction</div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">Double Storey Modern Home</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Swimming Pool
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Bondec Slab Underneath
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming / House & Land */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Upcoming & House/Land Packages</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Upcoming Single Projects */}
            <div>
              <h3 className="text-xl font-heading font-bold text-primary mb-6 border-b pb-2">Upcoming Builds</h3>
              <div className="space-y-6">
                {[
                  { loc: "Erskine Park", type: "Granny Flat" },
                  { loc: "Melonba", type: "Detached Duplex" },
                  { loc: "Toongabbie", type: "Double Storey Home with Swimming Pool" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50 border border-border/50">
                    <div className="p-2 bg-primary/10 rounded-md text-primary mt-1">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">{item.loc}</h4>
                      <p className="text-muted-foreground text-sm">{item.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tallawong House & Land */}
            <div className="bg-primary text-primary-foreground p-8 md:p-10 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
              
              <div className="relative z-10">
                <div className="inline-block bg-accent text-accent-foreground font-semibold px-3 py-1 rounded-full text-xs mb-4 uppercase tracking-wider">
                  Upcoming Packages
                </div>
                <h3 className="text-3xl font-heading font-bold mb-2">Tallawong</h3>
                <p className="text-primary-foreground/80 mb-8 border-b border-primary-foreground/20 pb-6">
                  House & Land Packages — 4 Projects
                  <br/>
                  <span className="text-sm font-light italic mt-1 inline-block">2 Corner Lots + 2 Standard Lots<br/>All with decent inclusions</span>
                </p>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-xl font-semibold text-accent mb-4">Standard Lots</h4>
                    <p className="font-medium text-lg mb-3">30 sq Double Storey</p>
                    <div className="grid grid-cols-2 gap-y-3 text-sm text-primary-foreground/90">
                      <div className="flex items-center gap-2"><Bed className="h-4 w-4" /> 5 Bedroom</div>
                      <div className="flex items-center gap-2"><Bath className="h-4 w-4" /> 3 Bath</div>
                      <div className="flex items-center gap-2"><MonitorPlay className="h-4 w-4" /> 1 Media</div>
                      <div className="flex items-center gap-2"><Car className="h-4 w-4" /> 2 Garage</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-accent mb-4">Corner Lots</h4>
                    <p className="font-medium text-lg mb-3">29 sq Double Storey</p>
                    <div className="grid grid-cols-2 gap-y-3 text-sm text-primary-foreground/90">
                      <div className="flex items-center gap-2"><Bed className="h-4 w-4" /> 5 Bedroom</div>
                      <div className="flex items-center gap-2"><Bath className="h-4 w-4" /> 3 Bath</div>
                      <div className="flex items-center gap-2"><Car className="h-4 w-4" /> 2 Garage</div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-primary-foreground/20">
                  <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/contact">Register Interest</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
