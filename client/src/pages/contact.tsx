import { useState } from "react";
import { Building2, ExternalLink, Mail, MapPin, Shield, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus(null);

    try {
      const res = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send");
      setSubmitStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", phone: "", interest: "", message: "" });
    } catch (err: any) {
      setSubmitStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-[#3D4F5F] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Tell us about your project — we respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info — Left Column */}
            <div className="space-y-10 text-center lg:text-left">
              <div>
                <h2 className="text-3xl font-heading font-bold text-[#3D4F5F] mb-4">
                  Get in Touch
                </h2>
                <p className="text-gray-600 text-lg">
                  We'd love to hear from you. Fill out the form or reach us
                  directly using the details below.
                </p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4 text-left">
                  <div className="p-3 bg-[#FFB800]/10 text-[#FFB800] rounded-lg shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#3D4F5F]">
                      Email
                    </h3>
                    <a
                      href="mailto:info@nebesahomes.au"
                      className="text-[#FFB800] font-medium hover:underline"
                    >
                      info@nebesahomes.au
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 text-left">
                  <div className="p-3 bg-[#FFB800]/10 text-[#FFB800] rounded-lg shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#3D4F5F]">
                      Location
                    </h3>
                    <p className="text-gray-600">
                      Sydney, NSW
                      <br />
                      Australia
                    </p>
                  </div>
                </div>

                {/* Builder Licence */}
                <div className="flex items-start gap-4 text-left">
                  <div className="p-3 bg-[#FFB800]/10 text-[#FFB800] rounded-lg shrink-0">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#3D4F5F]">
                      Builder Licence
                    </h3>
                    <p className="text-gray-600">380365C</p>
                  </div>
                </div>
              </div>

              {/* Tender Portal */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <div className="flex items-center gap-3 mb-3 justify-center lg:justify-start">
                  <Building2 className="h-6 w-6 text-[#3D4F5F]" />
                  <h3 className="font-heading font-bold text-xl text-[#3D4F5F]">
                    Tender Portal
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Are you a contractor or supplier? We have a dedicated portal
                  for tender documents and supplier communication.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-[#3D4F5F] text-[#3D4F5F] hover:bg-[#3D4F5F] hover:text-white"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Access Tender Portal
                </Button>
              </div>
            </div>

            {/* Contact Form — Right Column */}
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-heading font-bold text-[#3D4F5F] mb-6 text-center lg:text-left">
                Send a Message
              </h3>
              <form
                className="space-y-6"
                onSubmit={handleSubmit}
                name="contact"
                data-netlify="true"
              >
                <input type="hidden" name="form-name" value="contact" />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="0400 000 000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest">I'm interested in...</Label>
                  <select
                    id="interest"
                    name="interest"
                    className="flex h-10 w-full items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="new-build">New Build</option>
                    <option value="knockdown-rebuild">
                      Knockdown &amp; Rebuild
                    </option>
                    <option value="duplex">Duplex</option>
                    <option value="granny-flat">Granny Flat</option>
                    <option value="house-land">House &amp; Land Package</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project — block size, location, requirements..."
                    className="min-h-[120px]"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={submitting}
                  className="w-full bg-[#FFB800] text-[#3D4F5F] hover:bg-[#FFB800]/90 h-12 font-bold text-base"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </Button>

                {/* Success message */}
                {submitStatus === "success" && (
                  <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <p className="text-sm">
                      Thank you for reaching out! We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                {/* Error message */}
                {submitStatus === "error" && (
                  <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    <p className="text-sm">
                      Something went wrong. Please try again or email us directly at{" "}
                      <a href="mailto:info@nebesahomes.au" className="underline font-medium">
                        info@nebesahomes.au
                      </a>
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
