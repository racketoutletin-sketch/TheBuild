// contactContent.ts

import { Phone, MapPin, MessageCircle } from "lucide-react";

export const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    info: "+91 94911 47433 | +91 96159 61999",
    action: "Schedule a call",
    type: "call",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    info: "Available 24/7",
    action: "Start chatting",
    type: "whatsapp",
    link: "https://wa.me/9491147433",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    info: "Bengaluru | Hyderabad, India",
    action: "Get directions",
    type: "map",
    locations: [
      { name: "Bengaluru, India", link: "https://maps.app.goo.gl/PqENjYKE3AsoqCh16" },
      { name: "Hyderabad, India", link: "https://maps.app.goo.gl/z3TLHyRFwpxu3QAz5" },
    ],
  },
];

export const services = [
  "Website Development",
  "Mobile App",
  "Dashboard & Analytics",
  "AI Solutions",
  "Consultation",
];

export const budgets = [
  { label: "₹5,000 - ₹10,000", value: "5k-10k" },
  { label: "₹10,000 - ₹25,000", value: "10k-25k" },
  { label: "₹25,000 - ₹50,000", value: "25k-50k" },
  { label: "₹50,000+", value: "50k+" },
];

export const contactSectionHeader = {
  title: "Let's Build Something Amazing",
  subtitle:
    "Ready to transform your ideas into reality? We're here to help you create digital experiences that make a difference.",
};
