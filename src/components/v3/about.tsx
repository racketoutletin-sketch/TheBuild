// App.tsx
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
} from "./icons";

import {
  teamMembers,
  techStack,
  aboutSection,
  whoWeAreSection,
  whyChooseUs,
  processSteps,
} from "../../content/aboutContent";

// Section Component
interface SectionProps {
  title: string;
  subtitle?: string;
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
}) => (
  <section className="py-10 sm:py-14">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${titleColor}`}>
          {title}
        </h2>
        {subtitle && <p className={`mt-4 text-lg font-semibold ${subtitleColor}`}>{subtitle}</p>}
        <div className="mt-6 mx-auto w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
      </div>
      {children}
    </div>
  </section>
);

// ProcessStep Component
interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  Icon: React.ElementType;
  isReversed?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, title, description, Icon, isReversed = false }) => {
  const alignmentClass = isReversed ? "md:flex-row-reverse" : "md:flex-row";
  const textAlignmentClass = isReversed ? "md:text-right" : "md:text-left";

  return (
    <div className={`flex flex-col md:flex-row items-center my-12 relative ${alignmentClass}`}>
      <div className="flex-1 w-full md:w-5/12 p-8 bg-card border border-primary rounded-lg shadow-card">
        <div className={`text-center ${textAlignmentClass}`}>
          <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>

      <div
        className={`absolute top-1/2 -translate-y-1/2 w-24 h-24 bg-background border-4 border-primary rounded-full flex items-center justify-center z-10
          ${step % 2 !== 0 ? "right-0 md:left-1/2 translate-x-1/2 md:-translate-x-1/2" : "left-0 md:left-1/2 -translate-x-1/2"}`}
      >
        <Icon className="w-10 h-10 text-primary" />
      </div>

      <div className="flex-1 w-full md:w-5/12"></div>
    </div>
  );
};

// TeamMemberCard Component
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

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, imageUrl, socials }) => (
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
          <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors duration-200">
            <GithubIcon className="w-6 h-6" />
          </a>
        )}
        {socials.linkedin && (
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors duration-200">
            <LinkedinIcon className="w-6 h-6" />
          </a>
        )}
        {socials.portfolio && (
          <a href={socials.portfolio} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors duration-200">
            <PortfolioIcon className="w-6 h-6" />
          </a>
        )}
      </div>
    </div>
  </div>
);

// TechPill Component
interface TechPillProps {
  name: string;
}

const TechPill: React.FC<TechPillProps> = ({ name }) => (
  <div className="relative group">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
    <span className="relative inline-flex items-center px-6 py-2 font-semibold text-white bg-accent rounded-full">{name}</span>
  </div>
);

// App Component
const App: React.FC = () => (
  <div className="bg-background text-foreground min-h-screen font-sans antialiased gradient-subtle">
    <main className="pt-24 px-4 sm:px-6 lg:px-8">
      {/* About Section */}
      <section id="about" className="text-center py-10 sm:py-5">
        <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground">
          About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">The Build</span>
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-muted-foreground py-8">
          {aboutSection.description}
        </p>
      </section>

      {/* Who We Are */}
      <Section title={whoWeAreSection.title} subtitle={whoWeAreSection.subtitle}>
        <p className="max-w-4xl mx-auto text-center text-muted-foreground mb-16">
          {whoWeAreSection.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-center max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section title="Why Choose Us?" subtitle="Our core philosophy">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {whyChooseUs.map((item, index) => {
            const IconMap = { CodeIcon, UsersIcon, RocketIcon };
            const IconComponent = IconMap[item.Icon as keyof typeof IconMap];
            return (
              <div key={index} className="bg-card p-8 rounded-lg border border-primary/50">
                <IconComponent className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Tech Stack */}
      <Section title="What We Make" subtitle="Our technological playground">
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {techStack.map((tech) => (
            <TechPill key={tech} name={tech} />
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section title="How We Make It" subtitle="Our blueprint for success">
        <div id="process" className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0"></div>
          {processSteps.map((step) => {
            const IconMap = { TargetIcon, PenToolIcon, LayersIcon, RocketIcon };
            const IconComponent = IconMap[step.Icon as keyof typeof IconMap];
            return <ProcessStep key={step.step} {...step} Icon={IconComponent} />;
          })}
        </div>
      </Section>
    </main>
  </div>
);

export default App;
