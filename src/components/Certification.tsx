import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certification = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: "Generative AI with Large Language Models",
      issuer: "Coursera",
      icon: "🤖",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "IBM Data Science Professional Certificate",
      issuer: "Coursera",
      icon: "📊",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Applied Data Science with Python Specialization",
      issuer: "Coursera",
      icon: "🐍",
      color: "from-green-500/20 to-teal-500/20",
    },
    {
      title: "SQL for Data Science",
      issuer: "LinkedIn Learning",
      icon: "💾",
      color: "from-orange-500/20 to-amber-500/20",
    },
  ];

  return (
    <section id="certification" className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-headline font-extrabold mb-4">
            Certifications <span className="text-gradient">&</span> Credentials
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotateY: -90 }}
              animate={isInView ? { opacity: 1, rotateY: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -10, rotateY: 10 }}
              className="relative group"
            >
              <div className="glass-effect rounded-2xl p-6 h-full shadow-medium hover:shadow-glow transition-all duration-300">
                {/* Badge Icon */}
                <motion.div
                  className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br ${cert.color} rounded-full flex items-center justify-center border-4 border-background shadow-lg`}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <Award className="w-8 h-8 text-primary" />
                </motion.div>

                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {cert.icon}
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-lg font-headline font-bold leading-tight min-h-[3.5rem]">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium">{cert.issuer}</p>
                </div>

                {/* Hover Action */}
                {/* <motion.div
                  className="absolute inset-x-0 bottom-6 px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                >
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Credential
                  </Button>
                </motion.div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
