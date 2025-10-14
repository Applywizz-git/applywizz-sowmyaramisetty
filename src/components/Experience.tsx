import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    "Improved sales forecast accuracy by 15% using XGBoost ensemble models",
    "Rebuilt ETL pipelines with SQL + Spark, achieving 40% faster processing",
    "Automated feature engineering with Pandas/NumPy, saving 10 hours/week",
    "Conducted NLP analysis (spaCy, NLTK) resulting in 18% boost in service ratings",
    "Created Tableau dashboards enabling 25% faster executive reporting",
    "Implemented K-Means micro-segmentation driving 12% higher engagement",
    "Guided A/B testing initiatives delivering measurable ROI improvements",
    "Deployed production ML models to AWS using Agile methodology",
  ];

  return (
    <section id="experience" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-headline font-extrabold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Delivering impactful data solutions in enterprise environments
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Timeline Card */}
            <div className="relative glass-effect p-8 rounded-2xl shadow-medium hover:shadow-glow transition-all duration-300">
              {/* Company Badge */}
              <motion.div
                className="absolute -top-6 left-8 glass-effect px-6 py-3 rounded-full border-2 border-primary/20"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center space-x-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-primary">Accenture Ltd</span>
                </div>
              </motion.div>

              <div className="mt-6 space-y-4">
                {/* Header */}
                <div>
                  <h3 className="text-2xl font-headline font-bold mb-2">Data Scientist</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>Dec 2021 – Dec 2023</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>Bangalore, India</span>
                    </div>
                  </div>
                </div>

                {/* Achievements Grid */}
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start space-x-3 group"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <p className="text-sm text-foreground/80 leading-relaxed">{achievement}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Technologies Used */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 }}
                  className="pt-6 border-t border-border"
                >
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Python",
                      "XGBoost",
                      "SQL",
                      "Spark",
                      "Pandas",
                      "NumPy",
                      "spaCy",
                      "NLTK",
                      "Tableau",
                      "Power BI",
                      "K-Means",
                      "AWS",
                      "MLflow",
                      "Docker",
                    ].map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.9 + index * 0.05 }}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
