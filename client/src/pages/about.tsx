import {
  Award,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Eye,
  Handshake,
  HardHat,
  MessageSquare,
  PaintBucket,
  Pencil,
  Shield,
  Users,
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import storyImg from "@assets/rousehill-3.jpg";
import teamImg from "@assets/rousehill-25.jpg";

const values = [
  {
    icon: <Eye className="h-8 w-8" />,
    title: "Honesty & Transparency",
    description:
      "No hidden costs, no surprises. We keep you informed at every single step of the building journey.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Customer-Driven Design",
    description:
      "Your vision is our blueprint. We listen, advise, and adapt to create a space that perfectly suits your lifestyle.",
  },
  {
    icon: <HardHat className="h-8 w-8" />,
    title: "Quality Workmanship",
    description:
      "From the foundation to the final coat of paint, we never cut corners. Every detail is executed to the highest standard.",
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Clear Communication",
    description:
      "Regular updates, responsive support, and honest conversations throughout your entire build.",
  },
];

const processSteps = [
  {
    icon: <Handshake className="h-7 w-7" />,
    step: "01",
    title: "Consultation",
    description:
      "We meet to understand your vision, lifestyle, budget and block.",
  },
  {
    icon: <Pencil className="h-7 w-7" />,
    step: "02",
    title: "Design",
    description:
      "Collaborate on floor plans, finishes, and inclusions until every detail is right.",
  },
  {
    icon: <PaintBucket className="h-7 w-7" />,
    step: "03",
    title: "Build",
    description:
      "Construction begins with regular updates and transparent progress reporting.",
  },
  {
    icon: <ClipboardCheck className="h-7 w-7" />,
    step: "04",
    title: "Handover",
    description:
      "Final inspections complete, keys in hand — welcome to your new Nebesa home.",
  },
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-[#3D4F5F] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            About Nebesa Homes
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Two passionate friends. One shared vision. Homes built on trust,
            quality, and care.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#FFB800]/10 transform -rotate-3 rounded-2xl -z-10" />
              <img
                src={storyImg}
                alt="Nebesa Homes — a home built with care"
                className="w-full h-auto rounded-xl shadow-xl"
              />
            </div>

            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#3D4F5F]">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Nebesa Homes was founded by two passionate friends in Sydney
                  who shared a common vision: to change the way homes are built.
                </p>
                <p>
                  Having experienced the construction industry from various
                  angles, we saw an opportunity to create a building experience
                  centred entirely around the customer — one built on trust,
                  clear communication, and exceptional quality.
                </p>
                <p>
                  Our philosophy is simple and drives everything we do:{" "}
                  <strong className="text-[#3D4F5F]">
                    "Build every home as if we are building our own."
                  </strong>
                </p>
                <p>
                  Over the past 3 years, we have been delivering premium homes
                  across Western Sydney, earning the trust of families who
                  deserve nothing less than the best.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#3D4F5F] mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg">
              These principles guide our work daily, ensuring we deliver not
              just a house, but a home you'll love for years to come.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div
                key={i}
                className="bg-white p-8 text-center rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center p-4 bg-[#FFB800]/10 rounded-full mb-6 text-[#FFB800]">
                  {value.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-[#3D4F5F] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Nebesa Standard */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 order-2 md:order-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#3D4F5F]">
                The Nebesa Standard
              </h2>
              <p className="text-lg text-gray-600">
                We don't compromise on quality. From the foundation to the final
                coat of paint, we work with trusted tradespeople and premium
                materials to deliver homes that stand the test of time.
              </p>

              <div className="space-y-6 pt-2">
                <div className="flex gap-4 items-start text-left">
                  <div className="flex-shrink-0 mt-1 text-[#FFB800]">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-[#3D4F5F]">
                      Builder Licence: 380365C
                    </h4>
                    <p className="text-gray-600">
                      Fully licensed and insured. We operate with complete
                      professional compliance and accountability.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start text-left">
                  <div className="flex-shrink-0 mt-1 text-[#FFB800]">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-[#3D4F5F]">
                      HIA Member
                    </h4>
                    <p className="text-gray-600">
                      Proud members of the Housing Industry Association,
                      adhering to the highest industry standards and best
                      practices.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start text-left">
                  <div className="flex-shrink-0 mt-1 text-[#FFB800]">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-[#3D4F5F]">
                      Premium Materials & Trusted Tradespeople
                    </h4>
                    <p className="text-gray-600">
                      We source only the best materials and partner with
                      experienced, reliable tradespeople across every discipline.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative order-1 md:order-2">
              <img
                src={teamImg}
                alt="Nebesa Homes quality craftsmanship"
                className="w-full h-auto rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#3D4F5F] mb-4">
              Our Process
            </h2>
            <p className="text-gray-600 text-lg">
              From the first conversation to handing over the keys, here is how
              we bring your home to life.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, i) => (
              <div key={i} className="relative text-center">
                {/* Connector line */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-[#FFB800]/30" />
                )}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#3D4F5F] text-white mb-6 relative z-10">
                  {item.icon}
                </div>
                <div className="text-sm font-bold text-[#FFB800] tracking-widest mb-2">
                  STEP {item.step}
                </div>
                <h3 className="text-xl font-heading font-bold text-[#3D4F5F] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#3D4F5F] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Building2 className="h-12 w-12 text-[#FFB800] mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Ready to start your project?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
            Let's discuss your vision. Whether you're building new, knocking
            down and rebuilding, or exploring your options — we're here to help.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#FFB800] text-[#3D4F5F] hover:bg-[#FFB800]/90 text-base h-14 px-10 font-bold"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
