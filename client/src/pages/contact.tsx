import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Phone number is required"),
  message: z.string().min(10, "Please provide more details"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    console.log(data);
    toast({
      title: "Message Sent",
      description: "Thank you for contacting Nebesa Homes. We will get back to you shortly.",
    });
    form.reset();
  }

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center bg-primary">
        <div className="absolute inset-0 bg-primary/95 z-10" />
        <div className="container mx-auto px-4 md:px-8 relative z-20 text-center">
          <div className="max-w-3xl mx-auto space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">
              Contact Us
            </h1>
            <p className="text-xl text-white/80 font-light">
              Let's build something exceptional together. Get in touch with our team today.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">Get in Touch</h2>
              <h3 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6">
                We'd love to hear from you
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Whether you're looking to build a new custom home, develop a duplex, or add a granny flat, the Nebesa Homes team is ready to bring your vision to life.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-heading font-bold text-primary">Email Us</h4>
                  <a href="mailto:info@nebesahomes.au" className="text-muted-foreground hover:text-accent transition-colors">
                    info@nebesahomes.au
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-heading font-bold text-primary">Call Us</h4>
                  <p className="text-muted-foreground">
                    Connect with Krish or Sekhar
                  </p>
                  {/* Note: Dummy phone number used as requested by user's note to connect via personal email/whatsapp for now */}
                  <a href="tel:+61400000000" className="text-muted-foreground hover:text-accent transition-colors font-medium">
                    +61 400 000 000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-heading font-bold text-primary">Office</h4>
                  <p className="text-muted-foreground">
                    Sydney, Australia
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t">
              <h4 className="text-lg font-heading font-bold text-primary mb-4">Follow Our Journey</h4>
              <a 
                href="https://www.facebook.com/share/1BvrdVVMLa/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1877F2] text-white hover:bg-[#1877F2]/90 transition-colors shadow-md hover:shadow-lg"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border">
            <h3 className="text-2xl font-heading font-bold text-primary mb-8">Send us a message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className="bg-secondary/50 border-secondary h-12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" type="email" className="bg-secondary/50 border-secondary h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="0400 000 000" type="tel" className="bg-secondary/50 border-secondary h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How can we help?</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your project..." 
                          className="min-h-[150px] bg-secondary/50 border-secondary resize-y" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 h-14 text-lg mt-4">
                  Send Enquiry <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </Form>
          </div>
          
        </div>
      </section>
    </div>
  );
}
