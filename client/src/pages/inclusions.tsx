import { CheckCircle2, Download, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import tenderPdf from "@assets/Nebesa_Homes_Tender_-_Nov_2025_1776342238287.pdf";

const inclusions = [
  {
    title: "Site Preparation & Services",
    items: [
      "Contour survey, slab peg out, soil testing, engineer's design",
      "Earthworks (cut & fill up to 1m), sediment control, trade waste removal",
      "Temporary fencing, site toilet, scaffolding",
      "Service connections: electrical, internet, gas, water, stormwater, sewer",
      "Concrete driveway (max 5.5m setback)",
      "Rainwater tank connected to toilets and garden tap",
      "Insurance: iCare HBCF, public liability, contract works",
      "Professional cleaning before handover",
      "6-year structural warranty + 90-day defect period",
    ]
  },
  {
    title: "BASIX Compliance",
    items: [
      "BASIX certification and 2000L slimline rainwater tank as per Basix*",
      "Wall and ceiling insulation (excludes garage, alfresco, porch, balcony)",
      "3 gas connections: hot water, cooktop, internal heating",
    ]
  },
  {
    title: "Structural Integrity",
    items: [
      "Concrete slab for M/H classification site as per structural engineer design*",
      "Tiled slab to porch & alfresco with brick piers",
      "Integrated slab for rainwater tank & AC unit",
      "T2 90x45mm stud frames (ground & first floor)",
      "Ceiling heights: 2750mm (GF), 2720mm (FF)",
      "Termite protection, acrylic render to façade",
      "Structural steel beams as required",
    ]
  },
  {
    title: "External Finishes",
    items: [
      "PGH face bricks (Nebesa classic range)",
      "Monier/Boral roof tiles or Colorbond",
      "Garage: plasterboard lining, sectional door with 2 remotes",
      "Alfresco with plasterboard ceiling",
      "2 garden taps and BBQ gas point",
    ]
  },
  {
    title: "Staircase & Painting",
    items: [
      "Victorian Ash timber stairs with stainless steel handrail & glass balustrade",
      "Dulux premium paint (3 coats) to all surfaces",
      "White gloss enamel to doors and woodwork",
    ]
  },
  {
    title: "Flooring",
    items: [
      "Ground Floor: Porcelain/ceramic tiles (up to 600x1200mm)",
      "First Floor: 12mm laminate/carpet with 6mm rubber underlay",
    ]
  },
  {
    title: "Fascia, Gutter & Windows",
    items: [
      "Metal fascia and guttering",
      "PVC painted downpipes",
      "Powder-coated aluminum windows and stacker/sliding doors",
      "Obscure glazing to bathrooms and powder rooms",
    ]
  },
  {
    title: "Hot Water System",
    items: [
      "Rheem 26 Continuous Flow Gas Water Heater with powder-coated cover",
    ]
  },
  {
    title: "Bathrooms & Laundry",
    items: [
      "Designer vanities with 40mm stone tops",
      "1700mm freestanding bathtub, rain showers, chrome tapware",
      "Full-height tiling, waterproofing, tiled niches",
      "45L stainless steel laundry tub, stone benchtop, laminate cabinetry",
    ]
  },
  {
    title: "Kitchen & Pantry",
    items: [
      "40mm Quartz stone benchtop with waterfall edges",
      "Polyurethane soft-close cabinetry",
      "Bosch appliances: cooktop, oven, rangehood, dishwasher",
      "Designer undermount sink and mixer",
      "Walk-in pantry with 4 shelves",
      "Cold water point to fridge space",
      "900mm x 2000mm island bench",
    ]
  },
  {
    title: "Interior Fitout",
    items: [
      "Nebesa® range entry and internal doors with privacy locks",
      "MDF shelving with drawers in robes",
      "Laminated linen shelves, stainless steel doorstops",
      "Half-splayed skirtings and architraves",
    ]
  },
  {
    title: "Air Conditioning",
    items: [
      "Actron Air 15kW system with 4 zones",
      "10 outlets (Double Storey) / 8 outlets (Single Storey)",
    ]
  },
  {
    title: "Electrical & Security",
    items: [
      "LED downlights throughout",
      "Power points: kitchen, living, bedrooms, bathrooms, garage, external",
      "2 telephone, 3 TV, 4 data points",
      "LCD intercom, Bosch/Hills alarm with 3 sensors",
      "Spotlights and façade lighting",
    ]
  }
];

const upgrades = [
  "Black finish for bathroom/laundry accessories",
  "Push-pull smart lock to entry door",
  "Overhead cupboard in laundry",
  "Walk-in robe with dresser to master bedroom",
  "Double garage (plan-specific)",
  "Colored concrete driveway (30 sqm)",
  "Double pull-out kitchen bin",
  "1x void (as per plan), 2 bulkheads, 3 niches",
  "Aluminum frame stacker doors to alfresco & balcony",
  "4 truckloads (instead of 2)",
  "3 sensor lights, 3 extra power points, 1 extra gas point, 1 extra TV point",
  "Driveway extended to road *conditions apply",
];

export default function Inclusions() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-[#3D4F5F] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">Standard Inclusions</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Every Nebesa home reflects trust, pride, and lasting joy. From the foundation to the final flourish, we build with technical excellence and heartfelt intention.
          </p>
          <Button asChild size="lg" className="bg-[#FFB800] text-[#3D4F5F] hover:bg-[#FFB800]/90 font-bold h-14 px-8 text-base">
            <a href={tenderPdf} download="Nebesa_Homes_Standard_Inclusions.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
              <Download className="h-5 w-5" />
              Download Inclusions PDF
            </a>
          </Button>
        </div>
      </section>

      {/* Special Upgrades Section (Highlighted) */}
      <section className="py-16 md:py-24 bg-accent/10 border-b border-accent/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              <div className="inline-flex items-center justify-center p-3 bg-accent rounded-xl text-accent-foreground mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">Special Upgrades</h2>
              <p className="text-muted-foreground text-lg">
                Included at no extra cost to give your new home that premium finish it deserves.
              </p>
            </div>
            <div className="md:w-2/3">
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                {upgrades.map((upgrade, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-card p-4 rounded-lg shadow-sm border border-border">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="font-medium text-foreground">{upgrade}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Inclusions Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Standard Inclusions</h2>
            <p className="text-muted-foreground text-lg">
              Our comprehensive standard inclusions cover everything you need for a complete, move-in ready home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {inclusions.map((section, index) => (
              <div key={index} className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full">
                <div className="bg-secondary/50 px-6 py-4 border-b border-border">
                  <h3 className="text-xl font-heading font-bold text-primary">{section.title}</h3>
                </div>
                <div className="p-6 flex-1">
                  <ul className="space-y-4">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        <span className="leading-relaxed text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-6 bg-secondary rounded-xl text-center border border-border max-w-4xl mx-auto">
            <p className="text-sm text-muted-foreground italic">
              Please note: Final inclusions may vary depending on site conditions, custom design choices, and architectural plans. Please talk to us for further information.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
