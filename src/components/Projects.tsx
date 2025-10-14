import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { ExternalLink, Github, TrendingUp, Users, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Hospital Readmission Risk Prediction",
      description:
        "Enterprise ML system predicting 30-day hospital readmission risk using ensemble models on 3M+ EHR records.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200",
      tech: ["XGBoost", "LightGBM", "SQL", "Spark", "MLflow", "Docker", "AWS SageMaker", "Power BI"],
      highlights: [
        "Processed 3M+ EHR records with SQL + Spark pipelines",
        "Achieved ROC-AUC 0.89 with ensemble models",
        "Deployed via MLflow + Docker to AWS SageMaker",
        "Reduced 30-day readmissions by 12% via Power BI integration",
      ],
      metrics: [
        { label: "ROC-AUC", value: "0.89", icon: TrendingUp },
        { label: "Records", value: "3M+", icon: Database },
        { label: "Reduction", value: "12%", icon: Users },
      ],
      
    },
    {
      title: "Customer Churn & Retention Modeling",
      description:
        "Predictive analytics platform identifying at-risk customers using stacked ML models and SHAP explainability.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
      tech: ["LightGBM", "TensorFlow", "SHAP", "RFE", "Airflow", "Docker", "MLflow", "AWS ECS"],
      highlights: [
        "Analyzed 2 years of transactional logs (SQL + Spark)",
        "Stacked LightGBM + TensorFlow model with AUC 0.87",
        "SHAP explainability + RFE increased precision by 18%",
        "Automated daily scoring with Airflow, Docker, MLflow on AWS ECS",
        "Improved retention by 9% and LTV by 7%",
      ],
      metrics: [
        { label: "AUC", value: "0.87", icon: TrendingUp },
        { label: "Retention ↑", value: "9%", icon: Users },
        { label: "LTV ↑", value: "7%", icon: TrendingUp },
      ],
     
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-headline font-extrabold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            End-to-end ML solutions driving measurable business impact
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              768: {
                slidesPerView: 1.5,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            className="!pb-12"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="glass-effect rounded-2xl overflow-hidden shadow-medium hover:shadow-glow transition-all duration-300 group h-full"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-headline font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2 py-4">
                      {project.metrics.map((metric, idx) => {
                        const Icon = metric.icon;
                        return (
                          <div key={idx} className="text-center p-3 bg-muted/50 rounded-lg">
                            <Icon className="w-5 h-5 text-primary mx-auto mb-1" />
                            <div className="text-lg font-bold text-primary">{metric.value}</div>
                            <div className="text-xs text-muted-foreground">{metric.label}</div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2 text-sm">
                      {project.highlights.slice(0, 3).map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-primary mt-1">▸</span>
                          <span className="text-foreground/80">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    {/* <div className="flex gap-3 pt-4">
                      <Button variant="default" size="sm" className="flex-1 group/btn">
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                        Preview
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 group/btn">
                        <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                        Code
                      </Button>
                    </div> */}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
