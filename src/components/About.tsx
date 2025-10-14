import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Code2, Database, Brain, Sparkles } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { label: "Projects", value: 10, suffix: "+" },
    { label: "Years Experience", value: 2, suffix: "+" },
    { label: "Client Satisfaction", value: 100, suffix: "%" },
  ];

  const skills = [
    { name: "Machine Learning", level: 95, icon: Brain },
    { name: "Data Engineering", level: 90, icon: Database },
    { name: "Python & SQL", level: 92, icon: Code2 },
    { name: "Cloud & MLOps", level: 88, icon: Sparkles },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-headline font-extrabold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transforming data into actionable insights with cutting-edge AI
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground/90 leading-relaxed">
              Data Scientist with <strong>2 years of experience</strong> applying{" "}
              <strong>machine learning</strong>, <strong>statistical modeling</strong>, and{" "}
              <strong>data visualization</strong> to deliver business insights and scalable AI solutions.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Skilled in <strong>Python</strong>, <strong>SQL</strong>, <strong>TensorFlow</strong>,{" "}
              <strong>Spark</strong>, <strong>Power BI</strong>, and <strong>NLP</strong>. Proficient at
              building and deploying end-to-end ML pipelines on cloud platforms (
              <strong>AWS</strong>, <strong>Azure</strong>), automating workflows, and driving
              data-driven business outcomes.
            </p>

            {/* Stats Counters */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                  className="text-center p-4 glass-effect rounded-lg"
                >
                  <Counter value={stat.value} suffix={stat.suffix} isInView={isInView} />
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Skill Bars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Icon className="w-5 h-5 text-primary" />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-primary/70 relative overflow-hidden"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Counter = ({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) => {
  const count = useMotionValue(0);
  const rounded = useSpring(count, { damping: 50, stiffness: 100 });

  useEffect(() => {
    if (isInView) {
      count.set(value);
    }
  }, [isInView, value, count]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toString();
      }
    });
    return () => unsubscribe();
  }, [rounded]);

  const ref = useRef<HTMLSpanElement>(null);

  return (
    <div className="text-3xl font-headline font-extrabold text-primary">
      <span ref={ref}>0</span>
      <span>{suffix}</span>
    </div>
  );
};

export default About;
