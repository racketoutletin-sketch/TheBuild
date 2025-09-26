// src/content/portfolioContent.ts
import { Filter } from "lucide-react";

export const portfolioContent = {
  header: {
    smallText: "Our Portfolio",
    title: "Our Digital Creations",
    description:
      "Discover how we've helped businesses transform their ideas into powerful digital experiences that drive growth and success.",
  },
  filters: ["All", "Websites", "Apps", "Dashboards", "AI", "Projects"],

  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Websites",
      description:
        "Modern online store with advanced filtering, payment integration, and admin dashboard.",
      image: "/ecommerce.webp",
      tags: ["React", "RazorPay", "Django"],
      link: "https://racketoutlet.in",
      gradient: "from-primary to-primary-glow",
    },
    {
      id: 2,
      title: "Racketek Academy",
      category: "Dashboards",
      description:
        "Comprehensive management system for Racketek Academy, including student management, scheduling, and performance tracking.",
      image: "/academy.webp",
      tags: ["Next.js", "Supabase", "Tailwind CSS"],
      link: "https://racketek-academy.vercel.app",
      gradient: "from-primary-glow to-accent-glow",
    },
    {
      id: 3,
      title: "Tournament365",
      category: "Apps",
      description:
        "Tournament Management platform for Badminton and Tennis, covering end-to-end tournament lifecycle.",
      image: "tournment.webp",
      tags: ["PostgresSql", "React", "Node.js"],
      link: "https://tournament365.in",
      gradient: "from-accent to-primary",
    },
    {
      id: 4,
      title: "Internship Platform",
      category: "Websites",
      description: "AI powered Internship platform for students and recruiters",
      image: "internship.webp",
      tags: ["Django", "Python", "React", "Supabase"],
      link: "https://internship-platform-cyan.vercel.app",
      gradient: "from-accent to-primary",
    },
    {
      id: 5,
      title: "IoT Pond Monitoring & Prod Enhancement System",
      category: "Projects",
      description:
        "Smart aquaculture monitoring system with automated alerts and environmental control.",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
      tags: ["Embedded C", "IoT Sensors", "Twilio API", "ESP32", "Blynk", "Mobile App", "Motors"],
      gradient: "from-accent to-primary",
    },
    {
      id: 6,
      title: "Conversational-AI-Simple-FAQ-Bot-LangGraph",
      category: "Projects",
      description:
        "A terminal-based conversational FAQ bot using LangGraph and fuzzy matching.",
      image: "https://i.postimg.cc/J79NwhRg/lang.png",
      tags: ["Python", "LangGraph", "FuzzyWuzzy", "JSON", "CLI"],
      gradient: "from-accent to-primary",
    },
    {
      id: 7,
      title: "AI Plant Doctor",
      category: "Projects",
      description:
        "Comprehensive plant health monitoring system combining AI image recognition with IoT sensors.",
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
      tags: [
        "AI Integration",
        "API Development",
        "Embedded Systems",
        "FastAPI",
        "IoT Systems",
        "Machine Learning",
        "React.js",
        "Supabase",
      ],
      gradient: "from-accent to-primary",
    },
    {
      id: 8,
      title: "Not Yet Deployed",
      category: "AI",
      description: "Coming Soon",
      image: "comingsoon.webp",
      tags: ["Open AI", "Python", "React"],
      link: "#",
      gradient: "from-accent to-primary",
    },
  ],

  cta: {
    title: "Ready to build your success story?",
    description:
      "Let's discuss your project and create something amazing together. Every great digital experience starts with a conversation.",
    buttonText: "Start Your Project",
  },
};
