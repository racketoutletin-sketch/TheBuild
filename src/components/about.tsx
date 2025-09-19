import React from "react";

// ================== Icons (Placeholder, replace with actual imports) ==================
import {
  CodeIcon,
  UsersIcon,
  RocketIcon,
  TargetIcon,
  PenToolIcon,
  LayersIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../components/icons";

// ================== Section Component ==================
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
  titleColor = "text-black",
  subtitleColor = "text-gray-400",
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
          <div className="mt-6 mx-auto w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </div>
        {children}
      </div>
    </section>
  );
};

// ================== ProcessStep Component ==================
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
      <div className="flex-1 w-full md:w-5/12 p-8 bg-white border border-purple-500 rounded-lg shadow-lg">
        <div className={`text-center ${textAlignmentClass}`}>
          <h3 className="text-xl font-bold mb-2 text-black">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 w-24 h-24 bg-gray-900 border-4 border-purple-500 rounded-full flex items-center justify-center z-10">
        <Icon className="w-10 h-10 text-purple-500" />
      </div>

      <div className="flex-1 w-full md:w-5/12"></div>
    </div>
  );
};

// ================== TeamMemberCard Component ==================
interface TeamMemberCardProps {
  name: string;
  role: string;
  imageUrl: string;
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  imageUrl,
  // socials,
}) => {
  return (
    <div className="group relative bg-white border border-purple-500 rounded-lg overflow-hidden transition-all duration-300 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-black">{name}</h3>
        <p className="text-purple-500">{role}</p>
        {/* <div className="mt-4 flex justify-center space-x-4">
          <a
            href={socials.twitter}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <TwitterIcon className="w-5 h-5" />
          </a>
          <a
            href={socials.github}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={socials.linkedin}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </div> */}
      </div>
    </div>
  );
};

// ================== TechPill Component ==================
interface TechPillProps {
  name: string;
}

const TechPill: React.FC<TechPillProps> = ({ name }) => {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
      <span className="relative inline-flex items-center px-6 py-2 font-semibold text-white bg-gray-800 rounded-full">
        {name}
      </span>
    </div>
  );
};

// ================== Main App ==================
const App: React.FC = () => {
  const teamMembers = [
    {
      name: "Ram G",
      role: "Founder & CEO",
      imageUrl: "ram.png",
      socials: { github: "#", linkedin: "#", twitter: "#" },
    },
    {
      name: "Hari Sai",
      role: "Co Founder & Lead Developer",
      imageUrl: "hari.png",
      socials: { github: "#", linkedin: "#", twitter: "#" },
    },
        {
      name: "Sneha",
      role: "Frontend Developer",
      imageUrl: "https://picsum.photos/seed/samantha/400/400",
      socials: { github: "#", linkedin: "#", twitter: "#" },
    },
    {
      name: "Kumar",
      role: "DevOps Engineer",
      imageUrl: "https://picsum.photos/seed/samantha/400/400",
      socials: { github: "#", linkedin: "#", twitter: "#" },
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
    <div className="bg-white text-black min-h-screen font-sans antialiased">
      <main className="pt-24 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section id="about" className="text-center py-10 sm:py-5">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-black">
            About{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              The Build
            </span>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-300 py-8">
            We are a collective of designers, engineers, and strategists
            crafting digital experiences that fuse artistry with intelligence.
            We don't just build products; we build the future.
          </p>
        </section>

        {/* Who We Are */}
        <Section title="Who We Are" subtitle="Meet the architects of innovation">
          <p className="max-w-4xl mx-auto text-center text-gray-400 mb-16">
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

        {/* Why Choose Us */}
        <Section title="Why Choose Us?" subtitle="Our core philosophy">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg border border-purple-500/50">
              <CodeIcon className="h-10 w-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-black">Technical Excellence</h3>
              <p className="text-gray-400">
                We write clean, scalable, and future-proof code, leveraging the
                latest technologies to build robust solutions that stand the
                test of time.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-purple-500/50">
              <UsersIcon className="h-10 w-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-black">Client-Centric Partnership</h3>
              <p className="text-gray-400">
                Your success is our success. We work as an extension of your
                team, ensuring transparency, communication, and alignment at
                every stage.
              </p>
            </div>
            <div id='tech-stack' className="bg-white p-8 rounded-lg border border-purple-500/50">
              <RocketIcon className="h-10 w-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-black">Innovation at the Core</h3>
              <p className="text-gray-400">
                We are constantly exploring new frontiers, from advanced AI
                integrations to immersive 3D experiences, to give you a
                competitive edge.
              </p>
            </div>
          </div>
        </Section>

        {/* What We Make */}
        <Section title="What We Make" subtitle="Our technological playground">
          <div  className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {techStack.map((tech) => (
              <TechPill key={tech} name={tech} />
            ))}
          </div>
        </Section>

        {/* How We Make It */}
        <Section title="How We Make It" subtitle="Our blueprint for success">
          <div id='process' className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/0 via-purple-500/50 to-purple-500/0"></div>
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
