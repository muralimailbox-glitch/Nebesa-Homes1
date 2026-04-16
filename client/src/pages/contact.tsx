import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-20 md:py-24">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl">
            Ready to start your building journey? Reach out to our team today to discuss your next project.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-4">Get in Touch</h2>
                <p className="text-muted-foreground text-lg">
                  We'd love to hear from you. Fill out the form or reach us directly using the details below.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 text-accent rounded-lg shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary">Email Us</h3>
                    <p className="text-muted-foreground mb-1">For all general and building inquiries:</p>
                    <a href="mailto:info@nebesahomes.au" className="text-accent font-medium hover:underline">
                      info@nebesahomes.au
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 text-accent rounded-lg shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary">Office</h3>
                    <p className="text-muted-foreground">
                      Sydney, NSW<br />
                      Australia
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-secondary rounded-xl border border-border mt-8">
                <h3 className="font-heading font-bold text-xl text-primary mb-2">Are you a contractor or supplier?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We have a dedicated portal for tender documents and supplier communication.
                </p>
                <Button variant="outline" className="w-full bg-background border-border hover:bg-accent/10 hover:text-accent hover:border-accent/30">
                  Access Tender Portal
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">Send a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="bg-background" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-background" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="0400 000 000" className="bg-background" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest">I'm interested in...</Label>
                  <select 
                    id="interest" 
                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="" disabled selected>Select an option</option>
                    <option value="new-build">New Build Custom Home</option>
                    <option value="knockdown">Knockdown & Rebuild</option>
                    <option value="duplex">Duplex / Multi-dwelling</option>
                    <option value="granny-flat">Granny Flat</option>
                    <option value="house-land">House & Land Package</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us a bit about your project block, location, or requirements..." 
                    className="min-h-[120px] bg-background" 
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12">
                  Send Message
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
