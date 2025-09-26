// src/content/servicesContent.ts
import { Monitor, Smartphone, BarChart3, Workflow } from "lucide-react";

export const servicesContent = {
  header: {
    smallText: "Our Services",
    title: "Crafting Your Digital Ecosystem",
    description:
      "From concept to deployment, we build digital solutions that scale with your business and exceed your expectations.",
  },

  services: [
    {
      icon: Monitor,
      title: "Website Building",
      description:
        "SEO-optimized, responsive, future-ready websites that convert visitors into customers.",
      features: ["Custom Design", "SEO Optimized", "Mobile Responsive", "Fast Loading"],
      gradient: "from-primary to-primary-glow",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description:
        "Native & cross-platform applications that deliver exceptional user experiences.",
      features: ["iOS & Android", "Cross-platform", "Real-time Features", "App Store Ready"],
      gradient: "from-primary to-accent",
    },
    {
      icon: BarChart3,
      title: "Dashboards & Analytics",
      description:
        "Business intelligence, analytics, and reporting solutions that drive decisions.",
      features: ["Real-time Data", "Custom Reports", "Data Visualization", "API Integration"],
      gradient: "from-accent to-primary-glow",
    },
    {
      icon: Workflow,
      title: "Projects & Guidance",
      description:
        "Guidance and support for final year B.Tech students on project selection, design, and implementation.",
      features: ["AI & ML", "Embedded & IOT", "Code Review", "Presentation Skills"],
      gradient: "from-accent to-accent-glow",
    },
  ],

  consultation: {
    title: "Book a Free Consultation",
    description: "Please provide your details to book a consultation.",
    buttonText: "Book Consultation",
    waNumber: "9491147433",
  },
};
