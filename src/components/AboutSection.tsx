import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutSection = () => {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="about" className="py-24 relative">
      {/* Ambient glow orb */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-neon-cyan/5 blur-[100px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-neon-pink/3 blur-[80px] animate-pulse-glow pointer-events-none" />

      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}>
          <motion.p variants={fadeUp} className="retro-label mb-2">
            ABOUT.ME
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl retro-heading mb-12">
            Who I Am
          </motion.h2>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            <motion.div variants={fadeUp} className="md:col-span-3 space-y-6">
              <p className="text-muted-foreground leading-relaxed font-retro text-xl">
                Hi, I'm <span className="text-primary font-bold">Kishore S</span>, a passionate Computer Science Engineering
                student from Karur, Tamil Nadu, with a strong interest in Full Stack and Web Development.
                I enjoy designing and developing modern, responsive web applications that provide
                great user experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed font-retro text-lg">
                I have experience working with technologies such as HTML, CSS, JavaScript, SQL, Python,
                and Java, and I use tools like VS Code, Figma, Photoshop, and MS Office during development
                and design. I love turning ideas into real digital solutions and continuously learning
                new technologies to improve my skills.
              </p>
              <p className="text-muted-foreground leading-relaxed font-retro text-lg">
                My goal is to grow as a developer and contribute to innovative projects that create
                meaningful impact. Let's build something extraordinary together.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="md:col-span-2">
              <div className="glass-card gradient-border retro-corners p-6 space-y-4">
                {[
                  { label: "LANGUAGES", value: "HTML · CSS · JS · Python · Java · SQL" },
                  { label: "FRAMEWORKS", value: "Django" },
                  { label: "CLOUD", value: "AWS" },
                  { label: "FOCUS", value: "Full Stack & Web Dev" },
                  { label: "TOOLS", value: "VS Code · Figma · Photoshop" },
                  { label: "LOCATION", value: "Karur, Tamil Nadu" },
                ].map((stat) => (
                  <div key={stat.label} className="flex justify-between items-center py-3 border-b border-primary/10 last:border-0 gap-4">
                    <span className="text-muted-foreground text-xs font-heading uppercase tracking-wider whitespace-nowrap">{stat.label}</span>
                    <span className="font-pixel text-[10px] text-primary text-right">{stat.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
