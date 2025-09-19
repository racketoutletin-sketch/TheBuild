"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Monitor,
  Smartphone,
  BarChart3,
  Zap,
  CheckCircle,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Monitor,
      title: "Website Building",
      description:
        "SEO-optimized, responsive, future-ready websites that convert visitors into customers.",
      features: [
        "Custom Design",
        "SEO Optimized",
        "Mobile Responsive",
        "Fast Loading",
      ],
      gradient: "from-primary to-primary-glow",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description:
        "Native & cross-platform applications that deliver exceptional user experiences.",
      features: [
        "iOS & Android",
        "Cross-platform",
        "Real-time Features",
        "App Store Ready",
      ],
      gradient: "from-accent to-accent-glow",
    },
    {
      icon: BarChart3,
      title: "Dashboards & Analytics",
      description:
        "Business intelligence, analytics, and reporting solutions that drive decisions.",
      features: [
        "Real-time Data",
        "Custom Reports",
        "Data Visualization",
        "API Integration",
      ],
      gradient: "from-primary to-accent",
    },
  ];

  const [name, setName] = useState("");
  const [cellNo, setCellNo] = useState("");
  const [email, setEmail] = useState("");
  const [workType, setWorkType] = useState("");

  const handleSubmit = () => {
    if (name && cellNo && email && workType) {
      const message = `I would like to book a free consultation.
Name: ${name}
Cell Number: ${cellNo}
Email: ${email}
Type of Work: ${workType}`;
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/9491147433?text=${encodedMessage}`, "_blank");
    } else {
      alert("Please provide all the information to book a consultation.");
    }
  };

  return (
    <section id="services" className="py-16 gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Our Services</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Crafting Your{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Digital Ecosystem
            </span>
          </h2>

          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            From concept to deployment, we build digital solutions that scale
            with your business and exceed your expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative glass rounded-2xl p-8 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon */}
              <div
                className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} mb-6 shadow-elegant`}
              >
                <service.icon className="h-8 w-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              <p className="text-foreground/80 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm"
                  >
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-foreground/70">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA with Dialog */}
        <div className="text-center mt-12">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button size="lg" className="px-8 py-6 text-lg font-semibold">
                Book a Free Consultation
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="glass">
              <AlertDialogHeader>
                <AlertDialogTitle>Book a Free Consultation</AlertDialogTitle>
                <AlertDialogDescription>
                  Please provide your details to book a consultation.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="cellNo" className="text-right">
                    Cell Number
                  </Label>
                  <Input
                    type="number"
                    id="cellNo"
                    value={cellNo}
                    onChange={(e) => setCellNo(e.target.value)}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="workType" className="text-right">
                    Type of Work
                  </Label>
                  <Input
                    id="workType"
                    value={workType}
                    onChange={(e) => setWorkType(e.target.value)}
                    className="col-span-3"
                  />
                </div>
              </div>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleSubmit}>
                  Book Consultation
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
