import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Zap } from "lucide-react";
import heroImage from "@/assets/hero-tech.webp";
import FloatingParticles from "./FloatingParticles";
import TypingAnimation from "./TypingAnimation";

const HeroSection = () => {
  const typingWords = ["Websites", "Apps", "Dashboards", "AI Solutions", "Projects"];

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center border">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-animated opacity-90" />
      <div className="absolute inset-0 gradient-subtle opacity-50" />
      
      {/* Floating Particles */}
      <FloatingParticles />
      
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl"
        animate={{ 
          y: [0, 20, 0],
          scale: [1, 0.9, 1],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary-glow/30 rounded-full blur-2xl"
        animate={{ 
          x: [0, 30, 0],
          y: [0, -15, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left mt-20 md:mt-0">
            <motion.div 
              className="inline-flex items-center gap-2 glass-deep px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">AI-Powered Development</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your Vision,{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Built.
              </span>
            </motion.h1>
            
            <motion.div
              className="text-xl lg:text-2xl text-foreground/80 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <TypingAnimation words={typingWords} className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold" />{" "}
              crafted with AI-powered precision.
              <br className="hidden lg:block" />
              Transform your ideas into digital experiences that scale.
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button variant="hero" size="lg" className="group" onClick={() => window.location.href='#contact'}>
                Start Your Project
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="lg" className="group" onClick={() => window.location.href='#portfolio'}>
                See Our Work
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-6 text-sm text-foreground/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <motion.div 
                      key={i} 
                      className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full border-2 border-background flex items-center justify-center text-xs text-primary-foreground font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1 + (i * 0.1), type: "spring", stiffness: 300 }}
                    >
                      {i}
                    </motion.div>
                  ))}
                </div>
                <span>10+ Happy Clients</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-foreground/30 rounded-full" />
              <span>⚡ Lightning Fast Delivery</span>
              <div className="hidden sm:block w-1 h-1 bg-foreground/30 rounded-full" />
              <span>🎯 100% Success Rate</span>
            </motion.div>
          </div>

          {/* Right Content - Hero Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative">
              <motion.img
                src={heroImage}
                alt="Modern tech workspace with laptop, smartphone, and dashboard"
                className="w-full h-auto rounded-2xl shadow-glow"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              
              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-4 -right-4 glass-deep p-4 rounded-xl"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <Sparkles className="h-6 w-6 text-primary" />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 glass-deep p-3 rounded-lg"
                animate={{ 
                  y: [0, 8, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <div className="text-xs font-semibold">
                  <div className="text-primary">99.9%</div>
                  <div className="text-foreground/60">Uptime</div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute top-1/2 -right-6 glass-deep p-3 rounded-lg"
                animate={{ 
                  x: [0, -5, 0],
                  y: [0, -5, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                <div className="text-xs font-semibold">
                  <div className="text-accent">24/7</div>
                  <div className="text-foreground/60">Support</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-1 h-8 bg-gradient-to-b from-primary to-transparent rounded-full" />
      </motion.div>
    </section>
  );
};

export default HeroSection;