import { motion } from "framer-motion";
import { Trophy, Medal, Star, Award } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const achievements = [
  {
    icon: Trophy,
    label: "HACKATHON WIN",
    title: "Top 3 in State-Level Hackathon",
    detail:
      "Built a full-stack problem-solving platform and presented the solution to an expert panel.",
    year: "2025",
    image: "/achievements/winning-moment-placeholder.svg",
  },
  {
    icon: Medal,
    label: "ACADEMICS",
    title: "Consistent High Academic Performance",
    detail:
      "Maintained strong results in Computer Science Engineering while actively building real projects.",
    year: "2024-2026",
    image: "/achievements/winning-moment-placeholder.svg",
  },
  {
    icon: Star,
    label: "PROJECT IMPACT",
    title: "Multiple End-to-End Portfolio Projects",
    detail:
      "Designed and deployed responsive applications focused on performance, clean UX, and scalability.",
    year: "2025",
    image: "/achievements/winning-moment-placeholder.svg",
  },
  {
    icon: Award,
    label: "CERTIFICATION",
    title: "Full Stack and Cloud Learning Milestones",
    detail:
      "Completed structured learning in web development, backend fundamentals, and cloud basics.",
    year: "2024-2026",
    image: "/achievements/winning-moment-placeholder.svg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AchievementsSection = () => {
  const { ref, controls } = useScrollReveal();
  const loopedAchievements = [...achievements, ...achievements];

  return (
    <section id="achievements" className="py-24 relative mesh-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p variants={fadeUp} className="retro-label mb-2">
            ACHIEVEMENTS.LOG
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl retro-heading mb-12">
            Achievements
          </motion.h2>

          <motion.div variants={fadeUp} className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div className="overflow-hidden py-2">
              <motion.div
                className="flex gap-6 w-max"
                animate={{ x: ["-50%", "0%"] }}
                transition={{ duration: 24, ease: "linear", repeat: Infinity }}
              >
                {loopedAchievements.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <article
                      key={`${item.title}-${index}`}
                      className="glass-card gradient-border retro-corners p-6 w-[320px] md:w-[360px] shrink-0"
                    >
                      <div className="relative mb-5 overflow-hidden rounded-md border border-primary/15">
                        <img
                          src={item.image}
                          alt={`${item.title} winning moment`}
                          className="h-40 w-full object-cover"
                          loading="lazy"
                        />
                        <span className="absolute left-3 bottom-3 px-2 py-1 rounded bg-background/85 text-[10px] font-heading tracking-widest text-primary border border-primary/20">
                          ADD REAL PHOTO LATER
                        </span>
                      </div>

                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="inline-flex items-center justify-center h-11 w-11 rounded-md bg-primary/10 border border-primary/20 text-primary">
                          <Icon size={18} />
                        </div>
                        <span className="font-pixel text-[10px] text-primary">{item.year}</span>
                      </div>

                      <p className="text-xs font-heading uppercase tracking-widest text-secondary mb-2">
                        {item.label}
                      </p>
                      <h3 className="text-lg font-heading uppercase tracking-wide text-foreground mb-3">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground font-retro text-base leading-relaxed">
                        {item.detail}
                      </p>
                    </article>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
