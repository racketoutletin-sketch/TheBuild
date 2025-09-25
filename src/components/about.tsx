import React from "react";

import {
  CodeIcon,
  UsersIcon,
  RocketIcon,
  TargetIcon,
  PenToolIcon,
  LayersIcon,
  GithubIcon,
  LinkedinIcon,
  PortfolioIcon,
} from "../components/icons";

interface SectionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  titleColor?: string;
  subtitleColor?: string;
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  children,
  titleColor = "text-foreground",
  subtitleColor = "text-muted-foreground",
}) => {
  return (
    <section className="py-10 sm:py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl font-bold tracking-tight ${titleColor}`}
          >
            {title}
          </h2>
          <p className={`mt-4 text-lg font-semibold ${subtitleColor}`}>
            {subtitle}
          </p>
          <div className="mt-6 mx-auto w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </div>
        {children}
      </div>
    </section>
  );
};

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  Icon: React.ElementType;
  isReversed?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  step,
  title,
  description,
  Icon,
  isReversed = false,
}) => {
  const alignmentClass = isReversed ? "md:flex-row-reverse" : "md:flex-row";
  const textAlignmentClass = isReversed ? "md:text-right" : "md:text-left";

  return (
    <div
      className={`flex flex-col md:flex-row items-center my-12 relative ${alignmentClass}`}
    >
      {/* Card Content */}
      <div className="flex-1 w-full md:w-5/12 p-8 bg-card border border-primary rounded-lg shadow-card">
        <div className={`text-center ${textAlignmentClass}`}>
          <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>

      {/* Icon */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-24 h-24 bg-background border-4 border-primary rounded-full flex items-center justify-center z-10
          ${step % 2 !== 0 ? "right-0 md:left-1/2 translate-x-1/2 md:-translate-x-1/2" : "left-0 md:left-1/2 -translate-x-1/2"}`}
      >
        <Icon className="w-10 h-10 text-primary" />
      </div>

      {/* Empty placeholder to maintain spacing */}
      <div className="flex-1 w-full md:w-5/12"></div>
    </div>
  );

};

interface TeamMemberCardProps {
  name: string;
  role: string;
  imageUrl: string;
  socials: {
    github?: string;
    linkedin?: string;
    portfolio?: string;
  };
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  imageUrl,
  socials,
}) => {
  return (
    <div className="group relative bg-card border border-primary rounded-lg overflow-hidden transition-all duration-300 hover:shadow-card transform hover:-translate-y-2">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-foreground">{name}</h3>
        <p className="text-primary">{role}</p>
        <div className="flex justify-center mt-4 space-x-4">
            {socials.github && (
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors duration-200"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
            )}
          {socials.linkedin && (
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors duration-200"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
          )}
          {socials.portfolio && (
            <a
              href={socials.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors duration-200"
            >
              <PortfolioIcon className="w-6 h-6" />
            </a>
          )}
    </div>
    </div>
          </div>
  );
};

interface TechPillProps {
  name: string;
}

const TechPill: React.FC<TechPillProps> = ({ name }) => {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
      <span className="relative inline-flex items-center px-6 py-2 font-semibold text-white bg-accent rounded-full">
        {name}
      </span>
    </div>
  );
};

const App: React.FC = () => {
  const teamMembers = [
    {
      name: "Ram G",
      role: "Founder & CEO",
      imageUrl: "ram.webp",
      socials: {},
    },
    {
      name: "Hari Sai",
      role: "Co Founder & Lead Developer",
      imageUrl: "hari1.webp",
      socials: {
        github: "https://github.com/hari-r31",
        linkedin: "https://www.linkedin.com/in/harisaithatholu",
        portfolio: "https://hari-r31.github.io/Portfolio/",
      },
    },
    {
      name: "Sneha",
      role: "Frontend Developer",
      imageUrl: "sneha.webp",
      socials: {},
    },
    {
      name: "Kumar",
      role: "DevOps Engineer",
      imageUrl: "kumar.webp",
      socials: {},
    },
  ];

  const techStack = [
    "React",
    "Next.js",
    "Node.js",
    "TailwindCSS",
    "Shadcn UI",
    "Supabase",
    "Firebase",
    "GraphQL",
    "TypeScript",
    "Docker",
    "CI/CD",
    "Django",
    "FastAPI",
    "PostgresSQL",
  ];

  return (
    <div className="bg-background text-foreground min-h-screen font-sans antialiased gradient-subtle">
      <main className="pt-24 px-4 sm:px-6 lg:px-8">
        <section id="about" className="text-center py-10 sm:py-5">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              The Build
            </span>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-muted-foreground py-8">
            We are a collective of designers, engineers, and strategists
            crafting digital experiences that fuse artistry with intelligence.
            We don't just build products; we build the future.
          </p>
        </section>

        <Section title="Who We Are" subtitle="Meet the architects of innovation">
          <p className="max-w-4xl mx-auto text-center text-muted-foreground mb-16">
            Our team is our greatest asset. A diverse group of passionate
            creators united by a single mission: to push the boundaries of
            what's possible on the web and beyond. We thrive on complex
            challenges and believe in the transformative power of technology.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-center max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </Section>

        <Section title="Why Choose Us?" subtitle="Our core philosophy">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card p-8 rounded-lg border border-primary/50">
              <CodeIcon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-foreground">
                Technical Excellence
              </h3>
              <p className="text-muted-foreground">
                We write clean, scalable, and future-proof code, leveraging the
                latest technologies to build robust solutions that stand the
                test of time.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg border border-primary/50">
              <UsersIcon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-foreground">
                Client-Centric Partnership
              </h3>
              <p className="text-muted-foreground">
                Your success is our success. We work as an extension of your
                team, ensuring transparency, communication, and alignment at
                every stage.
              </p>
            </div>
            <div
              id="tech-stack"
              className="bg-card p-8 rounded-lg border border-primary/50"
            >
              <RocketIcon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-foreground">
                Innovation at the Core
              </h3>
              <p className="text-muted-foreground">
                We are constantly exploring new frontiers, from advanced AI
                integrations to immersive 3D experiences, to give you a
                competitive edge.
              </p>
            </div>
          </div>
        </Section>

        <Section title="What We Make" subtitle="Our technological playground">
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {techStack.map((tech) => (
              <TechPill key={tech} name={tech} />
            ))}
          </div>
        </Section>

        <Section title="How We Make It" subtitle="Our blueprint for success">
          <div id="process" className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0"></div>
            <ProcessStep
              Icon={TargetIcon}
              step={1}
              title="Discovery & Strategy"
              description="We start by understanding your vision, audience, and goals to create a strategic roadmap for success."
            />
            <ProcessStep
              Icon={PenToolIcon}
              step={2}
              title="Design & Prototyping"
              description="Our design team crafts intuitive, beautiful interfaces and interactive prototypes that bring your vision to life."
              isReversed
            />
            <ProcessStep
              Icon={LayersIcon}
              step={3}
              title="Development & Integration"
              description="Our engineers build your product with precision, integrating cutting-edge technologies for a seamless experience."
            />
            <ProcessStep
              Icon={RocketIcon}
              step={4}
              title="Launch & Optimization"
              description="We deploy your solution and continuously monitor performance, making data-driven optimizations to ensure growth."
              isReversed
            />
          </div>
        </Section>
      </main>
    </div>
  );
};

export default App;
