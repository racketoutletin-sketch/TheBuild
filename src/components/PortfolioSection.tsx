import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Filter, ArrowRight, ArrowLeft } from "lucide-react";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const scrollRef = useRef<HTMLDivElement>(null);

  const filters = ["All", "Websites", "Apps", "Dashboards", "AI"];

  const projects = [
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
      title: "Not Yet Deployed",
      category: "AI",
      description: "Coming Soon",
      image: "comingsoon.webp",
      tags: ["Open AI", "Python", "React"],
      link: "#",
      gradient: "from-accent to-primary",
    },

  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount =
        window.innerWidth < 768 ? 320 : 380; // scroll size (mobile vs desktop)
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="portfolio" className="py-8 bg-background gradient-subtle">
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
            Discover how we've helped businesses transform their ideas into
            powerful digital experiences that drive growth and success.
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

        {/* Projects Carousel */}
        <div className="relative">
          {/* Left Button */}
          <Button
            variant="glass"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex"
            onClick={() => scroll("left")}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>

          {/* Slider */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-1"
          >
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="min-w-[90%] sm:min-w-[45%] lg:min-w-[30%] group relative glass rounded-2xl overflow-hidden hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
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
                    <div
                      className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.gradient}`}
                    />
                    <span className="text-sm text-foreground/60">
                      {project.category}
                    </span>
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
                  <Button
                    variant="ghost"
                    size="sm"
                    className="group/btn w-full justify-between"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    Visit Website
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <Button
            variant="glass"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex"
            onClick={() => scroll("right")}
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">
            Ready to build your success story?
          </h3>
          <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together.
            Every great digital experience starts with a conversation.
          </p>
          <Button
            variant="hero"
            size="lg"
            className="group"
            onClick={() => (window.location.href = "#contact")}
          >
            Start Your Project
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
