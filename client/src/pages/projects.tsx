import { MapPin, Bed, Bath, Car, Tv, Ruler, Waves, ChevronRight, Home as HomeIcon } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

import img1 from "@assets/image_(2)_1776340795106.jpg";
import img2 from "@assets/69_Arncliffe_Ave_Marsden_Park-1_1776341084470.jpg";
import img3 from "@assets/Mandyphotography.com.au-4_1776340995680.jpg";
import img4 from "@assets/image_(4)_1776340795110.jpg";
import img5 from "@assets/image_(3)_1776340795110.jpg";
import img6 from "@assets/rousehill-10.jpg";
import img7 from "@assets/image_(7)_1776340795107.jpg";
import img8 from "@assets/rousehill-20.jpg";
import img9 from "@assets/marsdenpark-05.jpg";
import img10 from "@assets/image_(1)_1776340795106.jpg";
import img11 from "@assets/rousehill-30.jpg";
import img12 from "@assets/image_(9)_1776340795111.jpg";

// --- Data ---

interface ProjectSpec {
  icon: typeof Bed;
  label: string;
}

interface CompletedProject {
  location: string;
  title: string;
  image: string;
  specs?: ProjectSpec[];
  description?: string;
}

interface OngoingProject {
  title: string;
  image: string;
  features: string[];
}

interface UpcomingProject {
  location: string;
  type: string;
  image: string;
}

const completedProjects: CompletedProject[] = [
  {
    location: "Melonba",
    title: "33 sq Double Storey",
    image: img1,
    specs: [
      { icon: Bed, label: "5 Bedroom" },
      { icon: Tv, label: "1 Media" },
      { icon: Bath, label: "3 Bath" },
      { icon: Car, label: "2 Garage" },
    ],
  },
  {
    location: "Nirimba Fields",
    title: "Attached Duplex",
    image: img2,
    description: "Premium attached duplex maximising land value with quality finishes throughout.",
  },
  {
    location: "Rouse Hill",
    title: "23 sq Double Storey",
    image: img6,
    specs: [
      { icon: Bed, label: "5 Bedroom" },
      { icon: Tv, label: "1 Media" },
      { icon: Bath, label: "3 Bath" },
      { icon: Car, label: "2 Garage" },
    ],
  },
  {
    location: "Seven Hills",
    title: "Detached Duplex",
    image: img4,
    description: "Premium detached duplex delivering two standalone residences on a single block.",
  },
  {
    location: "Melonba",
    title: "33 sq Double Storey",
    image: img3,
    specs: [
      { icon: Bed, label: "5 Bedroom" },
      { icon: Tv, label: "1 Media" },
      { icon: Bath, label: "3 Bath" },
      { icon: Car, label: "2 Garage" },
    ],
  },
  {
    location: "Melonba",
    title: "Double Storey Modern Home",
    image: img5,
    description: "High-end inclusions with a contemporary design throughout every detail.",
  },
  {
    location: "Riverstone",
    title: "Single Storey",
    image: img7,
    description: "Features 3m ceilings and decent inclusions for comfortable living.",
  },
];

const ongoingProjects: OngoingProject[] = [
  {
    title: "Double Storey Modern Home",
    image: img8,
    features: ["Swimming Pool", "Concrete Dincel Floor"],
  },
  {
    title: "Double Storey Modern Home",
    image: img9,
    features: ["Swimming Pool", "Bondec Slab Underneath"],
  },
];

const upcomingProjects: UpcomingProject[] = [
  { location: "Erskine Park", type: "Granny Flat", image: img10 },
  { location: "Melonba", type: "Detached Duplex", image: img11 },
  { location: "Toongabbie", type: "Double Storey Home, Swimming Pool", image: img12 },
];

// --- Badges ---

