import Navigation from "@/components/v1/Navigation";
import HeroSection from "@/components/v1/HeroSection";
import ServicesSection from "@/components/v1/ServicesSection";
import PortfolioSection from "@/components/v1/PortfolioSection";
import ContactSection from "@/components/v1/ContactSection";
import Footer from "@/components/v1/Footer";
import FloatingActions from "@/components/v1/floatingactions";
import AboutPage from "@/components/v1/about";

const Index = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <section id="home">
        <HeroSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="portfolio">
        <PortfolioSection />
      </section>
      <section id="about">
        <AboutPage />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Index;
