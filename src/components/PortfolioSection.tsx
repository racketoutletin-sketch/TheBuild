import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Filter, ArrowRight } from "lucide-react";
import { link } from "fs";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filters = ["All", "Websites", "Apps", "Dashboards", "AI"];
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Websites",
      description: "Modern online store with advanced filtering, payment integration, and admin dashboard.",
      image: "/ecommerce.png",
      tags: ["React", "RazorPay", "Django"],
      link: "https://racketoutlet.in",
      gradient: "from-primary to-primary-glow",
    },
    {
      id: 2,
      title: "Racketek Academy",
      category: "Dashboards",
      description: "Comprehensive management system for Racketek Academy, including student management, scheduling, and performance tracking.",
        image: "/academy.png",
      tags: ["Next.js", "Supabase", "Tailwind CSS"],
      link: "https://racketek-academy.vercel.app",
      gradient: "from-primary-glow to-accent-glow",
    },
    {
      id: 3,
      title: "Tournament365",
      category: "Apps",
      description: "Tournament Management platform for Badminton and Tennis, covering end-to-end tournament lifecycle.",
      image: "tournment.png",
      tags: ["PostgresSql", "React", "Node.js"],
      link: "https://tournament365.in",
      gradient: "from-accent to-primary",
    },
    {
      id: 4,
      title: "Not Yet Deployed",
      category: "AI",
      description: "Coming Soon",
      image: "comingsoon.png",
      tags: ["Open AI", "Python", "React", ],
      link: "#",
      gradient: "from-accent to-primary",
    },
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-8 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Filter className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Our Portfolio</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Our Digital{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Creations
            </span>
          </h2>
          
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-12">
            Discover how we've helped businesses transform their ideas into powerful 
            digital experiences that drive growth and success.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "hero" : "glass"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className="transition-smooth"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative glass rounded-2xl overflow-hidden hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.gradient}`} />
                  <span className="text-sm text-foreground/60">{project.category}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-foreground/80 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-muted rounded-md text-xs font-medium text-foreground/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button variant="ghost" size="sm" className="group/btn w-full justify-between" onClick={() => window.open(project.link, "_blank")}>
                  Visit Website
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to build your success story?
          </h3>
          <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together. 
            Every great digital experience starts with a conversation.
          </p>
          <Button variant="hero" size="lg" className="group" onClick={() => window.location.href='#contact'}>
            Start Your Project
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;