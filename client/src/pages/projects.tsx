import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";

const PROJECTS = {
  completed: [
    {
      name: "Melonba",
      type: "33 sq Double Storey",
      features: ["5 Bedroom", "1 Media", "3 Bath", "2 Garage"],
      img: "/src/assets/images/project-1.jpg"
    },
    {
      name: "Nirimba Fields",
      type: "Attached Duplex",
      features: ["Modern Design", "High-End Finishes", "Turn-key"],
      img: "/src/assets/images/service-duplex.jpg"
    },
    {
      name: "Rouse Hill",
      type: "23 sq Double Storey",
      features: ["5 Bedroom", "1 Media", "3 Bath", "2 Garage"],
      img: "/src/assets/images/hero.jpg"
    },
    {
      name: "Seven Hills",
      type: "Detached Duplex",
      features: ["Custom Floorplan", "Premium Inclusions", "Spacious"],
      img: "/src/assets/images/service-new.jpg"
    },
    {
      name: "Melonba",
      type: "Double Storey Modern Home",
      features: ["High-End Inclusions", "Custom Facade", "Luxury Finishes"],
      img: "/src/assets/images/project-2.jpg"
    },
    {
      name: "Riverstone",
      type: "Single Storey",
      features: ["3m Ceilings", "Decent Inclusions", "Open Plan Living"],
      img: "/src/assets/images/project-3.jpg"
    }
  ],
  ongoing: [
    {
      name: "Double Storey Modern Home",
      type: "Custom Build",
      features: ["Swimming Pool", "Concrete Dincel Floor"],
      img: "/src/assets/images/about.jpg"
    },
    {
      name: "Double Storey Modern Home",
      type: "Custom Build",
      features: ["Swimming Pool", "Bondec Slab Underneath"],
      img: "/src/assets/images/hero.jpg"
    }
  ],
  upcoming: [
    {
      name: "Erskine Park",
      type: "Granny Flat",
      features: ["Smart Design", "Investment"],
      img: "/src/assets/images/service-granny.jpg"
    },
    {
      name: "Melonba",
      type: "Detached Duplex",
      features: ["Modern Layout", "Premium Inclusions"],
      img: "/src/assets/images/service-duplex.jpg"
    },
    {
      name: "Toongabbie",
      type: "Double Storey Home",
      features: ["Swimming Pool", "Custom Design"],
      img: "/src/assets/images/project-1.jpg"
    },
    {
      name: "Tallawong",
      type: "House & Land Packages",
      features: ["4 Projects", "Corner & Standard Lots", "Decent Inclusions"],
      img: "/src/assets/images/project-3.jpg",
      details: "Standard Lots: 30 sq (5 Bed, 1 Media, 3 Bath, 2 Garage) | Corner Lots: 29 sq (5 Bed, 3 Bath, 2 Garage)"
    }
  ]
};

function ProjectCard({ project, status }: { project: any, status: string }) {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-border flex flex-col h-full">
      <div className="aspect-[4/3] overflow-hidden relative">
        <img 
          src={project.img} 
          alt={project.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4">
          <Badge className={
            status === "completed" ? "bg-primary text-white" : 
            status === "ongoing" ? "bg-accent text-primary hover:bg-accent" : 
            "bg-white/90 text-primary hover:bg-white"
          }>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="text-2xl font-heading font-bold text-primary">{project.name}</h3>
          <p className="text-muted-foreground font-medium">{project.type}</p>
        </div>
        
        <div className="mt-auto space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.features.map((feat: string, i: number) => (
              <span key={i} className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-md font-medium">
                {feat}
              </span>
            ))}
          </div>
          {project.details && (
            <p className="text-sm text-muted-foreground border-t pt-4">
              {project.details}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center bg-primary">
        <div className="absolute inset-0 bg-primary/95 z-10" />
        <div className="container mx-auto px-4 md:px-8 relative z-20 text-center">
          <div className="max-w-3xl mx-auto space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">
              Our Projects
            </h1>
            <p className="text-xl text-white/80 font-light">
              Explore our portfolio of completed excellence and exciting upcoming developments.
            </p>
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-4 mb-10 border-b pb-4">
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase">Portfolio</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary">Completed Projects</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.completed.map((project, i) => (
            <ProjectCard key={i} project={project} status="completed" />
          ))}
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col gap-4 mb-10 border-b border-primary/10 pb-4">
            <h2 className="text-sm font-bold text-accent tracking-widest uppercase">In Progress</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary">Ongoing Projects</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.ongoing.map((project, i) => (
              <ProjectCard key={i} project={project} status="ongoing" />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Projects */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-4 mb-10 border-b pb-4">
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase">Future</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary">Upcoming Projects</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.upcoming.map((project, i) => (
            <ProjectCard key={i} project={project} status="upcoming" />
          ))}
        </div>
      </section>
    </div>
  );
}
