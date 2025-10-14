import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Database,
  Brain,
  BarChart3,
  Cloud,
  Workflow,
} from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Programming",
      icon: Code2,
      skills: [
        { name: "Python", level: 95 },
        { name: "R", level: 80 },
        { name: "SQL", level: 92 },
      ],
    },
    {
      title: "Machine Learning",
      icon: Brain,
      skills: [
        { name: "Scikit-learn", level: 93 },
        { name: "TensorFlow", level: 88 },
        { name: "PyTorch", level: 85 },
        { name: "XGBoost", level: 90 },
        { name: "NLP (spaCy, Hugging Face)", level: 87 },
      ],
    },
    {
      title: "Visualization",
      icon: BarChart3,
      skills: [
        { name: "Power BI", level: 91 },
        { name: "Tableau", level: 89 },
        { name: "Matplotlib/Seaborn", level: 90 },
        { name: "Plotly", level: 86 },
      ],
    },
    {
      title: "Big Data / Cloud",
      icon: Cloud,
      skills: [
        { name: "Spark", level: 88 },
        { name: "AWS", level: 87 },
        { name: "Azure", level: 82 },
      ],
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 83 },
      ],
    },
    {
      title: "MLOps",
      icon: Workflow,
      skills: [
        { name: "MLflow", level: 89 },
        { name: "Airflow", level: 86 },
        { name: "Docker", level: 87 },
        { name: "Kubernetes", level: 80 },
        { name: "Git", level: 92 },
      ],
    },
    {
      title: "Core Competencies",
      icon: Code2,
      skills: [
        { name: "Data Wrangling", level: 95 },
        { name: "Feature Engineering", level: 80 },
        { name: "Statistical Modeling ", level: 92 },
        { name: "Predictive Analytics ", level: 92 },
        { name: "Model Deployment ", level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-headline font-extrabold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across the modern data science stack
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: catIndex * 0.1 }}
                className="glass-effect p-6 rounded-2xl shadow-medium hover:shadow-glow transition-all duration-300 group"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <motion.div
                    className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-headline font-bold">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-primary/70"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1,
                            delay: catIndex * 0.1 + skillIndex * 0.05,
                            ease: "easeOut",
                          }}
                        >
                          {/* Shimmer Effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
