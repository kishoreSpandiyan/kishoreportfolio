import { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Medal, Star, Award } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const imagePath = (fileName: string) => `${import.meta.env.BASE_URL}achievements/${fileName}`;

const achievements = [
  {
    icon: Trophy,
    label: "GENCRAFT 2025",
    title: "Team Cyberassaulters - 3K Prize Winner",
    detail:
      "Gencraft 2025 winner: won two events at the intra-college tech fest - Hackspire (Department of IT) and Appthon (CSBS), securing a 3K prize.",
    year: "2025",
    image: imagePath("gencraft-2025-winner.jpg"),
    imageDescription: "Winner of Hackspire and Appthon at Gencraft 2025",
  },
  {
    icon: Medal,
    label: "PRATHIYOGITHA 2026",
    title: "Winner",
    detail:
      "Secured first place at Prathiyogitha 2026, showcasing problem-solving and technical execution under competition pressure.",
    year: "2026",
    image: imagePath("prathiyogitha-2026-winner.jpg"),
    imageDescription: "Winning moment at Prathiyogitha 2026",
  },
  {
    icon: Star,
    label: "AI ASCEND 2026",
    title: "Winner",
    detail:
      "Achieved top position in AI Ascend 2026 by presenting practical innovation and strong technical implementation.",
    year: "2026",
    image: imagePath("aiascend-2026-winner.jpg"),
    imageDescription: "Award ceremony at AI Ascend 2026",
  },
  {
    icon: Award,
    label: "HACKFEST 2026",
    title: "Winner",
    detail:
      "Won Hackfest 2026 through strong teamwork, fast prototyping, and effective problem-solving during the event.",
    year: "2026",
    image: imagePath("hackfest-2026-winner.jpg"),
    imageDescription: "Team recognition at Hackfest 2026",
  },
  {
    icon: Medal,
    label: "THIRAN 2026",
    title: "Winner",
    detail:
      "Secured a winning position in Thiran 2026 by demonstrating technical depth and confident execution.",
    year: "2026",
    image: imagePath("thiran-2026-winner.jpg"),
    imageDescription: "Achievement spotlight from Thiran 2026",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AchievementsSection = () => {
  const { ref, controls } = useScrollReveal();
  const loopedAchievements = [...achievements, ...achievements];
  const [isPaused, setIsPaused] = useState(false);

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

            <div
              className="achievements-marquee overflow-hidden py-2"
              onPointerEnter={() => setIsPaused(true)}
              onPointerLeave={() => setIsPaused(false)}
              onPointerDown={(event) => {
                if (event.pointerType === "touch") {
                  setIsPaused(true);
                }
              }}
              onPointerUp={(event) => {
                if (event.pointerType === "touch") {
                  setIsPaused(false);
                }
              }}
              onPointerCancel={() => setIsPaused(false)}
              onFocusCapture={() => setIsPaused(true)}
              onBlurCapture={() => setIsPaused(false)}
            >
              <motion.div
                className={`achievements-marquee-track flex gap-6 w-max ${isPaused ? "[animation-play-state:paused]" : ""}`}
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
                          className="h-52 w-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent px-3 pb-2 pt-5">
                          <p className="text-[10px] font-heading uppercase tracking-widest text-primary">
                            {item.imageDescription}
                          </p>
                        </div>
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
