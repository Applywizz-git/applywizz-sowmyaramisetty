import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [currentTech, setCurrentTech] = useState(0);
  const technologies = ["Python", "TensorFlow", "Spark", "AWS"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background: "var(--gradient-hero)",
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="inline-block px-4 py-2 glass-effect rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <span className="text-sm font-medium text-primary">Data Scientist</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-extrabold leading-tight">
              <span className="block text-foreground">Sowmya Ramisetty</span>
              <span className="block mt-2">
                Building Intelligent{" "}
                <span className="text-gradient">Data-Driven</span> Solutions
              </span>
            </h1>

            <div className="h-16 flex items-center">
              <p className="text-xl md:text-2xl text-muted-foreground">
                with Modern AI •{" "}
                <motion.span
                  key={currentTech}
                  className="text-primary font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {technologies[currentTech]}
                </motion.span>
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="projects" spy={true} smooth={true} offset={-80} duration={500}>
                <Button
                  size="lg"
                  className="group relative overflow-hidden"
                >
                  <span className="relative z-10">View Projects</span>
                  <motion.div
                    className="absolute inset-0 bg-primary/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </Link>

              <a href="/resume.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="group"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download Resume
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-glow"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800"
                  alt="Sowmya Ramisetty"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Link to="about" spy={true} smooth={true} offset={-80} duration={500}>
          <ChevronDown className="w-8 h-8 text-muted-foreground cursor-pointer hover:text-primary transition-colors" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
