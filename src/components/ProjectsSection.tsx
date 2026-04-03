import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    title: "Smart Aid",
    description:
      "AI-powered IoT emergency response platform that detects accidents in real time, syncs data to AWS, and coordinates nearest ambulance + hospital alerts during the Golden Hour.",
    tags: ["IoT", "AI", "AWS", "Emergency Tech"],
  },
  {
    title: "Secure QR-Based IoT Smart Security Tag System",
    description:
      "Retail automation solution where customers scan products, add to cart, and complete payment in a mobile app. After verification, IoT security tags unlock automatically, with tamper detection and real-time monitoring for secure, contactless checkout.",
    tags: ["QR", "IoT", "Retail Automation", "Security", "Mobile App"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ProjectsSection = () => {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="projects" className="py-24 relative mesh-gradient">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}>
          <motion.p variants={fadeUp} className="retro-label mb-2">
            PORTFOLIO.DIR
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl retro-heading mb-12">
            Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={fadeUp}
                className="glass-card gradient-border retro-corners overflow-hidden group transition-all duration-300"
              >
                {/* CRT-style image area */}
                <div className="h-44 relative flex items-center justify-center overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, hsl(217 91% 60% / 0.04), hsl(199 89% 48% / 0.04))' }}>
                  <span className="font-pixel text-xs text-primary/20 group-hover:text-primary/40 transition-all">{"[PREVIEW]"}</span>
                  <div className="absolute inset-0 pointer-events-none" style={{
                    background: 'linear-gradient(180deg, hsl(217 91% 60% / 0.02), transparent)'
                  }} />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-foreground text-sm mb-2 uppercase tracking-wider">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed font-retro text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="retro-tag text-[10px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><ExternalLink size={16} /></a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github size={16} /></a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
