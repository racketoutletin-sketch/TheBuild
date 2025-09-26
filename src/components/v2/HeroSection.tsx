import { motion } from "framer-motion";
import { Button } from "@/components/v1/ui/button";
import { ArrowRight, Play, Sparkles, Zap } from "lucide-react";
import FloatingParticles from "./FloatingParticles";
import TypingAnimation from "./TypingAnimation";
import { heroContent } from "@/content/heroContent";

const HeroSection = () => {
  const { typingWords, badge, heading, description, cta, trust, stats, heroImage } = heroContent;

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center border">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-animated opacity-90" />
      <div className="absolute inset-0 gradient-subtle opacity-50" />
      <FloatingParticles />

      {/* Left Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left mt-20 md:mt-0">
            
            {/* Badge */}
            <motion.div className="inline-flex items-center gap-2 glass-deep px-4 py-2 rounded-full mb-6">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">{badge.text}</span>
            </motion.div>
            
            {/* Heading */}
            <motion.h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              {heading.main}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {heading.highlight}
              </span>
            </motion.h1>
            
            {/* Description */}
            <motion.div className="text-xl lg:text-2xl text-foreground/80 mb-8 leading-relaxed">
              <TypingAnimation words={typingWords} className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold" />{" "}
              {description.before}
              <br className="hidden lg:block" />
              {description.after}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button variant="hero" size="lg" className="group" onClick={() => (window.location.href = cta.primary.link)}>
                {cta.primary.text}
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="lg" className="group" onClick={() => (window.location.href = cta.secondary.link)}>
                {cta.secondary.text}
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-foreground/60">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full border-2 border-background flex items-center justify-center text-xs text-primary-foreground font-semibold">
                      {i}
                    </div>
                  ))}
                </div>
                <span>{trust.clients}</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-foreground/30 rounded-full" />
              <span>{trust.delivery}</span>
              <div className="hidden sm:block w-1 h-1 bg-foreground/30 rounded-full" />
              <span>{trust.success}</span>
            </motion.div>
          </div>

          {/* Right Content - Hero Image */}
          <motion.div className="relative">
            <motion.img
              src={heroImage.src}
              alt={heroImage.alt}
              className="w-full h-auto rounded-2xl shadow-glow"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            
            {/* Floating Stats */}
            <motion.div className="absolute -bottom-4 -left-4 glass-deep p-3 rounded-lg">
              <div className="text-xs font-semibold">
                <div className="text-primary">{stats.uptime.value}</div>
                <div className="text-foreground/60">{stats.uptime.label}</div>
              </div>
            </motion.div>
            <motion.div className="absolute top-1/2 -right-6 glass-deep p-3 rounded-lg">
              <div className="text-xs font-semibold">
                <div className="text-accent">{stats.support.value}</div>
                <div className="text-foreground/60">{stats.support.label}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