function StatusBadge({ status }: { status: "completed" | "ongoing" | "upcoming" | "house-land" }) {
  const config = {
    completed: { bg: "bg-emerald-500", text: "Completed" },
    ongoing: { bg: "bg-blue-500", text: "Under Construction" },
    upcoming: { bg: "bg-amber-500", text: "Coming Soon" },
    "house-land": { bg: "bg-purple-500", text: "House & Land" },
  };
  const { bg, text } = config[status];
  return (
    <span className={`${bg} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
      {text}
    </span>
  );
}

// --- Section Heading ---

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#3D4F5F]">
        {children}
      </h2>
      <div className="mt-3 h-1 w-16 bg-[#FFB800] rounded-full" />
    </div>
  );
}

// --- Components ---

function CompletedCard({ project }: { project: CompletedProject }) {
  return (
    <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="aspect-[4/3] overflow-hidden relative">
        <div className="absolute top-4 left-4 z-10">
          <StatusBadge status="completed" />
        </div>
        <img
          src={project.image}
          alt={`${project.location} - ${project.title}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
          <MapPin className="h-4 w-4 text-[#FFB800]" />
          {project.location}
        </div>
        <h3 className="text-xl font-heading font-bold text-[#3D4F5F] mb-3">{project.title}</h3>

        {project.specs && (
          <div className="grid grid-cols-2 gap-3 mt-auto pt-4 border-t border-gray-100 text-sm text-gray-600">
            {project.specs.map((spec, i) => (
              <div key={i} className="flex items-center gap-2">
                <spec.icon className="h-4 w-4 text-[#FFB800]" />
                {spec.label}
              </div>
            ))}
          </div>
        )}

        {project.description && (
          <p className="text-gray-500 text-sm mt-auto pt-4 border-t border-gray-100">
            {project.description}
          </p>
        )}
      </div>
    </div>
  );
}

function OngoingCard({ project }: { project: OngoingProject }) {
  return (
    <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="aspect-[4/3] overflow-hidden relative">
        <div className="absolute top-4 left-4 z-10">
          <StatusBadge status="ongoing" />
        </div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-heading font-bold text-[#3D4F5F] mb-4">{project.title}</h3>
        <ul className="space-y-3 mt-auto">
          {project.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
              {feature.toLowerCase().includes("pool") ? (
                <Waves className="h-4 w-4 text-blue-500 shrink-0" />
              ) : (
                <HomeIcon className="h-4 w-4 text-[#FFB800] shrink-0" />
              )}
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function UpcomingCard({ project }: { project: UpcomingProject }) {
  return (
    <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="aspect-[4/3] overflow-hidden relative">
        <div className="absolute top-4 left-4 z-10">
          <StatusBadge status="upcoming" />
        </div>
        <img
          src={project.image}
          alt={`${project.location} - ${project.type}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
          <MapPin className="h-4 w-4 text-[#FFB800]" />
          {project.location}
        </div>
        <h3 className="text-xl font-heading font-bold text-[#3D4F5F]">{project.type}</h3>
      </div>
    </div>
  );
}

// --- Main Page ---

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* ===== Page Header ===== */}
      <section className="bg-[#3D4F5F] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            Our Projects
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            From concept to completion — explore the homes we have built, the builds underway,
            and the developments coming soon.
          </p>
        </div>
      </section>

      {/* ===== Completed Projects ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading>Completed Projects</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project, i) => (
              <CompletedCard key={i} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Ongoing Projects ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading>Ongoing Projects</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ongoingProjects.map((project, i) => (
              <OngoingCard key={i} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Upcoming Projects ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading>Upcoming Projects</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingProjects.map((project, i) => (
              <UpcomingCard key={i} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Tallawong — House & Land Packages ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading>Tallawong — House & Land Packages</SectionHeading>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Standard Lots */}
            <div className="bg-[#3D4F5F] text-white rounded-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
              <div className="relative z-10 p-8 md:p-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-heading font-bold">Standard Lots</h3>
                  <StatusBadge status="house-land" />
                </div>
                <p className="text-white/70 text-sm mb-2">2 Projects</p>
                <p className="text-xl font-semibold text-[#FFB800] mb-6">
                  30 sq Double Storey
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm text-white/90 mb-8">
                  <div className="flex items-center gap-2">
                    <Bed className="h-4 w-4 text-[#FFB800]" /> 5 Bedroom
                  </div>
                  <div className="flex items-center gap-2">
                    <Tv className="h-4 w-4 text-[#FFB800]" /> 1 Media
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="h-4 w-4 text-[#FFB800]" /> 3 Bath
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="h-4 w-4 text-[#FFB800]" /> 2 Garage
                  </div>
                </div>
                <p className="text-white/60 text-sm border-t border-white/10 pt-4">
                  All with decent inclusions
                </p>
              </div>
            </div>

            {/* Corner Lots */}
            <div className="bg-[#3D4F5F] text-white rounded-2xl overflow-hidden relative">
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-[#FFB800]/10 blur-3xl" />
              <div className="relative z-10 p-8 md:p-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-heading font-bold">Corner Lots</h3>
                  <StatusBadge status="house-land" />
                </div>
                <p className="text-white/70 text-sm mb-2">2 Projects</p>
                <p className="text-xl font-semibold text-[#FFB800] mb-6">
                  29 sq Double Storey
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm text-white/90 mb-8">
                  <div className="flex items-center gap-2">
                    <Bed className="h-4 w-4 text-[#FFB800]" /> 5 Bedroom
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="h-4 w-4 text-[#FFB800]" /> 3 Bath
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="h-4 w-4 text-[#FFB800]" /> 2 Garage
                  </div>
                </div>
                <p className="text-white/60 text-sm border-t border-white/10 pt-4">
                  All with decent inclusions
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <Button
              asChild
              size="lg"
              className="bg-[#FFB800] text-[#3D4F5F] hover:bg-[#FFB800]/90 font-semibold h-14 px-10 rounded-none"
            >
              <Link href="/contact">
                Register Interest
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
