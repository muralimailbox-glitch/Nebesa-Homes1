import {
  ArrowRight,
  BatteryCharging,
  Building,
  CheckCircle2,
  ClipboardList,
  Compass,
  DollarSign,
  Hammer,
  Home as HomeIcon,
  Layers,
  LayoutGrid,
  MapPin,
  Maximize,
  Paintbrush,
  PenTool,
  Plug,
  Ruler,
  Timer,
  Volume2,
  Wrench,
  Zap,
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

import img1 from "@assets/69_Arncliffe_Ave_Marsden_Park_NEW-02_1776340928340.jpg";
import img2 from "@assets/marsdenpark-06.jpg";
import img3 from "@assets/Mandyphotography.com.au-66_1776341515415.jpg";
import img4 from "@assets/image_(8)_1776340795107.jpg";
import img5 from "@assets/rousehill-40.jpg";
import img6 from "@assets/rousehill-55.jpg";

const services = [
  {
    id: "new-builds",
    title: "New Builds",
    description:
      "Start fresh with a home designed perfectly for your lifestyle and land. From conceptual design to handing over the keys, we manage the entire process with precision and care.",
    features: [
      { icon: <PenTool className="h-5 w-5" />, text: "Custom design from scratch" },
      { icon: <Paintbrush className="h-5 w-5" />, text: "Premium inclusions as standard" },
      { icon: <BatteryCharging className="h-5 w-5" />, text: "Energy efficient design" },
      { icon: <ClipboardList className="h-5 w-5" />, text: "Complete project management" },
    ],
    image: img1,
  },
  {
    id: "knockdown-rebuild",
    title: "Knockdown & Rebuild",
    description:
      "Love your location but not your house? We help you start over on your existing block, managing demolition, council approvals, and the entire rebuild from start to finish.",
    features: [
      { icon: <Hammer className="h-5 w-5" />, text: "Transform existing blocks" },
      { icon: <ClipboardList className="h-5 w-5" />, text: "Council approvals handled" },
      { icon: <Compass className="h-5 w-5" />, text: "Design to suit your block" },
      { icon: <Wrench className="h-5 w-5" />, text: "Full demolition management" },
    ],
    image: img2,
  },
  {
    id: "duplexes",
    title: "Duplexes (Attached & Detached)",
    description:
      "Maximise the value of your land with high-quality duplex developments. Whether you plan to live in one and rent the other, or sell both, our duplexes offer excellent return on investment.",
    features: [
      { icon: <Maximize className="h-5 w-5" />, text: "Maximize land value" },
      { icon: <Volume2 className="h-5 w-5" />, text: "Acoustic and fire separation" },
      { icon: <LayoutGrid className="h-5 w-5" />, text: "Attached and detached options" },
      { icon: <Layers className="h-5 w-5" />, text: "High-end dual living" },
    ],
    image: img3,
  },
  {
    id: "granny-flats",
    title: "Granny Flats",
    description:
      "Add space for family or create a new income stream in your backyard. Our granny flats are built to the same high standards as our main homes, with options from 1 to 3 bedrooms.",
    features: [
      { icon: <HomeIcon className="h-5 w-5" />, text: "1 to 3 bedroom designs" },
      { icon: <Plug className="h-5 w-5" />, text: "Separate metering options" },
      { icon: <Timer className="h-5 w-5" />, text: "Fast construction timeline" },
      { icon: <Zap className="h-5 w-5" />, text: "Seamless backyard integration" },
    ],
    image: img4,
  },
  {
    id: "custom-homes",
    title: "Custom Homes",
    description:
      "Architectural builds featuring complex structural elements and bespoke finishes that make your home truly one-of-a-kind. We specialise in challenging designs others shy away from.",
    features: [
      { icon: <Building className="h-5 w-5" />, text: "Suspended slabs and complex structures" },
      { icon: <Ruler className="h-5 w-5" />, text: "Architectural features" },
      { icon: <Paintbrush className="h-5 w-5" />, text: "Bespoke material selection" },
      { icon: <PenTool className="h-5 w-5" />, text: "Premium custom finishes" },
    ],
    image: img5,
  },
  {
    id: "house-land",
    title: "House & Land Packages",
    description:
      "Turn-key packages in growing communities across Sydney. Enjoy a streamlined building process with fixed pricing, excellent standard inclusions, and prime locations.",
    features: [
      { icon: <DollarSign className="h-5 w-5" />, text: "Fixed price contracts" },
      { icon: <CheckCircle2 className="h-5 w-5" />, text: "Turn-key solutions" },
      { icon: <MapPin className="h-5 w-5" />, text: "Strategic growing communities" },
      { icon: <HomeIcon className="h-5 w-5" />, text: "Ready to move in" },
    ],
    image: img6,
  },
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-[#3D4F5F] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            What We Build
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            From bespoke custom homes to smart investment duplexes, we bring
            precision and care to every build.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 space-y-28">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center scroll-mt-32"
            >
              {/* Image */}
              <div
                className={`relative ${
                  index % 2 !== 0 ? "md:order-2" : "md:order-1"
                }`}
              >
                <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div
                className={`space-y-6 text-center md:text-left ${
                  index % 2 !== 0 ? "md:order-1" : "md:order-2"
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#3D4F5F]">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="pt-2">
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-left"
                      >
                        <div className="flex-shrink-0 text-[#FFB800]">
                          {feature.icon}
                        </div>
                        <span className="text-[#3D4F5F] font-medium">
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <Button
                    asChild
                    className="bg-[#FFB800] text-[#3D4F5F] hover:bg-[#FFB800]/90 font-bold"
                  >
                    <Link href="/contact" className="inline-flex items-center gap-2">
                      Enquire Now <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#3D4F5F] mb-6">
            Have specific requirements?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            We specialise in tailoring our approach to your unique needs.
            Whether you have a challenging block of land or complex design
            requirements, our team has the expertise to deliver.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#3D4F5F] text-white hover:bg-[#3D4F5F]/90 text-base h-14 px-10 font-bold"
          >
            <Link href="/contact">Discuss Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
