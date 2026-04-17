import { Link } from "wouter";
import {
  ArrowRight,
  CheckCircle2,
  Home as HomeIcon,
  Building2,
  LayoutGrid,
  DoorOpen,
  Hammer,
  MapPin,
  Shield,
  DollarSign,
  Star,
  MessageCircle,
  ThumbsUp,
  Users,
  BadgeCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import heroImg from "@assets/69_Arncliffe_Ave_Marsden_Park_NEW-02_1776340928340.jpg";
import projectMelonba from "@assets/image_(2)_1776340795106.jpg";
import projectRouseHill from "@assets/Mandyphotography.com.au-4_1776340995680.jpg";
import projectRiverstone from "@assets/image_(8)_1776340795107.jpg";
import philosophyImg from "@assets/rousehill-1.jpg";

/* ───────────────── data ───────────────── */

const services = [
  {
    icon: HomeIcon,
    title: "New Builds",
    desc: "Start fresh with a home designed perfectly for your lifestyle and land.",
  },
  {
    icon: Building2,
    title: "Knockdown & Rebuild",
    desc: "Love your location but not your house? We can help you start over.",
  },
  {
    icon: LayoutGrid,
    title: "Duplexes",
    desc: "Maximise the value of your land with attached or detached duplexes.",
  },
  {
    icon: DoorOpen,
    title: "Granny Flats",
    desc: "Add space for family or create a new income stream in your backyard.",
  },
  {
    icon: Hammer,
    title: "Custom Homes",
    desc: "Architectural builds featuring suspended slabs and premium finishes.",
  },
  {
    icon: MapPin,
    title: "House & Land Packages",
    desc: "Turn-key packages in growing communities with excellent inclusions.",
  },
];

const projects = [
  {
    img: projectMelonba,
    location: "Melonba",
    headline: "33 sq Double Storey",
    specs: "5 Bed \u2022 1 Media \u2022 3 Bath \u2022 2 Garage",
  },
  {
    img: projectRouseHill,
    location: "Rouse Hill",
    headline: "23 sq Double Storey",
    specs: "5 Bed \u2022 1 Media \u2022 3 Bath \u2022 2 Garage",
  },
  {
    img: projectRiverstone,
    location: "Riverstone",
    headline: "Single Storey",
    specs: "3m Ceilings, Decent Inclusions",
  },
];

const reasons = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: DollarSign, label: "Transparent Pricing" },
  { icon: Star, label: "Quality Workmanship" },
  { icon: MessageCircle, label: "Fast Communication" },
  { icon: ThumbsUp, label: "100% Client Satisfaction" },
  { icon: Users, label: "Sydney-Based Team" },
];

/* ───────────────── component ───────────────── */

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* background image + dark overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Luxury custom home by Nebesa Homes"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight max-w-5xl">
            Nebesa Homes{" "}
            <span className="block text-[#FFB800]">
              Homes that rise above
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
            Crafted with precision, honesty and care — the Nebesa way.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#FFB800] text-[#3D4F5F] hover:bg-[#FFB800]/90 font-semibold text-base h-14 px-8 rounded-lg border-none"
            >
              <Link href="/projects">View Our Projects</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold text-base h-14 px-8 rounded-lg"
            >
              <Link href="/contact">Enquire Now</Link>
            </Button>
          </div>

          {/* credentials */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-white/70 text-sm">
            <span className="flex items-center gap-2">
              <BadgeCheck className="h-5 w-5 text-[#FFB800]" />
              Builder Licence 380365C
            </span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="flex items-center gap-2">
              <BadgeCheck className="h-5 w-5 text-[#FFB800]" />
              HIA Member
            </span>
          </div>
        </div>
      </section>

      {/* ── Philosophy ─────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* image */}
            <div className="relative order-2 md:order-1">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={philosophyImg}
                  alt="Modern home interior by Nebesa Homes"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#FFB800]/20 rounded-2xl -z-10" />
            </div>

            {/* text */}
            <div className="order-1 md:order-2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#3D4F5F] leading-snug">
                A simple philosophy:{" "}
                <span className="text-[#FFB800]">
                  Build every home as if it's our own.
                </span>
              </h2>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Nebesa Homes is a custom home building company started by two
                passionate friends. We believe in honesty, transparency, and a
                customer-first approach to design and construction.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Honesty & transparency",
                  "Customer-driven design",
                  "High client satisfaction",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 justify-center md:justify-start"
                  >
                    <CheckCircle2 className="h-6 w-6 text-[#FFB800] shrink-0" />
                    <span className="text-[#3D4F5F] font-medium text-lg">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[#FFB800] font-semibold text-base hover:underline"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Services ──────────────────────────────── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3D4F5F]">
            What We Build
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            From custom luxury homes to smart investment properties, we deliver
            excellence across a diverse range of builds.
          </p>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.title}
                  href="/services"
                  className="group block rounded-2xl border border-gray-200 bg-white p-8 text-center transition-all duration-300 hover:shadow-lg hover:border-[#FFB800]/40"
                >
                  <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#FFB800]/10 text-[#FFB800] group-hover:bg-[#FFB800] group-hover:text-white transition-colors duration-300">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#3D4F5F]">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {s.desc}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#FFB800] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Recent Projects ────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-[#3D4F5F]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Recent Projects
          </h2>
          <p className="mt-4 text-lg text-white/75 max-w-2xl mx-auto">
            Explore our portfolio of completed developments across Sydney.
          </p>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <Link
                key={p.location}
                href="/projects"
                className="group block rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#FFB800]/40 transition-all duration-300"
              >
                {/* image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={`${p.location} project by Nebesa Homes`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* completed badge */}
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-[#FFB800] text-[#3D4F5F] text-xs font-bold px-3 py-1 uppercase tracking-wide">
                    Completed
                  </span>
                </div>

                {/* info */}
                <div className="p-6 text-left">
                  <div className="flex items-center gap-2 text-[#FFB800] text-sm font-semibold mb-2">
                    <MapPin className="h-4 w-4" />
                    {p.location}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {p.headline}
                  </h3>
                  <p className="mt-1 text-white/70 text-sm">{p.specs}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#FFB800] group-hover:underline">
                    View Project <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold text-base h-12 px-8 rounded-lg bg-transparent"
            >
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ──────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3D4F5F]">
            Why Choose Nebesa Homes
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We combine expert craftsmanship with genuine care to deliver an
            experience you can trust from start to finish.
          </p>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {reasons.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.label}
                  className="flex flex-col items-center gap-4 rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFB800]/10 text-[#FFB800]">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="text-sm font-semibold text-[#3D4F5F] leading-tight text-center">
                    {r.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mx-auto max-w-3xl rounded-3xl bg-[#3D4F5F] px-8 py-16 md:py-20 md:px-16 shadow-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to build your dream home?
            </h2>
            <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
              Contact us today to discuss your vision, location, and
              requirements. We're ready to bring your ideas to life.
            </p>
            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="bg-[#FFB800] text-[#3D4F5F] hover:bg-[#FFB800]/90 font-semibold text-base h-14 px-10 rounded-lg border-none"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
