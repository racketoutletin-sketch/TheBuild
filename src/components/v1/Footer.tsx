import { motion } from "framer-motion";
import { footerLinks, socialLinks } from "../../content/footerContent";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Main Footer */}
        <div className="py-8 grid lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="p-6 rounded-lg">
                <img src="logo2.webp" alt="Logo" className="h-12 w-30" />
              </div>
            </motion.div>

            <p className="text-foreground/80 mb-6 leading-relaxed">
              We're a team of passionate developers and designers who believe in 
              the power of technology to transform businesses and create 
              meaningful digital experiences.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-3 grid md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <h4 className="font-semibold mb-4 capitalize">{section}</h4>
                <ul className="space-y-3">
                  {links.map((link: any) => (
                    <li key={link.name}>
                      {link.href ? (
                        <a
                          href={link.href}
                          className="text-foreground/70 hover:text-primary transition-colors text-sm"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <span className="text-foreground/70 text-sm">{link.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-sm text-foreground/60">© {currentYear} The Build.</span>

            <div className="flex items-center gap-6 text-sm">
              <a href="/privacyPolicy" className="text-foreground/60 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-foreground/60 hover:text-primary transition-colors">Terms of Service</a>
              <a href="/cookies" className="text-foreground/60 hover:text-primary transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
