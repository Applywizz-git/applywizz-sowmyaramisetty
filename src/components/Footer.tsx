import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowUp } from "lucide-react";
import { Link } from "react-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-accent text-accent-foreground py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left: Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-headline font-extrabold text-gradient mb-2">
              Sowmya Ramisetty
            </h3>
            <p className="text-sm text-muted-foreground">
              Building intelligent data-driven solutions
            </p>
          </motion.div>

          {/* Center: Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-4"
          >
            <motion.a
              href="https://www.linkedin.com/in/sowmya-ramisetty/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-effect rounded-full hover:shadow-glow transition-all duration-300"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.6 }}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-primary" />
            </motion.a>
            <motion.a
              href="mailto:ramisettysowmyadata@gmail.com"
              className="p-3 glass-effect rounded-full hover:shadow-glow transition-all duration-300"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.6 }}
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-primary" />
            </motion.a>
          </motion.div>

          {/* Right: Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <motion.p
              className="text-sm text-muted-foreground"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              © {currentYear} Sowmya Ramisetty
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 glass-effect rounded-full shadow-glow hover:scale-110 transition-all duration-300 z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-primary" />
      </motion.button>
    </footer>
  );
};

export default Footer;
