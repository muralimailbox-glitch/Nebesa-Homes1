import { ArrowRight, Home as HomeIcon, Maximize, PaintBucket, Hammer, PlusCircle, PenTool } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

import newImg from "@assets/image_(7)_1776340795107.jpg";
import knockdownImg from "@assets/Mandyphotography.com.au-66_1776341515415.jpg";
import grannyImg from "@assets/image_(8)_1776340795107.jpg";
import duplexImg from "@assets/image_(9)_1776340795111.jpg";
import customImg from "@assets/image_(4)_1776340795110.jpg";
import houselandImg from "@assets/image_1776340795109.jpg";

const services = [
  {
    id: "new-builds",
    title: "New Builds",
    description: "Start fresh with a home designed perfectly for your lifestyle and land. From conceptual design to handing over the keys, we manage the entire process.",
    features: ["Custom floor plans", "Premium inclusions", "Energy efficient design", "Complete project management"],
    image: newImg,
    icon: <HomeIcon className="h-6 w-6" />
  },
  {
    id: "knockdown",
    title: "Knockdown & Rebuild",
    description: "Love your location but not your house? We help you start over on your existing block, maximizing its potential with a brand new Nebesa Home.",
    features: ["Site assessment & demolition", "Council approvals handled", "Design to suit your block", "Modernize your lifestyle"],
    image: knockdownImg,
    icon: <Hammer className="h-6 w-6" />
  },
  {
    id: "granny-flats",
    title: "Granny Flats",
    description: "Add space for family or create a new income stream in your backyard. Our granny flats are built to the same high standards as our main homes.",
    features: ["1 to 3 bedroom designs", "Separate metering options", "Fast construction timeline", "Seamless integration with main home"],
    image: grannyImg,
    icon: <PlusCircle className="h-6 w-6" />
  },
  {
    id: "duplexes",
    title: "Duplexes (Attached & Detached)",
    description: "Maximize the value of your land. Whether you plan to live in one and rent the other, or sell both, our duplexes offer excellent return on investment.",
    features: ["Attached and detached options", "Optimized use of land", "Acoustic and fire separation", "High-end dual living"],
    image: duplexImg,
    icon: <Maximize className="h-6 w-6" />
  },
  {
    id: "custom",
    title: "Custom Homes",
    description: "Architectural builds featuring complex structural elements like suspended slabs and premium, bespoke finishes that make your home truly one-of-a-kind.",
    features: ["Suspended slabs", "Architectural features", "Bespoke material selection", "Complex structural builds"],
    image: customImg,
    icon: <PaintBucket className="h-6 w-6" />
  },
  {
    id: "house-land",
    title: "House & Land Packages",
    description: "Turn-key packages in growing communities across Sydney. Enjoy a streamlined building process with excellent standard inclusions.",
    features: ["Fixed price contracts", "Decent inclusions standard", "Strategic locations", "Ready to move in"],
    image: houselandImg,
    icon: <PenTool className="h-6 w-6" />
  }
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-20 md:py-24">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">What We Build</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl">
            From bespoke custom homes to smart investment duplexes, we bring precision and care to every build.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6 space-y-24">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 !== 0 ? "md:rtl" : ""
              }`}
            >
              {/* Image side */}
              <div className={`${index % 2 !== 0 ? "md:order-2" : "md:order-1"} relative`}>
                <div className="aspect-[4/3] overflow-hidden rounded-xl">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-lg hidden md:block shadow-xl">
                  {service.icon}
                </div>
              </div>

              {/* Content side */}
              <div className={`${index % 2 !== 0 ? "md:order-1" : "md:order-2"} space-y-6`}>
                <div className="flex items-center gap-4 mb-2 md:hidden">
                  <div className="p-3 bg-accent text-accent-foreground rounded-lg">
                    {service.icon}
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">{service.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <div className="pt-4">
                  <h4 className="font-heading font-bold text-primary mb-4 text-lg">Key Features</h4>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-accent" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6">
                  <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Link href="/contact">Enquire about {service.title.toLowerCase()}</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs or Additional Info CTA */}
      <section className="py-20 bg-secondary">
        <div className="container px-4 md:px-6 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Have specific requirements?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We specialize in tailoring our approach to your unique needs. Whether you have a challenging block of land (Battle Axe) or complex design requirements, our team has the expertise to deliver.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contact">Discuss Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
