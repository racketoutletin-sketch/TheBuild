import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export const footerLinks = {
  services: [
    { name: "Website Development" },
    { name: "Mobile Apps" },
    { name: "Dashboards" },
    { name: "AI Solutions" },
    { name: "Projects" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ],
  resources: [
    { name: "Case Studies", href: "#portfolio" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Process", href: "#process" },
  ],
};

export const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#", label: "Email" },
];
