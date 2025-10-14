import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "Master of Computing and Information Systems",
      institution: "New England College",
      location: "Henniker, New Hampshire",
      period: "Jan 2024 – Oct 2025",
      type: "Graduate",
      color: "from-primary/20 to-secondary/20",
    },
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "QIS College of Engineering and Technology",
      location: "Ongole, India",
      period: "Jun 2017 – Oct 2021",
      type: "Undergraduate",
      color: "from-secondary/20 to-primary/20",
    },
  ];

  return (
    <section id="education" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-headline font-extrabold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Strong academic foundation in computer science and data systems
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative"
            >
              <div className="glass-effect rounded-2xl p-8 shadow-medium hover:shadow-glow transition-all duration-300 group">
                {/* Degree Badge */}
                <motion.div
                  className={`absolute -top-4 -left-4 glass-effect px-6 py-3 rounded-full border-2 border-primary/20 bg-gradient-to-r ${edu.color}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <span className="text-sm font-semibold text-primary">{edu.type}</span>
                  </div>
                </motion.div>

                <div className="mt-4 space-y-4">
                  {/* Degree Title */}
                  <h3 className="text-2xl font-headline font-bold pr-24">{edu.degree}</h3>

                  {/* Institution */}
                  <p className="text-lg font-semibold text-primary">{edu.institution}</p>

                  {/* Details */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                {/* Decorative Element */}
                <motion.div
                  className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
