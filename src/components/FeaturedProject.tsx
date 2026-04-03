import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const techStack = ["IoT", "AI", "AWS", "Cloud", "Real-Time Dispatch", "Mobile Sensors"];

const FeaturedProject = () => {
  const { ref, controls } = useScrollReveal();

  return (
    <section className="py-24 relative mesh-gradient">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}>
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="retro-label mb-2">
            FEATURED_PROJECT
          </motion.p>
          <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="text-3xl md:text-4xl retro-heading mb-12">
            The Masterpiece
          </motion.h2>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="glass-card gradient-border retro-corners overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="h-64 md:h-auto relative overflow-hidden flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, hsl(217 91% 60% / 0.06), hsl(199 89% 48% / 0.04), hsl(230 70% 55% / 0.04))' }}>
                <img
                  src="/projects/smart-aid.jpg"
                  alt="Smart Aid project setup with IoT hardware and dashboard"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="relative z-10 px-3 py-1 rounded bg-background/75 border border-primary/20 font-pixel text-[10px] text-primary/80">
                  SMART AID PREVIEW
                </div>
                {/* Scanline effect on the project image area */}
                <div className="absolute inset-0 pointer-events-none" style={{
                  background: 'linear-gradient(180deg, hsl(217 91% 60% / 0.03), transparent)'
                }} />
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-xl font-heading font-bold text-foreground mb-4 uppercase tracking-wider">
                  Smart Aid - Intelligent IoT Synchronized Response Coordination System
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed font-retro text-lg">
                  Smart Aid is an AI-powered emergency response system that reduces the delay
                  between road accidents and medical assistance. It integrates smartphone sensors
                  and vehicle-mounted detection modules to identify accidents in real time and
                  instantly send location and critical data to an AWS cloud platform.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed font-retro text-lg">
                  Using intelligent algorithms, it dispatches the nearest available ambulance and
                  alerts nearby hospitals with estimated arrival time, improving coordination during
                  the Golden Hour and helping save lives.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {techStack.map((tech) => (
                    <span key={tech} className="retro-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href="#" className="gradient-btn text-xs py-2 px-6">
                    <ExternalLink size={14} className="mr-2" /> Live
                  </a>
                  <a href="#" className="retro-btn-outline text-xs py-2 px-6 inline-flex items-center gap-2">
                    <Github size={14} /> Code
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProject;
