import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, MapPin, MessageCircle, Send, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogClose } from "@/components/ui/dialog";

const ContactSection = () => {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleCallClick = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/9491147433', '_blank');
  };

  const handleMapClick = () => {
    window.open('https://maps.app.goo.gl/PqENjYKE3AsoqCh16', '_blank');
  };

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch("/mail.php", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.status === "success") {
        setDialogOpen(true); // open popup
        form.reset();
      } else {
        setStatus("Error: " + result.message);
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong while sending the message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Get In Touch</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Let's Build{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Something Amazing
              </span>
            </h2>
            
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              Ready to transform your ideas into reality? We're here to help you 
              create digital experiences that make a difference.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-8">
              {[{
                icon: Phone, title: "Call Us", info: "+1 (555) 123-4567", action: "Schedule a call", onClick: () => handleCallClick("+15551234567")
              },{
                icon: MessageCircle, title: "Live Chat", info: "Available 24/7", action: "Start chatting", onClick: handleWhatsAppClick
              },{
                icon: MapPin, title: "Visit Us", info: "Bengaluru, India", action: "Get directions", onClick: handleMapClick
              }].map(contact => (
                <div key={contact.title} className="flex items-center gap-4 group cursor-pointer" onClick={contact.onClick}>
                  <div className="gradient-primary p-3 rounded-lg shadow-elegant group-hover:shadow-glow transition-smooth">
                    <contact.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {contact.title}
                    </h4>
                    <p className="text-foreground/70 text-sm">{contact.info}</p>
                    <p className="text-primary text-xs">{contact.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="glass rounded-2xl p-8 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-6 text-center">
              Start Your Project
            </h3>

            <form className="space-y-6" onSubmit={handleSendMessage}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
                  <Input id="firstName" name="firstName" placeholder="John" className="transition-smooth focus:shadow-card" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
                  <Input id="lastName" name="lastName" placeholder="Doe" className="transition-smooth focus:shadow-card" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                <Input id="email" name="email" type="email" placeholder="john@example.com" className="transition-smooth focus:shadow-card" />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">Service Type</label>
                <Select name="service">
                  <SelectTrigger className="transition-smooth focus:shadow-card">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="website">Website Development</SelectItem>
                    <SelectItem value="app">Mobile App</SelectItem>
                    <SelectItem value="dashboard">Dashboard & Analytics</SelectItem>
                    <SelectItem value="ai">AI Solutions</SelectItem>
                    <SelectItem value="consultation">Consultation</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium mb-2">Project Budget</label>
                <Select name="budget">
                  <SelectTrigger className="transition-smooth focus:shadow-card">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5k-10k">₹5,000 - ₹10,000</SelectItem>
                    <SelectItem value="10k-25k">₹10,000 - ₹25,000</SelectItem>
                    <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
                    <SelectItem value="50k+">₹50,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Project Description</label>
                <Textarea id="message" name="message" placeholder="Tell us about your project, goals, and timeline..." rows={4} className="transition-smooth focus:shadow-card" />
              </div>

              <Button variant="hero" size="lg" className="w-full group" type="submit" disabled={loading}>
                {loading ? "Sending..." : <>
                  <Send className="h-5 w-5" /> Send Message
                  <span className="ml-auto group-hover:translate-x-1 transition-transform">→</span>
                </>}
              </Button>

              {status && (
                <p className={`text-center mt-2 ${status.startsWith("Error") ? "text-red-500" : "text-green-500"}`}>
                  {status}
                </p>
              )}

              <p className="text-xs text-foreground/60 text-center">
                We'll get back to you within 24 hours. Usually much sooner! 🚀
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Message Sent Successfully!</DialogTitle>
            <DialogDescription>
              Thank you for contacting us. We will reach out to you soon. 🚀
            </DialogDescription>
          </DialogHeader>
          <DialogClose asChild>
            <Button className="mt-4 w-full">Close</Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ContactSection;
